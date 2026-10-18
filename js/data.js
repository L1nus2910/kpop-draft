// KDraft 候補データ（旧 app.js の候補・人気データ部分をそのまま移したもの）
// グループやメンバーを追加・修正するときはこのファイルを編集してください。
const groups = [
  {
    name: "Girls' Generation",
    generation: "2世代",
    activity: "活動中",
    members: [
      ["Taeyeon", "韓国"], ["Hyoyeon", "韓国"], ["Yuri", "韓国"],
      ["Yoona", "韓国"], ["Seohyun", "韓国"], ["Jessica", "米国"],
      ["Sunny", "韓国"], ["Tiffany", "米国"], ["Sooyoung", "韓国"]
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
      ["Sohye", "韓国"], ["Nayoung", "韓国"], ["Kyulkyung", "中国"],
      ["Mina", "韓国"], ["Chaeyeon", "韓国"]
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
      ["Eunbi", "韓国"], ["Sakura", "日本"], ["Hyewon", "韓国"], ["Yena", "韓国"],
      ["Yuri", "韓国"], ["Chaeyeon", "韓国"], ["Nako", "日本"],
      ["Hitomi", "日本"], ["Minju", "韓国"], ["Wonyoung", "韓国"],
      ["Chaewon", "韓国"], ["Yujin", "韓国"]
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
  },
  {
    name: "Apink",
    generation: "2世代",
    activity: "活動中",
    members: [["Chorong", "韓国"], ["Bomi", "韓国"], ["Eunji", "韓国"], ["Namjoo", "韓国"], ["Hayoung", "韓国"]]
  },
  {
    name: "KARA",
    generation: "2世代",
    activity: "活動中",
    members: [["Gyuri", "韓国"], ["Seungyeon", "韓国"], ["Nicole", "米国"], ["Jiyoung", "韓国"], ["Youngji", "韓国"]]
  },
  {
    name: "MAMAMOO",
    generation: "3世代",
    activity: "活動休止",
    members: [["Solar", "韓国"], ["Moonbyul", "韓国"], ["Wheein", "韓国"], ["Hwasa", "韓国"]]
  },
  {
    name: "GFRIEND",
    generation: "3世代",
    activity: "活動中",
    members: [["Sowon", "韓国"], ["Yerin", "韓国"], ["Eunha", "韓国"], ["Yuju", "韓国"], ["SinB", "韓国"], ["Umji", "韓国"]]
  },
  {
    name: "OH MY GIRL",
    generation: "3世代",
    activity: "活動中",
    members: [["Hyojung", "韓国"], ["Mimi", "韓国"], ["YooA", "韓国"], ["Seunghee", "韓国"], ["Yubin", "韓国"], ["Arin", "韓国"]]
  },
  {
    name: "WJSN",
    generation: "3世代",
    activity: "活動休止",
    members: [["Seola", "韓国"], ["Bona", "韓国"], ["Exy", "韓国"], ["Soobin", "韓国"], ["Luda", "韓国"], ["Dawon", "韓国"], ["Eunseo", "韓国"], ["Yeoreum", "韓国"], ["Dayoung", "韓国"], ["Yeonjung", "韓国"]]
  },
  {
    name: "Dreamcatcher",
    generation: "3世代",
    activity: "活動中",
    members: [["JiU", "韓国"], ["SuA", "韓国"], ["Siyeon", "韓国"], ["Handong", "中国"], ["Yoohyeon", "韓国"], ["Dami", "韓国"], ["Gahyeon", "韓国"]]
  },
  {
    name: "VIVIZ",
    generation: "4世代",
    activity: "活動中",
    members: [["Eunha", "韓国"], ["SinB", "韓国"], ["Umji", "韓国"]]
  },
  {
    name: "Weeekly",
    generation: "4世代",
    activity: "活動中",
    members: [["Soojin", "韓国"], ["Monday", "韓国"], ["Soeun", "韓国"], ["Jaehee", "韓国"], ["Jihan", "韓国"], ["Zoa", "韓国"]]
  },
  {
    name: "STAYC",
    generation: "4世代",
    activity: "活動中",
    members: [["Sumin", "韓国"], ["Sieun", "韓国"], ["Isa", "韓国"], ["Seeun", "韓国"], ["Yoon", "韓国"], ["J", "韓国"]]
  },
  {
    name: "i-dle",
    generation: "4世代",
    activity: "活動中",
    members: [["Miyeon", "韓国"], ["Minnie", "タイ"], ["Soyeon", "韓国"], ["Yuqi", "中国"], ["Shuhua", "台湾"]]
  },
  {
    name: "Billlie",
    generation: "4世代",
    activity: "活動中",
    members: [["Moon Sua", "韓国"], ["Suhyeon", "韓国"], ["Haram", "韓国"], ["Tsuki", "日本"], ["Siyoon", "韓国"], ["Haruna", "日本"], ["Sheon", "韓国"]]
  },
  {
    name: "H1-KEY",
    generation: "4世代",
    activity: "活動中",
    members: [["Seoi", "韓国"], ["Riina", "韓国"], ["Hwiseo", "韓国"], ["Yel", "韓国"]]
  },
  {
    name: "NMIXX",
    generation: "4世代",
    activity: "活動中",
    members: [["Lily", "オーストラリア"], ["Haewon", "韓国"], ["Sullyoon", "韓国"], ["Bae", "韓国"], ["Jiwoo", "韓国"], ["Kyujin", "韓国"]]
  },
  {
    name: "Kep1er",
    generation: "4世代",
    activity: "活動中",
    members: [["Yujin", "韓国"], ["Xiaoting", "中国"], ["Chaehyun", "韓国"], ["Dayeon", "韓国"], ["Hikaru", "日本"], ["Bahiyyih", "韓国"], ["Youngeun", "韓国"]]
  },
  {
    name: "NiziU",
    generation: "4世代",
    activity: "活動中",
    members: [["Mako", "日本"], ["Rio", "日本"], ["Maya", "日本"], ["Riku", "日本"], ["Ayaka", "日本"], ["Mayuka", "日本"], ["Rima", "日本"], ["Miihi", "日本"], ["Nina", "日本"]]
  },
  {
    name: "XG",
    generation: "4世代",
    activity: "活動中",
    members: [["Jurin", "日本"], ["Chisa", "日本"], ["Hinata", "日本"], ["Harvey", "日本"], ["Juria", "日本"], ["Maya", "日本"], ["Cocona", "日本"]]
  },
  {
    name: "QWER",
    generation: "5世代",
    activity: "活動中",
    members: [["Chodan", "韓国"], ["Magenta", "韓国"], ["Hina", "韓国"], ["Siyeon", "韓国"]]
  },
  {
    name: "ARTMS",
    generation: "5世代",
    activity: "活動中",
    members: [["Heejin", "韓国"], ["Haseul", "韓国"], ["Kim Lip", "韓国"], ["Jinsoul", "韓国"], ["Choerry", "韓国"]]
  },
  {
    name: "tripleS",
    generation: "5世代",
    activity: "活動中",
    members: [["Seoyeon", "韓国"], ["Hyerin", "韓国"], ["Jiwoo", "韓国"], ["Chaeyeon", "韓国"], ["Yooyeon", "韓国"], ["Soomin", "韓国"], ["Nakyoung", "韓国"], ["Yubin", "韓国"], ["Kaede", "日本"], ["Dahyun", "韓国"], ["Kotone", "日本"], ["Yeonji", "韓国"], ["Nien", "台湾"], ["Sohyun", "韓国"], ["Xinyu", "中国"], ["Mayu", "日本"], ["Lynn", "日本"], ["Joobin", "韓国"], ["Hayeon", "韓国"], ["Shion", "韓国"], ["Chaewon", "韓国"], ["Sullin", "タイ"], ["Seoah", "韓国"], ["Jiyeon", "韓国"]]
  },
  {
    name: "YOUNG POSSE",
    generation: "5世代",
    activity: "活動中",
    members: [["Sunhye", "韓国"], ["Yeonjung", "韓国"], ["Jiana", "韓国"], ["Doeun", "韓国"], ["Jieun", "韓国"]]
  },
  {
    name: "KATSEYE",
    generation: "5世代",
    activity: "活動中",
    members: [["Daniela", "米国"], ["Lara", "米国"], ["Manon", "スイス"], ["Megan", "米国"], ["Sophia", "フィリピン"], ["Yoonchae", "韓国"]]
  },
  {
    name: "BABYMONSTER",
    generation: "5世代",
    activity: "活動中",
    members: [["Ruka", "日本"], ["Pharita", "タイ"], ["Asa", "日本"], ["Ahyeon", "韓国"], ["Rami", "韓国"], ["Rora", "韓国"], ["Chiquita", "タイ"]]
  },
  {
    name: "UNIS",
    generation: "5世代",
    activity: "活動終了",
    members: [["Hyeonju", "韓国"], ["Nana", "日本"], ["Gehlee", "フィリピン"], ["Kotoko", "日本"], ["Yunha", "韓国"], ["Elisia", "フィリピン"], ["Yoona", "韓国"], ["Seowon", "韓国"]]
  },
  {
    name: "RESCENE",
    generation: "5世代",
    activity: "活動中",
    members: [["Woni", "韓国"], ["Liv", "韓国"], ["Minami", "日本"], ["May", "韓国"], ["Zena", "韓国"]]
  },
  {
    name: "MEOVV",
    generation: "5世代",
    activity: "活動中",
    members: [["Sooin", "韓国"], ["Gawon", "韓国"], ["Anna", "日本"], ["Narin", "韓国"], ["Ella", "米国"]]
  },
  {
    name: "izna",
    generation: "5世代",
    activity: "活動中",
    members: [["Mai", "日本"], ["Jeemin", "韓国"], ["Koko", "日本"], ["Sarang", "韓国"], ["Jungeun", "韓国"], ["Saebi", "韓国"]]
  },
  {
    name: "SAY MY NAME",
    generation: "5世代",
    activity: "活動中",
    members: [["Hitomi", "日本"], ["Shuie", "中国"], ["Mei", "日本"], ["Kanny", "タイ"], ["Soha", "韓国"], ["Dohee", "韓国"], ["Junhwi", "韓国"], ["Seungjoo", "韓国"]]
  },
  {
    name: "Hearts2Hearts",
    generation: "5世代",
    activity: "活動中",
    members: [["Jiwoo", "韓国"], ["Carmen", "インドネシア"], ["Yuha", "韓国"], ["Stella", "韓国"], ["Juun", "韓国"], ["A-na", "韓国"], ["Ian", "韓国"], ["Ye-on", "韓国"]]
  },
  {
    name: "KiiiKiii",
    generation: "5世代",
    activity: "活動中",
    members: [["Jiyu", "韓国"], ["Leesol", "韓国"], ["Sui", "韓国"], ["Haum", "韓国"], ["Kya", "韓国"]]
  },
  {
    name: "AtHeart",
    generation: "5世代",
    activity: "活動中",
    members: [["Michi", "未公表"], ["Seohyeon", "未公表"], ["Aurora", "未公表"], ["Katelyn", "未公表"], ["Bome", "未公表"], ["Arin", "未公表"], ["Nahyun", "未公表"]]
  },
  {
    name: "ifeye",
    generation: "5世代",
    activity: "活動中",
    members: [["Hwayeon", "韓国"], ["Taerin", "韓国"], ["Rahee", "韓国"], ["Kasia", "韓国"], ["Meu", "韓国"], ["Sasha", "韓国"]]
  },
  {
    name: "TUIDE",
    generation: "5世代",
    activity: "活動中",
    members: [["Seohee", "未公表"], ["Seoyeon", "未公表"], ["Elena", "未公表"], ["Jia", "未公表"], ["Saki", "未公表"], ["Seah", "未公表"], ["Yi Hani", "未公表"]]
  },
  {
    name: "UNCHILD",
    generation: "5世代",
    activity: "活動中",
    members: [["Yeeun", "未公表"], ["Heekie", "未公表"], ["Tina", "未公表"], ["Ako", "未公表"], ["Evon", "未公表"], ["Haeun", "未公表"]]
  },
  {
    name: "Heart of Woman",
    generation: "5世代",
    activity: "活動中",
    members: [["Jihyun", "未公表"], ["Chaei", "未公表"], ["Ayne", "未公表"], ["Liri", "未公表"], ["Liuyin", "未公表"]]
  },
  {
    name: "2NE1",
    generation: "2世代",
    activity: "活動中",
    members: [["CL", "韓国"], ["Bom", "韓国"], ["Dara", "韓国"], ["Minzy", "韓国"]]
  },
  {
    name: "Wonder Girls",
    generation: "2世代",
    activity: "活動終了",
    members: [["Yubin", "韓国"], ["Ye-eun", "韓国"], ["Sunye", "韓国"], ["Sohee", "韓国"], ["Sunmi", "韓国"], ["Hyelim", "韓国"], ["Hyuna", "韓国"]]
  },
  {
    name: "SISTAR",
    generation: "2世代",
    activity: "活動終了",
    members: [["Hyolyn", "韓国"], ["Bora", "韓国"], ["Soyou", "韓国"], ["Dasom", "韓国"]]
  },
  {
    name: "T-ARA",
    generation: "2世代",
    activity: "活動休止",
    members: [["Qri", "韓国"], ["Eunjung", "韓国"], ["Hyomin", "韓国"], ["Jiyeon", "韓国"], ["Boram", "韓国"], ["Soyeon", "韓国"]]
  },
  {
    name: "f(x)",
    generation: "2世代",
    activity: "活動休止",
    members: [["Victoria", "中国"], ["Amber", "米国"], ["Luna", "韓国"], ["Krystal", "米国"], ["Sulli", "韓国"]]
  },
  {
    name: "4Minute",
    generation: "2世代",
    activity: "活動終了",
    members: [["Jihyun", "韓国"], ["Gayoon", "韓国"], ["Jiyoon", "韓国"], ["Hyuna", "韓国"], ["Sohyun", "韓国"]]
  },
  {
    name: "Girl's Day",
    generation: "2世代",
    activity: "活動休止",
    members: [["Sojin", "韓国"], ["Yura", "韓国"], ["Minah", "韓国"], ["Hyeri", "韓国"]]
  },
  {
    name: "Brown Eyed Girls",
    generation: "2世代",
    activity: "活動休止",
    members: [["JeA", "韓国"], ["Miryo", "韓国"], ["Narsha", "韓国"], ["Gain", "韓国"]]
  },
  {
    name: "Miss A",
    generation: "2世代",
    activity: "活動終了",
    members: [["Fei", "中国"], ["Jia", "中国"], ["Min", "韓国"], ["Suzy", "韓国"]]
  },
  {
    name: "EXID",
    generation: "3世代",
    activity: "活動休止",
    members: [["Solji", "韓国"], ["LE", "韓国"], ["Hani", "韓国"], ["Hyelin", "韓国"], ["Jeonghwa", "韓国"]]
  },
  {
    name: "CLC",
    generation: "3世代",
    activity: "活動終了",
    members: [["Seunghee", "韓国"], ["Yujin", "韓国"], ["Seungyeon", "韓国"], ["Sorn", "タイ"], ["Yeeun", "韓国"], ["Elkie", "香港"], ["Eunbin", "韓国"]]
  },
  {
    name: "LOONA",
    generation: "4世代",
    activity: "活動休止",
    members: [["Heejin", "韓国"], ["Hyunjin", "韓国"], ["Haseul", "韓国"], ["Yeojin", "韓国"], ["Vivi", "香港"], ["Kim Lip", "韓国"], ["Jinsoul", "韓国"], ["Choerry", "韓国"], ["Yves", "韓国"], ["Chuu", "韓国"], ["Go Won", "韓国"], ["Hyeju", "韓国"]]
  },
  {
    name: "Weki Meki",
    generation: "4世代",
    activity: "活動終了",
    members: [["Suyeon", "韓国"], ["Elly", "韓国"], ["Yoojung", "韓国"], ["Doyeon", "韓国"], ["Sei", "韓国"], ["Lua", "韓国"], ["Rina", "韓国"], ["Lucy", "韓国"]]
  },
  {
    name: "FIFTY FIFTY",
    generation: "4世代",
    activity: "活動中",
    members: [["Keena", "韓国"], ["Chanelle Moon", "米国"], ["Yewon", "韓国"], ["Hana", "韓国"], ["Athena", "スウェーデン"]]
  },
  {
    name: "NewJeans",
    generation: "4世代",
    activity: "活動休止",
    members: [["Minji", "韓国"], ["Hanni", "オーストラリア"], ["Danielle", "オーストラリア"], ["Haerin", "韓国"], ["Hyein", "韓国"]]
  },
  {
    name: "fromis_9",
    generation: "4世代",
    activity: "活動中",
    members: [["Saerom", "韓国"], ["Hayoung", "韓国"], ["Jiwon", "韓国"], ["Jisun", "韓国"], ["Seoyeon", "韓国"], ["Chaeyoung", "韓国"], ["Nagyung", "韓国"], ["Jiheon", "韓国"]]
  },
  {
    name: "Baby DONT Cry",
    generation: "5世代",
    activity: "活動中",
    members: [["Yihyun", "韓国"], ["Kumi", "日本"], ["Mia", "日本"], ["Beni", "韓国"]]
  },
  {
    name: "KIIRAS",
    generation: "5世代",
    activity: "活動中",
    members: [["Lingling", "マレーシア"], ["Kurumi", "日本"], ["Harin", "韓国"], ["Kylie", "韓国"], ["Doyeon", "韓国"], ["Roah", "韓国"]]
  },
  {
    name: "USPEER",
    generation: "5世代",
    activity: "活動中",
    members: [["Sian", "韓国"], ["Soee", "韓国"], ["Seoyu", "韓国"], ["Daon", "韓国"], ["Chaena", "韓国"], ["Roa", "韓国"]]
  },
  {
    name: "Candy Shop",
    generation: "5世代",
    activity: "活動中",
    members: [["Soram", "韓国"], ["Sui", "韓国"], ["Sarang", "韓国"], ["Julia", "未公表"]]
  },
  {
    name: "BADVILLAIN",
    generation: "5世代",
    activity: "活動中",
    members: [["Emma", "未公表"], ["Chloe Young", "未公表"], ["Hu'e", "韓国"], ["Ina", "韓国"], ["Yunseo", "韓国"], ["Vin", "韓国"], ["Kelly", "韓国"]]
  },
  {
    name: "After School",
    generation: "2世代",
    activity: "活動終了",
    members: [["Kahi", "韓国"], ["Jungah", "韓国"], ["Jooyeon", "韓国"], ["Bekah", "米国"], ["Uee", "韓国"], ["Raina", "韓国"], ["Nana", "韓国"], ["Lizzy", "韓国"], ["E-Young", "韓国"], ["Kaeun", "韓国"], ["Soyoung", "韓国"]]
  },
  {
    name: "SECRET",
    generation: "2世代",
    activity: "活動終了",
    members: [["Hyosung", "韓国"], ["Hana", "韓国"], ["Jieun", "韓国"], ["Sunhwa", "韓国"]]
  },
  {
    name: "9MUSES",
    generation: "2世代",
    activity: "活動終了",
    members: [["Jaekyung", "韓国"], ["Bini", "韓国"], ["Rana", "韓国"], ["Sera", "韓国"], ["Euaerin", "韓国"], ["Lee Sem", "韓国"], ["Eunji", "韓国"], ["Hyuna", "韓国"], ["Minha", "韓国"], ["Sungah", "韓国"], ["Kyungri", "韓国"], ["Sojin", "韓国"], ["Keumjo", "韓国"]]
  },
  {
    name: "gugudan",
    generation: "3世代",
    activity: "活動終了",
    members: [["Hana", "韓国"], ["Mimi", "韓国"], ["Haebin", "韓国"], ["Nayoung", "韓国"], ["Sejeong", "韓国"], ["Sally", "中国"], ["Soyee", "韓国"], ["Mina", "韓国"], ["Hyeyeon", "韓国"]]
  },
  {
    name: "DIA",
    generation: "3世代",
    activity: "活動終了",
    members: [["Eunice", "韓国"], ["Huihyeon", "韓国"], ["Yebin", "韓国"], ["Chaeyeon", "韓国"], ["Eunchae", "韓国"], ["Jenny", "韓国"], ["Eunjin", "韓国"], ["Somyi", "韓国"]]
  },
  {
    name: "APRIL",
    generation: "3世代",
    activity: "活動終了",
    members: [["Chaekyung", "韓国"], ["Chaewon", "韓国"], ["Naeun", "韓国"], ["Yena", "韓国"], ["Rachel", "韓国"], ["Jinsol", "韓国"]]
  },
  {
    name: "Lovelyz",
    generation: "3世代",
    activity: "活動休止",
    members: [["Baby Soul", "韓国"], ["Jiae", "韓国"], ["Jisoo", "韓国"], ["Mijoo", "韓国"], ["Kei", "韓国"], ["Jin", "韓国"], ["Sujeong", "韓国"], ["Yein", "韓国"]]
  },
  {
    name: "MOMOLAND",
    generation: "3世代",
    activity: "活動終了",
    members: [["Hyebin", "韓国"], ["Yeonwoo", "韓国"], ["Jane", "韓国"], ["Taeha", "韓国"], ["Nayun", "韓国"], ["Daisy", "韓国"], ["JooE", "韓国"], ["Ahin", "韓国"], ["Nancy", "米国"]]
  },
  {
    name: "AOA",
    generation: "3世代",
    activity: "活動休止",
    members: [["Jimin", "韓国"], ["Yuna", "韓国"], ["Hyejeong", "韓国"], ["Choa", "韓国"], ["Seolhyun", "韓国"], ["Chanmi", "韓国"], ["Mina", "韓国"], ["Youkyung", "韓国"]]
  },
  {
    name: "HELLOVENUS",
    generation: "2世代",
    activity: "活動終了",
    members: [["Alice", "韓国"], ["Nara", "韓国"], ["Lime", "韓国"], ["Yooara", "韓国"], ["Yooyoung", "韓国"], ["Seoyoung", "韓国"], ["Yeoreum", "韓国"], ["Ahra", "韓国"], ["Yoonjo", "韓国"]]
  },
  {
    name: "ALICE (ELRIS)",
    generation: "3世代",
    activity: "活動終了",
    members: [["EJ", "韓国"], ["Do-A", "韓国"], ["Yeonje", "韓国"], ["Yukyung", "韓国"], ["Sohee", "韓国"], ["Chaejeong", "韓国"]]
  },
  {
    name: "LIGHTSUM",
    generation: "4世代",
    activity: "活動中",
    members: [["Sangah", "韓国"], ["Chowon", "韓国"], ["Nayoung", "韓国"], ["Hina", "日本"], ["Juhyeon", "韓国"], ["Yujeong", "韓国"]]
  },
  {
    name: "woo!ah!",
    generation: "4世代",
    activity: "活動中",
    members: [["Nana", "韓国"], ["Wooyeon", "韓国"], ["Sora", "日本"], ["Lucy", "韓国"], ["Minseo", "韓国"]]
  },
  {
    name: "EVERGLOW",
    generation: "4世代",
    activity: "活動中",
    members: [["E:U", "韓国"], ["Sihyeon", "韓国"], ["Mia", "韓国"], ["Onda", "韓国"], ["Aisha", "韓国"], ["Yiren", "中国"]]
  },
  {
    name: "CSR",
    generation: "4世代",
    activity: "活動休止",
    members: [["Sua", "韓国"], ["Geumhee", "韓国"], ["Sihyeon", "韓国"], ["Seoyeon", "韓国"], ["Yuna", "韓国"], ["Duna", "韓国"], ["Yeham", "韓国"]]
  },
  {
    name: "ILY:1",
    generation: "4世代",
    activity: "活動休止",
    members: [["Nayu", "韓国"], ["Hana", "日本"], ["Ririka", "日本"], ["Ara", "日本"], ["Rona", "台湾"], ["Elva", "台湾"]]
  },
  {
    name: "CLASS:y",
    generation: "4世代",
    activity: "活動中",
    members: [["Hyungseo", "韓国"], ["Chaewon", "韓国"], ["Hyeju", "韓国"], ["Riwon", "韓国"], ["Jimin", "韓国"], ["Boeun", "韓国"], ["Seonyou", "韓国"]]
  },
  {
    name: "ICHILLIN'",
    generation: "4世代",
    activity: "活動中",
    members: [["E.Ji", "韓国"], ["Jackie", "米国"], ["Joonie", "米国"], ["Chaerin", "韓国"], ["Yeju", "韓国"], ["Chowon", "韓国"]]
  },
  {
    name: "PURPLE KISS",
    generation: "4世代",
    activity: "活動中",
    members: [["Goeun", "韓国"], ["Dosie", "韓国"], ["Ireh", "韓国"], ["Yuki", "日本"], ["Chaein", "韓国"], ["Swan", "韓国"]]
  },
  {
    name: "DreamNote",
    generation: "4世代",
    activity: "活動休止",
    members: [["Youi", "韓国"], ["Boni", "韓国"], ["Lara", "韓国"], ["Miso", "韓国"], ["Sumin", "韓国"], ["Eunjo", "韓国"]]
  },
  {
    name: "BLACK SWAN",
    generation: "4世代",
    activity: "活動中",
    members: [["Fatou", "セネガル"], ["Gabi", "ブラジル"], ["Sriya", "インド"], ["NVee", "米国"]]
  },
  {
    name: "TRI.BE",
    generation: "4世代",
    activity: "活動中",
    members: [["Songsun", "韓国"], ["Kelly", "台湾"], ["Hyunbin", "韓国"], ["Jia", "台湾"], ["Soeun", "韓国"], ["Mire", "日本"]]
  },
  {
    name: "GIRLSET (VCHA)",
    generation: "5世代",
    activity: "活動中",
    members: [["Lexi", "米国"], ["Camila", "カナダ"], ["Kendall", "米国"], ["Savanna", "米国"]]
  },
  {
    name: "ME:I",
    generation: "5世代",
    activity: "活動中",
    members: [["Miu", "日本"], ["Momona", "日本"], ["Ayane", "日本"], ["Keiko", "日本"], ["Rinon", "日本"], ["Suzu", "日本"], ["Tsuzumi", "日本"]]
  },
  {
    name: "IS:SUE",
    generation: "5世代",
    activity: "活動中",
    members: [["Nano", "日本"], ["Rino", "日本"], ["Yuuki", "日本"], ["Rin", "日本"]]
  },
  {
    name: "HITGS",
    generation: "5世代",
    activity: "活動中",
    members: [["VV", "韓国"], ["Seojin", "韓国"], ["Seohee", "韓国"], ["Hyerin", "韓国"], ["Iyoo", "韓国"]]
  },
  {
    name: "A2O LITE",
    generation: "5世代",
    activity: "活動中",
    members: [
      ["Young", "韓国"], ["Himeki", "日本"], ["Vora", "韓国"],
      ["Xili", "中国"], ["Rada", "タイ"], ["Merci", "中国"],
      ["Ayune", "韓国"], ["OA", "日本・米国"], ["Aijing", "中国"]
    ]
  }
];

const japaneseNameOverrides = Object.fromEntries(
  `taeyeon=テヨン|hyoyeon=ヒョヨン|yuri=ユリ|yoona=ユナ|seohyun=ソヒョン|jessica=ジェシカ|sunny=サニー|tiffany=ティファニー|sooyoung=スヨン|jisoo=ジス|jennie=ジェニー|rosé=ロゼ|rose=ロゼ|lisa=リサ|nayeon=ナヨン|jeongyeon=ジョンヨン|momo=モモ|sana=サナ|jihyo=ジヒョ|mina=ミナ|dahyun=ダヒョン|chaeyoung=チェヨン|tzuyu=ツウィ|irene=アイリーン|seulgi=スルギ|wendy=ウェンディ|joy=ジョイ|yeri=イェリ|somi=ソミ|sejeong=セジョン|chungha=チョンハ|yoojung=ユジョン|doyeon=ドヨン|yeonjung=ヨンジョン|sohye=ソヘ|nayoung=ナヨン|kyulkyung=ギョルギョン|minji=ミンジ|hanni=ハニ|haerin=ヘリン|hyein=ヘイン|yeji=イェジ|lia=リア|ryujin=リュジン|chaeryeong=チェリョン|yuna=ユナ|karina=カリナ|giselle=ジゼル|winter=ウィンター|ningning=ニンニン|yujin=ユジン|gaeul=ガウル|rei=レイ|wonyoung=ウォニョン|liz=リズ|leeseo=イソ|sakura=サクラ|chaewon=チェウォン|yunjin=ユンジン|kazuha=カズハ|eunchae=ウンチェ|eunbi=ウンビ|hyewon=ヘウォン|yena=イェナ|yuri=ユリ|nako=ナコ|hitomi=ヒトミ|minju=ミンジュ|yunah=ユナ|moka=モカ|wonhee=ウォンヒ|iroha=イロハ|julie=ジュリー|natty=ナッティ|belle=ベル|haneul=ハヌル|chowon=チョウォン|nana=ナナ|gehlee=ゲリー|kotoko=コトコ|elisia=エリシア|seowon=ソウォン|ruka=ルカ|pharita=ファリタ|asa=アサ|ahyeon=アヒョン|rami=ラミ|rora=ロラ|chiquita=チキータ|mai=マイ|jeemin=ジミン|koko=ココ|sarang=サラン|jungeun=ジョンウン|saebi=セビ|hitomi=ヒトミ|shuie=シュイ|mei=メイ|kanny=カニー|soha=ソハ|dohee=ドヒ|junhwi=ジュンフィ|seungjoo=スンジュ|carmen=カルメン|jiwoo=ジウ|yuha=ユハ|stella=ステラ|juun=ジュン|ian=イアン|ye-on=イェオン|jiyu=ジユ|leesol=リソル|sui=スイ|haum=ハウム|kya=キャ|michi=ミチ|seohyeon=ソヒョン|aurora=オーロラ|katelyn=ケイトリン|bome=ボメ|arin=アリン|nahyun=ナヒョン|hwayeon=ファヨン|taerin=テリン|rahee=ラヒ|kasia=カシア|sasha=サシャ|lingling=リンリン|kurumi=クルミ|harin=ハリン|kylie=カイリー|roah=ロア|sian=シアン|soee=ソイ|seoyu=ソユ|daon=ダオン|chaena=チェナ|roa=ロア|yeeun=イェウン|heekie=ヒキ|tina=ティナ|ako=アコ|evon=イヴォン|haeun=ハウン|jihyun=ジヒョン|chaei=チェイ|ayne=エイン|liri=リリ|liuyin=リウイン|cl=シーエル|bom=ボム|dara=ダラ|minzy=ミンジ|sunye=ソネ|yeeun=イェウン|yubin=ユビン|sohee=ソヒ|hyelim=ヘリム|hyuna=ヒョナ|hyolyn=ヒョリン|bora=ボラ|soyou=ソユ|dasom=ダソム|qri=キュリ|eunjung=ウンジョン|hyomin=ヒョミン|jiyeon=ジヨン|boram=ボラム|victoria=ビクトリア|amber=アンバー|luna=ルナ|krystal=クリスタル|sulli=ソルリ|jiyoon=ジユン|gayoon=ガユン|sohyun=ソヒョン|minah=ミナ|jea=ジェア|miryo=ミリョ|narsha=ナルシャ|gain=ガイン|fei=フェイ|jia=ジア|min=ミン|suzy=スジ|solji=ソルジ|le=エリー|hani=ハニ|hyelin=ヘリン|jeonghwa=ジョンファ|seunghee=スンヒ|seungyeon=スンヨン|sorn=ソン|elkie=エルキー|eunbin=ウンビン|vivi=ビビ|kim lip=キムリップ|jinsoul=ジンソル|choerry=チェリ|yves=イブ|chuu=チュウ|go won=ゴウォン|hyeju=ヘジュ|sangah=サンア|nayoung=ナヨン|hina=ヒナ|juhyeon=ジュヒョン|yujeong=ユジョン|wooyeon=ウヨン|sora=ソラ|lucy=ルーシー|minseo=ミンソ|e:u=イユ|sihyeon=シヒョン|mia=ミア|onda=オンダ|aisha=アイシャ|yiren=イーレン|sua=スア|geumhee=グムヒ|seoyeon=ソヨン|duna=ドゥナ|yeham=イェハム|nayu=ナユ|hana=ハナ|ririka=リリカ|ara=アラ|rona=ロナ|elva=エルバ|hyungseo=ヒョンソ|hyeju=ヘジュ|riwon=リウォン|jimin=ジミン|boeun=ボウン|seonyou=ソニュ|e.ji=イジ|jackie=ジャッキー|joonie=ジュニ|chaerin=チェリン|yeju=イェジュ|chowon=チョウォン|goeun=ゴウン|dosie=ドシ|ireh=イレ|yuki=ユキ|chaein=チェイン|swan=スワン|youi=ユイ|boni=ボニ|lara=ララ|miso=ミソ|sumin=スミン|eunjo=ウンジョ|fatou=ファトゥ|gabi=ガビ|sriya=スリヤ|nvee=エンビー|song sun=ソンソン|kelly=ケリー|jinha=ジンハ|hyunbin=ヒョンビン|soeun=ソウン|mire=ミレ|lexi=レクシー|camila=カミラ|kendall=ケンダル|savanna=サバンナ|miu=ミウ|momona=モモナ|ayane=アヤネ|keiko=ケイコ|rinon=リノン|suzu=スズ|tsuzumi=ツヅミ|nano=ナノ|rino=リノ|yuuki=ユウキ|rin=リン|vv=ブイブイ|seojin=ソジン|seohee=ソヒ|hyerin=ヘリン|iyoo=イユ|mako=マコ|rio=リオ|maya=マヤ|riku=リク|ayaka=アヤカ|mayuka=マユカ|rima=リマ|miihi=ミイヒ|nina=ニナ|jisoo=ジス|nayeon=ナヨン|seola=ソラ|bona=ボナ|exy=エクシ|soobin=スビン|luda=ルダ|dawon=ダウォン|eunseo=ウンソ|yeoreum=ヨルム|dayoung=ダヨン|yooa=ユア|yubin=ユビン|arin=アリン|jiu=ジユ|sua=スア|siyeon=シヨン|handong=ハンドン|yoohyeon=ユヒョン|dami=ダミ|gahyeon=ガヒョン|eunha=ウナ|sinb=シンビ|umji=オムジ|soojin=スジン|monday=マンデー|soeun=ソウン|jaehee=ジェヒ|jihan=ジハン|zoa=ゾア|sumin=スミン|sieun=シウン|isa=アイサ|seeun=セウン|yoon=ユン|miyeon=ミヨン|minnie=ミンニ|soyeon=ソヨン|yuqi=ウギ|shuhua=シュファ|moon sua=ムンスア|suhyeon=スヒョン|haram=ハラム|tsuki=ツキ|siyoon=シユン|haruna=ハルナ|sheon=ション|seoi=ソイ|riina=リイナ|hwiseo=フィソ|yel=イェル|lily=リリー|haewon=ヘウォン|sullyoon=ソリュン|bae=ベイ|jiwoo=ジウ|kyujin=ギュジン|xiaoting=シャオティン|chaehyun=チェヒョン|dayeon=ダヨン|hikaru=ヒカル|bahiyyih=バヒエ|youngeun=ヨンウン|jurin=ジュリン|chisa=チサ|hinata=ヒナタ|harvey=ハーヴィー|juria=ジュリア|cocona=ココナ|chodan=チョダン|magenta=マゼンタ|heejin=ヒジン|haseul=ハスル|kim lip=キムリップ|jinsoul=ジンソル|choerry=チェリ|seoyeon=ソヨン|hyerin=ヘリン|jiwoo=ジウ|chaeyeon=チェヨン|yooyeon=ユヨン|soomin=スミン|nakyoung=ナギョン|yubin=ユビン|kaede=カエデ|dahyun=ダヒョン|kotone=コトネ|yeonji=ヨンジ|nien=ニエン|sohyun=ソヒョン|xinyu=シンユー|mayu=マユ|lynn=リン|joobin=ジュビン|hayeon=ハヨン|shion=シオン|chaewon=チェウォン|sullin=スリン|seoah=ソア|sunhye=ソンヘ|yeonjung=ヨンジョン|jiana=ジアナ|doeun=ドウン|jieun=ジウン|daniela=ダニエラ|lara=ララ|manon=マノン|megan=メーガン|sophia=ソフィア|yoonchae=ユンチェ|pharita=パリタ|ahyeon=アヒョン|rami=ラミ|rora=ロラ|chiquita=チキータ|woni=ウォニ|liv=リブ|minami=ミナミ|may=メイ|zena=ゼナ|sooin=スイン|gawon=ガウォン|anna=アンナ|narin=ナリン|ella=エラ|ma i=マイ|jeemin=ジミン|jungeun=ジョンウン|saebi=セビ|shuie=シュイ|kanny=カニー|junhwi=ジュンフィ|seungjoo=スンジュ|jiwoo=ジウ|carmen=カルメン|yuha=ユハ|stella=ステラ|juun=ジュン|a-na=アナ|ian=イアン|ye-on=イェオン|jiyu=ジユ|leesol=リソル|haum=ハウム|kya=キャ|seohyeon=ソヒョン|bome=ボメ|nahyun=ナヒョン|taerin=テリン|rahee=ラヒ|kasia=カシア|sasha=サシャ|lingling=リンリン|kurumi=クルミ|roah=ロア|soee=ソイ|seoyu=ソユ|daon=ダオン|chaena=チェナ|hyebin=ヘビン|yeonwoo=ヨヌ|jane=ジェイン|taeha=テハ|nayun=ナユン|daisy=デイジー|jooe=ジュイ|ahin=アイン|nancy=ナンシー|jimin=ジミン|yuna=ユナ|hyejeong=ヘジョン|choa=チョア|seolhyun=ソルヒョン|chanmi=チャンミ|min a=ミナ|youkyung=ユギョン|baby soul=ベイビーソウル|jiae=ジエ|jisoo=ジス|mijoo=ミジュ|kei=ケイ|jin=ジン|sujeong=スジョン|yein=イェイン|soyoung=ソヨン|hyosung=ヒョソン|jieun=ジウン|sunhwa=ソナ|jaekyung=ジェギョン|bini=ビニ|rana=ラナ|sera=セラ|euaerin=イェリン|lee sem=イセム|minha=ミナ|sungah=ソンア|kyungri=ギョンリ|keumjo=クムジョ|haebin=ヘビン|sally=サリー|hyeyeon=ヘヨン|huihyeon=ヒヒョン|yebin=イェビン|jenny=ジェニー|eunjin=ウンジン|somyi=ソミ|chaekyung=チェギョン|chae won=チェウォン|na eun=ナウン|rachel=レイチェル|jinsol=ジンソル|nara=ナラ|lime=ライム|yooara=ユアラ|yooyoung=ユヨン|ahra=アラ|yoonjo=ユンジョ|e.ji=イジ|do-a=ドア|yeonje=ヨンジェ|yukyung=ユギョン|sohee=ソヒ|chaejeong=チェジョン|hyunjin=ヒョンジン|haseul=ハスル|yeojin=ヨジン|vivi=ビビ|chae rin=チェリン|juhyeon=ジュヒョン|yujeong=ユジョン|geumhee=グミ|sihyeon=シヒョン|seoyeon=ソヨン|duna=ドゥナ|yeham=イェハム|iyoo=イユ|yihyun=イヒョン|kumi=クミ|beni=ベニ|chanelle moon=シャネル・ムーン|athena=アテナ|e:U=イユ|elena=エレナ|jiyu=ジユ|nagyung=ナギョン|jiheon=ジホン|saerom=セロム|hayoung=ハヨン|jisun=ジソン|seoyeon=ソヨン|chaeyoung=チェヨン|jimin=ジミン|minji=ミンジ|haerin=ヘリン|hyein=ヘイン|elena=エレナ|saki=サキ|seah=セア|yi hani=イハニ|y eon=ヨン|ye-eun=イェウン|e-young=イヨン|do-a=ドア|julia=ジュリア|hyerin=ヘリン|iyoo=イユ|nan o=ナノ|sangah=サンア|chowon=チョウォン|nayoung=ナヨン|hina=ヒナ|juhyeon=ジュヒョン|yujeong=ユジョン|woo yeon=ウヨン|e.ji=イジ|jackie=ジャッキー|joonie=ジュニ|chaerin=チェリン|yeju=イェジュ|goeun=ゴウン|dosie=ドシ|ireh=イレ|yuki=ユキ|chaein=チェイン|swan=スワン|youi=ユイ|boni=ボニ|miso=ミソ|eunjo=ウンジョ|sriya=スリヤ|nvee=エンビー|songsun=ソンソン|hyunbin=ヒョンビン|soeun=ソウン|mire=ミレ|lexi=レクシー|camila=カミラ|kendall=ケンダル|savanna=サバンナ|momona=モモナ|ayane=アヤネ|keiko=ケイコ|rinon=リノン|tsuzumi=ツヅミ|nano=ナノ|yuuki=ユウキ|rin=リン|vv=ブイブイ|seojin=ソジン|seohee=ソヒ|hyerin=ヘリン|iyoo=イユ`
    .split("|")
    .map(entry => entry.split("="))
    .map(([name, japaneseName]) => [name.toLowerCase(), japaneseName])
);

Object.assign(japaneseNameOverrides, {
  "juun": "ジュウン",
  "a-na": "エイナ",
  "sakura": "サクラ",
  "chloe young": "クロエ・ヤング",
  "chanelle moon": "シャネル・ムン",
  "moon sua": "ムン・スア",
  "baby soul": "ベイビーソウル",
  "nv ee": "エンビー",
  "nvee": "エンビー",
  "yi ha-ni": "イ・ハニ",
  "yi hani": "イ・ハニ",
  "song sun": "ソン・ソン",
  "mi i": "マイ",
  "ma i": "マイ",
  "yihyun": "イヒョン",
  "chorong": "チョロン",
  "namjoo": "ナムジュ",
  "gyuri": "ギュリ",
  "nicole": "ニコル",
  "moonbyul": "ムンビョル",
  "wheein": "フィイン",
  "hwasa": "ファサ",
  "hyojung": "ヒョジョン",
  "j": "ジェイ",
  "elly": "エリー",
  "keena": "キーナ",
  "soram": "ソラム",
  "sunmi": "ソンミ",
  "jooyeon": "ジュヨン",
  "uee": "ユイ",
  "lizzy": "リジ",
  "soyee": "ソイ",
  "eunice": "ユニス",
  "alice": "アリス",
  "hu'e": "ヒュイ",
  "vin": "ビン",
  "euaerin": "イユエリン",
  "meu": "ミユ",
  "sally": "サリー",
  "ej": "イジェイ",
  "danielle": "ダニエル"
});

Object.assign(japaneseNameOverrides, {
  young: "ヨン",
  himeki: "ヒメキ",
  vora: "ボラ",
  xili: "シリ",
  rada: "ラダ",
  merci: "メルシー",
  ayune: "アユン",
  oa: "オア",
  aijing: "アイチン"
});

const romanSyllables = {
  "yeong": "ヨン", "young": "ヨン", "yeon": "ヨン", "hyung": "ヒョン",
  "hyeon": "ヒョン", "hyun": "ヒョン", "eung": "ウン", "eun": "ウン",
  "sang": "サン", "seong": "ソン", "sung": "ソン", "seon": "ソン",
  "jung": "ジョン", "jeong": "ジョン", "jong": "ジョン", "chae": "チェ",
  "choi": "チェ", "cheo": "チョ", "hye": "ヘ", "yeo": "ヨ", "seo": "ソ",
  "sye": "シェ", "syo": "ショ", "shi": "シ", "sh": "シ", "ch": "チ",
  "ts": "ツ", "ae": "エ", "oe": "ウェ", "ui": "ウィ", "eu": "ウ",
  "oo": "ウ", "woo": "ウ", "yu": "ユ", "yoo": "ユ", "ya": "ヤ",
  "ye": "イェ", "yo": "ヨ", "wae": "ウェ", "wa": "ワ", "we": "ウェ",
  "wi": "ウィ", "wo": "ウォ", "ga": "ガ", "gi": "ギ", "gu": "グ",
  "ge": "ゲ", "go": "ゴ", "ka": "カ", "ki": "キ", "ku": "ク",
  "ke": "ケ", "ko": "コ", "na": "ナ", "ni": "ニ", "nu": "ヌ",
  "ne": "ネ", "no": "ノ", "da": "ダ", "di": "ディ", "du": "ドゥ",
  "de": "デ", "do": "ド", "ta": "タ", "ti": "ティ", "tu": "トゥ",
  "te": "テ", "to": "ト", "sa": "サ", "si": "シ", "su": "ス",
  "se": "セ", "so": "ソ", "ja": "ジャ", "ji": "ジ", "ju": "ジュ",
  "je": "ジェ", "jo": "ジョ", "ha": "ハ", "hi": "ヒ", "hu": "フ",
  "he": "ヘ", "ho": "ホ", "ma": "マ", "mi": "ミ", "mu": "ム",
  "me": "メ", "mo": "モ", "ra": "ラ", "ri": "リ", "ru": "ル",
  "re": "レ", "ro": "ロ", "ba": "バ", "bi": "ビ", "bu": "ブ",
  "be": "ベ", "bo": "ボ", "pa": "パ", "pi": "ピ", "pu": "プ",
  "pe": "ペ", "po": "ポ", "ka": "カ", "la": "ラ", "li": "リ",
  "lu": "ル", "le": "レ", "lo": "ロ", "a": "ア", "i": "イ",
  "u": "ウ", "e": "エ", "o": "オ", "n": "ン"
};
const romanSyllableKeys = Object.keys(romanSyllables)
  .sort((a, b) => b.length - a.length);

function toJapaneseMemberName(name) {
  const normalized = String(name).trim().toLowerCase().replace(/\s+/g, " ");
  const exact = japaneseNameOverrides[normalized];
  if (exact) return exact;

  return String(name).split(/(\s+|-)/).map(part => {
    if (/^\s+$/.test(part)) return "・";
    if (part === "-") return "";
    if (!/[a-z]/i.test(part)) return part;
    let source = part.toLowerCase();
    let result = "";
    while (source) {
      const match = romanSyllableKeys.find(syllable => source.startsWith(syllable));
      if (match) {
        result += romanSyllables[match];
        source = source.slice(match.length);
      } else {
        result += source[0];
        source = source.slice(1);
      }
    }
    return result;
  }).join("").replace(/[a-z]/gi, "");
}

const koreanNameOverrides = {
  taeyeon: "태연", hyoyeon: "효연", yuri: "유리", yoona: "윤아", seohyun: "서현",
  jessica: "제시카", sunny: "써니", tiffany: "티파니", sooyoung: "수영",
  jisoo: "지수", jennie: "제니", "rosé": "로제", rose: "로제", lisa: "리사",
  nayeon: "나연", jeongyeon: "정연", momo: "모모", sana: "사나", jihyo: "지효",
  mina: "미나", dahyun: "다현", chaeyoung: "채영", tzuyu: "쯔위",
  irene: "아이린", seulgi: "슬기", wendy: "웬디", joy: "조이", yeri: "예리",
  somi: "소미", sejeong: "세정", chungha: "청하", yoojung: "유정", doyeon: "도연",
  yeonjung: "연정", sohye: "소혜", nayoung: "나영", kyulkyung: "주결경",
  yeji: "예지", lia: "리아", ryujin: "류진", chaeryeong: "채령", yuna: "유나",
  karina: "카리나", giselle: "지젤", winter: "윈터", ningning: "닝닝",
  yujin: "유진", gaeul: "가을", rei: "레이", wonyoung: "원영", liz: "리즈", leeseo: "이서",
  sakura: "사쿠라", chaewon: "채원", yunjin: "윤진", kazuha: "카즈하", eunchae: "은채",
  yunah: "윤아", minju: "민주", moka: "모카", wonhee: "원희", iroha: "이로하",
  julie: "줄리", natty: "나띠", belle: "벨", haneul: "하늘", ahyeon: "아현",
  ruka: "루카", pharita: "파리타", asa: "아사", rami: "라미", rora: "로라",
  chiquita: "치키타", mako: "마코", rio: "리오", maya: "마야", riku: "리쿠",
  ayaka: "아야카", mayuka: "마유카", rima: "리마", miihi: "미이히", nina: "니나",
  hikaru: "히카루", haewon: "해원", hayoung: "하영",
  eunji: "은지", "chanelle moon": "샤넬 문", "moon sua": "문수아",
  "kim lip": "김립", "go won": "고원", "a-na": "에이나", juun: "주은",
  "ye-eun": "예은", "yi hani": "이하니", "lee sem": "이샘", lily: "리리",
  shuhua: "슈화", hyuna: "현아", seunghee: "승희", gyuri: "규리",
  chorong: "초롱", namjoo: "남주", nicole: "니콜", moonbyul: "문별",
  wheein: "휘인", hwasa: "화사", hyojung: "효정", j: "재이", elly: "엘리",
  "hu'e": "휴이", vin: "빈", keena: "키나", soram: "소람", sunmi: "선미",
  jooyeon: "주연", uee: "유이", lizzy: "리지", soyee: "소이", eunice: "유니스",
  alice: "앨리스", danielle: "다니엘", euaerin: "이유애린", meu: "미유",
  sally: "샐리", "e.ji": "이지", ej: "이제이", xiaoting: "샤오팅",
  bahiyyih: "바히에", minnie: "민니", tsuki: "츠키", cocona: "코코나",
  harvey: "하비", "e:u": "이유", raina: "레이나", lynn: "린",
  cl: "씨엘", vv: "브이브이"
};

// 自動変換では正しくならない名前のハングル表記
Object.assign(koreanNameOverrides, {
  "solar": "솔라", "sinb": "신비", "umji": "엄지", "exy": "엑시", "dayoung": "다영", "monday": "먼데이", "jaehee": "재희", "yuqi": "우기",
  "sheon": "션", "sullyoon": "설윤", "bae": "배이", "kyujin": "규진", "dayeon": "다연", "heejin": "희진", "jinsoul": "진솔", "choerry": "최리",
  "kaede": "카에데", "xinyu": "신위", "mayu": "마유", "hayeon": "하연", "sophia": "소피아", "gehlee": "겔리", "elisia": "엘리시아", "liv": "리브",
  "may": "메이", "kanny": "카니", "stella": "스텔라", "ye-on": "예온", "sui": "수이", "katelyn": "케이틀린", "sasha": "사샤", "seohee": "서희",
  "elena": "엘레나", "heekie": "히키", "evon": "이본", "ayne": "에인", "liuyin": "리우인", "sunye": "선예", "sohee": "소희", "hyolyn": "효린",
  "soyou": "소유", "qri": "큐리", "victoria": "빅토리아", "amber": "엠버", "krystal": "크리스탈", "gayoon": "가윤", "narsha": "나르샤", "le": "엘리",
  "sorn": "손", "elkie": "엘키", "yves": "이브", "chuu": "츄", "lucy": "루시", "athena": "아테나", "hanni": "하니", "jisun": "지선",
  "yihyun": "이현", "kylie": "카일리", "soee": "소이", "chloe young": "클로이영", "kahi": "가희", "kaeun": "가은", "e-young": "이영", "keumjo": "금조",
  "somyi": "소미", "rachel": "레이첼", "baby soul": "베이비소울", "yeonwoo": "연우", "jane": "제인", "nayun": "나윤", "daisy": "데이지", "jooe": "주이",
  "nancy": "낸시", "youkyung": "유경", "lime": "라임", "geumhee": "금희", "nayu": "나유", "seonyou": "선유", "jackie": "재키", "joonie": "주니",
  "dosie": "도시", "youi": "유이", "sriya": "스리야", "nvee": "엔비", "lexi": "렉시", "camila": "카밀라", "ayane": "아야네", "tsuzumi": "츠즈미",
  "merci": "메르시", "ayune": "아윤", "jenny": "제니", "carmen": "카르멘", "megan": "메건", "daniela": "다니엘라", "minah": "민아", "shuie": "슈이",
  "suzu": "스즈", "manon": "마농", "ahin": "아인", "swan": "스완", "seola": "설아", "woni": "원이", "rahee": "라희", "dohee": "도희",
  "aisha": "아이샤", "do-a": "도아", "sunhye": "선혜", "sunhwa": "선화", "yiren": "이런", "jaehee": "재희", "sullin": "설린", "leesol": "이솔",
  "aurora": "오로라", "sulli": "설리", "julia": "줄리아", "songsun": "송선", "savanna": "사바나", "seungjoo": "승주"
});

// ローマ字の芸名からハングルを組み立てる（初声＋中声＋終声）。
// 外国人メンバーや読みが特殊な名前は koreanNameOverrides で正しい表記を指定する。
const HANGUL_INITIALS = [
  ["kk", 1], ["gg", 1], ["tt", 4], ["pp", 8], ["ss", 10], ["jj", 13], ["ch", 14], ["sh", 9],
  ["g", 0], ["k", 15], ["n", 2], ["d", 3], ["t", 16], ["r", 5], ["l", 5], ["m", 6], ["b", 7],
  ["p", 17], ["f", 17], ["v", 7], ["s", 9], ["x", 9], ["z", 12], ["j", 12], ["c", 15], ["q", 15], ["h", 18]
];
const HANGUL_VOWELS = [
  ["yeo", 6], ["yae", 3], ["wae", 10], ["eui", 19], ["yoo", 17], ["woo", 13], ["wee", 16],
  ["ae", 1], ["ya", 2], ["eo", 4], ["ye", 7], ["wa", 9], ["oe", 11], ["yo", 12], ["wo", 14], ["we", 15],
  ["wi", 16], ["yu", 17], ["eu", 18], ["ui", 19], ["oo", 13], ["ee", 20], ["ou", 13], ["ay", 1], ["ey", 5],
  ["a", 0], ["e", 5], ["o", 8], ["u", 13], ["i", 20], ["y", 20]
];
const HANGUL_FINALS = [["ng", 21], ["k", 1], ["g", 1], ["n", 4], ["l", 8], ["r", 8], ["m", 16], ["p", 17], ["b", 17], ["t", 19], ["s", 19]];
// 韓国語ローマ字表記のゆれをそろえる（young→yeong, hyun→hyeon, kyung→gyeong など）
function normalizeRomanization(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "")
    .replace(/(?:k|g)y(?:u|ou|eo)ng/g, "gyeong")
    .replace(/young|yung/g, "yeong")
    .replace(/hyun/g, "hyeon")
    .replace(/sung/g, "seong")
    .replace(/jung/g, "jeong")
    .replace(/([aeiou])(?=eu)/g, "$1|")
    .replace(/oeu/g, "o|eu");
}
const startsWithVowel = text => HANGUL_VOWELS.some(([v]) => text.startsWith(v)) && !/^y[^aeiou]/.test(text);

