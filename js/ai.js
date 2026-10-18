// AI の指名（旧版と同じ考え方）
// 戦略ごとにチーム構成の点数をつけ、人気（星）も少し加味し、乱数を足した上位3人から選ぶ。

import { idols, agencyFilterName, normalizeSearchText } from "./data.js";
import { idolById, personDrafted, random, team } from "./engine.js";

/** 同じ人が複数グループにいる場合は 1人にまとめる（活動中のグループを優先） */
export function preferredPersonCandidates(candidates, query = "") {
  const preferred = new Map();
  const priority = idol =>
    (query && normalizeSearchText(idol.group).includes(query) ? 100 : 0) +
    (idol.activity === "活動中" ? 10 : idol.activity === "活動休止" ? 5 : 0);
  candidates.forEach(idol => {
    const current = preferred.get(idol.personKey);
    if (!current || priority(idol) > priority(current)) preferred.set(idol.personKey, idol);
  });
  return [...preferred.values()];
}

export function chooseAIIdol(state, teamId, excluded = new Set()) {
  const available = preferredPersonCandidates(
    idols.filter(idol => !personDrafted(state, idol) && !excluded.has(idol.id))
  );
  if (!available.length) return null;
  const style = team(state, teamId)?.strategy || "generationFocus";
  if (style === "random") return available[Math.floor(random() * available.length)];

  const teamPicks = (state.picks[teamId] || []).map(pick => idolById.get(pick.idolId)).filter(Boolean);
  const firstKnownPick = teamPicks.find(pick => pick.agency && pick.agency !== "未確認");
  const firstKnownAgency = firstKnownPick ? agencyFilterName(firstKnownPick.agency) : "";

  const ranked = available.map(idol => {
    const groupCount = teamPicks.filter(pick => pick.group === idol.group).length;
    const generationCount = teamPicks.filter(pick => pick.generation === idol.generation).length;
    const nationalityCount = teamPicks.filter(pick => pick.nationality === idol.nationality).length;
    const agency = idol.agency !== "未確認" ? agencyFilterName(idol.agency) : "";
    const agencyCount = agency ? teamPicks.filter(pick => agencyFilterName(pick.agency) === agency).length : 0;
    const popularity = idol.popularityStars > 1
      ? (idol.popularityStars - 1) * 1.4 + idol.popularitySortScore / 20
      : 0;

    let score = 0;
    switch (style) {
      case "nationalityMix":
        score += 9 / (nationalityCount + 1);
        score += agency ? 2 / (agencyCount + 1) : 0;
        score += groupCount === 0 ? 2 : -groupCount;
        break;
      case "agencyFocus":
        if (agency && firstKnownAgency) score += agency === firstKnownAgency ? 10 : -7;
        else if (agency) score += 2;
        score += popularity * 0.25;
        break;
      case "agencyMix":
        score += agency ? 10 / (agencyCount + 1) : 0;
        score += groupCount === 0 ? 3 : -groupCount;
        score += popularity * 0.2;
        break;
      case "generationFocus":
        score += generationCount > 0 ? 9 * generationCount : 0;
        score += popularity * 0.3;
        break;
      case "generationMix":
        score += 9 / (generationCount + 1);
        score += nationalityCount === 0 ? 2 : 0;
        score += popularity * 0.35;
        break;
      case "nationalityFocus":
        score += nationalityCount > 0 ? 9 * nationalityCount : 0;
        score += popularity * 0.3;
        break;
      default:
        score += popularity * 0.35;
    }
    return { idol, score: random() * 4 + score };
  }).sort((a, b) => b.score - a.score);

  const shortlist = ranked.slice(0, Math.min(3, ranked.length));
  return shortlist[Math.floor(random() * shortlist.length)].idol;
}
