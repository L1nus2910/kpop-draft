const groups = [
  {
    name: "Girls' Generation",
    generation: "2世代",
    activity: "活動中",
    members: [
      ["Taeyeon", "韓国"], ["Hyoyeon", "韓国"], ["Yuri", "韓国"],
      ["Yoona", "韓国"], ["Seohyun", "韓国"]
    ]
  },
  {
    name: "BLACKPINK",
    generation: "3世代",
    activity: "活動中",
    members: [
      ["Jisoo", "韓国"], ["Jennie", "韓国"], ["Rosé", "オーストラリア"],
      ["Lisa", "タイ"]
    ]
  },
  {
    name: "TWICE",
    generation: "3世代",
    activity: "活動中",
    members: [
      ["Nayeon", "韓国"], ["Jeongyeon", "韓国"], ["Momo", "日本"],
      ["Sana", "日本"], ["Jihyo", "韓国"], ["Mina", "日本"],
      ["Dahyun", "韓国"], ["Chaeyoung", "韓国"], ["Tzuyu", "台湾"]
    ]
  },
  {
    name: "Red Velvet",
    generation: "3世代",
    activity: "活動中",
    members: [
      ["Irene", "韓国"], ["Seulgi", "韓国"], ["Wendy", "カナダ"],
      ["Joy", "韓国"], ["Yeri", "韓国"]
    ]
  },
  {
    name: "I.O.I",
    generation: "3世代",
    activity: "活動終了",
    members: [
      ["Somi", "カナダ"], ["Sejeong", "韓国"], ["Chungha", "韓国"],
      ["Yoojung", "韓国"], ["Doyeon", "韓国"], ["Yeonjung", "韓国"],
      ["Sohye", "韓国"]
    ]
  },
  {
    name: "ITZY",
    generation: "4世代",
    activity: "活動中",
    members: [
      ["Yeji", "韓国"], ["Lia", "カナダ"], ["Ryujin", "韓国"],
      ["Chaeryeong", "韓国"], ["Yuna", "韓国"]
    ]
  },
  {
    name: "aespa",
    generation: "4世代",
    activity: "活動中",
    members: [
      ["Karina", "韓国"], ["Giselle", "日本"], ["Winter", "韓国"],
      ["Ningning", "中国"]
    ]
  },
  {
    name: "IVE",
    generation: "4世代",
    activity: "活動中",
    members: [
      ["Yujin", "韓国"], ["Gaeul", "韓国"], ["Rei", "日本"],
      ["Wonyoung", "韓国"], ["Liz", "韓国"], ["Leeseo", "韓国"]
    ]
  },
  {
    name: "LE SSERAFIM",
    generation: "4世代",
    activity: "活動中",
    members: [
      ["Sakura", "日本"], ["Chaewon", "韓国"], ["Yunjin", "米国"],
      ["Kazuha", "日本"], ["Eunchae", "韓国"]
    ]
  },
  {
    name: "IZ*ONE",
    generation: "4世代",
    activity: "活動終了",
    members: [
      ["Eunbi", "韓国"], ["Hyewon", "韓国"], ["Yena", "韓国"],
      ["Yuri", "韓国"], ["Chaeyeon", "韓国"], ["Nako", "日本"],
      ["Hitomi", "日本"], ["Minju", "韓国"]
    ]
  },
  {
    name: "ILLIT",
    generation: "5世代",
    activity: "活動中",
    members: [
      ["Yunah", "韓国"], ["Minju", "韓国"], ["Moka", "日本"],
      ["Wonhee", "韓国"], ["Iroha", "日本"]
    ]
  },
  {
    name: "KISS OF LIFE",
    generation: "5世代",
    activity: "活動中",
    members: [
      ["Julie", "米国"], ["Natty", "タイ"], ["Belle", "米国"],
      ["Haneul", "韓国"]
    ]
  }
];

let nextId = 1;
const idols = groups.flatMap(group =>
  group.members.map(member => ({
    id: String(nextId++),
    name: member[0],
    nationality: member[1],
    group: group.name,
    generation: group.generation,
    activity: group.activity
  }))
);

const $ = id => document.getElementById(id);
const teamNames = ["チームA", "チームB", "チームC", "チームD"];