function romanToHangul(word) {
  return normalizeRomanization(word).split("|").map(romanPartToHangul).join("");
}

function romanPartToHangul(part) {
  let source = part;
  let out = "";
  while (source) {
    let initial = 11;
    for (const [r, index] of HANGUL_INITIALS) {
      if (source.startsWith(r) && startsWithVowel(source.slice(r.length))) { initial = index; source = source.slice(r.length); break; }
    }
    // シ・ショなど：sh + i/y 系
    const vowel = HANGUL_VOWELS.find(([v]) => source.startsWith(v));
    if (!vowel) { source = source.slice(1); continue; }
    source = source.slice(vowel[0].length);
    let final = 0;
    for (const [r, index] of HANGUL_FINALS) {
      if (!source.startsWith(r)) continue;
      const rest = source.slice(r.length);
      if (/^h/.test(rest) && /[sctkp]$/.test(r)) continue; // sh, ch, th などは次の音の頭
      if (r === "ng" || !rest || !startsWithVowel(rest)) { final = index; source = rest; break; }
    }
    out += String.fromCharCode(0xac00 + (initial * 21 + vowel[1]) * 28 + final);
  }
  return out;
}

function toKoreanMemberName(name) {
  const normalized = String(name).trim().toLowerCase().replace(/\s+/g, " ");
  if (koreanNameOverrides[normalized]) return koreanNameOverrides[normalized];
  return String(name).split(/[\s-]+/).map(romanToHangul).join(" ").trim();
}

function normalizeSearchText(value) {
  return String(value)
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[\s·._-]/g, "")
    .replace(/[\u30a1-\u30f6\u30fd\u30fe]/g, character =>
      String.fromCharCode(character.charCodeAt(0) - 0x60)
    );
}

/**
 * 表記ゆれをならした検索用の文字（伸ばし棒・小さい文字・「ッ」・ヴ を区別しない）
 * 例：ベービーモンスター／ベイビーモンスター／ベビーモンスター → 同じ文字になる
 */
function looseSearchText(value) {
  return normalizeSearchText(value)
    .replace(/[ー〜~'’:!*()・]/g, "")
    .replace(/ゔぁ/g, "ば").replace(/ゔぃ/g, "び").replace(/ゔぇ/g, "べ").replace(/ゔぉ/g, "ぼ").replace(/ゔ/g, "ぶ")
    .replace(/[ぁぃぅぇぉゃゅょゎ]/g, c => ({ ぁ: "あ", ぃ: "い", ぅ: "う", ぇ: "え", ぉ: "お", ゃ: "や", ゅ: "ゆ", ょ: "よ", ゎ: "わ" })[c])
    .replace(/っ/g, "")
    .replace(/([えけげせぜてでねへべぺめれ])い/g, "$1"); // ベイビー／ベビー、エイ／エー をならす
}

const agencyByGroup = {
  "Girls' Generation": "SM Entertainment",
  BLACKPINK: "YG Entertainment",
  TWICE: "JYP Entertainment",
  "Red Velvet": "SM Entertainment",
  "I.O.I": "CJ ENM（プロジェクト）",
  ITZY: "JYP Entertainment",
  aespa: "SM Entertainment",
  IVE: "STARSHIP Entertainment",
  "LE SSERAFIM": "SOURCE MUSIC",
  "IZ*ONE": "OFF THE RECORD（プロジェクト）",
  ILLIT: "BELIFT LAB",
  "KISS OF LIFE": "S2 Entertainment",
  Apink: "Choi Creative Lab",
  KARA: "DSP Media",
  MAMAMOO: "RBW",
  GFRIEND: "SOURCE MUSIC",
  "OH MY GIRL": "WM Entertainment",
  WJSN: "STARSHIP Entertainment",
  Dreamcatcher: "Dreamcatcher Company",
  VIVIZ: "BPM Entertainment",
  Weeekly: "IST Entertainment",
  STAYC: "High Up Entertainment",
  "i-dle": "Cube Entertainment",
  Billlie: "Mystic Story",
  "H1-KEY": "GLG",
  NMIXX: "JYP Entertainment",
  Kep1er: "WAKEONE",
  NiziU: "JYP Entertainment",
  XG: "XGALX",
  QWER: "Tamago Production",
  ARTMS: "Modhaus",
  tripleS: "Modhaus",
  "YOUNG POSSE": "BEATS Entertainment",
  KATSEYE: "HYBE x Geffen Records",
  BABYMONSTER: "YG Entertainment",
  UNIS: "F&F Entertainment",
  RESCENE: "The Muze Entertainment",
  MEOVV: "The Black Label",
  izna: "WAKEONE",
  "SAY MY NAME": "iNKODE",
  Hearts2Hearts: "SM Entertainment",
  KiiiKiii: "STARSHIP Entertainment",
  AtHeart: "Titan Content",
  ifeye: "Hi-Hat Entertainment",
  TUIDE: "ABD（HYBE傘下）",
  UNCHILD: "High Up Entertainment",
  "2NE1": "YG Entertainment",
  "Wonder Girls": "JYP Entertainment",
  SISTAR: "STARSHIP Entertainment",
  "T-ARA": "MBK Entertainment",
  "f(x)": "SM Entertainment",
  "4Minute": "Cube Entertainment",
  "Girl's Day": "Dream T Entertainment",
  "Brown Eyed Girls": "Mystic Story",
  "Miss A": "JYP Entertainment",
  EXID: "Banana Culture",
  CLC: "Cube Entertainment",
  LOONA: "BlockBerry Creative（旧所属）",
  "Weki Meki": "Fantagio",
  "FIFTY FIFTY": "ATTRAKT",
  NewJeans: "ADOR",
  fromis_9: "ASND",
  "Baby DONT Cry": "P NATION",
  KIIRAS: "LeanBranding",
  USPEER: "TWM Entertainment",
  "Candy Shop": "Brave Entertainment",
  BADVILLAIN: "BPM Entertainment",
  "After School": "PLEDIS Entertainment",
  SECRET: "TS Entertainment",
  "9MUSES": "Star Empire",
  gugudan: "Jellyfish Entertainment",
  DIA: "PocketDol Studio",
  APRIL: "DSP Media",
  Lovelyz: "Woollim Entertainment",
  MOMOLAND: "MLD Entertainment",
  AOA: "FNC Entertainment",
  HELLOVENUS: "Fantagio",
  "ALICE (ELRIS)": "IOK Company",
  LIGHTSUM: "Cube Entertainment",
  "woo!ah!": "NV Entertainment",
  EVERGLOW: "Yuehua Entertainment",
  CSR: "A2Z Entertainment",
  "ILY:1": "FC ENM",
  "CLASS:y": "M25",
  "ICHILLIN'": "KM Entertainment",
  "PURPLE KISS": "RBW",
  DreamNote: "iMe Korea",
  "BLACK SWAN": "DR Music",
  "TRI.BE": "TR Entertainment",
  "GIRLSET (VCHA)": "JYP Entertainment",
  "ME:I": "LAPONE GIRLS",
  "IS:SUE": "LAPONE GIRLS",
  HITGS: "H MUSIC Entertainment",
  "A2O LITE": "A2O Entertainment"
};

const sharedPersonMemberships = [
  ["宮脇咲良", [["IZ*ONE", "Sakura"], ["LE SSERAFIM", "Sakura"]]],
  ["チャン・ウォニョン", [["IZ*ONE", "Wonyoung"], ["IVE", "Wonyoung"]]],
  ["アン・ユジン", [["IZ*ONE", "Yujin"], ["IVE", "Yujin"]]],
  ["キム・チェウォン", [["IZ*ONE", "Chaewon"], ["LE SSERAFIM", "Chaewon"]]],
  ["チェ・ユジン", [["CLC", "Yujin"], ["Kep1er", "Yujin"]]],
  ["チョン・チェヨン", [["I.O.I", "Chaeyeon"], ["DIA", "Chaeyeon"]]],
  ["カン・ミナ", [["I.O.I", "Mina"], ["gugudan", "Mina"]]],
  ["キム・セジョン", [["I.O.I", "Sejeong"], ["gugudan", "Sejeong"]]],
  ["チェ・ユジョン", [["I.O.I", "Yoojung"], ["Weki Meki", "Yoojung"]]],
  ["キム・ドヨン", [["I.O.I", "Doyeon"], ["Weki Meki", "Doyeon"]]],
  ["ユ・ヨンジョン", [["I.O.I", "Yeonjung"], ["WJSN", "Yeonjung"]]],
  ["チョン・ウンビ", [["GFRIEND", "Eunha"], ["VIVIZ", "Eunha"]]],
  ["ファン・ウンビ", [["GFRIEND", "SinB"], ["VIVIZ", "SinB"]]],
  ["キム・イェウォン", [["GFRIEND", "Umji"], ["VIVIZ", "Umji"]]],
  ["チョン・ヒジン", [["LOONA", "Heejin"], ["ARTMS", "Heejin"]]],
  ["チョ・ハスル", [["LOONA", "Haseul"], ["ARTMS", "Haseul"]]],
  ["キム・ジョンウン", [["LOONA", "Kim Lip"], ["ARTMS", "Kim Lip"]]],
  ["チョン・ジウ", [["LOONA", "Jinsoul"], ["ARTMS", "Jinsoul"]]],
  ["チェ・イェリム", [["LOONA", "Choerry"], ["ARTMS", "Choerry"]]]
];
const sharedPersonKeyByMembership = new Map();
sharedPersonMemberships.forEach(([personKey, memberships]) => {
  memberships.forEach(([group, name]) => {
    sharedPersonKeyByMembership.set(`${group}|${normalizeSearchText(name)}`, personKey);
  });
});
function personKeyFor(group, name) {
  return sharedPersonKeyByMembership.get(`${group}|${normalizeSearchText(name)}`) ||
    `${group}|${normalizeSearchText(name)}`;
}

let nextId = 1;
const idols = groups.flatMap(group =>
  group.members.map(member => ({
    id: String(nextId++),
    name: member[0],
    japaneseName: toJapaneseMemberName(member[0]),
    japaneseSearchName: member[0].toLowerCase() === "sakura" ? "宮脇咲良" : "",
    personKey: personKeyFor(group.name, member[0]),
    koreanName: toKoreanMemberName(member[0]),
    nationality: member[1],
    group: group.name,
    agency: agencyByGroup[group.name] || "未確認",
    generation: group.generation,
    activity: group.activity
  }))
);

const agencyShortLabels = {
  "SM Entertainment": "SM",
  "JYP Entertainment": "JYP",
  "YG Entertainment": "YG",
  "STARSHIP Entertainment": "STARSHIP",
  "HYBE": "HYBE",
  "CJ ENM": "CJ ENM",
  "RBW": "RBW",
  "SOURCE MUSIC": "SOURCE",
  "OFF THE RECORD（プロジェクト）": "OTR",
  "CJ ENM（プロジェクト）": "CJ ENM",
  "BELIFT LAB": "BELIFT",
  "Choi Creative Lab": "CCL",
  "Dreamcatcher Company": "DC Co.",
  "High Up Entertainment": "High Up",
  "The Muze Entertainment": "The Muze",
  "The Black Label": "TBL",
  "HYBE x Geffen Records": "HYBE × Geffen",
  "BlockBerry Creative（旧所属）": "BlockBerry",
  "Dream T Entertainment": "Dream T"
};

// Keep the original agency for draft logic. Explicitly mapped parent labels
// group affiliates in the filter; ADOR remains a distinct label.
const agencyParentDisplayNames = {
  "BELIFT LAB": "HYBE",
  "SOURCE MUSIC": "HYBE",
  "PLEDIS Entertainment": "HYBE",
  "ABD（HYBE傘下）": "HYBE",
  WAKEONE: "CJ ENM",
  "CJ ENM（プロジェクト）": "CJ ENM",
  "OFF THE RECORD（プロジェクト）": "CJ ENM",
  "LAPONE GIRLS": "CJ ENM",
  "WM Entertainment": "RBW",
  "DSP Media": "RBW",
  "Mystic Story": "SM Entertainment",
  "The Black Label": "YG Entertainment"
};

function agencyFilterName(agency) {
  const value = String(agency || "").trim();
  return agencyParentDisplayNames[value] || value;
}

// グループ名のカタカナ・ハングル表記（検索用）
const groupAliases = {
  "Girls' Generation": "少女時代 しょうじょじだい 소녀시대 SNSD",
  "BLACKPINK": "ブラックピンク ブルピン 블랙핑크 블핑",
  "TWICE": "トゥワイス 트와이스",
  "Red Velvet": "レッドベルベット レドベル 레드벨벳",
  "I.O.I": "アイオーアイ 아이오아이",
  "ITZY": "イッジ 있지",
  "aespa": "エスパ 에스파",
  "IVE": "アイヴ アイブ 아이브",
  "LE SSERAFIM": "ルセラフィム ルセラ 르세라핌",
  "IZ*ONE": "アイズワン 아이즈원 IZONE",
  "ILLIT": "アイリット 아일릿",
  "KISS OF LIFE": "キスオブライフ キスオブ 키스오브라이프 키오프",
  "Apink": "エーピンク 에이핑크",
  "KARA": "カラ 카라",
  "MAMAMOO": "ママム 마마무",
  "GFRIEND": "ヨジャチング ジーフレンド 여자친구 여친",
  "OH MY GIRL": "オーマイガール オマゴル 오마이걸",
  "WJSN": "宇宙少女 ウジュソニョ 우주소녀 Cosmic Girls",
  "Dreamcatcher": "ドリームキャッチャー ドリキャ 드림캐쳐",
  "VIVIZ": "ビビジ 비비지",
  "Weeekly": "ウィークリー 위클리",
  "STAYC": "ステイシー 스테이씨",
  "i-dle": "アイドゥル ジーアイドゥル 아이들 여자아이들 (G)I-DLE GIDLE",
  "Billlie": "ビリー 빌리",
  "H1-KEY": "ハイキー 하이키",
  "NMIXX": "エンミックス 엔믹스",
  "Kep1er": "ケプラー 케플러",
  "NiziU": "ニジュー 니쥬",
  "XG": "エックスジー 엑스지",
  "QWER": "キューダブリューイーアール 큐더블유이알",
  "ARTMS": "アルテミス 아르테미스",
  "tripleS": "トリプルエス 트리플에스",
  "YOUNG POSSE": "ヤングポッセ 영파씨",
  "KATSEYE": "キャッツアイ 캣츠아이",
  "BABYMONSTER": "ベビーモンスター ベビモン 베이비몬스터 베몬",
  "UNIS": "ユニス 유니스",
  "RESCENE": "リセンヌ 리센느",
  "MEOVV": "ミヤオ 미야오",
  "izna": "イズナ 이즈나",
  "SAY MY NAME": "セイマイネーム 세이마이네임",
  "Hearts2Hearts": "ハーツトゥハーツ 하츠투하츠",
  "KiiiKiii": "キキ 키키",
  "AtHeart": "アットハート 앳하트",
  "ifeye": "イフアイ 이프아이",
  "TUIDE": "トゥイード 튜이드",
  "UNCHILD": "アンチャイルド 언차일드",
  "Heart of Woman": "ハートオブウーマン 하트오브우먼",
  "2NE1": "トゥエニーワン 투애니원",
  "Wonder Girls": "ワンダーガールズ 원더걸스",
  "SISTAR": "シスター 씨스타",
  "T-ARA": "ティアラ 티아라",
  "f(x)": "エフエックス 에프엑스",
  "4Minute": "フォーミニッツ 포미닛",
  "Girl's Day": "ガールズデイ 걸스데이",
  "Brown Eyed Girls": "ブラウンアイドガールズ 브라운아이드걸스",
  "Miss A": "ミスエー 미쓰에이",
  "EXID": "イーエックスアイディー 이엑스아이디",
  "CLC": "シーエルシー 씨엘씨",
  "LOONA": "今月の少女 イダレソニョ ルーナ 이달의소녀",
  "Weki Meki": "ウィキミキ 위키미키",
  "FIFTY FIFTY": "フィフティフィフティ 피프티피프티",
  "NewJeans": "ニュージーンズ 뉴진스",
  "fromis_9": "プロミスナイン 프로미스나인",
  "Baby DONT Cry": "ベイビードントクライ 베이비돈크라이",
  "KIIRAS": "キラス 키라스",
  "USPEER": "ユースピア 유스피어",
  "Candy Shop": "キャンディショップ 캔디샵",
  "BADVILLAIN": "バッドヴィラン 배드빌런",
  "After School": "アフタースクール 애프터스쿨",
  "SECRET": "シークレット 시크릿",
  "9MUSES": "ナインミュージス 나인뮤지스",
  "gugudan": "ググダン 구구단",
  "DIA": "ダイア 다이아",
  "APRIL": "エイプリル 에이프릴",
  "Lovelyz": "ラブリーズ 러블리즈",
  "MOMOLAND": "モモランド 모모랜드",
  "AOA": "エーオーエー 에이오에이",
  "HELLOVENUS": "ハローヴィーナス 헬로비너스",
  "ALICE (ELRIS)": "アリス エルリス 앨리스 엘리스",
  "LIGHTSUM": "ライトサム 라잇썸",
  "woo!ah!": "ウアー 우아",
  "EVERGLOW": "エバーグロウ 에버글로우",
  "CSR": "シーエスアール 첫사랑",
  "ILY:1": "アイリーワン 아일리원",
  "CLASS:y": "クラッシー 클라씨",
  "ICHILLIN'": "アイチリン 아이칠린",
  "PURPLE KISS": "パープルキス 퍼플키스",
  "DreamNote": "ドリームノート 드림노트",
  "BLACK SWAN": "ブラックスワン 블랙스완",
  "TRI.BE": "トライビー 트라이비",
  "GIRLSET (VCHA)": "ガールセット ビチャ 걸셋 비춰",
  "ME:I": "ミーアイ 미아이",
  "IS:SUE": "イッシュ 이슈",
  "HITGS": "ヒッツ 히츠",
  "A2O LITE": "エーツーオーライト 에이투오라이트"
};

// 世間でよく使われる呼び方を足す（略称・表記ゆれ・漢字の読み）
const extraGroupAliases = {
  "Girls' Generation": "ソシ 소시 SNSD",
  "BLACKPINK": "ブラピン 블핑",
  "TWICE": "トワイス トゥワイス",
  "Red Velvet": "レドベ レッベル レッドベルベット",
  "I.O.I": "アイオーアイ IOI",
  "ITZY": "イッチ イッジ",
  "aespa": "エスパ エスパー",
  "IVE": "アイヴ アイブ",
  "LE SSERAFIM": "ルセラフィム ルセラ 르세라 LESSERAFIM",
  "IZ*ONE": "アイズワン アイズ",
  "ILLIT": "アイリット イリット 아일릿",
  "KISS OF LIFE": "キスオブライフ キオプ KIOF",
  "Apink": "エーピンク エイピンク",
  "MAMAMOO": "ママム ママムー",
  "GFRIEND": "ヨチン ジーフレンド ヨジャチング",
  "OH MY GIRL": "オーマイガール オマイガール オマゴル OMG",
  "WJSN": "宇宙少女 うちゅうしょうじょ ウジュソニョ ウチュソニョ",
  "Dreamcatcher": "ドリームキャッチャー ドリキャ",
  "VIVIZ": "ビビジ ヴィヴィズ",
  "STAYC": "ステイシー ステシ",
  "i-dle": "アイドゥル ジーアイドゥル ヨジャアイドゥル アイドル 여자아이들 GIDLE",
  "NMIXX": "エンミックス エンミク",
  "Kep1er": "ケプラー ケプ",
  "NiziU": "ニジュー ニジユー",
  "XG": "エックスジー",
  "QWER": "キューダブリューイーアール クワー",
  "ARTMS": "アルテミス",
  "tripleS": "トリプルエス トリエス",
  "YOUNG POSSE": "ヤングポッセ ヨンパシ",
  "KATSEYE": "キャッツアイ キャツアイ",
  "BABYMONSTER": "ベビーモンスター ベイビーモンスター ベービーモンスター ベビモン ベモン",
  "UNIS": "ユニス",
  "RESCENE": "リセンヌ リセン",
  "MEOVV": "ミヤオ ミャオ",
  "izna": "イズナ",
  "SAY MY NAME": "セイマイネーム セマネ",
  "Hearts2Hearts": "ハーツトゥハーツ ハツハツ ハーツツーハーツ",
  "KiiiKiii": "キキ キーキー",
  "2NE1": "トゥエニーワン トゥエニワン",
  "Wonder Girls": "ワンダーガールズ ワンガ",
  "SISTAR": "シスター",
  "T-ARA": "ティアラ ティーアラ",
  "f(x)": "エフエックス",
  "4Minute": "フォーミニッツ フォーミニット ポミニッ",
  "Girl's Day": "ガールズデイ ガールズデー",
  "Brown Eyed Girls": "ブラウンアイドガールズ ブアゴ",
  "Miss A": "ミスエー ミスA",
  "LOONA": "今月の少女 こんげつのしょうじょ イダレソニョ ルーナ ルナ",
  "Weki Meki": "ウィキミキ",
  "FIFTY FIFTY": "フィフティフィフティ フィフティ",
  "NewJeans": "ニュージーンズ ニュジ ニュジンス 뉴진스",
  "fromis_9": "プロミスナイン プロミス",
  "Baby DONT Cry": "ベイビードントクライ ベビドン",
  "After School": "アフタースクール アフスク",
  "Lovelyz": "ラブリーズ ラブリズ",
  "MOMOLAND": "モモランド",
  "EVERGLOW": "エバーグロウ エバグロ エバーグロー",
  "Weeekly": "ウィークリー",
  "Billlie": "ビリー",
  "H1-KEY": "ハイキー",
  "PURPLE KISS": "パープルキス パプキス",
  "CLASS:y": "クラッシー クラシー"
};
Object.entries(extraGroupAliases).forEach(([group, text]) => {
  const merged = new Set(`${groupAliases[group] || ""} ${text}`.split(" ").filter(Boolean));
  groupAliases[group] = [...merged].join(" ");
});

// 検索用の文字列（ひらがな・カタカナ・英字・ハングルを正規化済み）
// name … メンバー名（部分一致）／ other … グループ・事務所・国籍（グループの別表記は前方一致）
const PREFIX_ONLY = "\u0001";
const candidateSearchTextById = new Map(idols.map(idol => [idol.id, {
  name: [idol.name, idol.japaneseName, idol.japaneseSearchName, idol.koreanName]
    .filter(Boolean).map(normalizeSearchText),
  other: [
    ...[idol.group, idol.nationality, idol.agency, agencyFilterName(idol.agency)].map(normalizeSearchText),
    ...String(groupAliases[idol.group] || "").split(" ").filter(Boolean).map(alias => PREFIX_ONLY + normalizeSearchText(alias))
  ],
  // 表記ゆれ用（メンバー名・グループの別表記）
  looseName: [idol.japaneseName, idol.japaneseSearchName].filter(Boolean).map(looseSearchText),
  looseGroup: [idol.group, ...String(groupAliases[idol.group] || "").split(" ").filter(Boolean)].map(looseSearchText)
}]));

/** 検索の当てはまり具合：0 名前の先頭一致／1 名前の部分一致／2 グループなど／-1 当てはまらない */
function searchRank(idolId, query) {
  if (!query) return 0;
  const text = candidateSearchTextById.get(idolId);
  if (text.name.some(v => v.startsWith(query))) return 0;
  if (text.name.some(v => v.includes(query))) return 1;
  if (text.other.some(v => v.startsWith(PREFIX_ONLY) ? v.slice(1).startsWith(query) : v.includes(query))) return 2;
  // 表記ゆれ（ベービーモンスター・アイリト など）。短すぎる入力は誤ヒットが多いので2文字から
  const loose = looseSearchText(query);
  if (loose.length >= 2) {
    if (text.looseName.some(v => v.startsWith(loose))) return 1;
    if (text.looseGroup.some(v => v.startsWith(loose))) return 2;
  }
  return -1;
}

function fullAgencyName(group, agency = "") {
  const value = String(agency || "").trim();
  const fullName = value && value !== "未確認" ? value : (agencyByGroup[group] || value);
  return agencyFilterName(fullName);
}

function shortAgencyName(agency) {
  const value = String(agency || "").trim();
  if (!value || value === "未確認") return "";
  if (agencyShortLabels[value]) return agencyShortLabels[value];
  return value
    .replace(/\s+Entertainment$/i, "")
    .replace(/\s+Company$/i, " Co.")
    .replace(/\s+Records$/i, " Rec.")
    .replace(/（プロジェクト）|（旧所属）/g, "")
    .trim();
}

function memberAffiliationLabel(member) {
  const agency = shortAgencyName(fullAgencyName(member?.group, member?.agency));
  return [agency, String(member?.group || "").trim()].filter(Boolean).join(" · ");
}

function memberAffiliationTitle(member) {
  const agency = fullAgencyName(member?.group, member?.agency);
  return [agency, member?.group].filter(Boolean).join(" / ");
}
function memberAffiliationMarkup(member) {
  const agency = shortAgencyName(fullAgencyName(member?.group, member?.agency));
  const group = String(member?.group || "").trim();
  return '<span class="affiliation-lines">' +
    (agency ? '<span class="affiliation-agency">' + escapeHTML(agency) + '</span>' : '') +
    (group ? '<span class="affiliation-group">' + escapeHTML(group) + '</span>' : '') +
    '</span>';
}
const popularityRankingSources = [
  {
    id: "brandReputation",
    weight: 55,
    topN: 30,
    snapshots: [
      {
        period: "2026-09",
        weight: 0.21,
        ranks: [
          ["RESCENE", "Woni", 1], ["IVE", "Wonyoung", 2], ["aespa", "Karina", 3],
          ["RESCENE", "Zena", 4], ["BLACKPINK", "Jennie", 5], ["BLACKPINK", "Rosé", 6],
          ["RESCENE", "Minami", 7], ["RESCENE", "May", 8], ["IVE", "Yujin", 9],
          ["BLACKPINK", "Jisoo", 10], ["RESCENE", "Liv", 11], ["BLACKPINK", "Lisa", 12],
          ["i-dle", "Soyeon", 13], ["Girls' Generation", "Taeyeon", 14],
          ["Girls' Generation", "Yoona", 15], ["TWICE", "Sana", 16],
          ["MAMAMOO", "Moonbyul", 17], ["aespa", "Winter", 18],
          ["Red Velvet", "Joy", 19], ["Girls' Generation", "Yuri", 20],
          ["Red Velvet", "Irene", 21], ["MEOVV", "Ella", 22],
          ["Girls' Generation", "Sooyoung", 23], ["TWICE", "Jihyo", 24],
          ["EXID", "Hyelin", 25], ["TWICE", "Jeongyeon", 26],
          ["Girls' Generation", "Hyoyeon", 27], ["Red Velvet", "Yeri", 28],
          ["TWICE", "Nayeon", 29], ["KiiiKiii", "Haum", 30]
        ]
      },
      {
        period: "2026-08",
        weight: 0.15,
        ranks: [
          ["RESCENE", "Woni", 1], ["IVE", "Wonyoung", 2], ["BLACKPINK", "Jennie", 3],
          ["aespa", "Karina", 4], ["RESCENE", "Zena", 5], ["RESCENE", "Minami", 6],
          ["IVE", "Yujin", 7], ["RESCENE", "Liv", 8], ["BLACKPINK", "Rosé", 9],
          ["RESCENE", "May", 10], ["ILLIT", "Wonhee", 11], ["aespa", "Winter", 12],
          ["BLACKPINK", "Lisa", 13], ["Red Velvet", "Joy", 14],
          ["Girls' Generation", "Taeyeon", 15], ["BLACKPINK", "Jisoo", 16],
          ["NMIXX", "Sullyoon", 17], ["Red Velvet", "Irene", 18],
          ["Red Velvet", "Seulgi", 19], ["ITZY", "Lia", 20],
          ["Red Velvet", "Wendy", 21], ["Girls' Generation", "Yoona", 22],
          ["TWICE", "Jeongyeon", 23], ["Red Velvet", "Yeri", 24],
          ["IVE", "Rei", 25], ["ITZY", "Ryujin", 26], ["IVE", "Liz", 27],
          ["LE SSERAFIM", "Chaewon", 28], ["ITZY", "Chaeryeong", 29],
          ["Girls' Generation", "Sooyoung", 30]
        ]
      },
      {
        period: "2026-07",
        weight: 0.12,
        ranks: [
          ["RESCENE", "Woni", 1], ["IVE", "Wonyoung", 2], ["aespa", "Karina", 3],
          ["BLACKPINK", "Jennie", 4], ["RESCENE", "Minami", 5], ["BLACKPINK", "Lisa", 6],
          ["IVE", "Yujin", 7], ["ILLIT", "Wonhee", 8], ["RESCENE", "Zena", 9],
          ["BLACKPINK", "Rosé", 10], ["RESCENE", "May", 11], ["aespa", "Winter", 12],
          ["RESCENE", "Liv", 13], ["Red Velvet", "Irene", 14], ["BLACKPINK", "Jisoo", 15],
          ["Girls' Generation", "Taeyeon", 16], ["TWICE", "Nayeon", 17],
          ["ITZY", "Ryujin", 18], ["Red Velvet", "Joy", 19],
          ["Girls' Generation", "Yoona", 20], ["TWICE", "Sana", 21],
          ["IVE", "Rei", 22], ["LE SSERAFIM", "Chaewon", 23], ["NMIXX", "Sullyoon", 24],
          ["aespa", "Ningning", 25], ["Red Velvet", "Seulgi", 26],
          ["DIA", "Chaeyeon", 27], ["TWICE", "Jihyo", 28],
          ["TWICE", "Jeongyeon", 29], ["fromis_9", "Chaeyoung", 30]
        ]
      },
      {
        period: "2026-06",
        weight: 0.09,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["aespa", "Karina", 3],
          ["BLACKPINK", "Rosé", 4], ["RESCENE", "Woni", 5], ["ILLIT", "Wonhee", 6],
          ["BLACKPINK", "Lisa", 7], ["IVE", "Yujin", 8], ["aespa", "Winter", 9],
          ["LE SSERAFIM", "Chaewon", 10], ["BLACKPINK", "Jisoo", 11],
          ["NMIXX", "Sullyoon", 12], ["DIA", "Chaeyeon", 13], ["Red Velvet", "Joy", 14],
          ["aespa", "Ningning", 15], ["Girls' Generation", "Taeyeon", 16],
          ["TWICE", "Nayeon", 17], ["WJSN", "Yeonjung", 18], ["TWICE", "Jeongyeon", 19],
          ["cignature", "Jiwon", 20], ["IVE", "Rei", 21], ["ILLIT", "Moka", 22],
          ["RESCENE", "Minami", 23], ["LE SSERAFIM", "Kazuha", 24],
          ["Girls' Generation", "Yoona", 25], ["Weki Meki", "Yoojung", 26],
          ["fromis_9", "Chaeyoung", 27], ["Red Velvet", "Seulgi", 28],
          ["Red Velvet", "Irene", 29], ["aespa", "Giselle", 30]
        ]
      },
      {
        period: "2026-05",
        weight: 0.07,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["aespa", "Karina", 3],
          ["IVE", "Yujin", 4], ["BLACKPINK", "Lisa", 5], ["aespa", "Winter", 6],
          ["ILLIT", "Wonhee", 7], ["BLACKPINK", "Jisoo", 8], ["BLACKPINK", "Rosé", 9],
          ["MAMAMOO", "Hwasa", 10], ["aespa", "Ningning", 11], ["KISS OF LIFE", "Natty", 12],
          ["Red Velvet", "Joy", 13], ["TWICE", "Jeongyeon", 14], ["IVE", "Rei", 15],
          ["LE SSERAFIM", "Chaewon", 16], ["NMIXX", "Sullyoon", 17], ["IVE", "Liz", 18],
          ["Red Velvet", "Seulgi", 19], ["IVE", "Gaeul", 20], ["Red Velvet", "Irene", 21],
          ["TWICE", "Jihyo", 22], ["aespa", "Giselle", 23], ["IVE", "Leeseo", 24],
          ["Girls' Generation", "Taeyeon", 25], ["Red Velvet", "Wendy", 26],
          ["TWICE", "Dahyun", 27], ["TWICE", "Mina", 28], ["ITZY", "Yuna", 29],
          ["ILLIT", "Moka", 30]
        ]
      },
      {
        period: "2026-04",
        weight: 0.06,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["aespa", "Karina", 3],
          ["BLACKPINK", "Rosé", 4], ["BLACKPINK", "Lisa", 5], ["BLACKPINK", "Jisoo", 6],
          ["IVE", "Yujin", 7], ["aespa", "Winter", 8], ["KISS OF LIFE", "Natty", 9],
          ["ILLIT", "Wonhee", 10], ["IVE", "Liz", 11], ["IVE", "Rei", 12],
          ["aespa", "Ningning", 13], ["TWICE", "Nayeon", 14], ["TWICE", "Sana", 15],
          ["Girls' Generation", "Yoona", 16], ["NMIXX", "Sullyoon", 17], ["ITZY", "Yuna", 18],
          ["LE SSERAFIM", "Chaewon", 19], ["Red Velvet", "Joy", 20], ["IVE", "Gaeul", 21],
          ["Red Velvet", "Seulgi", 22], ["Red Velvet", "Irene", 23], ["TWICE", "Jihyo", 24],
          ["TWICE", "Jeongyeon", 25], ["Girls' Generation", "Taeyeon", 26],
          ["Girls' Generation", "Sooyoung", 27], ["IVE", "Leeseo", 28],
          ["OH MY GIRL", "Mimi", 29], ["TWICE", "Dahyun", 30]
        ]
      },
      {
        period: "2026-03",
        weight: 0.055,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["BLACKPINK", "Rosé", 3],
          ["BLACKPINK", "Lisa", 4], ["IVE", "Yujin", 5], ["BLACKPINK", "Jisoo", 6],
          ["Girls' Generation", "Taeyeon", 7], ["aespa", "Karina", 8], ["aespa", "Winter", 9],
          ["Girls' Generation", "Sooyoung", 10], ["OH MY GIRL", "Mimi", 11],
          ["LE SSERAFIM", "Chaewon", 12], ["ILLIT", "Wonhee", 13],
          ["Girls' Generation", "Yoona", 14], ["IVE", "Liz", 15], ["MAMAMOO", "Hwasa", 16],
          ["cignature", "Jiwon", 17], ["IVE", "Rei", 18], ["aespa", "Ningning", 19],
          ["Red Velvet", "Joy", 20], ["TWICE", "Nayeon", 21], ["NMIXX", "Sullyoon", 22],
          ["TWICE", "Dahyun", 23], ["IVE", "Leeseo", 24], ["Red Velvet", "Seulgi", 25],
          ["IVE", "Gaeul", 26], ["TWICE", "Jihyo", 27], ["Red Velvet", "Irene", 28],
          ["Red Velvet", "Wendy", 29], ["TWICE", "Sana", 30]
        ]
      },
      {
        period: "2026-02",
        weight: 0.053,
        ranks: [
          ["BLACKPINK", "Jennie", 1], ["IVE", "Wonyoung", 2], ["BLACKPINK", "Lisa", 3],
          ["BLACKPINK", "Rosé", 4], ["IVE", "Yujin", 5], ["MAMAMOO", "Hwasa", 6],
          ["aespa", "Karina", 7], ["aespa", "Winter", 8], ["ILLIT", "Wonhee", 9],
          ["BLACKPINK", "Jisoo", 10], ["IVE", "Liz", 11], ["Girls' Generation", "Taeyeon", 12],
          ["LE SSERAFIM", "Chaewon", 13], ["NMIXX", "Sullyoon", 14], ["IVE", "Rei", 15],
          ["TWICE", "Nayeon", 16], ["Apink", "Naeun", 17], ["Red Velvet", "Seulgi", 18],
          ["Girls' Generation", "Yoona", 19], ["TWICE", "Jihyo", 20],
          ["Red Velvet", "Irene", 21], ["IVE", "Leeseo", 22], ["Red Velvet", "Joy", 23],
          ["IVE", "Gaeul", 24], ["Apink", "Eunji", 25], ["ITZY", "Ryujin", 26],
          ["Red Velvet", "Wendy", 27], ["KiiiKiii", "Haum", 28], ["TWICE", "Dahyun", 29],
          ["cignature", "Jiwon", 30]
        ]
      },
      {
        period: "2026-01",
        weight: 0.051,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["aespa", "Winter", 3],
          ["BLACKPINK", "Lisa", 4], ["aespa", "Karina", 5], ["BLACKPINK", "Rosé", 6],
          ["BLACKPINK", "Jisoo", 7], ["IVE", "Yujin", 8], ["ILLIT", "Wonhee", 9],
          ["Girls' Generation", "Taeyeon", 10], ["ILLIT", "Minju", 11],
          ["Red Velvet", "Joy", 12], ["NMIXX", "Sullyoon", 13], ["IVE", "Rei", 14],
          ["IVE", "Liz", 15], ["cignature", "Jiwon", 16], ["Girls' Generation", "Yoona", 17],
          ["TWICE", "Sana", 18], ["Red Velvet", "Seulgi", 19], ["LE SSERAFIM", "Kazuha", 20],
          ["IVE", "Leeseo", 21], ["TWICE", "Jihyo", 22], ["LE SSERAFIM", "Chaewon", 23],
          ["Red Velvet", "Irene", 24], ["IVE", "Gaeul", 25], ["aespa", "Ningning", 26],
          ["fromis_9", "Chaeyoung", 27], ["TWICE", "Momo", 28],
          ["Girls' Generation", "Sooyoung", 29], ["TWICE", "Dahyun", 30]
        ]
      },
      {
        period: "2025-12",
        weight: 0.049,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["BLACKPINK", "Rosé", 3],
          ["BLACKPINK", "Lisa", 4], ["IVE", "Yujin", 5], ["MAMAMOO", "Hwasa", 6],
          ["aespa", "Winter", 7], ["BLACKPINK", "Jisoo", 8], ["aespa", "Karina", 9],
          ["ILLIT", "Wonhee", 10], ["Red Velvet", "Joy", 11], ["NMIXX", "Sullyoon", 12],
          ["IVE", "Rei", 13], ["IVE", "Liz", 14], ["OH MY GIRL", "Mimi", 15],
          ["TWICE", "Jihyo", 16], ["Girls' Generation", "Yoona", 17],
          ["Red Velvet", "Seulgi", 18], ["aespa", "Ningning", 19],
          ["LE SSERAFIM", "Chaewon", 20], ["TWICE", "Nayeon", 21],
          ["Red Velvet", "Irene", 22], ["IVE", "Leeseo", 23], ["IVE", "Gaeul", 24],
          ["Red Velvet", "Wendy", 25], ["Girls' Generation", "Taeyeon", 26],
          ["LE SSERAFIM", "Yunjin", 27], ["aespa", "Giselle", 28],
          ["TWICE", "Mina", 29], ["TWICE", "Dahyun", 30]
        ]
      },
      {
        period: "2025-11",
        weight: 0.047,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Jennie", 2], ["BLACKPINK", "Rosé", 3],
          ["BLACKPINK", "Lisa", 4], ["IVE", "Yujin", 5], ["aespa", "Winter", 6],
          ["cignature", "Jiwon", 7], ["LE SSERAFIM", "Chaewon", 8], ["IVE", "Liz", 9],
          ["BLACKPINK", "Jisoo", 10], ["Red Velvet", "Joy", 11], ["NMIXX", "Sullyoon", 12],
          ["OH MY GIRL", "Mimi", 13], ["ILLIT", "Wonhee", 14], ["TWICE", "Nayeon", 15],
          ["TWICE", "Jihyo", 16], ["IVE", "Rei", 17], ["TWICE", "Momo", 18],
          ["aespa", "Giselle", 19], ["Red Velvet", "Seulgi", 20],
          ["Hearts2Hearts", "Ian", 21], ["Red Velvet", "Irene", 22],
          ["IVE", "Gaeul", 23], ["ITZY", "Yuna", 24], ["aespa", "Ningning", 25],
          ["TWICE", "Jeongyeon", 26], ["LE SSERAFIM", "Yunjin", 27], ["TWICE", "Mina", 28],
          ["Red Velvet", "Wendy", 29], ["IVE", "Leeseo", 30]
        ]
      },
      {
        period: "2025-10",
        weight: 0.045,
        ranks: [
          ["IVE", "Wonyoung", 1], ["BLACKPINK", "Rosé", 2], ["BLACKPINK", "Jennie", 3],
          ["BLACKPINK", "Lisa", 4], ["IVE", "Yujin", 5], ["aespa", "Winter", 6],
          ["IVE", "Liz", 7], ["Red Velvet", "Joy", 8], ["WJSN", "Dayoung", 9],
          ["BLACKPINK", "Jisoo", 10], ["Red Velvet", "Seulgi", 11], ["NMIXX", "Sullyoon", 12],
          ["IVE", "Rei", 13], ["TWICE", "Nayeon", 14], ["Girls' Generation", "Yoona", 15],
          ["WJSN", "Yeoreum", 16], ["TWICE", "Jihyo", 17],
          ["LE SSERAFIM", "Chaewon", 18], ["aespa", "Giselle", 19], ["IVE", "Gaeul", 20],
          ["Red Velvet", "Irene", 21], ["aespa", "Ningning", 22], ["Red Velvet", "Wendy", 23],
          ["IVE", "Leeseo", 24], ["TWICE", "Jeongyeon", 25], ["cignature", "Jiwon", 26],
          ["TWICE", "Mina", 27], ["OH MY GIRL", "YooA", 28], ["TWICE", "Dahyun", 29],
          ["OH MY GIRL", "Mimi", 30]
        ]
      }
    ]
  },
  {
    id: "gallupIdolHistory",
    weight: 5,
    topN: 10,
    snapshots: [
      { period: "2015", weight: 0.2, maxGeneration: 3, ranks: [
        ["Girls' Generation", "Taeyeon", 3], ["SISTAR", "Hyolyn", 5], ["Apink", "Eunji", 6],
        ["EXID", "Hani", 7], ["Girls' Generation", "Yoona", 8],
        ["Miss A", "Suzy", 10], ["AOA", "Seolhyun", 10]
      ] },
      { period: "2016", weight: 0.2, maxGeneration: 3, ranks: [
        ["Girls' Generation", "Taeyeon", 1], ["TWICE", "Tzuyu", 3], ["Apink", "Eunji", 6],
        ["SISTAR", "Hyolyn", 7], ["AOA", "Seolhyun", 10]
      ] },
      { period: "2017", weight: 0.2, maxGeneration: 3, ranks: [
        ["Red Velvet", "Irene", 4], ["TWICE", "Nayeon", 6], ["AOA", "Seolhyun", 9],
        ["Girls' Generation", "Taeyeon", 9], ["TWICE", "Tzuyu", 9]
      ] },
      { period: "2018", weight: 0.2, maxGeneration: 3, ranks: [
        ["BLACKPINK", "Jennie", 2], ["Red Velvet", "Irene", 4],
        ["TWICE", "Nayeon", 6], ["BLACKPINK", "Jisoo", 10]
      ] },
      { period: "2019", weight: 0.2, maxGeneration: 3, ranks: [
        ["TWICE", "Nayeon", 5], ["Red Velvet", "Irene", 6],
        ["Girls' Generation", "Taeyeon", 7], ["BLACKPINK", "Jennie", 8],
        ["MAMAMOO", "Hwasa", 9]
      ] }
    ]
  },
  {
    id: "gallup2025",
    weight: 10,
    topN: 30,
    snapshots: [{
      period: "2025-13-39",
      weight: 1,
      ranks: [["BLACKPINK", "Rosé", 8], ["BLACKPINK", "Jennie", 12], ["MAMAMOO", "Hwasa", 20]]
    }]
  },
  {
    id: "idolChartAnnual",
    weight: 20,
    topN: 20,
    snapshots: [
      {
        period: "2025-annual",
        weight: 0.65,
        ranks: [
          ["BLACKPINK", "Jennie", 3], ["BLACKPINK", "Rosé", 7]
        ]
      },
      {
        period: "2024-annual",
        weight: 0.35,
        ranks: [
          ["BLACKPINK", "Rosé", 11], ["Girls' Generation", "Taeyeon", 14],
          ["BLACKPINK", "Jennie", 17]
        ]
      }
    ]
  },
  {
    id: "choeaedol",
    weight: 4,
    topN: 20,
    snapshots: [
      {
        period: "2026-09",
        weight: 0.40,
        ranks: [
          ["NiziU", "Maya", 1], ["BABYMONSTER", "Ahyeon", 2], ["NiziU", "Mako", 3],
          ["IVE", "Leeseo", 4], ["CLASS:y", "Boeun", 5], ["aespa", "Winter", 6],
          ["NiziU", "Ayaka", 7], ["NiziU", "Rima", 8], ["NiziU", "Riku", 9],
          ["NiziU", "Miihi", 10], ["Kep1er", "Hikaru", 11], ["NiziU", "Mayuka", 12],
          ["NiziU", "Rio", 13], ["aespa", "Ningning", 14], ["aespa", "Karina", 15],
          ["NiziU", "Nina", 16], ["LE SSERAFIM", "Sakura", 17], ["IVE", "Yujin", 18],
          ["Hearts2Hearts", "Carmen", 19], ["NMIXX", "Haewon", 20],
          ["TWICE", "Tzuyu", 1], ["BLACKPINK", "Lisa", 2], ["TWICE", "Mina", 2],
          ["TWICE", "Momo", 4], ["BLACKPINK", "Jennie", 5], ["TWICE", "Jeongyeon", 6],
          ["IU", "IU", 7], ["TWICE", "Nayeon", 8], ["TWICE", "Sana", 9],
          ["TWICE", "Dahyun", 10], ["BLACKPINK", "Jisoo", 11], ["I.O.I", "Sejeong", 12],
          ["TWICE", "Jihyo", 13], ["TWICE", "Chaeyoung", 14], ["BLACKPINK", "Rosé", 15],
          ["Apink", "Hayoung", 16], ["ITZY", "Yeji", 17],
          ["Girls' Generation", "Taeyeon", 18], ["Apink", "Eunji", 19], ["ITZY", "Yuna", 19]
        ]
      },
      {
        period: "2026-08",
        weight: 0.28,
        ranks: [
          ["NiziU", "Maya", 1], ["NiziU", "Mako", 2], ["NiziU", "Rima", 3],
          ["IVE", "Leeseo", 4], ["BABYMONSTER", "Ahyeon", 5], ["CLASS:y", "Boeun", 6],
          ["NiziU", "Ayaka", 7], ["NiziU", "Riku", 8], ["aespa", "Winter", 9],
          ["NiziU", "Miihi", 9], ["NiziU", "Mayuka", 11], ["NiziU", "Rio", 12],
          ["Kep1er", "Hikaru", 13], ["aespa", "Karina", 14], ["IVE", "Yujin", 15],
          ["aespa", "Ningning", 16], ["NiziU", "Nina", 17], ["LE SSERAFIM", "Sakura", 18],
          ["Hearts2Hearts", "Carmen", 19], ["NMIXX", "Haewon", 20],
          ["TWICE", "Tzuyu", 1], ["TWICE", "Mina", 2], ["BLACKPINK", "Lisa", 3],
          ["TWICE", "Momo", 4], ["BLACKPINK", "Jennie", 5], ["TWICE", "Jeongyeon", 6],
          ["TWICE", "Nayeon", 7], ["IU", "IU", 8], ["TWICE", "Sana", 9],
          ["BLACKPINK", "Jisoo", 10], ["TWICE", "Dahyun", 11], ["BLACKPINK", "Rosé", 12],
          ["TWICE", "Chaeyoung", 13], ["ITZY", "Yuna", 14], ["TWICE", "Jihyo", 15],
          ["Red Velvet", "Irene", 16], ["ITZY", "Yeji", 17], ["Apink", "Hayoung", 18],
          ["Apink", "Eunji", 19], ["Red Velvet", "Yeri", 20]
        ]
      },
      {
        period: "2026-07",
        weight: 0.19,
        ranks: [
          ["NiziU", "Maya", 1], ["NiziU", "Mako", 2], ["NiziU", "Rima", 3],
          ["aespa", "Winter", 4], ["BABYMONSTER", "Ahyeon", 5], ["CLASS:y", "Boeun", 6],
          ["NiziU", "Ayaka", 7], ["Kep1er", "Hikaru", 8], ["NiziU", "Mayuka", 9],
          ["NiziU", "Riku", 10], ["NiziU", "Miihi", 11], ["IVE", "Yujin", 12],
          ["NiziU", "Nina", 13], ["NiziU", "Rio", 14], ["aespa", "Ningning", 15],
          ["LE SSERAFIM", "Sakura", 16], ["aespa", "Karina", 17],
          ["Hearts2Hearts", "Carmen", 18], ["NMIXX", "Haewon", 19], ["KISS OF LIFE", "Natty", 20],
          ["TWICE", "Tzuyu", 1], ["TWICE", "Mina", 2], ["BLACKPINK", "Lisa", 3],
          ["TWICE", "Dahyun", 4], ["TWICE", "Momo", 5], ["BLACKPINK", "Jennie", 6],
          ["TWICE", "Sana", 7], ["IU", "IU", 8], ["TWICE", "Jeongyeon", 9],
          ["TWICE", "Nayeon", 10], ["BLACKPINK", "Jisoo", 11], ["TWICE", "Chaeyoung", 12],
          ["BLACKPINK", "Rosé", 13], ["TWICE", "Jihyo", 14], ["ITZY", "Yeji", 15],
          ["Dreamcatcher", "Siyeon", 16], ["Apink", "Hayoung", 17], ["ITZY", "Yuna", 18],
          ["I.O.I", "Sejeong", 19], ["Apink", "Eunji", 20]
        ]
      },
      {
        period: "2026-06",
        weight: 0.13,
        ranks: [
          ["NiziU", "Maya", 1], ["NiziU", "Mako", 2], ["BABYMONSTER", "Ahyeon", 3],
          ["NiziU", "Rima", 4], ["CLASS:y", "Boeun", 5], ["NiziU", "Ayaka", 6],
          ["NiziU", "Miihi", 7], ["Kep1er", "Hikaru", 8], ["NiziU", "Mayuka", 9],
          ["aespa", "Winter", 10], ["KISS OF LIFE", "Natty", 11], ["NiziU", "Riku", 12],
          ["IVE", "Yujin", 13], ["NiziU", "Rio", 14], ["aespa", "Karina", 15],
          ["NiziU", "Nina", 16], ["LE SSERAFIM", "Sakura", 17],
          ["MADEIN", "Mashiro", 18], ["NMIXX", "Haewon", 19], ["aespa", "Ningning", 20],
          ["TWICE", "Mina", 1], ["TWICE", "Tzuyu", 2], ["BLACKPINK", "Lisa", 3],
          ["TWICE", "Momo", 4], ["BLACKPINK", "Jennie", 5], ["TWICE", "Dahyun", 6],
          ["TWICE", "Nayeon", 7], ["IU", "IU", 8], ["TWICE", "Jeongyeon", 9],
          ["TWICE", "Sana", 10], ["BLACKPINK", "Jisoo", 11], ["TWICE", "Chaeyoung", 12],
          ["BLACKPINK", "Rosé", 13], ["ITZY", "Yuna", 14], ["ITZY", "Yeji", 15],
          ["TWICE", "Jihyo", 16], ["Dreamcatcher", "Siyeon", 17],
          ["Dreamcatcher", "JiU", 18], ["Apink", "Hayoung", 19], ["I.O.I", "Sejeong", 20]
        ]
      }
    ]
  },
  {
    id: "starnews",
    weight: 4,
    topN: 30,
    snapshots: [{
      period: "2026-10-poll-259",
      weight: 1,
      ranks: [
        ["NewJeans", "Minji", 1], ["NewJeans", "Hyein", 2],
        ["NewJeans", "Haerin", 3], ["Red Velvet", "Irene", 4],
        ["NewJeans", "Hanni", 5], ["LE SSERAFIM", "Kazuha", 6],
        ["Girls' Generation", "Yuri", 7], ["Girls' Generation", "Yoona", 8],
        ["Red Velvet", "Wendy", 9], ["IVE", "Yujin", 10],
        ["IVE", "Wonyoung", 11], ["BLACKPINK", "Jisoo", 12],
        ["Girls' Generation", "Seohyun", 13], ["MAMAMOO", "Hwasa", 15],
        ["Girls' Generation", "Taeyeon", 16], ["ILLIT", "Minju", 18],
        ["LE SSERAFIM", "Chaewon", 19], ["RESCENE", "Minami", 20],
        ["aespa", "Ningning", 21], ["RESCENE", "Woni", 22],
        ["ILLIT", "Yunah", 23], ["IVE", "Rei", 24],
        ["NMIXX", "Haewon", 25], ["fromis_9", "Jiwon", 26],
        ["fromis_9", "Hayoung", 27], ["BLACKPINK", "Rosé", 28],
        ["LE SSERAFIM", "Eunchae", 29], ["LE SSERAFIM", "Sakura", 30]
      ]
    }]
  },
  {
    id: "fannstar",
    weight: 2,
    topN: 16,
    snapshots: [{
      period: "2026-10-current",
      weight: 1,
      ranks: [
        ["Girls' Generation", "Yoona", 3], ["NMIXX", "Haewon", 5],
        ["i-dle", "Yuqi", 9], ["NMIXX", "Sullyoon", 10],
        ["aespa", "Winter", 11], ["BABYMONSTER", "Ahyeon", 13],
        ["ILLIT", "Wonhee", 15], ["i-dle", "Soyeon", 16]
      ]
    }]
  }
];