function readSaved(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

let excluded = new Set(readSaved("stagePickExcluded", []));
let savedPresets = readSaved("stagePickPresets", {});
let selectedId = null;
let drafted = new Set();
let picks = Object.fromEntries(teamNames.map(team => [team, []]));
let round = 1;
let r1Started = false;
let r1Queue = [];
let waiverOrder = teamNames.slice().reverse();
let turnIndex = 0;
let lotterySummary = "";

function fillFilter(id, values) {
  const select = $(id);
  const options = [...new Set(values)].sort((a, b) => a.localeCompare(b));
  select.innerHTML = '<option value="">すべて</option>' +
    options.map(value =>
      `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`
    ).join("");
}

fillFilter("generationFilter", idols.map(idol => idol.generation));
fillFilter("nationalityFilter", idols.map(idol => idol.nationality));
fillFilter("groupFilter", idols.map(idol => idol.group));
fillFilter("activityFilter", idols.map(idol => idol.activity));

function getCandidates() {
  const query = $("searchInput").value.trim().toLowerCase();
  const generation = $("generationFilter").value;
  const nationality = $("nationalityFilter").value;
  const group = $("groupFilter").value;
  const activity = $("activityFilter").value;
  const hideDrafted = $("hideDrafted").checked;

  return idols.filter(idol => {
    const matchesText = !query ||
      [idol.name, idol.group, idol.nationality].join(" ").toLowerCase().includes(query);

    return matchesText &&
      (!generation || idol.generation === generation) &&
      (!nationality || idol.nationality === nationality) &&
      (!group || idol.group === group) &&
      (!activity || idol.activity === activity) &&
      (!hideDrafted || !drafted.has(idol.id)) &&
      ($("showExcluded").checked || !excluded.has(idol.id));
  });
}

function renderCandidates() {
  const list = getCandidates();
  $("candidateCount").textContent = list.length;
  $("rosterTotal").textContent = idols.length;

  if (list.length === 0) {
    $("candidateList").innerHTML =
      '<div class="empty-state">条件に合うメンバーはいません。</div>';
    return;
  }

  $("candidateList").innerHTML = list.map(idol => {
    const isExcluded = excluded.has(idol.id);
    const isSelected = selectedId === idol.id;
    return `
      <article class="candidate-card ${isSelected ? "is-selected" : ""} ${isExcluded ? "is-excluded" : ""}">
        <p class="candidate-name">${escapeHTML(idol.name)}</p>
        <p class="candidate-group">${escapeHTML(idol.group)}</p>
        <div class="tags">
          <span class="tag">${escapeHTML(idol.generation)}</span>
          <span class="tag">${escapeHTML(idol.nationality)}</span>
          <span class="tag">${escapeHTML(idol.activity)}</span>
        </div>
        <div class="card-actions">
          <button type="button" data-action="select" data-id="${idol.id}">
            ${isSelected ? "選択中" : "指名候補にする"}
          </button>
          <button type="button" data-action="exclude" data-id="${idol.id}">
            ${isExcluded ? "除外を戻す" : "除外"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function selectMember(id) {
  selectedId = id;
  const idol = idols.find(item => item.id === id);
  $("selectedMember").textContent = idol
    ? `${idol.name}（${idol.group}）を選択中`
    : "候補一覧からメンバーを選んでね。";
  renderCandidates();
}

$("candidateList").addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = button.dataset.id;
  if (button.dataset.action === "select") {
    selectMember(id);
  } else if (button.dataset.action === "exclude") {
    if (excluded.has(id)) excluded.delete(id);
    else excluded.add(id);
    localStorage.setItem("stagePickExcluded", JSON.stringify([...excluded]));
    renderCandidates();
  }
});

[
  "searchInput",
  "generationFilter",
  "nationalityFilter",
  "groupFilter",
  "activityFilter",
  "hideDrafted",
  "showExcluded"
].forEach(id => $(id).addEventListener("input", renderCandidates));

$("randomButton").addEventListener("click", () => {
  const list = getCandidates();
  if (list.length === 0) {
    $("randomResult").hidden = false;
    $("randomResult").textContent = "候補がいないので、条件を変えてみてね。";
    return;
  }

  const idol = list[Math.floor(Math.random() * list.length)];
  $("randomResult").hidden = false;
  $("randomResult").innerHTML =
    `<strong>✦ ランダム候補：</strong> ${escapeHTML(idol.name)}（${escapeHTML(idol.group)}） ` +
    `<button class="text-button" type="button" data-random-id="${idol.id}">この人を選ぶ</button>`;
});

$("randomResult").addEventListener("click", event => {
  const button = event.target.closest("button[data-random-id]");
  if (button) selectMember(button.dataset.randomId);
});

function refreshPresets() {
  const select = $("presetSelect");
  const current = select.value;
  select.innerHTML = '<option value="">保存した条件を選ぶ</option>' +
    Object.keys(savedPresets).map(name =>
      `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`
    ).join("");
  if (savedPresets[current]) select.value = current;
}

$("savePreset").addEventListener("click", () => {
  const name = prompt("保存する条件の名前を入力してね");
  if (!name || !name.trim()) return;

  savedPresets[name.trim()] = {
    query: $("searchInput").value,
    generation: $("generationFilter").value,
    nationality: $("nationalityFilter").value,
    group: $("groupFilter").value,
    activity: $("activityFilter").value,
    hideDrafted: $("hideDrafted").checked
  };
  localStorage.setItem("stagePickPresets", JSON.stringify(savedPresets));
  refreshPresets();
  $("presetSelect").value = name.trim();
});

$("presetSelect").addEventListener("change", () => {
  const preset = savedPresets[$("presetSelect").value];
  if (!preset) return;

  $("searchInput").value = preset.query || "";
  $("generationFilter").value = preset.generation || "";
  $("nationalityFilter").value = preset.nationality || "";
  $("groupFilter").value = preset.group || "";
  $("activityFilter").value = preset.activity || "";
  $("hideDrafted").checked = preset.hideDrafted !== false;
  renderCandidates();
});

function renderNominations() {
  const options = idols.map(idol =>
    `<option value="${idol.id}">${escapeHTML(idol.name)} — ${escapeHTML(idol.group)}</option>`
  ).join("");

  $("nominationList").innerHTML = teamNames.map((team, index) => `
    <label class="nomination-row">
      <strong>${team}</strong>
      <select id="nomination-${index}">
        <option value="">1巡目の候補を選ぶ</option>
        ${options}
      </select>
    </label>
  `).join("");
}

function enterSecondRound() {
  round = 2;
  waiverOrder = teamNames.slice().reverse();
  turnIndex = 0;
}

$("resolveFirstRound").addEventListener("click", () => {
  if (r1Started) return;

  const nominations = teamNames.map((team, index) => ({
    team,
    id: $(`nomination-${index}`).value
  }));

  const waiting = new Set(
    nominations.filter(item => !item.id).map(item => item.team)
  );
  const byMember = new Map();

  nominations.filter(item => item.id).forEach(item => {
    if (!byMember.has(item.id)) byMember.set(item.id, []);
    byMember.get(item.id).push(item.team);
  });

  const results = [];

  byMember.forEach((teams, id) => {
    const winner = teams[Math.floor(Math.random() * teams.length)];
    const idol = idols.find(item => item.id === id);

    picks[winner].push({
      round: 1,
      name: idol.name,
      group: idol.group
    });
    drafted.add(id);

    if (teams.length > 1) {
      results.push(`${idol.name}は${winner}が当選`);
      teams.filter(team => team !== winner).forEach(team => waiting.add(team));
    }
  });

  r1Queue = [...waiting];
  r1Started = true;
  lotterySummary = results.length ? results.join("、") : "重複なし";

  if (r1Queue.length === 0) enterSecondRound();
  renderDraft();
  renderCandidates();
});

function makePick() {
  if (!r1Started) {
    alert("先に1巡目の重複抽選をしてね。");
    return;
  }
  if (!selectedId) {
    alert("候補一覧からメンバーを選んでね。");
    return;
  }
  if (drafted.has(selectedId) || excluded.has(selectedId)) {
    alert("そのメンバーは指名できません。");
    return;
  }

  const team = r1Queue.length ? r1Queue[0] : waiverOrder[turnIndex];
  if (!team) return;

  const idol = idols.find(item => item.id === selectedId);
  picks[team].push({
    round,
    name: idol.name,
    group: idol.group
  });
  drafted.add(selectedId);
  selectedId = null;
  $("selectedMember").textContent = "候補一覧からメンバーを選んでね。";

  if (r1Queue.length) {
    r1Queue.shift();
    if (r1Queue.length === 0) enterSecondRound();
  } else {
    turnIndex += 1;
    if (turnIndex >= waiverOrder.length) {
      round += 1;
      waiverOrder.reverse();
      turnIndex = 0;
    }
  }

  renderDraft();
  renderCandidates();
}

$("pickSelected").addEventListener("click", makePick);

function renderDraft() {
  const currentTeam = !r1Started
    ? "抽選前"
    : r1Queue.length
      ? r1Queue[0]
      : waiverOrder[turnIndex];

  $("currentTeam").textContent = currentTeam || "指名完了";
  $("roundStatus").textContent = `${round}巡目`;
  $("roundLabel").textContent = `${round}巡目`;

  if (!r1Started) {
    $("draftHint").textContent =
      "1巡目は各チームが候補を選び、重複した場合は抽選します。";
  } else if (r1Queue.length) {
    $("draftHint").textContent =
      `抽選結果：${lotterySummary}。${r1Queue[0]}は候補一覧から選んで指名してね。`;
  } else {
    $("draftHint").textContent =
      "2巡目以降はウェーバー順です。候補一覧から選んで指名してね。";
  }

  $("resolveFirstRound").disabled = r1Started;
  $("resolveFirstRound").textContent = r1Started
    ? "1巡目の抽選は完了"
    : "1巡目の重複抽選をする";

  $("draftBoard").innerHTML = teamNames.map(team => `
    <div class="team-row">
      <strong>${team}</strong>
      ${picks[team].length
        ? picks[team].map(pick =>
            `<span class="picked-person">${pick.round}巡目 · ${escapeHTML(pick.name)}</span>`
          ).join("")
        : '<span class="candidate-group">まだ指名していません</span>'
      }
    </div>
  `).join("");
}

renderNominations();
refreshPresets();
renderCandidates();
renderDraft();