const normalizeRankingName = value => String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
const memberRankingKey = (group, member) =>
  `${normalizeRankingName(group)}:${normalizeRankingName(member)}`;

function starsForPopularityPercentile(percentile) {
  if (percentile <= 0.25) return 5;
  if (percentile <= 0.50) return 4;
  if (percentile <= 0.75) return 3;
  return 2;
}

const popularityRanksByMember = new Map();
function addPopularityRank(sourceId, period, group, member, rank) {
  const key = memberRankingKey(group, member);
  const sourceRanks = popularityRanksByMember.get(key) || {};
  sourceRanks[sourceId] = sourceRanks[sourceId] || {};
  sourceRanks[sourceId][period] = Math.min(sourceRanks[sourceId][period] || Infinity, rank);
  popularityRanksByMember.set(key, sourceRanks);
}

popularityRankingSources.forEach(source => {
  source.snapshots.forEach(snapshot => {
    snapshot.ranks.forEach(([group, member, rank]) =>
      addPopularityRank(source.id, snapshot.period, group, member, rank)
    );
  });
});

idols.forEach(idol => {
  const sourceRanks = popularityRanksByMember.get(memberRankingKey(idol.group, idol.name)) || {};
  const generationNumber = Number(idol.generation.match(/\d+/)?.[0] || 0);
  let applicableSourceWeight = 0;
  const weightedScore = popularityRankingSources.reduce((score, source) => {
    const eligibleSnapshots = source.snapshots.filter(snapshot =>
      !snapshot.maxGeneration || generationNumber <= snapshot.maxGeneration
    );
    if (eligibleSnapshots.length === 0) return score;

    const eligibleSnapshotWeight = eligibleSnapshots.reduce((total, snapshot) =>
      total + snapshot.weight, 0);
    const weightedSnapshotScore = eligibleSnapshots.reduce((snapshotScore, snapshot) => {
      const rank = sourceRanks[source.id]?.[snapshot.period];
      if (!rank) return snapshotScore;
      return snapshotScore + ((source.topN + 1 - rank) / source.topN) *
        (snapshot.weight / eligibleSnapshotWeight);
    }, 0);
    applicableSourceWeight += source.weight;
    return score + weightedSnapshotScore * source.weight;
  }, 0);
  const compositeScore = applicableSourceWeight
    ? weightedScore * (100 / applicableSourceWeight)
    : 0;

  idol.popularityScore = Math.round(compositeScore * 10) / 10;
  idol.popularityStars = compositeScore > 0 ? 2 : 1;
  idol.individualPopularityRank = sourceRanks.choeaedol?.["2026-09"] || null;
  idol.popularitySortScore = idol.popularityScore;
  idol.popularitySources = sourceRanks;
});

const rankedIdolByPerson = new Map();
idols.filter(idol => idol.popularityScore > 0).forEach(idol => {
  const current = rankedIdolByPerson.get(idol.personKey);
  if (!current || idol.popularityScore > current.popularityScore) {
    rankedIdolByPerson.set(idol.personKey, idol);
  }
});
const rankedIdols = [...rankedIdolByPerson.values()]
  .sort((a, b) => b.popularityScore - a.popularityScore ||
    a.japaneseName.localeCompare(b.japaneseName, "ja"));

const rankedIdolsByGeneration = new Map();
rankedIdols.forEach(idol => {
  const generationIdols = rankedIdolsByGeneration.get(idol.generation) || [];
  generationIdols.push(idol);
  rankedIdolsByGeneration.set(idol.generation, generationIdols);
});

rankedIdolsByGeneration.forEach(generationIdols => {
  for (let start = 0; start < generationIdols.length;) {
    let end = start + 1;
    while (end < generationIdols.length &&
      generationIdols[end].popularityScore === generationIdols[start].popularityScore) {
      end += 1;
    }
    const midpointPercentile = ((start + end - 1) / 2) / generationIdols.length;
    const stars = starsForPopularityPercentile(midpointPercentile);
    const withinGenerationScore = Math.round((1 - midpointPercentile) * 1000) / 10;
    for (let index = start; index < end; index += 1) {
      generationIdols[index].popularityStars = stars;
      generationIdols[index].popularitySortScore = withinGenerationScore;
    }
    start = end;
  }
});

const bestPopularityByPerson = new Map();
idols.forEach(idol => {
  const current = bestPopularityByPerson.get(idol.personKey);
  if (!current || idol.popularityScore > current.popularityScore) {
    bestPopularityByPerson.set(idol.personKey, idol);
  }
});
idols.forEach(idol => {
  const best = bestPopularityByPerson.get(idol.personKey);
  if (!best || best === idol) return;
  idol.popularityScore = best.popularityScore;
  idol.popularityStars = best.popularityStars;
  idol.popularitySortScore = best.popularitySortScore;
  idol.popularitySources = best.popularitySources;
  idol.individualPopularityRank = best.individualPopularityRank;
});

export {
  groups, idols, normalizeSearchText, agencyFilterName, fullAgencyName,
  shortAgencyName, memberAffiliationLabel, memberAffiliationTitle,
  candidateSearchTextById, searchRank, popularityRankingSources, groupAliases, looseSearchText
};
