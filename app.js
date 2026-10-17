const onlineClientBuild = "20261017-host-force-remove-1";

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

const koreanRomanSyllables = {
  yeong: "영", young: "영", yeon: "연", hyeong: "형", hyung: "형", hyeon: "현", hyun: "현",
  seung: "승", hee: "희", hwi: "휘", soo: "수", gyu: "규", gyung: "경", yoon: "윤",
  yun: "윤", chan: "찬", joo: "주", eo: "어", seol: "설", yeol: "열", eul: "을",
  eung: "응", eun: "은", seong: "성", sung: "성", seon: "선", jeong: "정", jung: "정",
  jong: "종", chae: "채", choi: "최", cheo: "처", hye: "혜", yeo: "여", seo: "서",
  sye: "셰", syo: "쇼", shi: "시", sh: "시", ch: "치", ts: "츠", ae: "애", oe: "외",
  ui: "의", eu: "으", oo: "우", woo: "우", yoo: "유", yu: "유", yae: "얘", ya: "야",
  ye: "예", yo: "요", wa: "와", wae: "왜", we: "웨", wi: "위", wo: "워", hyo: "효",
  hyu: "휴", hwa: "화", hyeo: "혀", kye: "계", kyu: "규", ryu: "류", ry: "리",
  ga: "가", gi: "기", gu: "구", ge: "게", go: "고", ka: "카", ki: "키", ku: "쿠",
  ke: "케", ko: "코", na: "나", ni: "니", nu: "누", ne: "네", no: "노", da: "다",
  di: "디", du: "두", de: "데", do: "도", ta: "타", ti: "티", tu: "투", te: "테",
  to: "토", tae: "태", sa: "사", si: "시", su: "수", se: "세", so: "소", ja: "자",
  ji: "지", ju: "주", je: "제", jo: "조", cha: "차", chi: "치", chu: "추", che: "체",
  cho: "초", ha: "하", hi: "히", hu: "후", he: "헤", ho: "호", ma: "마", mi: "미",
  mu: "무", me: "메", mo: "모", ra: "라", ri: "리", ru: "루", re: "레", ro: "로",
  ba: "바", bi: "비", bu: "부", be: "베", bo: "보", pa: "파", pi: "피", pu: "푸",
  pe: "페", po: "포", la: "라", li: "리", lu: "루", le: "레", lo: "로", a: "아",
  i: "이", u: "우", e: "에", o: "오", won: "원", sul: "설", seul: "슬", ning: "닝",
  bin: "빈", min: "민", jin: "진", rin: "린", ram: "람", lim: "림", in: "인", an: "안",
  on: "온", un: "운", ing: "잉", ong: "옹", ang: "앙", eng: "엥", oh: "오"
};
const koreanSyllableKeys = Object.keys(koreanRomanSyllables)
  .sort((a, b) => b.length - a.length);

function toKoreanMemberName(name) {
  const normalized = String(name).trim().toLowerCase().replace(/\s+/g, " ");
  if (koreanNameOverrides[normalized]) return koreanNameOverrides[normalized];

  return String(name).toLowerCase().split(/(\s+|-)/).map(part => {
    if (/^\s+$/.test(part) || part === "-") return " ";
    let source = part.replace(/[^a-z]/g, "");
    let result = "";
    while (source) {
      const match = koreanSyllableKeys.find(syllable => source.startsWith(syllable));
      if (!match) {
        source = source.slice(1);
        continue;
      }
      result += koreanRomanSyllables[match];
      source = source.slice(match.length);
    }
    return result;
  }).join("").trim();
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

const candidateSearchTextById = new Map(idols.map(idol => [
  idol.id,
  [idol.name, idol.japaneseName, idol.japaneseSearchName, idol.koreanName,
    idol.group, idol.nationality, idol.agency, agencyFilterName(idol.agency)]
    .map(normalizeSearchText)
]));

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

const $ = id => document.getElementById(id);
const publicSiteUrl = "https://l1nus2910.github.io/kpop-draft/";
const localTeamNames = [
  "チームA", "チームB", "チームC", "チームD", "チームE",
  "チームF", "チームG", "チームH", "チームI", "チームJ"
];
let localTeamNameValues = localTeamNames.slice();
let playerTeamNameValue = "あなた";
let teamNames = localTeamNames.slice(0, 4);
let activeMode = "local";
let aiTeams = new Set();
let aiAdvanceTimer = null;
let pickRevealQueue = [];
let pickRevealTimer = null;
let pickRevealPhase = "closed";
let activePickReveal = null;

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

function saveCompletedDraftHistory() {
  const history = readSaved(DRAFT_HISTORY_STORAGE_KEY, []);
  const safeHistory = Array.isArray(history) ? history : [];
  const id = gameSessionId || `draft-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  if (safeHistory.some(entry => entry?.id === id)) return;

  const entry = {
    id,
    completedAt: Date.now(),
    mode: activeMode,
    pickLimit,
    teams: teamNames.map(team => ({
      name: team,
      picks: (picks[team] || []).map(pick => ({
        round: Number(pick.round) || 1,
        name: String(pick.name || ""),
        group: String(pick.group || ""),
        agency: String(pick.agency || "")
      })),
      losses: (firstRoundLotteryLosses[team] || []).map(lost => ({
        round: 1,
        name: String(lost.name || ""),
        group: String(lost.group || ""),
        agency: String(lost.agency || "")
      }))
    }))
  };

  try {
    localStorage.setItem(DRAFT_HISTORY_STORAGE_KEY, JSON.stringify([entry, ...safeHistory].slice(0, DRAFT_HISTORY_LIMIT)));
  } catch {
    // History is optional and should never interrupt a completed draft.
  }
}

function renderDraftHistory() {
  const list = $("draftHistoryList");
  const history = readSaved(DRAFT_HISTORY_STORAGE_KEY, []);
  const entries = Array.isArray(history) ? history.filter(entry => entry && typeof entry === "object") : [];
  if (!entries.length) {
    list.innerHTML = '<p class="draft-history-empty">完了したドラフトはまだありません。ドラフト終了後にこの端末へ保存されます。</p>';
    return;
  }

  const modeLabels = { ai: "AIドラフト", local: "友達と1台", online: "オンラインドラフト" };
  list.innerHTML = entries.map((entry, index) => {
    const completedAt = new Date(Number(entry?.completedAt));
    const dateLabel = Number.isFinite(completedAt.getTime())
      ? completedAt.toLocaleString("ja-JP", { dateStyle: "medium", timeStyle: "short" })
      : "日時不明";
    const teams = Array.isArray(entry?.teams) ? entry.teams.filter(team => team && typeof team === "object") : [];
    const rounds = Math.max(1, Number(entry?.pickLimit) || 5);
    const totalPicks = teams.reduce((sum, team) => sum + (Array.isArray(team.picks) ? team.picks.length : 0), 0);
    return `
      <details class="draft-history-entry" data-history-index="${index}">
        <summary><span><strong>${escapeHTML(dateLabel)}</strong><small>${escapeHTML(modeLabels[entry?.mode] || "ドラフト")} · 合計${totalPicks}人</small></span><span class="draft-history-team-count">${teams.length}チーム</span></summary>
        <div class="draft-history-entry-body">
          <div class="draft-history-entry-actions">
            <button class="draft-history-expand-button" type="button" aria-label="${escapeHTML(dateLabel)}のドラフト結果を全体表示">全体表示</button>
          </div>
          <div class="draft-history-fullscreen-bar">
            <strong class="draft-history-fullscreen-title">${escapeHTML(dateLabel)} · ${teams.length}チーム</strong>
            <small class="draft-history-landscape-hint">スマホを横向きにすると全チームを見やすく表示できます</small>
            <div>
              <button class="draft-history-return-button" type="button">履歴一覧へ</button>
              <button class="draft-history-fullscreen-close" type="button" aria-label="履歴を閉じる">×</button>
            </div>
          </div>
          <div class="draft-history-table-scroll" role="region" aria-label="${escapeHTML(dateLabel)}のドラフト結果" tabindex="0">
            <div class="draft-history-table-mount"></div>
          </div>
        </div>
      </details>
    `;
  }).join("");

  list.querySelectorAll(".draft-history-entry").forEach(details => {
    details.addEventListener("toggle", () => {
      if (!details.open) {
        if (details.classList.contains("is-expanded")) return;
        const mount = details.querySelector(".draft-history-table-mount");
        if (mount) mount.replaceChildren();
        details.dataset.rendered = "";
        return;
      }
      list.querySelectorAll(".draft-history-entry").forEach(other => {
        if (other !== details) other.open = false;
      });
      if (details.dataset.rendered === "true") return;
      const entry = entries[Number(details.dataset.historyIndex)];
      if (!entry) return;
      renderDraftHistoryTable(details, entry);
    });
  });
}

function renderDraftHistoryTable(details, entry) {
  const mount = details.querySelector(".draft-history-table-mount");
  if (!mount) return;
  const teams = Array.isArray(entry?.teams) ? entry.teams.filter(team => team && typeof team === "object") : [];
  const rounds = Math.max(1, Number(entry?.pickLimit) || 5);
  const headers = teams.map((team, index) => {
    const teamPicks = Array.isArray(team.picks) ? team.picks : [];
    const subtitle = entry.mode === "ai"
      ? index === 0 ? "あなたのチーム" : "AIチーム"
      : entry.mode === "online" ? "参加チーム" : `チーム ${String(index + 1).padStart(2, "0")}`;
    return `
      <th class="team-column" scope="col" style="--team-color:${teamColorPalette[index % teamColorPalette.length]}">
        <small class="team-column-subtitle">${escapeHTML(subtitle)}</small>
        <strong>${escapeHTML(team.name || "チーム")}</strong>
        <span>${teamPicks.length} / ${rounds}人</span>
      </th>
    `;
  }).join("");
  const rows = Array.from({ length: rounds }, (_, index) => {
    const roundNumber = index + 1;
    const cells = teams.map(team => {
      const teamPicks = Array.isArray(team.picks) ? team.picks : [];
      const losses = Array.isArray(team.losses) ? team.losses : [];
      const pick = teamPicks.find(item => Number(item.round) === roundNumber);
      const roundLosses = losses.filter(item => Number(item.round || 1) === roundNumber);
      const lossMarkup = roundLosses.length ? `
        <div class="draft-lottery-history" aria-label="${roundNumber}巡目の抽選外れ">
          ${roundLosses.map(item => `
            <div class="draft-cell-card draft-lottery-loss">
              <strong>${escapeHTML(item.name || "")}</strong>${memberAffiliationMarkup(item)}
            </div>
          `).join("")}
        </div>
      ` : "";
      const pickMarkup = pick ? `
        <div class="draft-cell-card draft-pick-confirmed">
          <strong>${escapeHTML(pick.name || "")}</strong>${memberAffiliationMarkup(pick)}
        </div>
      ` : '<span class="empty-pick">—</span>';
      return `<td class="pick-cell">${lossMarkup}${pickMarkup}</td>`;
    }).join("");
    return `<tr><th class="round-column" scope="row">${roundNumber}巡目</th>${cells}</tr>`;
  }).join("");
  mount.innerHTML = `
    <table class="draft-results-table draft-history-results-table" style="--history-team-count:${teams.length}">
      <thead><tr><th class="round-column" scope="col">巡目</th>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
  details.dataset.rendered = "true";
}

let excluded = new Set(readSaved("stagePickExcluded", []));
let savedPresets = readSaved("stagePickPresets", {});
let selectedId = null;
let candidateSortMode = "recommended";
let candidateSearchRenderTimer = null;
let candidateVisibleLimit = 64;
let candidateFilterSignature = "";
let candidatePoolRevision = 0;
let candidateResultsCacheRevision = -1;
const candidateResultsCache = new Map();
let dependentFilterSignature = "";
const CANDIDATE_PAGE_SIZE = 64;
let gameStarted = false;
let finalResultsWasVisible = false;
const DRAFT_HISTORY_STORAGE_KEY = "kdraftCompletedDraftHistory";
const DRAFT_HISTORY_LIMIT = 20;
let drafted = new Set();
function setDraftedMembers(values) {
  const next = new Set(values || []);
  const changed = next.size !== drafted.size || [...next].some(id => !drafted.has(id));
  drafted = next;
  if (changed) candidatePoolRevision += 1;
}
function personHasBeenDrafted(idol) {
  return drafted.has(idol.personKey || idol.id);
}
function markPersonDrafted(idol) {
  const key = idol.personKey || idol.id;
  if (!drafted.has(key)) {
    drafted.add(key);
    candidatePoolRevision += 1;
  }
}
let pendingDraftPickId = null;
let lastCandidateInteraction = '未操作';
let picks = Object.fromEntries(teamNames.map(team => [team, []]));
let round = 1;
let r1Started = false;
let r1NominationOrder = [];
let r1NominationIndex = 0;
let r1NominationAttempt = 1;
let r1Nominations = [];
let r1Queue = [];
let r1RevealPending = false;
let firstRoundRevealAutoScrollArmed = false;
let pendingR1Resolution = null;
let waiverOrder = teamNames.slice().reverse();
let firstRoundWaiverOrder = [];
let turnIndex = 0;
let lotterySummary = "";
let pickLimit = 5;
let orderMode = "snake";
let startOrderMode = "random";
let firstRoundLotteryLosses = {};
let onlineRoomRef = null;
let firebaseSdkLoadPromise = null;
let onlineRoomCode = "";
let onlineGameStatus = "";
let onlineUid = "";
let onlineIsHost = false;
let onlinePlayers = {};
let onlineDepartedTeams = new Set();
let onlineActionPending = false;
let onlineForceKickPending = false;
let onlineStartPending = false;
let onlineActionsListenerRef = null;
let onlineConfirmationsListenerRef = null;
let onlineActionsListenerCallback = null;
let onlineConfirmationsAddedListenerCallback = null;
let onlineConfirmationsChangedListenerCallback = null;
let onlineActionsPollTimer = null;
let onlineActionsPollRoomRef = null;
let onlineActionsListenerFailed = false;
let onlinePendingAction = null;
let lastPickRevealPointerActionAt = 0;
let onlineActionAcks = {};
let onlineStateApplying = false;
let onlineStateWriteTimer = null;
let onlineStateWriteChain = Promise.resolve();
let onlineStateRevision = 0;
let onlineAppliedStateRevision = -1;
let onlineRenderedStateRevision = -1;
let onlineLastRenderError = "";
let onlineLastMissingPickLists = "なし";
let onlineLastRemoteStateRevision = null;
let onlineLastRemoteStatePhase = "";
let onlineLastStateReadAt = "";
let onlineLastStateWriteAt = "";
let onlineLastStateReadError = "";
let onlineLastStateWriteError = "";
let onlineActionQueue = Promise.resolve();
let onlineConfirmationQueue = Promise.resolve();
let onlineQueuedConfirmationIds = new Set();
let onlineHandledConfirmationIds = new Set();
let onlineGuestStatePollTimer = null;
let onlineGuestStatePollingFallback = false;
let onlineGuestRebidFallbackTimer = null;
let onlineListenersAttached = false;
let onlineServerTimeOffsetMs = 0;
let onlineServerTimeOffsetRef = null;
let onlineServerTimeOffsetCallback = null;
let onlineRevealTimelineTimer = null;
let onlineRevealTimelineKey = "";
let onlineRevealTimelineStage = "";
let onlineHandledActionIds = new Set();
let onlineQueuedActionIds = new Set();
let onlineProcessedActionIds = new Set();
let onlineJoinQueue = Promise.resolve();
let onlineShownRevealKey = "";
let onlineRevealAcks = new Set();
let onlineHostRestoring = false;
let gameSessionId = "";
let onlineRestartPending = false;
const ONLINE_REVEAL_SYNC_LEAD_MS = 450;

function onlineServerNow() {
  return Date.now() + onlineServerTimeOffsetMs;
}

function detachOnlineServerClock() {
  if (onlineServerTimeOffsetRef && onlineServerTimeOffsetCallback) {
    onlineServerTimeOffsetRef.off("value", onlineServerTimeOffsetCallback);
  }
  onlineServerTimeOffsetRef = null;
  onlineServerTimeOffsetCallback = null;
  onlineServerTimeOffsetMs = 0;
}

function attachOnlineServerClock() {
  detachOnlineServerClock();
  if (!window.firebase?.database) return;
  onlineServerTimeOffsetRef = window.firebase.database().ref(".info/serverTimeOffset");
  onlineServerTimeOffsetCallback = snapshot => {
    const offset = Number(snapshot.val());
    onlineServerTimeOffsetMs = Number.isFinite(offset) ? offset : 0;
    if (onlineRevealTimelineTimer !== null) {
      clearTimeout(onlineRevealTimelineTimer);
      onlineRevealTimelineTimer = null;
      onlineRevealTimelineStage = "";
    }
    scheduleOnlineRevealVisualTimeline();
  };
  onlineServerTimeOffsetRef.on("value", onlineServerTimeOffsetCallback);
}

function clearOnlineRevealTimeline() {
  if (onlineRevealTimelineTimer !== null) {
    clearTimeout(onlineRevealTimelineTimer);
    onlineRevealTimelineTimer = null;
  }
  onlineRevealTimelineKey = "";
  onlineRevealTimelineStage = "";
}

const teamColorPalette = [
  "#a72e45", "#24539d", "#116d68", "#98500f", "#6740a5",
  "#21693b", "#a32e64", "#12627c", "#78571b", "#3f5687"
];

const aiStrategies = [
  { label: "同世代型", style: "generationFocus" },
  { label: "世代ミックス型", style: "generationMix" },
  { label: "同事務所型", style: "agencyFocus" },
  { label: "事務所ミックス型", style: "agencyMix" },
  { label: "同国籍型", style: "nationalityFocus" },
  { label: "国籍ミックス型", style: "nationalityMix" },
  { label: "ランダム型", style: "random" }
];
let aiStrategyByTeam = new Map();

function assignAIStrategies(teams) {
  aiStrategyByTeam = new Map(teams.map((team, index) => [
    team,
    index < aiStrategies.length
      ? aiStrategies[index]
      : aiStrategies[Math.floor(Math.random() * aiStrategies.length)]
  ]));
}

function aiStrategyFor(team) {
  return aiStrategyByTeam.get(team) || aiStrategies[0];
}

function displayTeamName(team) {
  if (!aiTeams.has(team)) return team;
  return `${team}（${aiStrategyFor(team).label}）`;
}

function shuffle(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

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
fillFilter("agencyFilter", idols.map(idol => agencyFilterName(idol.agency)));
fillFilter("groupFilter", idols.map(idol => idol.group));

const dependentFilters = [
  { id: "generationFilter", field: "generation" },
  { id: "nationalityFilter", field: "nationality" },
  { id: "agencyFilter", field: "agency" },
  { id: "groupFilter", field: "group" }
];

function preferredPersonCandidates(candidates, query = "") {
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

function compareCandidates(a, b) {
  const scoreA = Number(a.popularityScore) || 0;
  const scoreB = Number(b.popularityScore) || 0;
  const recommended = () =>
    (b.popularityStars || 0) - (a.popularityStars || 0) ||
    (Number(b.popularitySortScore) || 0) - (Number(a.popularitySortScore) || 0) ||
    a.japaneseName.localeCompare(b.japaneseName, "ja");

  if (candidateSortMode === "score") {
    return scoreB - scoreA || recommended();
  }
  if (candidateSortMode === "generation") {
    const generationA = Number.parseInt(a.generation, 10) || 0;
    const generationB = Number.parseInt(b.generation, 10) || 0;
    return generationA - generationB || recommended();
  }
  if (candidateSortMode === "name") {
    return a.japaneseName.localeCompare(b.japaneseName, "ja") || recommended();
  }
  return recommended();
}

function updateCandidateSortControls() {
  document.querySelectorAll("[data-sort-candidates]").forEach(button => {
    const active = button.dataset.sortCandidates === candidateSortMode;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("is-active", active);
  });
}

function getCandidates(ignoreFilter = "", dedupePeople = true) {
  const query = normalizeSearchText($("searchInput").value.trim());
  const generation = ignoreFilter === "generationFilter" ? "" : $("generationFilter").value;
  const nationality = ignoreFilter === "nationalityFilter" ? "" : $("nationalityFilter").value;
  const agency = ignoreFilter === "agencyFilter" ? "" : $("agencyFilter").value;
  const group = ignoreFilter === "groupFilter" ? "" : $("groupFilter").value;
  const hideDrafted = $("hideDrafted").checked;
  if (candidateResultsCacheRevision !== candidatePoolRevision) {
    candidateResultsCache.clear();
    candidateResultsCacheRevision = candidatePoolRevision;
  }
  const cacheKey = JSON.stringify([
    ignoreFilter, dedupePeople, candidateSortMode, query,
    generation, nationality, agency, group,
    hideDrafted, $("showExcluded").checked, candidatePoolRevision
  ]);
  if (candidateResultsCache.has(cacheKey)) return candidateResultsCache.get(cacheKey);

  const candidates = idols.filter(idol => {
    const displayedAgency = agencyFilterName(idol.agency);
    const matchesText = !query || candidateSearchTextById.get(idol.id)
      .some(value => value.includes(query));

    return matchesText &&
      (!generation || idol.generation === generation) &&
      (!nationality || idol.nationality === nationality) &&
      (!agency || displayedAgency === agency) &&
      (!group || idol.group === group) &&
      (!hideDrafted || !personHasBeenDrafted(idol)) &&
      ($("showExcluded").checked || !excluded.has(idol.id));
  });
  const result = (dedupePeople ? preferredPersonCandidates(candidates, query) : candidates).sort(compareCandidates);
  if (candidateResultsCache.size >= 24) candidateResultsCache.clear();
  candidateResultsCache.set(cacheKey, result);
  return result;
}

function dependentFilterCacheKey() {
  return JSON.stringify([
    normalizeSearchText($("searchInput").value.trim()),
    $("generationFilter").value,
    $("nationalityFilter").value,
    $("agencyFilter").value,
    $("groupFilter").value,
    $("hideDrafted").checked,
    $("showExcluded").checked,
    candidatePoolRevision
  ]);
}

function updateDependentFilters() {
  const cacheKey = dependentFilterCacheKey();
  if (cacheKey === dependentFilterSignature) return;
  for (let pass = 0; pass < dependentFilters.length; pass += 1) {
    let changed = false;
    dependentFilters.forEach(filter => {
      const select = $(filter.id);
      const current = select.value;
      const values = [...new Set(getCandidates(filter.id, false).map(idol =>
        filter.id === "agencyFilter" ? agencyFilterName(idol.agency) : idol[filter.field]
      ))]
        .sort((a, b) => a.localeCompare(b));

      select.innerHTML = '<option value="">すべて</option>' + values.map(value =>
        `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`
      ).join("");

      if (values.includes(current)) {
        select.value = current;
      } else if (current) {
        select.value = "";
        changed = true;
      }
    });
    if (!changed) break;
  }
  dependentFilterSignature = dependentFilterCacheKey();
}

function isOnlineR1RebidTurn(team) {
  return activeMode === "online" && gameStarted && !r1Started &&
    canSubmitR1Nomination(team) && pickRevealPhase === "closed" &&
    !activePickReveal && pickRevealQueue.length === 0 && $("pickReveal").hidden;
}

function candidateSelectionGate(team = currentTeamName()) {
  if (!gameStarted) return { canPickNow: true, onlineRebidTurn: false };
  const onlineRebidTurn = Boolean(team && isOnlineR1RebidTurn(team));
  const canPickNow = Boolean(
    team && canControlTeam(team) && !onlineActionPending && $("pickReveal").hidden &&
    (!pendingR1Resolution || onlineRebidTurn) &&
    (r1Started || canSubmitR1Nomination(team))
  );
  return { canPickNow, onlineRebidTurn };
}

function candidateGateSignature(team, canPickNow) {
  return JSON.stringify({
    team: team || "",
    ownTeam: activeMode === "online" ? onlineTeamForUid(onlineUid) : "",
    canPickNow,
    actionPending: onlineActionPending,
    revealHidden: $("pickReveal").hidden,
    resolution: Boolean(pendingR1Resolution),
    firstRoundRevealPending: r1RevealPending,
    phase: pickRevealPhase,
    r1Started,
    attempt: r1NominationAttempt,
    submitted: r1Nominations.map(item => item.team)
  });
}

function renderCandidates() {
  const confirmationPanel = $("pickConfirmation");
  $("pickConfirmationMount").append(confirmationPanel);
  const nextFilterSignature = JSON.stringify([
    normalizeSearchText($("searchInput").value.trim()),
    $("generationFilter").value,
    $("nationalityFilter").value,
    $("agencyFilter").value,
    $("groupFilter").value,
    $("hideDrafted").checked,
    $("showExcluded").checked,
    candidateSortMode
  ]);
  if (nextFilterSignature !== candidateFilterSignature) {
    candidateFilterSignature = nextFilterSignature;
    candidateVisibleLimit = CANDIDATE_PAGE_SIZE;
  }
  updateDependentFilters();
  const candidates = getCandidates();
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  const list = pendingIdol && !candidates.some(item => item.id === pendingIdol.id)
    ? [pendingIdol, ...candidates]
    : candidates;
  $("candidateCount").textContent = candidates.length;
  $("poolResultCount").textContent = candidates.length;
  updateCandidateSortControls();
  $("rosterTotal").textContent = idols.length;
  $("groupTotal").textContent = groups.length;

  const currentTeam = gameStarted ? currentTeamName() : "";
  const canPickNow = candidateSelectionGate(currentTeam).canPickNow;
  const gateSignature = candidateGateSignature(currentTeam, canPickNow);
  if (list.length === 0) {
    $("candidateList").innerHTML =
      '<div class="empty-state">条件に合うメンバーはいません。</div>';
    $("candidateList").dataset.gateSignature = gateSignature;
    return;
  }
  const visibleList = list.slice(0, candidateVisibleLimit);

  const nominatedPersonKeys = (areR1BidsSealed() || r1RevealPending)
    ? new Set()
    : new Set(r1Nominations.filter(item =>
      !pendingR1Resolution || pendingR1Resolution.revealedTeams.has(item.team)
    ).map(item => idols.find(idol => idol.id === item.id)?.personKey).filter(Boolean));
  const ownOnlineTeam = activeMode === "online" ? onlineTeamForUid(onlineUid) : "";
  const ownOnlineBidSubmitted = Boolean(ownOnlineTeam && r1Nominations.some(item => item.team === ownOnlineTeam));
  $("candidateList").innerHTML = visibleList.map(idol => {
    const isExcluded = excluded.has(idol.id);
    const isNominated = !r1Started && nominatedPersonKeys.has(idol.personKey);
    const isUnavailable = isExcluded || personHasBeenDrafted(idol);
    const isSelected = selectedId === idol.id || pendingDraftPickId === idol.id || isNominated;
    const selectHint = isUnavailable
      ? (isExcluded ? "除外中" : "指名済み")
      : gameStarted && !canPickNow
        ? pendingR1Resolution
          ? "抽選結果の発表待ち"
          : !$("pickReveal").hidden
            ? "指名発表を確認してね"
            : ownOnlineBidSubmitted && (areR1BidsSealed() || r1RevealPending)
              ? "入札提出済み・開示待ち"
              : "あなたの指名番ではありません"
      : pendingDraftPickId === idol.id
        ? "✓ 選択中・確認して提出"
        : isNominated
          ? "✓ 1巡目候補に設定済み"
        : selectedId === idol.id && !gameStarted
          ? "✓ 選択中"
          : gameStarted
            ? "クリックして選択"
            : "クリックして選択";
    const rankingDetails = idol.popularityScore > 0
      ? `人気参考スコア ${Math.round(idol.popularityScore)}点`
      : "参照した個人ランキングに掲載なし";
    const rankingStars = idol.popularityScore > 0
      ? `<span class="candidate-stars" aria-label="同世代内人気参考ランク ${idol.popularityStars}つ星">${"★".repeat(idol.popularityStars)}${"☆".repeat(5 - idol.popularityStars)}</span>`
      : '<span class="candidate-stars" aria-label="ランキング未掲載のため星1つ" title="ランキング未掲載">★☆☆☆☆</span>';
    return `
      <article class="candidate-card ${isSelected ? "is-selected" : ""} ${isExcluded ? "is-excluded" : ""} ${pendingDraftPickId === idol.id ? "has-pick-confirmation" : ""}" data-candidate-id="${idol.id}">
        <button class="candidate-select" type="button" data-action="select" data-id="${idol.id}" aria-pressed="${isSelected}" ${isUnavailable || !canPickNow ? "disabled" : ""}>
          <span class="candidate-title-row">
            <span class="candidate-name">${escapeHTML(idol.japaneseName)}</span>
            ${rankingStars}
          </span>
          <span class="candidate-agency">${escapeHTML(agencyFilterName(idol.agency))}</span>
          <span class="candidate-group">${escapeHTML(idol.group)}</span>
          <span class="candidate-rank-details">${rankingDetails}</span>
          <span class="tags">
            <span class="tag">${escapeHTML(idol.generation)}</span>
            <span class="tag">${escapeHTML(idol.nationality)}</span>
          </span>
          <span class="candidate-select-hint">${selectHint}</span>
        </button>
        <div class="card-actions">
          <button type="button" data-action="exclude" data-id="${idol.id}">
            ${isExcluded ? "除外を戻す" : "除外"}
          </button>
        </div>
      </article>
    `;
  }).join("") + (visibleList.length < list.length
    ? `<button class="candidate-load-more" type="button" data-action="load-more">さらに候補を見る（あと${list.length - visibleList.length}人）</button>`
    : "");
  $("candidateList").dataset.gateSignature = gateSignature;

  if (pendingIdol) {
    const selectedCard = [...$("candidateList").querySelectorAll(".candidate-card")]
      .find(card => card.dataset.candidateId === pendingIdol.id);
    const cardActions = selectedCard?.querySelector(".card-actions");
    if (selectedCard && cardActions) selectedCard.insertBefore(confirmationPanel, cardActions);
  }
}

function selectMember(id) {
  const idol = idols.find(item => item.id === id);
  if (!idol || excluded.has(id) || personHasBeenDrafted(idol)) {
    lastCandidateInteraction = `選択拒否:候補無効 ${id}`;
    return;
  }

  if (!gameStarted) {
    const previousId = selectedId;
    selectedId = id;
    lastCandidateInteraction = `選択:${id}`;
    $("selectedMember").textContent = `${idol.japaneseName}（${idol.group}）を選択中。ドラフト開始後に指名できるよ。`;
    refreshCandidateCardSelection(previousId);
    refreshCandidateCardSelection(id);
    return;
  }

  if (!$('pickReveal').hidden || onlineActionPending) {
    lastCandidateInteraction = `選択拒否:発表/送信中 ${id}`;
    return;
  }
  const team = currentTeamName();
  const gate = candidateSelectionGate(team);
  if (!gate.canPickNow) {
    lastCandidateInteraction = `選択拒否:順番外 team=${team || 'なし'} ${id}`;
    return;
  }

  const previousId = pendingDraftPickId;
  pendingDraftPickId = idol.id;
  lastCandidateInteraction = `選択済み:${id}`;
  $("randomResult").hidden = true;
  updatePendingPickFeedback(previousId);
  renderOnlineSyncDebug();
}

function findCandidateCard(id) {
  for (const card of $("candidateList").querySelectorAll(".candidate-card")) {
    if (card.dataset.candidateId === String(id)) return card;
  }
  return null;
}

function candidateIsAlreadyNominated(id) {
  const idol = idols.find(item => item.id === id);
  if (!idol || r1Started || areR1BidsSealed() || r1RevealPending) return false;
  return r1Nominations.some(item => {
    if (pendingR1Resolution && !pendingR1Resolution.revealedTeams.has(item.team)) return false;
    const nominated = idols.find(candidate => candidate.id === item.id);
    return nominated?.personKey && nominated.personKey === idol.personKey;
  });
}

function refreshCandidateCardSelection(id) {
  if (!id) return;
  const card = findCandidateCard(id);
  const button = card?.querySelector(".candidate-select");
  const hint = card?.querySelector(".candidate-select-hint");
  if (!card || !button || !hint) return;
  const nominated = candidateIsAlreadyNominated(id);
  const selected = pendingDraftPickId === id || selectedId === id || nominated;
  card.classList.toggle("is-selected", selected);
  card.classList.toggle("has-pick-confirmation", pendingDraftPickId === id);
  button.setAttribute("aria-pressed", String(selected));
  hint.textContent = pendingDraftPickId === id
    ? "✓ 選択中・確認して提出"
    : nominated
      ? "✓ 1巡目候補に設定済み"
      : selectedId === id && !gameStarted
        ? "✓ 選択中"
        : "クリックして選択";
}

function updatePendingPickFeedback(previousId = "") {
  const panel = $("pickConfirmation");
  const mount = $("pickConfirmationMount");
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  if (!pendingIdol) {
    mount.append(panel);
    panel.hidden = true;
    refreshCandidateCardSelection(previousId);
    $("selectedMember").textContent = "候補カードを押すと、指名内容の確認画面が表示されます。";
    return;
  }

  if (previousId && previousId !== pendingDraftPickId) refreshCandidateCardSelection(previousId);
  refreshCandidateCardSelection(pendingDraftPickId);
  $("pickConfirmName").textContent = pendingIdol.japaneseName;
  $("pickConfirmDetails").textContent = `${pendingIdol.group}・${fullAgencyName(pendingIdol.group, pendingIdol.agency) || "事務所未登録"}`;
  panel.hidden = false;
  const selectedCard = findCandidateCard(pendingDraftPickId);
  const cardActions = selectedCard?.querySelector(".card-actions");
  if (selectedCard && cardActions) selectedCard.insertBefore(panel, cardActions);
  $("selectedMember").textContent = "候補を選択しました。確認ボタンから提出できます。";
}

function cancelDraftPick() {
  const previousId = pendingDraftPickId;
  pendingDraftPickId = null;
  updatePendingPickFeedback(previousId);
  renderOnlineSyncDebug();
}

function confirmDraftPick(submittingUid = "") {
  if (!$("pickReveal").hidden) return;
  const idol = idols.find(item => item.id === pendingDraftPickId);
  // Exclusions are saved per browser, so the host's local list must not reject
  // a guest's valid pick. The guest already applies their own exclusions when
  // choosing; the host still validates the shared drafted-person state.
  const isRemoteOnlinePick = activeMode === "online" && submittingUid && submittingUid !== onlineUid;
  if (!idol || (!isRemoteOnlinePick && excluded.has(idol.id)) || personHasBeenDrafted(idol)) {
    cancelDraftPick();
    return;
  }
  const team = submittingUid ? onlineTeamForUid(submittingUid) : currentTeamName();
  if (!team || !canControlTeam(team, submittingUid || onlineUid)) return;
  if (pendingR1Resolution && !isOnlineR1RebidTurn(team)) return;
  if (!r1Started && !canSubmitR1Nomination(team)) {
    if (activeMode === "online") setOnlineStatus("入札状態が更新されました。画面を確認して、もう一度選んでください。");
    pendingDraftPickId = null;
    renderDraft();
    renderCandidates();
    return;
  }
  if (activeMode === "online" && !onlineIsHost) {
    submitOnlineAction({ kind: "pick", idolId: idol.id });
    return;
  }

  pendingDraftPickId = null;
  selectedId = null;
  if (!r1Started) {
    r1Nominations.push({ team, id: idol.id });
    r1NominationIndex += 1;
    if (allR1BidsSubmitted()) {
      resolveFirstRound();
    }
  } else {
    const pickRound = round;
    recordPick(team, idol);
    if (activeMode === "online") queuePickReveal(team, idol, pickRound, "pick");
  }
  renderNominations();
  renderDraft();
  renderCandidates();
  advanceAI();
  syncOnlineState();
}

$("confirmPick").addEventListener("click", () => confirmDraftPick());
$("cancelPick").addEventListener("click", cancelDraftPick);

$("candidateList").addEventListener("click", event => {
  const target = event.target instanceof Element ? event.target : event.target?.parentElement;
  const button = target?.closest("button[data-action]");
  if (!button) {
    const candidateCard = target?.closest(".candidate-card");
    const candidateButton = candidateCard?.querySelector("button.candidate-select");
    if (candidateButton && candidateCard &&
        !target?.closest("#pickConfirmation, .card-actions")) {
      const id = candidateButton.dataset.id || candidateCard.dataset.candidateId;
      lastCandidateInteraction = `カード面タップ補正:${id} disabled=${candidateButton.disabled}`;
      if (!candidateButton.disabled && id) selectMember(id);
      renderOnlineSyncDebug();
      return;
    }
    const className = typeof target?.className === "string" ? target.className : "";
    const cardId = target?.closest(".candidate-card")?.dataset.candidateId || "なし";
    lastCandidateInteraction = `タップ未分類:${target?.tagName || "unknown"}#${target?.id || ""}.${className} card=${cardId}`;
    renderOnlineSyncDebug();
    return;
  }

  const id = button.dataset.id;
  if (button.dataset.action === "select") {
    lastCandidateInteraction = `タップ受信:${id} disabled=${button.disabled}`;
    selectMember(id);
    renderOnlineSyncDebug();
  } else if (button.dataset.action === "exclude") {
    if (excluded.has(id)) excluded.delete(id);
    else excluded.add(id);
    candidatePoolRevision += 1;
    localStorage.setItem("stagePickExcluded", JSON.stringify([...excluded]));
    renderCandidates();
  } else if (button.dataset.action === "load-more") {
    candidateVisibleLimit += CANDIDATE_PAGE_SIZE;
    renderCandidates();
  }
});

$("searchInput").addEventListener("input", () => {
  if (candidateSearchRenderTimer !== null) clearTimeout(candidateSearchRenderTimer);
  candidateSearchRenderTimer = window.setTimeout(() => {
    candidateSearchRenderTimer = null;
    renderCandidates();
  }, 90);
});
document.querySelectorAll("[data-sort-candidates]").forEach(button => {
  button.addEventListener("click", () => {
    candidateSortMode = button.dataset.sortCandidates || "recommended";
    renderCandidates();
  });
});

$("resetFilters").addEventListener("click", () => {
  if (candidateSearchRenderTimer !== null) clearTimeout(candidateSearchRenderTimer);
  candidateSearchRenderTimer = null;
  $("searchInput").value = "";
  ["generationFilter", "nationalityFilter", "agencyFilter", "groupFilter"].forEach(id => {
    $(id).value = "";
  });
  $("hideDrafted").checked = true;
  $("showExcluded").checked = false;
  $("presetSelect").value = "";
  $("randomResult").hidden = true;
  renderCandidates();
});
[
  "generationFilter",
  "nationalityFilter",
  "agencyFilter",
  "groupFilter",
  "hideDrafted",
  "showExcluded"
].forEach(id => $(id).addEventListener("change", renderCandidates));

$("randomButton").addEventListener("click", () => {
  const list = getCandidates().filter(idol => !excluded.has(idol.id) && !personHasBeenDrafted(idol));
  if (list.length === 0) {
    $("randomResult").hidden = false;
    $("randomResult").textContent = "選べる候補がいないので、条件を変えてみてね。";
    return;
  }

  const idol = list[Math.floor(Math.random() * list.length)];
  selectMember(idol.id);
  $("randomResult").hidden = false;
  $("randomResult").innerHTML =
    `<strong>✦ ランダム選択：</strong> ${escapeHTML(idol.japaneseName)}（${escapeHTML(idol.group)}）`;
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
    agency: $("agencyFilter").value,
    group: $("groupFilter").value,
    hideDrafted: $("hideDrafted").checked
  };
  localStorage.setItem("stagePickPresets", JSON.stringify(savedPresets));
  refreshPresets();
  $("presetSelect").value = name.trim();
});

$("presetSelect").addEventListener("change", () => {
  const preset = savedPresets[$("presetSelect").value];
  if (!preset) return;

  fillFilter("generationFilter", idols.map(idol => idol.generation));
  fillFilter("nationalityFilter", idols.map(idol => idol.nationality));
  fillFilter("agencyFilter", idols.map(idol => agencyFilterName(idol.agency)));
  fillFilter("groupFilter", idols.map(idol => idol.group));
  $("searchInput").value = preset.query || "";
  $("generationFilter").value = preset.generation || "";
  $("nationalityFilter").value = preset.nationality || "";
  $("agencyFilter").value = agencyFilterName(preset.agency || "");
  $("groupFilter").value = preset.group || "";
  $("hideDrafted").checked = preset.hideDrafted !== false;
  renderCandidates();
});

function renderNominations() {
  if (!gameStarted || r1Started) {
    $("nominationList").innerHTML = "";
    return;
  }

  $("nominationList").innerHTML = teamNames.map(team => {
    const nomination = r1Nominations.find(item => item.team === team);
    const departed = activeMode === "online" && onlineDepartedTeams.has(team);
    const sealed = areR1BidsSealed() || r1RevealPending;
    const nominationRevealed = !pendingR1Resolution || pendingR1Resolution.revealedTeams.has(team);
    const idol = nomination && !sealed && nominationRevealed && idols.find(item => item.id === nomination.id);
    const firstPick = (picks[team] || []).find(item => item.round === 1);
    const isCurrent = team === currentTeamName();
    const attemptLabel = r1NominationAttempt === 1
      ? "初回指名"
      : `${r1NominationAttempt}回目の再指名`;
    const status = departed
      ? firstPick
        ? `1巡目確定：${escapeHTML(firstPick.name)}・以降はスキップ`
        : "退出済み・残り指名をスキップ"
      : firstPick
      ? `1巡目確定：${escapeHTML(firstPick.name)}`
      : pendingR1Resolution && nomination && !nominationRevealed
        ? "一斉発表待ち"
        : sealed && nomination
          ? "入札提出済み・開示待ち"
          : idol
            ? pendingR1Resolution?.waiting.has(team)
              ? `競合抽選待ち：${escapeHTML(idol.japaneseName)}`
              : `発表済み：${escapeHTML(idol.japaneseName)}`
            : isCurrent
              ? (aiTeams.has(team) ? `AIが${attemptLabel}中` : activeMode === "online" ? "入札できます" : `${attemptLabel}する番です`)
              : r1NominationOrder.includes(team)
                ? (activeMode === "online" ? "入札待ち" : `指名順待ち（${attemptLabel}）`)
                : "次の再指名待ち";
    return `
      <div class="nomination-row ${isCurrent ? "is-current" : ""} ${firstPick ? "is-resolved" : ""}">
        <strong>${escapeHTML(displayTeamName(team))}</strong>
        <span>${status}</span>
      </div>
    `;
  }).join("");
}

function isDraftFinished() {
  return Boolean(
    gameStarted && allTeamsComplete() && !pendingR1Resolution &&
    $("pickReveal").hidden && pickRevealQueue.length === 0
  );
}

function updateModeSetup() {
  const mode = $("playMode").value;
  const aiMode = mode === "ai";
  const localMode = mode === "local";
  const onlineMode = mode === "online";
  $("modePanel").classList.toggle("is-online-mode", onlineMode);
  $("aiCountWrap").hidden = !aiMode;
  $("localTeamCountWrap").hidden = !localMode;
  $("onlineControls").hidden = !onlineMode;
  $("teamNameSettings").hidden = onlineMode;
  $("startGame").hidden = onlineMode;
  $("startGame").textContent = aiMode
    ? "AIドラフトを始める"
    : `${$("localTeamCount").value}チームで始める`;
  $("restartOfflineDraft").hidden = !isDraftFinished() || !["ai", "local"].includes(activeMode) || mode !== activeMode;

  if (aiMode) {
    $("teamNameHelp").textContent = "AIチーム名は自動で設定されます。";
    $("teamNameInputs").innerHTML = `
      <label class="team-name-field" for="playerTeamName">
        <span>あなたのチーム名</span>
        <input id="playerTeamName" type="text" maxlength="24" value="${escapeHTML(playerTeamNameValue)}" placeholder="あなた">
      </label>
    `;
    $("playerTeamName").addEventListener("input", event => {
      playerTeamNameValue = event.currentTarget.value;
    });
  } else if (localMode) {
    const count = Number($("localTeamCount").value);
    $("teamNameHelp").textContent = "空欄にすると初期名を使います。";
    $("teamNameInputs").innerHTML = Array.from({ length: count }, (_, index) => `
      <label class="team-name-field" for="localTeamName${index}">
        <span>${index + 1}チーム目</span>
        <input id="localTeamName${index}" data-team-name-index="${index}" type="text" maxlength="24" value="${escapeHTML(localTeamNameValues[index])}" placeholder="${escapeHTML(localTeamNames[index])}">
      </label>
    `).join("");
    $("teamNameInputs").querySelectorAll("[data-team-name-index]").forEach(input => {
      input.addEventListener("input", event => {
        const index = Number(event.currentTarget.dataset.teamNameIndex);
        localTeamNameValues[index] = event.currentTarget.value;
      });
    });
  } else {
    $("teamNameHelp").textContent = "オンラインでは各参加者の名前をチーム名にします。";
    $("teamNameInputs").innerHTML = "";
  }

  const teams = aiMode
    ? `あなたとAI${$("aiCount").value}人の合計${Number($("aiCount").value) + 1}チーム`
    : localMode
      ? `同じ画面の${$("localTeamCount").value}チーム`
      : "ルームコードで友達と最大10人";
  $("modeDescription").textContent = onlineMode
    ? `${teams}で参加し、指名・抽選・結果をリアルタイム共有します。無料のFirebase設定後に使えます。`
    : `${teams}で、各チーム${$("pickLimit").value}人を指名します。` +
      "1巡目は指名が重なったら抽選し、外れたチームは当たるまで再指名します。再指名同士が重なった場合も抽選します。2巡目以降は設定した順番で進みます。";

  const remoteGuest = onlineMode && onlineRoomRef && !onlineIsHost;
  $("pickLimit").disabled = remoteGuest || (onlineMode && onlineGameStatus === "playing") || (gameStarted && !allTeamsComplete());
  $("orderMode").disabled = remoteGuest || (onlineMode && onlineGameStatus === "playing") || (gameStarted && !allTeamsComplete());
}

function setOnlineStatus(message) {
  $("onlineRoomStatus").textContent = message;
  const actionStatus = $("onlineActionStatus");
  if (actionStatus) {
    actionStatus.textContent = message;
    actionStatus.classList.toggle("is-error", /できません|読み込めません|まだです|見つかりません|満員|終了しました|失敗/.test(message));
    actionStatus.classList.toggle("is-success", /作りました|参加しました|再接続しました/.test(message));
  }
}

function firebaseConfigurationReady() {
  const config = window.STAGE_PICK_FIREBASE_CONFIG;
  return Boolean(config && config.apiKey && config.projectId && config.databaseURL &&
    !JSON.stringify(config).includes("YOUR_"));
}

function loadFirebaseSdk() {
  if (window.firebase?.auth && window.firebase?.database) return Promise.resolve();
  if (firebaseSdkLoadPromise) return firebaseSdkLoadPromise;

  const sources = [];
  if (!window.firebase?.initializeApp) sources.push("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
  if (!window.firebase?.auth) sources.push("https://www.gstatic.com/firebasejs/12.19.0/firebase-auth-compat.js");
  if (!window.firebase?.database) sources.push("https://www.gstatic.com/firebasejs/12.19.0/firebase-database-compat.js");

  firebaseSdkLoadPromise = sources.reduce((chain, source) => chain.then(() => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = source;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Firebase SDKを読み込めませんでした。ネット接続を確認してください。"));
    document.head.append(script);
  })), Promise.resolve()).catch(error => {
    firebaseSdkLoadPromise = null;
    throw error;
  });
  return firebaseSdkLoadPromise;
}

async function ensureOnlineIdentity() {
  if (!firebaseConfigurationReady()) {
    throw new Error("Firebaseの無料プロジェクト設定がまだです。firebase-config.jsに設定を入れてください。");
  }
  await loadFirebaseSdk();
  if (!window.firebase?.auth || !window.firebase?.database) {
    throw new Error("Firebase SDKを読み込めませんでした。ネット接続を確認してください。");
  }
  if (!window.firebase.apps.length) window.firebase.initializeApp(window.STAGE_PICK_FIREBASE_CONFIG);
  const auth = window.firebase.auth();
  if (!auth.currentUser) await auth.signInAnonymously();
  onlineUid = auth.currentUser.uid;
  return onlineUid;
}

function makeRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return [...bytes].map(byte => alphabet[byte % alphabet.length]).join("");
}

function normalizeOnlineName(value, fallback = "プレイヤー") {
  const cleaned = String(value || "").replace(/[.#$\/\[\]]/g, "").trim().slice(0, 24);
  return cleaned || fallback;
}

function detachOnlineActionsListener() {
  if (onlineActionsListenerRef) {
    onlineActionsListenerRef.off("child_added", onlineActionsListenerCallback || enqueueOnlineAction);
    onlineActionsListenerRef = null;
    onlineActionsListenerCallback = null;
  }
  if (onlineConfirmationsListenerRef) {
    onlineConfirmationsListenerRef.off("child_added", onlineConfirmationsAddedListenerCallback || enqueueOnlineConfirmation);
    onlineConfirmationsListenerRef.off("child_changed", onlineConfirmationsChangedListenerCallback || enqueueOnlineConfirmation);
    onlineConfirmationsListenerRef = null;
    onlineConfirmationsAddedListenerCallback = null;
    onlineConfirmationsChangedListenerCallback = null;
  }
  if (onlineActionsPollTimer !== null) {
    clearTimeout(onlineActionsPollTimer);
    onlineActionsPollTimer = null;
  }
  onlineActionsPollRoomRef = null;
}

function attachOnlineActionsListener() {
  if (!onlineIsHost || !onlineRoomRef) return;
  const roomRef = onlineRoomRef;
  const actionsRef = roomRef.child("actions");
  if (onlineActionsListenerRef?.toString() !== actionsRef.toString()) {
    detachOnlineActionsListener();
    onlineActionsListenerCallback = snapshot => {
      if (roomRef !== onlineRoomRef || !onlineIsHost) return;
      enqueueOnlineAction(snapshot, roomRef);
    };
    actionsRef.on("child_added", onlineActionsListenerCallback, error => {
      if (roomRef !== onlineRoomRef || !onlineIsHost) return;
      const message = error?.code === "PERMISSION_DENIED"
        ? "オンライン操作を受信できません。Firebaseルールの actions 読み取り設定を確認してください。"
        : `オンライン操作を受信できません：${error?.message || "Firebaseの接続を確認してください。"}`;
      console.error("Online actions listener was cancelled", error);
      setOnlineStatus(message);
      if (!$("pickReveal").hidden) $("pickRevealActionHint").textContent = message;
      onlineActionsListenerFailed = true;
      startOnlineActionsPolling();
    });
    onlineActionsListenerRef = actionsRef;
  }
  const confirmationsRef = roomRef.child("confirmations");
  if (onlineConfirmationsListenerRef?.toString() === confirmationsRef.toString()) return;
  onlineConfirmationsAddedListenerCallback = snapshot => {
    if (roomRef === onlineRoomRef && onlineIsHost) enqueueOnlineConfirmation(snapshot);
  };
  onlineConfirmationsChangedListenerCallback = snapshot => {
    if (roomRef === onlineRoomRef && onlineIsHost) enqueueOnlineConfirmation(snapshot);
  };
  confirmationsRef.on("child_added", onlineConfirmationsAddedListenerCallback, error => {
    if (roomRef === onlineRoomRef && onlineIsHost) {
      onlineActionsListenerFailed = true;
      reportOnlineConfirmationsReadError(error);
      startOnlineActionsPolling();
    }
  });
  confirmationsRef.on("child_changed", onlineConfirmationsChangedListenerCallback, error => {
    if (roomRef === onlineRoomRef && onlineIsHost) {
      onlineActionsListenerFailed = true;
      reportOnlineConfirmationsReadError(error);
      startOnlineActionsPolling();
    }
  });
  onlineConfirmationsListenerRef = confirmationsRef;
}

function reportOnlineConfirmationsReadError(error) {
  const message = error?.code === "PERMISSION_DENIED"
    ? "確認を受信できません。FirebaseのRealtime Databaseルールで confirmations の読み取りをホストに許可してください。"
    : `確認を受信できません：${error?.message || "Firebaseの接続を確認してください。"}`;
  console.error("Online confirmations listener was cancelled", error);
  setOnlineStatus(message);
  if (!$("pickReveal").hidden) $("pickRevealActionHint").textContent = message;
}

function reportOnlineActionsReadError(error) {
  const message = error?.code === "PERMISSION_DENIED"
    ? "確認を受信できません。firebase-database-rules.json の最新版をFirebaseのRealtime Databaseに公開してください。"
    : "オンライン操作を受信できません：" + (error?.message || "Firebaseの接続を確認してください。");
  console.error("Online actions could not be read", error);
  setOnlineStatus(message);
  if (!$("pickReveal").hidden) $("pickRevealActionHint").textContent = message;
}

function startOnlineActionsPolling() {
  if (!onlineIsHost || !onlineRoomRef || onlineGameStatus !== "playing" ||
      onlineActionsPollRoomRef === onlineRoomRef) return;
  const roomRef = onlineRoomRef;
  const actionsRef = roomRef.child("actions");
  const confirmationsRef = roomRef.child("confirmations");
  onlineActionsPollRoomRef = roomRef;
  const poll = async () => {
    if (roomRef !== onlineRoomRef || !onlineIsHost || onlineGameStatus !== "playing") {
      if (onlineActionsPollRoomRef === roomRef) detachOnlineActionsListener();
      return;
    }
    let nextDelay = gameStarted && activeMode === "online" ? 3000 : 4000;
    if (gameStarted && activeMode === "online") {
      const [actionsResult, confirmationsResult] = await Promise.allSettled([
        actionsRef.once("value"),
        confirmationsRef.once("value")
      ]);
      if (roomRef !== onlineRoomRef || !onlineIsHost || onlineGameStatus !== "playing") return;
      if (actionsResult.status === "fulfilled") {
        actionsResult.value.forEach(actionSnapshot => enqueueOnlineAction(actionSnapshot));
      } else {
        reportOnlineActionsReadError(actionsResult.reason);
        nextDelay = actionsResult.reason?.code === "PERMISSION_DENIED" ? 8000 : 3000;
      }
      if (confirmationsResult.status === "fulfilled") {
        confirmationsResult.value.forEach(enqueueOnlineConfirmation);
      } else {
        reportOnlineConfirmationsReadError(confirmationsResult.reason);
        nextDelay = confirmationsResult.reason?.code === "PERMISSION_DENIED" ? 8000 : 3000;
      }
    }
    if (roomRef === onlineRoomRef && onlineIsHost && onlineGameStatus === "playing") {
      onlineActionsPollTimer = window.setTimeout(poll, nextDelay);
    } else if (onlineActionsPollRoomRef === roomRef) {
      detachOnlineActionsListener();
    }
  };
  void poll();
}

function setOnlineRoomConnected(code, isHost, initialPlayers = null, deferGameActions = false) {
  const previousRoomRef = onlineRoomRef;
  detachOnlineActionsListener();
  detachOnlineServerClock();
  clearOnlineRevealTimeline();
  if (previousRoomRef) {
    previousRoomRef.child("players").off();
    previousRoomRef.child("status").off();
    previousRoomRef.child("settings").off();
    previousRoomRef.child("state").off();
    previousRoomRef.child("joinRequests").off();
    if (onlineUid) {
      previousRoomRef.child(`players/${onlineUid}`).off();
      previousRoomRef.child(`joinRequests/${onlineUid}`).off();
    }
  }
  if (onlineGuestStatePollTimer !== null) {
    clearTimeout(onlineGuestStatePollTimer);
    onlineGuestStatePollTimer = null;
  }
  onlineGuestStatePollingFallback = false;
  onlineActionsListenerFailed = false;
  if (onlineGuestRebidFallbackTimer !== null) {
    clearTimeout(onlineGuestRebidFallbackTimer);
    onlineGuestRebidFallbackTimer = null;
  }
  onlineRoomCode = code;
  onlineRoomRef = firebase.database().ref(`rooms/${code}`);
  attachOnlineServerClock();
  onlineIsHost = isHost;
  onlinePlayers = initialPlayers || {};
  onlineDepartedTeams = new Set();
  onlineGameStatus = "lobby";
  onlineListenersAttached = false;
  onlineStateRevision = 0;
  onlineAppliedStateRevision = -1;
  onlineRenderedStateRevision = -1;
  onlineLastRenderError = "";
  onlineLastMissingPickLists = "なし";
  onlineLastRemoteStateRevision = null;
  onlineLastRemoteStatePhase = "";
  onlineLastStateReadAt = "";
  onlineLastStateWriteAt = "";
  onlineLastStateReadError = "";
  onlineLastStateWriteError = "";
  onlineActionQueue = Promise.resolve();
  onlineConfirmationQueue = Promise.resolve();
  onlineQueuedConfirmationIds = new Set();
  onlineHandledConfirmationIds = new Set();
  onlineActionPending = false;
  onlineForceKickPending = false;
  onlineStartPending = false;
  onlinePendingAction = null;
  onlineActionAcks = {};
  onlineHandledActionIds = new Set();
  onlineQueuedActionIds = new Set();
  onlineProcessedActionIds = new Set();
  $("onlineRoomCode").value = code;
  $("onlineRoomCodeLabel").textContent = code;
  $("onlineLobby").hidden = false;
  $("createOnlineRoom").hidden = true;
  $("joinOnlineRoom").hidden = true;
  $("onlineRoomCode").disabled = true;
  renderOnlineLobby();
  renderOnlineSyncDebug();

  const connectedRoomRef = onlineRoomRef;
  onlineRoomRef.child("players").on("value", snapshot => {
    if (connectedRoomRef !== onlineRoomRef) return;
    onlinePlayers = snapshot.val() || {};
    renderOnlineLobby();
    // The playing state can arrive before the player roster on a guest device.
    // Re-render turn controls once the UID-to-team mapping is available.
    if (gameStarted && activeMode === "online") {
      renderNominations();
      renderDraft();
      if ($("pickReveal").hidden) renderCandidates();
    }
  });
  onlineRoomRef.child("status").on("value", snapshot => {
    if (connectedRoomRef !== onlineRoomRef) return;
    onlineGameStatus = snapshot.val() || "closed";
    renderOnlineLobby();
    if (onlineGameStatus === "playing" && onlineIsHost && onlineActionsListenerFailed) {
      startOnlineActionsPolling();
    }
    if (onlineGameStatus !== "playing" && onlineActionsPollRoomRef === onlineRoomRef) {
      detachOnlineActionsListener();
    }
    if (onlineGameStatus === "playing" && !onlineIsHost) {
      attachOnlineGuestListeners();
      scheduleOnlineGuestStatePoll();
    }
    if (onlineGameStatus === "closed") setOnlineStatus("このルームは終了しました");
  });

  if (isHost) {
    onlineRoomRef.child("joinRequests").on("child_added", snapshot => {
      if (connectedRoomRef !== onlineRoomRef) return;
      onlineJoinQueue = onlineJoinQueue.then(() => acceptOnlineJoinRequest(snapshot, connectedRoomRef));
    });
    if (!deferGameActions) attachOnlineActionsListener();
  } else {
    onlineRoomRef.child(`players/${onlineUid}`).on("value", snapshot => {
      if (connectedRoomRef !== onlineRoomRef) return;
      const player = snapshot.val();
      if (player?.departed) {
        resetOnlineRoomToSetup(connectedRoomRef, onlineUid);
        if (player.kickedByHost) setOnlineStatus("ホストによってルームから退出させられました。");
      } else if (snapshot.exists()) {
        attachOnlineGuestListeners();
      } else {
        setOnlineStatus("参加申請を送っています。ホストの承認を待っています…");
      }
    });
    onlineRoomRef.child(`joinRequests/${onlineUid}`).on("value", snapshot => {
      if (connectedRoomRef !== onlineRoomRef) return;
      const request = snapshot.val();
      if (request?.status === "full") setOnlineStatus("このルームは満員です。別のルームを作ってください。");
      if (request?.status === "closed") setOnlineStatus("このルームはすでに開始されています。");
    });
  }

  onlineRoomRef.child("settings").on("value", snapshot => {
    if (connectedRoomRef !== onlineRoomRef) return;
    if (onlineIsHost) return;
    const settings = snapshot.val();
    if (!settings) return;
    $("pickLimit").value = String(settings.pickLimit || 5);
    const savedOrderMode = settings.orderMode || "snake";
    $("orderMode").value = savedOrderMode === "random" ? "fixed" : savedOrderMode;
    $("startOrderMode").value = settings.startOrderMode || "random";
    updateModeSetup();
  });

  if (new URLSearchParams(location.search).get("room") !== code) {
    const url = new URL(location.href);
    url.searchParams.set("room", code);
    history.replaceState(null, "", url);
  }
}

function renderOnlineLobby() {
  const players = Object.entries(onlinePlayers).sort(([, a], [, b]) =>
    Number(a.order || 0) - Number(b.order || 0)
  );
  const activePlayers = players.filter(([, player]) => !player.departed);
  $("onlinePlayerList").innerHTML = players.map(([uid, player], index) => {
    const playerName = player.teamName || player.name || "プレイヤー";
    const canKick = onlineIsHost && !player.host && !player.departed &&
      !onlineStartPending && !onlineRestartPending && ["lobby", "playing"].includes(onlineGameStatus);
    return `
      <li>
        <span class="online-player-number">${index + 1}</span>
        <strong>${escapeHTML(playerName)}</strong>
        <small>${player.departed ? player.kickedByHost ? "強制退出済み" : "退出済み" : player.host ? "ホスト" : "参加者"}</small>
        ${canKick ? `<button class="online-player-kick" type="button" data-kick-player="${escapeHTML(uid)}" aria-label="${escapeHTML(playerName)}を強制退出"${onlineForceKickPending ? " disabled" : ""}>退出</button>` : ""}
      </li>
    `;
  }).join("");
  const hostCanStart = onlineIsHost && onlineGameStatus === "lobby" && activePlayers.length >= 2 && !onlineForceKickPending && !onlineStartPending;
  $("startOnlineGame").hidden = !onlineIsHost || onlineGameStatus !== "lobby";
  $("startOnlineGame").disabled = onlineForceKickPending || onlineStartPending || !hostCanStart;
  $("startOnlineGame").textContent = onlineStartPending
    ? "ドラフトを準備中…"
    : onlineForceKickPending
      ? "退出を処理中…"
    : hostCanStart
      ? `${activePlayers.length}人でドラフト開始`
      : `参加者待ち（${activePlayers.length} / 10人）`;
  const finished = onlineGameStatus === "playing" && gameStarted && allTeamsComplete() && !pendingR1Resolution && $("pickReveal").hidden && pickRevealQueue.length === 0;
  $("restartOnlineGame").hidden = !onlineIsHost || !finished;
  $("restartOnlineGame").disabled = onlineRestartPending || onlineForceKickPending || onlineStartPending;
  $("restartOnlineGame").textContent = onlineRestartPending ? "再ドラフトを準備中…" : onlineForceKickPending ? "退出を処理中…" : "同じルームで再ドラフト";
  $("onlineLobbyHint").textContent = onlineGameStatus === "playing"
    ? finished
      ? onlineIsHost
        ? "結果を確認したら「同じルームで再ドラフト」を押してください。参加者はそのまま次のドラフトに参加できます。"
        : "ドラフトが終了しました。ホストが再ドラフトを始めると、このルームのまま次のドラフトに進みます。"
      : onlineIsHost
        ? "ドラフト進行中です。参加者一覧の「退出」から強制退出できます。退出したチームの残り指名はスキップします。"
        : "ドラフト進行中です。参加者が退出した場合、その後の指名はスキップします。"
    : onlineIsHost
      ? "2〜10人で遊べます。参加者がそろったら開始できます。参加者一覧から退出させられます。終了後も同じルームで再ドラフトできます。"
      : "2〜10人で遊べます。参加者がそろったらホストが開始します。終了後も同じルームで再ドラフトできます。";
  $("closeOnlineRoom").hidden = !onlineIsHost || !onlineRoomRef;
  const leaveButton = $("leaveOnlineRoom");
  leaveButton.hidden = onlineIsHost || !["lobby", "closed", "playing"].includes(onlineGameStatus);
  leaveButton.disabled = onlineActionPending || onlineRestartPending;
  leaveButton.textContent = onlinePendingAction?.kind === "leave" ? "退出を処理中…" : "ルームを退出";
  const finalLeaveButton = $("leaveOnlineRoomFromResults");
  finalLeaveButton.disabled = onlineActionPending || onlineRestartPending;
  finalLeaveButton.textContent = onlinePendingAction?.kind === "leave" ? "退出を処理中…" : "ルームを退出";
  $("closeOnlineRoom").disabled = onlineForceKickPending || onlineStartPending;
  $("closeOnlineRoomFromResults").disabled = onlineRestartPending || onlineForceKickPending || onlineStartPending;
  $("closeOnlineRoom").textContent = "ルーム終了・データ削除";
  if (onlineGameStatus === "playing") setOnlineStatus(finished ? "ドラフト終了・結果を確認できます" : "ドラフト進行中");
  else if (onlineGameStatus === "lobby") setOnlineStatus(onlineIsHost ? "友達の参加を待っています" : "ルームに参加しました");
  renderOnlineSyncDebug();
  $("pickLimit").disabled = onlineGameStatus === "playing" || (!onlineIsHost && Boolean(onlineRoomRef));
  $("orderMode").disabled = onlineGameStatus === "playing" || (!onlineIsHost && Boolean(onlineRoomRef));
}

function onlineStatePhaseSummary(state) {
  if (!state) return "状態なし";
  const reveal = state.activePickReveal;
  const batch = state.pendingR1Resolution;
  const queueCount = (state.pickRevealQueue || []).length;
  const bidCount = (state.r1Nominations || []).length;
  if (batch) {
    return `1巡目解決中: 公開${(batch.revealedTeams || []).length}/${(batch.nominations || []).length}, 抽選結果${(batch.results || []).length}, reveal=${reveal?.type || "なし"}, queue=${queueCount}`;
  }
  if (state.r1RevealPending) return `1巡目入札完了: ホスト開示待ち ${bidCount}/${(state.r1NominationOrder || []).length}`;
  if (!state.r1Started && (state.r1NominationOrder || []).length) {
    return `1巡目再入札: ${bidCount}/${state.r1NominationOrder.length}, order=${state.r1NominationOrder.join(",")}`;
  }
  if (reveal) return `${reveal.round || "?"}巡目発表: ${reveal.type || "?"}, queue=${queueCount}`;
  return state.r1Started ? `${state.round || 2}巡目通常指名` : "1巡目入札";
}

function recordOnlineRemoteState(state) {
  if (!state) return;
  onlineLastRemoteStateRevision = Number.isFinite(Number(state.stateRevision)) ? Number(state.stateRevision) : "なし";
  onlineLastRemoteStatePhase = onlineStatePhaseSummary(state);
  const remotePicks = state.picks && typeof state.picks === "object" ? state.picks : {};
  const remoteTeams = Array.isArray(state.teamNames) ? state.teamNames : [];
  onlineLastMissingPickLists = remoteTeams.filter(team => remotePicks[team] == null).join(",") || "なし";
  onlineLastStateReadAt = new Date().toLocaleTimeString("ja-JP", { hour12: false });
  onlineLastStateReadError = "";
  renderOnlineSyncDebug();
}

function renderOnlineSyncDebug() {
  const panel = $("onlineSyncDebug");
  if (!panel) return;
  const enabled = new URLSearchParams(location.search).get("syncdebug") === "1";
  panel.hidden = !enabled || !onlineRoomRef;
  if (panel.hidden) return;
  const ownTeam = onlineTeamForUid(onlineUid);
  const currentTeam = currentTeamName();
  const candidateList = $("candidateList");
  const candidateGate = candidateSelectionGate(currentTeam);
  const desiredCandidateGate = candidateGateSignature(currentTeam, candidateGate.canPickNow);
  if (candidateList?.dataset.gateSignature !== desiredCandidateGate) renderCandidates();
  const submittedTeams = r1Nominations.map(item => item.team);
  const ownActionAck = onlineUid ? onlineActionAcks[onlineUid] : null;
  const newestActionAck = Object.values(onlineActionAcks || {}).sort((a, b) =>
    Number(b?.at || 0) - Number(a?.at || 0)
  )[0] || null;
  const actionDebug = onlinePendingAction
    ? `送信中 ${onlinePendingAction.kind} team=${onlinePendingAction.team || "?"} candidate=${onlinePendingAction.idolName || onlinePendingAction.idolId || "—"} group=${onlinePendingAction.idolGroup || "—"} attempt=${onlinePendingAction.r1NominationAttempt} client=${onlinePendingAction.clientBuild || "?"}`
    : ownActionAck
      ? `応答 ${ownActionAck.kind || "?"} accepted=${Boolean(ownActionAck.accepted)} reason=${ownActionAck.reason || "なし"} client=${ownActionAck.clientBuild || "?"} host=${ownActionAck.hostBuild || "旧版/不明"} requested=${ownActionAck.requestedIdol || "—"} hostResolved=${ownActionAck.hostResolvedIdol || "—"} attempt=${ownActionAck.actionAttempt ?? "—"}/${ownActionAck.hostAttemptBefore ?? "—"} phase=${ownActionAck.hostPhaseBefore || "—"} → ${ownActionAck.hostPhaseAfter || "—"}`
      : "応答なし";
  const newestActionDebug = newestActionAck && newestActionAck !== ownActionAck
    ? `最新応答 ${newestActionAck.kind || "?"} accepted=${Boolean(newestActionAck.accepted)} team=${newestActionAck.team || "?"} reason=${newestActionAck.reason || "なし"} client=${newestActionAck.clientBuild || "?"} host=${newestActionAck.hostBuild || "旧版/不明"} requested=${newestActionAck.requestedIdol || "—"} hostResolved=${newestActionAck.hostResolvedIdol || "—"} attempt=${newestActionAck.actionAttempt ?? "—"}/${newestActionAck.hostAttemptBefore ?? "—"} phase=${newestActionAck.hostPhaseBefore || "—"} → ${newestActionAck.hostPhaseAfter || "—"}`
    : "";
  const localPhase = onlineIsHost
    ? onlineStatePhaseSummary(serializeOnlineGame())
    : onlineStatePhaseSummary({
        r1Started,
        round,
        r1RevealPending,
        r1Nominations,
        r1NominationOrder,
        pendingR1Resolution: pendingR1Resolution ? {
          nominations: pendingR1Resolution.nominations || [],
          revealedTeams: [...pendingR1Resolution.revealedTeams],
          results: pendingR1Resolution.results || []
        } : null,
        activePickReveal: serializeOnlineReveal(activePickReveal),
        pickRevealQueue: pickRevealQueue.map(serializeOnlineReveal)
      });
  panel.textContent = [
    `clientBuild=${onlineClientBuild}`,
    `room=${onlineRoomCode} role=${onlineIsHost ? "host" : "guest"} uid=${onlineUid.slice(0, 8)}`,
    `writeRev=${onlineIsHost ? onlineStateRevision : "—"} writeAt=${onlineLastStateWriteAt || "—"}${onlineLastStateWriteError ? ` error=${onlineLastStateWriteError}` : ""}`,
    `remoteRev=${onlineLastRemoteStateRevision ?? "—"} appliedRev=${onlineAppliedStateRevision} renderedRev=${onlineRenderedStateRevision} readAt=${onlineLastStateReadAt || "—"}${onlineLastStateReadError ? ` readError=${onlineLastStateReadError}` : ""}${onlineLastRenderError ? ` renderError=${onlineLastRenderError}` : ""}`,
    `missingPickLists=${onlineLastMissingPickLists}`,
    `remote=${onlineLastRemoteStatePhase || "—"}`,
    `local=${localPhase}`,
    `ownTeam=${ownTeam || "なし"} turn=${currentTeam || "なし"} submitted=${submittedTeams.join(",") || "なし"}`,
    `pickGate control=${currentTeam ? canControlTeam(currentTeam) : false} pending=${onlineActionPending} revealHidden=${$("pickReveal").hidden} resolution=${Boolean(pendingR1Resolution)} firstRoundHostConfirm=${r1RevealPending}`,
    `candidateUI=${candidateList?.dataset.gateSignature === desiredCandidateGate ? "fresh" : "stale"} selectable=${candidateGate.canPickNow} disabled=${candidateList?.querySelectorAll(".candidate-select:disabled").length ?? 0}`,
    `candidateTap=${lastCandidateInteraction} pendingPick=${pendingDraftPickId || "なし"} confirmVisible=${!$("pickConfirmation").hidden}`,
    `pickAction=${actionDebug}`,
    newestActionDebug,
    `r1Picks=${teamNames.map(team => `${displayTeamName(team)}:${(picks[team] || []).filter(item => item.round === 1).map(item => item.name).join("+") || "—"}`).join(",")}`,
    `boardR1=${[...$("draftBoard").querySelectorAll("tbody tr:first-child td")].map(cell => cell.innerText.replace(/\s+/g, " ").trim() || "—").join("|") || "—"}`
  ].join("\n");
}

async function acceptOnlineJoinRequest(snapshot, sourceRoomRef = onlineRoomRef) {
  if (!onlineIsHost || onlineGameStatus !== "lobby" || sourceRoomRef !== onlineRoomRef) return;
  const uid = snapshot.key;
  const request = snapshot.val();
  if (!uid || !request) return;
  if (onlinePlayers[uid]?.kickedByHost) {
    await snapshot.ref.update({ status: "kicked" });
    return;
  }
  if (onlinePlayers[uid]) {
    await snapshot.ref.remove();
    return;
  }
  const activePlayers = Object.entries(onlinePlayers).filter(([, player]) => !player.departed);
  if (activePlayers.length >= 10) {
    await snapshot.ref.update({ status: "full" });
    return;
  }
  const baseName = normalizeOnlineName(request.name);
  const occupied = new Set(activePlayers.map(([, player]) => player.teamName));
  let teamName = baseName;
  let suffix = 2;
  while (occupied.has(teamName)) teamName = `${baseName} ${suffix++}`;
  const order = Math.max(-1, ...Object.values(onlinePlayers).map(player => Number(player.order || 0))) + 1;
  await sourceRoomRef.child(`players/${uid}`).set({
    name: baseName,
    teamName,
    order,
    host: false
  });
  if (sourceRoomRef !== onlineRoomRef || !onlineIsHost) return;
  onlinePlayers[uid] = { name: baseName, teamName, order, host: false };
  renderOnlineLobby();
  await snapshot.ref.remove();
}

function scheduleOnlineGuestStatePoll() {
  if (!onlineGuestStatePollingFallback || onlineGuestStatePollTimer !== null || onlineIsHost ||
      !onlineRoomRef || onlineGameStatus !== "playing") return;
  onlineGuestStatePollTimer = window.setTimeout(async () => {
    onlineGuestStatePollTimer = null;
    const roomRef = onlineRoomRef;
    if (!roomRef || roomRef !== onlineRoomRef || onlineIsHost) return;
    if (onlineGameStatus === "playing") {
      try {
        const snapshot = await roomRef.child("state").once("value");
        if (roomRef !== onlineRoomRef || onlineIsHost) return;
        const state = snapshot.val();
        if (state) {
          recordOnlineRemoteState(state);
          applyOnlineGameState(state);
          recoverIdleGuestFirstRoundResolution();
        }
      } catch (error) {
        if (roomRef === onlineRoomRef) {
          onlineLastStateReadError = error?.message || "read failed";
          renderOnlineSyncDebug();
          setOnlineStatus(error.message || "共有状態を再取得できませんでした。接続を確認してください。");
        }
      }
    }
    scheduleOnlineGuestStatePoll();
  }, $("pickReveal").hidden ? 3000 : 800);
}

function attachOnlineGuestListeners() {
  if (onlineIsHost || !onlineRoomRef) return;
  const roomRef = onlineRoomRef;
  if (!onlineListenersAttached) {
    onlineListenersAttached = true;
    roomRef.child("state").on("value", snapshot => {
      if (roomRef !== onlineRoomRef || onlineIsHost) return;
      onlineGuestStatePollingFallback = false;
      if (onlineGuestStatePollTimer !== null) {
        clearTimeout(onlineGuestStatePollTimer);
        onlineGuestStatePollTimer = null;
      }
      const state = snapshot.val();
      if (state) {
        recordOnlineRemoteState(state);
        applyOnlineGameState(state);
        recoverIdleGuestFirstRoundResolution();
      }
    }, error => {
      if (roomRef !== onlineRoomRef || onlineIsHost) return;
      onlineLastStateReadError = error?.message || "listener failed";
      renderOnlineSyncDebug();
      setOnlineStatus(error.message || "共有状態を受信できません。接続を確認してください。");
      if (error?.code !== "PERMISSION_DENIED") {
        onlineGuestStatePollingFallback = true;
        scheduleOnlineGuestStatePoll();
      }
    });
  }
}

async function createOnlineRoom() {
  try {
    setOnlineStatus("Firebaseに接続しています…");
    const uid = await ensureOnlineIdentity();
    const baseName = normalizeOnlineName($("onlinePlayerName").value, "ホスト");
    let code = makeRoomCode();
    let roomRef = firebase.database().ref(`rooms/${code}`);
    for (let attempt = 0; attempt < 4 && (await roomRef.child("status").once("value")).exists(); attempt += 1) {
      code = makeRoomCode();
      roomRef = firebase.database().ref(`rooms/${code}`);
    }
    await roomRef.set({
      hostUid: uid,
      status: "lobby",
      settings: { pickLimit: Number($("pickLimit").value), orderMode: $("orderMode").value, startOrderMode: $("startOrderMode").value },
      players: { [uid]: { name: baseName, teamName: baseName, order: 0, host: true } }
    });
    setOnlineRoomConnected(code, true);
    setOnlineStatus("ルームを作りました。招待リンクを友達に送ってください。");
  } catch (error) {
    setOnlineStatus(error.message || "ルームを作れませんでした。Firebase設定を確認してください。");
  }
}

async function joinOnlineRoom() {
  try {
    setOnlineStatus("ルームを探しています…");
    const uid = await ensureOnlineIdentity();
    const code = $("onlineRoomCode").value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (code.length !== 8) throw new Error("8文字のルームコードを入力してください。");
    const roomRef = firebase.database().ref(`rooms/${code}`);
    const statusSnapshot = await roomRef.child("status").once("value");
    if (!statusSnapshot.exists()) throw new Error("そのルームが見つかりません。コードを確認してください。");
    const memberSnapshot = await roomRef.child(`players/${uid}`).once("value");
    if (memberSnapshot.exists()) {
      if (memberSnapshot.val()?.kickedByHost) {
        throw new Error("ホストにより退出されたため、このルームには再参加できません。");
      }
      const playersSnapshot = await roomRef.child("players").once("value");
      const isHost = Boolean(memberSnapshot.val()?.host);
      const isPlaying = statusSnapshot.val() === "playing";
      setOnlineRoomConnected(code, isHost, playersSnapshot.val() || {}, isHost && isPlaying);
      if (isHost && isPlaying) {
        const stateSnapshot = await roomRef.child("state").once("value");
        if (stateSnapshot.exists()) {
          onlineStateRevision = Number(stateSnapshot.val()?.stateRevision || 0);
          onlineHostRestoring = true;
          try {
            applyOnlineGameState(stateSnapshot.val());
          } finally {
            onlineHostRestoring = false;
          }
        }
        attachOnlineActionsListener();
        resumeOnlineHostProgress();
        setOnlineStatus("進行中のルームにホストとして再接続しました。");
      } else if (!isHost && isPlaying) {
        attachOnlineGuestListeners();
        setOnlineStatus("進行中のドラフトに再接続しました。");
      } else {
        setOnlineStatus(isHost ? "作成済みのルームに再接続しました。" : "参加済みのルームに再接続しました。");
      }
      return;
    }
    if (statusSnapshot.val() !== "lobby") throw new Error("このルームはすでに開始されています。参加済みの端末から再接続してください。");
    setOnlineRoomConnected(code, false);
    await roomRef.child(`joinRequests/${uid}`).set({
      name: normalizeOnlineName($("onlinePlayerName").value),
      createdAt: Date.now()
    });
    setOnlineStatus("参加申請を送っています。ホストの承認を待っています…");
  } catch (error) {
    setOnlineStatus(error.message || "参加できませんでした。コードを確認してください。");
  }
}

async function copyOnlineInvite() {
  if (!onlineRoomCode) return;
  const invite = new URL(location.href);
  invite.searchParams.set("room", onlineRoomCode);
  try {
    await navigator.clipboard.writeText(invite.toString());
    setOnlineStatus("招待リンクをコピーしました。友達に送ってください。");
  } catch {
    window.prompt("この招待リンクをコピーして友達に送ってください", invite.toString());
  }
}

async function closeOnlineRoom() {
  if (!onlineIsHost || !onlineRoomRef || onlineForceKickPending || onlineStartPending) return;
  if (!window.confirm("ルームを終了し、参加者名・設定・指名結果を含むルームデータを削除します。続けますか？")) return;
  try {
    const roomRef = onlineRoomRef;
    const closingUid = onlineUid;
    if (onlineStateWriteTimer !== null) {
      clearTimeout(onlineStateWriteTimer);
      onlineStateWriteTimer = null;
    }
    await roomRef.remove();
    resetOnlineRoomToSetup(roomRef, closingUid);
    setOnlineStatus("ルームを閉じました。");
  } catch (error) {
    setOnlineStatus(error.message || "ルームを閉じられませんでした。");
  }
}

function resetOnlineRoomToSetup(roomRef, leavingUid) {
  if (!roomRef) return;
  detachOnlineActionsListener();
  detachOnlineServerClock();
  clearOnlineRevealTimeline();
  roomRef.child("players").off();
  roomRef.child("status").off();
  roomRef.child("settings").off();
  roomRef.child("state").off();
  roomRef.child("joinRequests").off();
  if (leavingUid) {
    roomRef.child(`players/${leavingUid}`).off();
    roomRef.child(`joinRequests/${leavingUid}`).off();
  }
  if (onlineGuestStatePollTimer !== null) {
    clearTimeout(onlineGuestStatePollTimer);
    onlineGuestStatePollTimer = null;
  }
  onlineGuestStatePollingFallback = false;
  onlineActionsListenerFailed = false;
  clearOnlineGuestRebidFallback();
  if (onlineStateWriteTimer !== null) {
    clearTimeout(onlineStateWriteTimer);
    onlineStateWriteTimer = null;
  }

  onlineRoomRef = null;
  onlineRoomCode = "";
  onlineIsHost = false;
  onlinePlayers = {};
  onlineDepartedTeams = new Set();
  onlineGameStatus = "";
  onlineListenersAttached = false;
  onlineActionPending = false;
  onlineForceKickPending = false;
  onlineStartPending = false;
  onlinePendingAction = null;
  onlineActionAcks = {};
  onlineRestartPending = false;

  if (aiAdvanceTimer !== null) {
    clearTimeout(aiAdvanceTimer);
    aiAdvanceTimer = null;
  }
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }
  pickRevealQueue = [];
  pickRevealPhase = "closed";
  activePickReveal = null;
  onlineRevealAcks = new Set();
  onlineShownRevealKey = "";
  gameSessionId = "";
  gameStarted = false;
  finalResultsWasVisible = false;
  activeMode = "ai";
  aiTeams = new Set();
  aiStrategyByTeam = new Map();
  teamNames = localTeamNames.slice(0, 4);
  setDraftedMembers([]);
  selectedId = null;
  pendingDraftPickId = null;
  picks = Object.fromEntries(teamNames.map(team => [team, []]));
  round = 1;
  r1Started = false;
  r1NominationOrder = [];
  r1NominationIndex = 0;
  r1NominationAttempt = 1;
  r1Nominations = [];
  r1Queue = [];
  r1RevealPending = false;
  pendingR1Resolution = null;
  waiverOrder = teamNames.slice();
  firstRoundWaiverOrder = [];
  turnIndex = 0;
  lotterySummary = "";
  firstRoundLotteryLosses = Object.fromEntries(teamNames.map(team => [team, []]));

  $("playMode").value = "ai";
  $("pickLimit").value = "5";
  $("orderMode").value = "snake";
  $("startOrderMode").value = "random";
  $("pickReveal").hidden = true;
  $("onlineLobby").hidden = true;
  $("onlinePlayerList").innerHTML = "";
  $("onlineRoomCodeLabel").textContent = "";
  $("createOnlineRoom").hidden = false;
  $("joinOnlineRoom").hidden = false;
  $("onlineRoomCode").disabled = false;
  $("onlineRoomCode").value = "";
  $("onlineLobbyHint").textContent = "2〜10人で遊べます。参加者がそろったらホストが開始します。終了後も同じルームで再ドラフトできます。";
  setFinalScreenshotMode(false, false);

  const url = new URL(location.href);
  url.searchParams.delete("room");
  url.hash = "";
  history.replaceState(null, "", url);
  updateModeSetup();
  renderNominations();
  renderCandidates();
  renderDraft();
  setOnlineStatus("ルーム作成や参加の結果がここに表示されます。");
  $("onlineRoomStatus").textContent = "接続中…";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function leaveOnlineRoom() {
  if (!onlineRoomRef || onlineIsHost || !["lobby", "closed", "playing"].includes(onlineGameStatus)) return;

  if (onlineGameStatus === "playing") {
    if (onlineActionPending) {
      setOnlineStatus("別の操作を反映中です。完了してから退出してください。");
      return;
    }
    if (submitOnlineAction({ kind: "leave" })) {
      $("leaveOnlineRoom").disabled = true;
      $("leaveOnlineRoom").textContent = "退出を処理中…";
      $("leaveOnlineRoomFromResults").disabled = true;
      $("leaveOnlineRoomFromResults").textContent = "退出を処理中…";
      setOnlineStatus("退出を送信しました。ホストが反映すると初期画面に戻ります。以降の指名はスキップされます。");
    }
    return;
  }

  const roomRef = onlineRoomRef;
  const leavingUid = onlineUid;
  const wasLobby = onlineGameStatus === "lobby";

  // Reset locally first so an old or closed room cannot trap the player.
  resetOnlineRoomToSetup(roomRef, leavingUid);
  if (!wasLobby || !leavingUid) return;
  void (async () => {
    const playerRemoval = roomRef.child(`players/${leavingUid}`).remove();
    const requestRef = roomRef.child(`joinRequests/${leavingUid}`);
    const requestRemoval = (async () => {
      // The host removes a join request when accepting it. Only delete it when
      // it still exists; Realtime Database rules reject deleting a missing one.
      const requestSnapshot = await requestRef.once("value");
      if (requestSnapshot.exists()) await requestRef.remove();
    })();
    const results = await Promise.allSettled([playerRemoval, requestRemoval]);
    results.forEach(result => {
      if (result.status === "rejected") console.warn("Could not fully remove online room membership", result.reason);
    });
  })().catch(error => console.warn("Could not fully remove online room membership", error));
}

function teamOwnerUid(team) {
  return Object.entries(onlinePlayers).find(([, player]) =>
    (player.teamName || player.name) === team
  )?.[0] || "";
}

function onlineRevealParticipantUids(reveal = activePickReveal) {
  if (!reveal) return [];
  // The host snapshots the exact participants when the reveal is queued. This
  // avoids relying on each device resolving the same team-name-to-UID mapping.
  if (Array.isArray(reveal.participantUids) && reveal.participantUids.length) {
    return [...new Set(reveal.participantUids.filter(uid => uid && !onlinePlayers[uid]?.departed))];
  }
  const teams = reveal.type === "lottery"
    ? (reveal.teams?.length ? reveal.teams : reveal.drawOrder || [])
    : reveal.type === "nomination"
      ? [reveal.team]
      : teamNames;
  const participantUids = [...new Set(teams.map(teamOwnerUid).filter(Boolean))];
  return participantUids.length
    ? participantUids
    : onlinePlayersInDraftOrder().map(([uid]) => uid);
}

function onlineTeamForUid(uid) {
  const player = onlinePlayers[uid];
  return player?.teamName || player?.name || "";
}

function canControlTeam(team, actorUid = onlineUid) {
  if (activeMode === "online") return Boolean(actorUid && onlineTeamForUid(actorUid) === team);
  return !aiTeams.has(team);
}

function currentRevealKey() {
  const reveal = activePickReveal;
  if (!reveal) return "";
  const idolId = reveal.idol?.id || reveal.idolId || "";
  return `${gameSessionId}:${reveal.type}:${reveal.round}:${idolId}`;
}

function actionMatchesCurrentReveal(action) {
  if (!action?.revealKey || !activePickReveal) return false;
  if (action.revealKey === currentRevealKey()) return true;
  if (action.kind !== "next") return false;

  const reveal = activePickReveal;
  const idol = reveal.idol || {};
  const idolId = idol.id || reveal.idolId || "";
  const legacyKey = `${reveal.type}:${reveal.team}:${reveal.round}:${idolId}`;
  if (action.revealKey === legacyKey) return true;

  // Different cached catalog versions can resolve the same person to different
  // local IDs. Confirm the reveal using stable person data as well as the key.
  const sameRevealContext = action.revealType === reveal.type &&
    Number(action.revealRound) === Number(reveal.round);
  const samePerson = Boolean(
    (action.revealIdolId && action.revealIdolId === idolId) ||
    (action.revealPersonKey && idol.personKey && action.revealPersonKey === idol.personKey) ||
    (action.revealName && action.revealGroup &&
      action.revealName === idol.japaneseName && action.revealGroup === idol.group)
  );
  if (sameRevealContext && samePerson) return true;

  // A session token can differ across a stale tab, while the rest of the
  // reveal identity still matches the host's currently open card.
  const keyParts = String(action.revealKey).split(":");
  return keyParts.length === 4 &&
    keyParts[1] === reveal.type &&
    Number(keyParts[2]) === Number(reveal.round) &&
    keyParts[3] === idolId;
}

function onlineRevealAutoAdvanceDelay(reveal = activePickReveal) {
  if (activeMode !== "online" || !reveal) return 0;
  if (reveal.type === "lottery") return reveal.winner ? 5000 : 0;
  return 4000;
}

function scheduleRevealAutoAdvance(delay) {
  if (!onlineIsHost || !delay || pickRevealTimer !== null) return;
  const reveal = activePickReveal;
  const dueAt = Number(reveal?.nextRevealAt) || onlineServerNow() + delay;
  pickRevealTimer = window.setTimeout(() => {
    pickRevealTimer = null;
    if (activePickReveal === reveal && pickRevealPhase === "revealed") showNextPickReveal();
  }, Math.max(0, dueAt - onlineServerNow()));
}

function applyOnlineLotteryOpeningVisual(reveal, showOutcome = false) {
  const buttons = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")];
  buttons.forEach(button => {
    const envelope = Number(button.dataset.lotteryEnvelope);
    const team = reveal.selections.get(envelope);
    if (!team) return;
    const won = envelope === Number(reveal.winningEnvelope);
    const result = button.querySelector(".lottery-envelope-result");
    result.querySelector("strong").textContent = displayTeamName(team);
    result.querySelector("small").textContent = won ? "交渉権獲得" : "再指名へ";
    button.style.setProperty("--lottery-team-color", teamColorPalette[Math.max(0, teamNames.indexOf(team)) % teamColorPalette.length]);
    button.classList.remove("is-opening");
    button.classList.add("is-open");
    if (showOutcome) {
      button.classList.add(won ? "is-winner" : "is-loser");
      result.classList.add(won ? "is-winner" : "is-loser");
      button.setAttribute("aria-label", won
        ? `${displayTeamName(team)}が交渉権を獲得`
        : `${displayTeamName(team)}は再指名へ`);
    }
  });
  if (showOutcome) {
    const winner = reveal.selections.get(Number(reveal.winningEnvelope));
    if (winner) {
      $("lotteryBoard").classList.add("is-revealed");
      $("lotteryTurn").textContent = `交渉権獲得チーム：${displayTeamName(winner)}`;
      $("lotteryOutcome").textContent = "このチームが交渉権を獲得しました";
      const winnerIndex = Math.max(0, teamNames.indexOf(winner));
      $("lotteryBoard").style.setProperty("--lottery-winner-color", teamColorPalette[winnerIndex % teamColorPalette.length]);
    }
  }
}

function scheduleOnlineRevealVisualTimeline() {
  const reveal = activePickReveal;
  if (activeMode !== "online" || !reveal || $("pickReveal").hidden) {
    clearOnlineRevealTimeline();
    return;
  }

  const timelineKey = `${gameSessionId}:${reveal.type}:${reveal.round}:${reveal.idol?.id || reveal.idolId || ""}:${Number(reveal.introStartedAt) || 0}`;
  if (timelineKey !== onlineRevealTimelineKey) {
    if (onlineRevealTimelineTimer !== null) clearTimeout(onlineRevealTimelineTimer);
    onlineRevealTimelineTimer = null;
    onlineRevealTimelineKey = timelineKey;
    onlineRevealTimelineStage = "";
  }

  const scheduleAt = (stage, targetAt) => {
    if (onlineRevealTimelineTimer !== null && onlineRevealTimelineStage === stage) return;
    if (onlineRevealTimelineTimer !== null) clearTimeout(onlineRevealTimelineTimer);
    onlineRevealTimelineStage = stage;
    onlineRevealTimelineTimer = window.setTimeout(() => {
      onlineRevealTimelineTimer = null;
      onlineRevealTimelineStage = "";
      if (timelineKey === onlineRevealTimelineKey) scheduleOnlineRevealVisualTimeline();
    }, Math.max(0, targetAt - onlineServerNow()));
  };

  const now = onlineServerNow();
  if (pickRevealPhase === "intro") {
    const startAt = Number(reveal.introStartedAt) || now;
    const duration = Math.max(0, Number(reveal.introDurationMs) || (reveal.type === "lottery" ? 1050 : 2000));
    const revealAt = startAt + duration;
    const card = $("pickRevealCard");
    if (!card.classList.contains("is-visible")) {
      if (now < startAt) {
        scheduleAt("intro", startAt);
        return;
      }
      card.classList.add("is-visible");
      onlineRevealTimelineStage = "intro-shown";
    }
    if (reveal.type !== "lottery" && !$("pickRevealFlipCard").classList.contains("is-flipped")) {
      if (now < revealAt) scheduleAt("member", revealAt);
      else {
        $("pickRevealFlipCard").classList.add("is-flipped");
        $("pickRevealActionHint").textContent = "発表内容を表示中です。ホストの進行に同期しています。";
        onlineRevealTimelineStage = "member-shown";
      }
    }
    return;
  }

  if (reveal.type === "lottery" && reveal.opening && !reveal.winner) {
    const openingAt = Number(reveal.openingAt) || now;
    const outcomeAt = Number(reveal.winnerAt) || openingAt + (Number(reveal.openingDurationMs) || 560);
    if (now < openingAt) {
      scheduleAt("lottery-opening", openingAt);
      return;
    }
    const winner = reveal.selections.get(Number(reveal.winningEnvelope));
    if (!winner) return;
    const buttons = $("lotteryTickets").querySelectorAll("[data-lottery-envelope]");
    buttons.forEach(button => {
      button.classList.add("is-opening");
      button.disabled = true;
    });
    if (now < outcomeAt) {
      scheduleAt("lottery-outcome", outcomeAt);
      return;
    }
    applyOnlineLotteryOpeningVisual(reveal, true);
    onlineRevealTimelineStage = "lottery-shown";
    return;
  }

  clearOnlineRevealTimeline();
}

function clearOnlineGuestRebidFallback() {
  if (onlineGuestRebidFallbackTimer !== null) {
    clearTimeout(onlineGuestRebidFallbackTimer);
    onlineGuestRebidFallbackTimer = null;
  }
}

function firstRoundConflictCount(batch = pendingR1Resolution) {
  if (!batch) return 0;
  const conflicts = new Map();
  (batch.nominations || []).forEach(item => {
    const idol = idols.find(candidate => candidate.id === item.idolId);
    if (!idol) return;
    const personKey = idol.personKey || idol.id;
    conflicts.set(personKey, (conflicts.get(personKey) || 0) + 1);
  });
  return [...conflicts.values()].filter(count => count > 1).length;
}

function applyFirstRoundLotteryOutcome(reveal) {
  const batch = pendingR1Resolution;
  if (!batch || reveal?.type !== "lottery" || !reveal.winner) return false;

  const winnerPicks = picks[reveal.winner] || (picks[reveal.winner] = []);
  if (!winnerPicks.some(item => item.round === 1)) {
    winnerPicks.push(pickRecord(reveal.idol, 1));
  }
  markPersonDrafted(reveal.idol);
  batch.waiting.delete(reveal.winner);
  reveal.teams.forEach(team => {
    if (team === reveal.winner) return;
    const losses = firstRoundLotteryLosses[team] || (firstRoundLotteryLosses[team] = []);
    if (!losses.some(item => item.name === reveal.idol.japaneseName && item.group === reveal.idol.group)) {
      losses.push({
        name: reveal.idol.japaneseName,
        group: reveal.idol.group,
        agency: reveal.idol.agency
      });
    }
  });
  return true;
}

function scheduleOnlineGuestRebidFallback() {
  clearOnlineGuestRebidFallback();
  if (onlineIsHost || activeMode !== "online" || !onlineRoomRef || !pendingR1Resolution ||
      pickRevealPhase !== "revealed" || pickRevealQueue.length > 0 || !activePickReveal) return;

  const reveal = activePickReveal;
  if (reveal.type === "lottery" && !reveal.winner) return;
  if (reveal.type !== "lottery" && reveal.type !== "nomination") return;

  const expectedRevealKey = currentRevealKey();
  const expectedSessionId = gameSessionId;
  const expectedRevision = onlineAppliedStateRevision;
  const expectedRoomRef = onlineRoomRef;
  const delay = onlineRevealAutoAdvanceDelay(reveal) + 350;
  onlineGuestRebidFallbackTimer = window.setTimeout(async () => {
    onlineGuestRebidFallbackTimer = null;
    if (onlineIsHost || !expectedRoomRef || expectedRoomRef !== onlineRoomRef || expectedSessionId !== gameSessionId ||
        expectedRevealKey !== currentRevealKey() || !pendingR1Resolution ||
        pickRevealPhase !== "revealed" || pickRevealQueue.length > 0) return;

    // Fetch once more before recovering locally. Normally the host's transition
    // has already arrived; this covers a missed final state notification.
    try {
      const latestSnapshot = await expectedRoomRef.child("state").once("value");
      if (expectedRoomRef !== onlineRoomRef) return;
      const latestState = latestSnapshot.val();
      const latestRevision = Number(latestState?.stateRevision);
      if (latestState && Number.isFinite(latestRevision) && latestRevision > onlineAppliedStateRevision) {
        applyOnlineGameState(latestState);
        return;
      }
    } catch (error) {
      console.warn("Could not refresh the final first-round reveal state", error);
    }

    // If the host's final transition is still missing, derive the same
    // first-round result from the synchronized reveal and open the losers'
    // re-nomination phase on this guest. Pick submissions still go to the host.
    if (expectedRoomRef !== onlineRoomRef || expectedRevision !== onlineAppliedStateRevision || !pendingR1Resolution ||
        expectedRevealKey !== currentRevealKey() || pickRevealQueue.length > 0) return;

    if (reveal.type === "nomination") completeFirstRoundNomination(reveal);
    if (reveal.type === "lottery" && reveal.winner) applyFirstRoundLotteryOutcome(reveal);

    activePickReveal = null;
    pickRevealPhase = "closed";
    $("pickReveal").hidden = true;
    finishFirstRoundResolution();
    renderOnlinePickReveal();
    console.warn("Recovered the guest first-round re-nomination phase from the final reveal");
  }, delay);
}

function recoverIdleGuestFirstRoundResolution() {
  if (onlineIsHost || activeMode !== "online" || !gameStarted || r1Started ||
      !pendingR1Resolution || pickRevealPhase !== "closed" || activePickReveal || pickRevealQueue.length) return false;

  const batch = pendingR1Resolution;
  if ((batch.nominations || []).some(item => !batch.revealedTeams.has(item.team))) return false;

  // A conflict is resolved only after its lottery result has been recorded.
  // If a guest missed the host's final transition snapshot, it is safe to
  // reopen nominations only when every conflict represented in the batch has
  // a corresponding result and there is no reveal left to display.
  if ((batch.results || []).length < firstRoundConflictCount(batch)) return false;

  finishFirstRoundResolution();
  renderOnlinePickReveal();
  console.warn("Recovered an idle first-round resolution from the synchronized results");
  return true;
}

function acknowledgeOnlineReveal(uid) {
  if (!onlineIsHost || activeMode !== "online" || !uid || !onlinePlayers[uid] ||
      !activePickReveal || pickRevealPhase !== "revealed" ||
      onlineRevealAutoAdvanceDelay() > 0 ||
      (activePickReveal.type === "lottery" && !activePickReveal.winner)) return false;

  const participantUids = onlineRevealParticipantUids();
  if (!participantUids.includes(uid)) return false;
  onlineRevealAcks.add(uid);
  renderOnlinePickReveal();
  if (participantUids.length > 0 && participantUids.every(participantUid => onlineRevealAcks.has(participantUid))) {
    showNextPickReveal();
  } else {
    syncOnlineState();
  }
  return true;
}

function updateOnlineRevealConfirmation() {
  if (activeMode !== "online" || !activePickReveal) return false;
  const button = $("pickRevealNext");
  const hint = $("pickRevealActionHint");
  button.hidden = true;
  button.disabled = true;
  button.removeAttribute("aria-busy");

  if (activePickReveal.type === "lottery" && !activePickReveal.winner) return false;
  if (pickRevealPhase !== "revealed") {
    hint.textContent = "指名のアニメーションを表示しています。演出後、約4秒で自動的に次へ進みます。";
    return true;
  }
  const delaySeconds = Math.round(onlineRevealAutoAdvanceDelay() / 1000);
  hint.textContent = activePickReveal.type === "lottery"
    ? `交渉権の抽選結果を表示中です。約${delaySeconds}秒後に自動で次へ進みます。`
    : `発表内容を表示中です。約${delaySeconds}秒後に自動で次へ進みます。`;
  return true;
}

function serializeOnlineReveal(reveal) {
  if (!reveal) return null;
  const idol = reveal.idol || {};
  return {
    team: reveal.team,
    idolId: idol.id || "",
    idolData: {
      id: idol.id || "",
      personKey: idol.personKey || "",
      japaneseName: idol.japaneseName || "",
      group: idol.group || "",
      agency: idol.agency || "",
      generation: idol.generation || "",
      nationality: idol.nationality || ""
    },
    round: reveal.round,
    type: reveal.type,
    participantUids: reveal.participantUids || [],
    teams: reveal.teams || [],
    drawOrder: reveal.drawOrder || [],
    envelopes: reveal.envelopes || [],
    winningEnvelope: Number.isInteger(reveal.winningEnvelope) ? reveal.winningEnvelope : null,
    drawIndex: reveal.drawIndex || 0,
    selections: reveal.selections ? [...reveal.selections.entries()] : [],
    opened: reveal.opened ? [...reveal.opened] : [],
    opening: Boolean(reveal.opening),
    introStartedAt: Number(reveal.introStartedAt) || 0,
    introDurationMs: Number(reveal.introDurationMs) || 0,
    revealedAt: Number(reveal.revealedAt) || 0,
    nextRevealAt: Number(reveal.nextRevealAt) || 0,
    openingAt: Number(reveal.openingAt) || 0,
    openingDurationMs: Number(reveal.openingDurationMs) || 0,
    winnerAt: Number(reveal.winnerAt) || 0,
    revealing: Boolean(reveal.revealing),
    hostOpenConfirmed: Boolean(reveal.hostOpenConfirmed),
    winner: reveal.winner || null
  };
}

function restoreOnlineReveal(source) {
  if (!source) return null;
  const snapshot = source.idolData || {};
  const idol = idols.find(item => item.id === source.idolId) ||
    (snapshot.personKey && idols.find(item => item.personKey === snapshot.personKey)) ||
    (snapshot.japaneseName && snapshot.group && idols.find(item =>
      item.japaneseName === snapshot.japaneseName && item.group === snapshot.group
    )) ||
    (snapshot.japaneseName ? { ...snapshot, id: snapshot.id || source.idolId } : null);
  if (!idol?.id || !idol.japaneseName) return null;
  return {
    ...source,
    idol,
    hostOpenConfirmed: Boolean(source.hostOpenConfirmed),
    selections: new Map(source.selections || []),
    opened: new Set(source.opened || [])
  };
}

function onlineStateReflectsAction(action, state) {
  if (!action || !state) return false;
  const team = action.team;
  if (action.kind === "pick" && team) {
    const submittedNomination = (state.r1Nominations || []).some(item => item.team === team);
    const teamPicks = state.picks?.[team] || [];
    return submittedNomination || teamPicks.length > action.pickCount ||
      teamPicks.some(item => item.id === action.idolId);
  }

  const reveal = state.activePickReveal;
  const revealKey = reveal
    ? `${state.gameSessionId || ""}:${reveal.type}:${reveal.round}:${reveal.idolId || ""}`
    : "";
  if (action.kind === "envelope") {
    return revealKey !== action.revealKey || (reveal?.selections || []).some(([envelope, selectedTeam]) =>
      Number(envelope) === Number(action.envelope) && selectedTeam === team
    );
  }
  if (action.kind === "next" || action.kind === "skip") {
    return revealKey !== action.revealKey || (state.pickRevealPhase || "closed") !== action.revealPhase ||
      (action.kind === "next" && (state.pickRevealAcks || []).includes(action.uid));
  }
  return false;
}

function serializeOnlineGame() {
  const submittedTeams = new Set(r1Nominations.map(item => item.team));
  const sealR1Bids = !r1Started && !pendingR1Resolution && (r1RevealPending ||
    r1NominationOrder.some(team => !submittedTeams.has(team)));
  return {
    teamNames,
    departedTeams: [...onlineDepartedTeams],
    gameStarted,
    picks,
    drafted: [...drafted],
    round,
    r1Started,
    r1NominationOrder,
    r1NominationIndex,
    r1NominationAttempt,
    r1RevealPending,
    r1Nominations: sealR1Bids
      ? r1Nominations.map(({ team }) => ({ team, id: "" }))
      : r1Nominations,
    r1Queue,
    pendingR1Resolution: pendingR1Resolution ? {
      batchOrder: pendingR1Resolution.batchOrder,
      nominations: pendingR1Resolution.nominations || [],
      revealedTeams: [...(pendingR1Resolution.revealedTeams || new Set())],
      waiting: [...pendingR1Resolution.waiting],
      results: pendingR1Resolution.results
    } : null,
    waiverOrder,
    firstRoundWaiverOrder,
    turnIndex,
    lotterySummary,
    pickLimit,
    orderMode,
    startOrderMode,
    firstRoundLotteryLosses,
    gameSessionId,
    actionAcks: onlineActionAcks,
    stateRevision: onlineStateRevision,
    pickRevealAcks: [...onlineRevealAcks],
    pickRevealQueue: pickRevealQueue.map(serializeOnlineReveal),
    activePickReveal: serializeOnlineReveal(activePickReveal),
    pickRevealPhase
  };
}

function makeFirebaseSafe(value) {
  if (value === undefined) return null;
  if (typeof value === "number" && !Number.isFinite(value)) return null;
  if (Array.isArray(value)) return value.map(makeFirebaseSafe);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value)
      .filter(([, entry]) => entry !== undefined)
      .map(([key, entry]) => [key, makeFirebaseSafe(entry)]));
  }
  return value;
}

function queueOnlineStateWrite() {
  const roomRef = onlineRoomRef;
  onlineStateWriteChain = onlineStateWriteChain
    .catch(() => {})
    .then(async () => {
      if (!roomRef || roomRef !== onlineRoomRef || !onlineIsHost || activeMode !== "online" || !gameStarted) return false;
      const state = makeFirebaseSafe(serializeOnlineGame());
      state.stateRevision = ++onlineStateRevision;
      await roomRef.child("state").set(state);
      onlineLastStateWriteAt = new Date().toLocaleTimeString("ja-JP", { hour12: false });
      onlineLastStateWriteError = "";
      onlineLastRemoteStateRevision = state.stateRevision;
      onlineLastRemoteStatePhase = onlineStatePhaseSummary(state);
      renderOnlineSyncDebug();
      return true;
    })
    .catch(error => {
      onlineLastStateWriteError = error?.message || "write failed";
      renderOnlineSyncDebug();
      setOnlineStatus(error.message || "ゲーム状態を共有できませんでした。");
      return false;
    });
  return onlineStateWriteChain;
}

function flushOnlineState() {
  if (onlineStateWriteTimer !== null) {
    clearTimeout(onlineStateWriteTimer);
    onlineStateWriteTimer = null;
  }
  return queueOnlineStateWrite();
}

function syncOnlineState() {
  if (activeMode !== "online" || !onlineIsHost || !onlineRoomRef || !gameStarted || onlineStateApplying) return;
  if (onlineStateWriteTimer !== null) clearTimeout(onlineStateWriteTimer);
  onlineStateWriteTimer = window.setTimeout(() => {
    onlineStateWriteTimer = null;
    queueOnlineStateWrite();
  }, 35);
}

function renderOnlinePickReveal() {
  const reveal = activePickReveal;
  if (!reveal) {
    onlineShownRevealKey = "";
    clearOnlineRevealTimeline();
    $("pickRevealNext").hidden = false;
    $("pickReveal").hidden = true;
    return;
  }
  $("pickRevealNext").hidden = activeMode === "online";
  const isLottery = reveal.type === "lottery";
  const revealKey = `${reveal.type}:${reveal.team}:${reveal.round}:${reveal.idol.id}`;
  const isNewReveal = revealKey !== onlineShownRevealKey;
  onlineShownRevealKey = revealKey;
  const card = $("pickRevealCard");
  const teamIndex = Math.max(0, teamNames.indexOf(isLottery ? reveal.drawOrder[0] : reveal.team));
  card.style.setProperty("--reveal-team-color", teamColorPalette[teamIndex % teamColorPalette.length]);
  card.classList.toggle("is-lottery", isLottery);
  $("pickRevealRound").textContent = isLottery ? "1巡目 / 重複指名の抽選" : `${reveal.round}巡目`;
  $("pickRevealLabel").textContent = isLottery
    ? "指名が重複しました"
    : reveal.type === "nomination" ? "1巡目入札メンバー" : `${reveal.round}巡目指名`;
  $("pickRevealTeamLabel").textContent = "指名チーム";
  $("pickRevealTeam").textContent = displayTeamName(reveal.team);
  $("pickRevealTeamBand").hidden = isLottery;
  $("pickRevealCaption").textContent = isLottery ? "封筒を選んで、交渉権を引き当てよう" : "選ばれたメンバーは…";
  $("pickRevealName").textContent = reveal.idol.japaneseName;
  $("pickRevealAgency").textContent = shortAgencyName(fullAgencyName(reveal.idol.group, reveal.idol.agency));
  $("pickRevealGroup").textContent = reveal.idol.group;
  $("lotteryBoard").hidden = !isLottery;
  $("pickRevealSkip").hidden = activeMode === "online" || isLottery || pickRevealPhase !== "intro";
  $("pickRevealSkip").textContent = "演出をスキップ";
  $("pickReveal").hidden = false;
  if (isNewReveal) {
    $("pickRevealFlipCard").classList.remove("is-flipped");
    card.classList.remove("is-visible");
    if (activeMode === "online") {
      onlineRevealTimelineStage = "";
    } else {
      void card.offsetWidth;
      card.classList.add("is-visible");
    }
  }
  const syncedMemberRevealDue = activeMode === "online" && pickRevealPhase === "intro" &&
    reveal.type !== "lottery" && Number(reveal.introStartedAt) > 0 &&
    onlineServerNow() >= Number(reveal.introStartedAt) + (Number(reveal.introDurationMs) || 2000);
  $("pickRevealFlipCard").classList.toggle("is-flipped", pickRevealPhase === "revealed" || syncedMemberRevealDue);

  if (isLottery) {
    if (isNewReveal || $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").length !== reveal.envelopes.length) {
      renderLotteryTickets(reveal);
    }
    reveal.selections.forEach((team, envelope) => {
      const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
        .find(item => Number(item.dataset.lotteryEnvelope) === Number(envelope));
      if (!button) return;
      button.classList.add("is-chosen", "is-selected");
      button.querySelector(".lottery-envelope-hint").textContent = "選択済み";
    });
    const now = onlineServerNow();
    const openingHasStarted = reveal.opening && (!Number(reveal.openingAt) || now >= Number(reveal.openingAt));
    const syncedOutcomeDue = reveal.opening && Number(reveal.winnerAt) > 0 && now >= Number(reveal.winnerAt);
    [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")].forEach(button => {
      const envelope = Number(button.dataset.lotteryEnvelope);
      const team = reveal.selections.get(envelope);
      const selected = Boolean(team);
      const won = envelope === Number(reveal.winningEnvelope);
      const outcomeVisible = Boolean(reveal.winner || syncedOutcomeDue);
      const result = button.querySelector(".lottery-envelope-result");
      button.classList.toggle("is-chosen", selected);
      button.classList.toggle("is-selected", selected);
      button.classList.toggle("is-opening", Boolean(openingHasStarted && !outcomeVisible));
      button.classList.toggle("is-open", outcomeVisible);
      button.classList.toggle("is-winner", Boolean(outcomeVisible && won));
      button.classList.toggle("is-loser", Boolean(outcomeVisible && !won));
      result.classList.toggle("is-winner", Boolean(outcomeVisible && won));
      result.classList.toggle("is-loser", Boolean(outcomeVisible && !won));
      button.querySelector(".lottery-envelope-hint").textContent = selected ? "選択済み" : "封筒を選ぶ";
      if (selected) button.setAttribute("aria-label", `封筒 ${envelope + 1}は選択済み。開示まで結果は伏せられます`);
      if (team && (reveal.winner || reveal.opening)) {
        result.querySelector("strong").textContent = displayTeamName(team);
        result.querySelector("small").textContent = won ? "交渉権獲得" : "再指名へ";
        button.style.setProperty("--lottery-team-color", teamColorPalette[Math.max(0, teamNames.indexOf(team)) % teamColorPalette.length]);
      }
    });
    updateLotteryProgress();
  } else {
    $("lotteryTickets").innerHTML = "";
    $("pickRevealNext").disabled = onlineActionPending;
    $("pickRevealNext").textContent = pickRevealPhase === "intro"
      ? "発表を確認"
      : pickRevealQueue.length ? `次の指名へ（あと${pickRevealQueue.length}件）` : "次へ進む";
    $("pickRevealActionHint").textContent = onlineActionPending
      ? "ホストの画面で進行しています…"
      : activeMode === "online"
        ? pickRevealPhase === "intro"
          ? "指名チームの発表後、約2秒でメンバーを開示します。"
          : "全員が発表を確認できるよう、この画面は「次へ進む」まで表示されます。"
        : "指名の発表は全員の画面に同期されます。";
    updateOnlineRevealConfirmation();
  }
  scheduleOnlineRevealVisualTimeline();
}

function applyOnlineGameState(state) {
  if ((onlineIsHost && !onlineHostRestoring) || !state || onlineStateApplying) return;
  const incomingRevision = Number(state.stateRevision);
  const incomingGameSessionId = String(state.gameSessionId || "");
  const gameSessionChanged = Boolean(incomingGameSessionId && incomingGameSessionId !== gameSessionId);
  const shouldScrollToCandidatePool = Boolean(state.gameStarted && (!gameStarted || gameSessionChanged));
  const incomingNominationOrder = Array.isArray(state.r1NominationOrder) ? state.r1NominationOrder : [];
  const incomingIsRebidPhase = !state.r1Started && !state.pendingR1Resolution &&
    incomingNominationOrder.length > 0 && (state.pickRevealPhase || "closed") === "closed" &&
    !(state.activePickReveal) && !(state.pickRevealQueue || []).length;
  const localIsStuckInFirstRoundResolution = !r1Started && Boolean(pendingR1Resolution);
  const recoversMissedRebidTransition = localIsStuckInFirstRoundResolution && incomingIsRebidPhase &&
    (!incomingGameSessionId || incomingGameSessionId === gameSessionId);
  const revisionNeedsRender = Number.isFinite(incomingRevision) &&
    incomingRevision > onlineRenderedStateRevision && incomingRevision >= onlineAppliedStateRevision;
  if (onlineAppliedStateRevision >= 0 && !gameSessionChanged && !recoversMissedRebidTransition &&
      (!Number.isFinite(incomingRevision) || incomingRevision <= onlineAppliedStateRevision) && !revisionNeedsRender) return;
  const localRebidIsAheadOfHost = !onlineIsHost && !gameSessionChanged && !r1Started && !pendingR1Resolution &&
    !state.r1Started && Boolean(state.pendingR1Resolution) &&
    Number(state.r1NominationAttempt || 1) < r1NominationAttempt &&
    (!incomingGameSessionId || incomingGameSessionId === gameSessionId);
  if (localRebidIsAheadOfHost) {
    const recoveryActionAck = onlineUid ? state.actionAcks?.[onlineUid] : null;
    const recoveryActionWasRejected = Boolean(onlinePendingAction &&
      recoveryActionAck?.key === onlinePendingAction.key && !recoveryActionAck.accepted);
    if (Number.isFinite(incomingRevision)) {
      onlineAppliedStateRevision = Math.max(onlineAppliedStateRevision, incomingRevision);
      onlineRenderedStateRevision = Math.max(onlineRenderedStateRevision, incomingRevision);
      onlineStateRevision = Math.max(onlineStateRevision, incomingRevision);
    }
    onlineActionAcks = state.actionAcks || onlineActionAcks;
    if (recoveryActionWasRejected) {
      onlinePendingAction = null;
      onlineActionPending = false;
      setOnlineStatus(recoveryActionAck.reason || "ホスト側で抽選結果を反映中です。選択中の候補は保持しています。少し待ってからもう一度提出してください。");
    }
    renderNominations();
    renderOnlinePickReveal();
    renderDraft();
    if ($("pickReveal").hidden) renderCandidates();
    renderOnlineSyncDebug();
    return;
  }
  if (Number.isFinite(incomingRevision)) {
    onlineAppliedStateRevision = gameSessionChanged || recoversMissedRebidTransition
      ? incomingRevision
      : Math.max(onlineAppliedStateRevision, incomingRevision);
    onlineStateRevision = Math.max(onlineStateRevision, incomingRevision);
  }
  onlineStateApplying = true;
  let renderSucceeded = false;
  try {
    if (gameSessionChanged) {
      onlinePendingAction = null;
      onlineActionPending = false;
      pendingDraftPickId = null;
      selectedId = null;
      onlineShownRevealKey = "";
      if (pickRevealTimer !== null) {
        clearTimeout(pickRevealTimer);
        pickRevealTimer = null;
      }
      finalResultsWasVisible = false;
      setFinalScreenshotMode(false, false);
      onlineRevealAcks = new Set();
    }
    const localPendingPickId = gameSessionChanged ? null : pendingDraftPickId;
    const actionAck = onlineUid ? state.actionAcks?.[onlineUid] : null;
    const pendingActionKind = onlinePendingAction?.kind || "";
    const actionWasAcknowledged = Boolean(onlinePendingAction && actionAck?.key === onlinePendingAction.key);
    const actionWasRejected = actionWasAcknowledged && !Boolean(actionAck.accepted);
    const pendingPickSupersededByNextAttempt = onlinePendingAction?.kind === "pick" &&
      Number.isFinite(Number(onlinePendingAction.r1NominationAttempt)) &&
      Number(state.r1NominationAttempt || 1) > Number(onlinePendingAction.r1NominationAttempt);
    const actionWasAccepted = !actionWasRejected && (
      pendingPickSupersededByNextAttempt ||
      onlineStateReflectsAction(onlinePendingAction, state) ||
      (actionWasAcknowledged && Boolean(actionAck.accepted))
    );
    teamNames = state.teamNames || [];
    onlineDepartedTeams = new Set(state.departedTeams || []);
    gameStarted = Boolean(state.gameStarted);
    activeMode = "online";
    aiTeams = new Set();
    const remotePicks = state.picks && typeof state.picks === "object" ? state.picks : {};
    picks = Object.fromEntries(teamNames.map(team => {
      const teamPicks = remotePicks[team];
      if (Array.isArray(teamPicks)) return [team, teamPicks];
      if (teamPicks && typeof teamPicks === "object") {
        const indexes = Object.keys(teamPicks).filter(key => /^\d+$/.test(key)).sort((a, b) => Number(a) - Number(b));
        return [team, indexes.map(index => teamPicks[index])];
      }
      return [team, []];
    }));
    setDraftedMembers(state.drafted || []);
    round = Number(state.round || 1);
    r1Started = Boolean(state.r1Started);
    r1NominationOrder = state.r1NominationOrder || [];
    r1NominationIndex = Number(state.r1NominationIndex || 0);
    r1NominationAttempt = Number(state.r1NominationAttempt || 1);
    r1Nominations = state.r1Nominations || [];
    r1RevealPending = Boolean(state.r1RevealPending);
    r1Queue = state.r1Queue || [];
    pendingR1Resolution = state.pendingR1Resolution ? {
      batchOrder: state.pendingR1Resolution.batchOrder || [],
      nominations: state.pendingR1Resolution.nominations || [],
      revealedTeams: new Set(state.pendingR1Resolution.revealedTeams || []),
      waiting: new Set(state.pendingR1Resolution.waiting || []),
      results: state.pendingR1Resolution.results || []
    } : null;
    waiverOrder = state.waiverOrder || [];
    firstRoundWaiverOrder = state.firstRoundWaiverOrder || [];
    turnIndex = Number(state.turnIndex || 0);
    lotterySummary = state.lotterySummary || "";
    pickLimit = Number(state.pickLimit || 5);
    orderMode = state.orderMode === "random" ? "fixed" : (state.orderMode || "snake");
    startOrderMode = state.startOrderMode || "random";
    firstRoundLotteryLosses = state.firstRoundLotteryLosses || {};
    gameSessionId = incomingGameSessionId || gameSessionId;
    onlineActionAcks = state.actionAcks || {};
    const serializedRevealQueue = state.pickRevealQueue || [];
    pickRevealQueue = serializedRevealQueue.map(restoreOnlineReveal).filter(Boolean);
    activePickReveal = restoreOnlineReveal(state.activePickReveal);
    if (activePickReveal?.type === "lottery" && !activePickReveal.hostOpenConfirmed &&
        activePickReveal.revealing && !activePickReveal.opening && !activePickReveal.winner) {
      // Older room snapshots used `revealing` as an automatic timer. Treat them
      // as waiting for host approval instead of as an approved opening.
      activePickReveal.revealing = false;
    } else if (activePickReveal?.type === "lottery" && activePickReveal.opening && !activePickReveal.winner) {
      activePickReveal.hostOpenConfirmed = true;
    }
    if ((state.activePickReveal && !activePickReveal) || pickRevealQueue.length !== serializedRevealQueue.length) {
      setOnlineStatus("発表データを読み込めませんでした。全端末を再読み込みして、新しいルームで開始してください。");
    }
    pickRevealPhase = state.pickRevealPhase || "closed";
    onlineRevealAcks = new Set(state.pickRevealAcks || []);
    selectedId = null;
    if (actionWasAccepted) {
      onlinePendingAction = null;
      onlineActionPending = false;
      pendingDraftPickId = null;
    } else if (actionWasAcknowledged) {
      onlinePendingAction = null;
      onlineActionPending = false;
      setOnlineStatus(actionAck.reason || "操作が反映されませんでした。順番を確認して、もう一度試してください。");
    } else {
      pendingDraftPickId = localPendingPickId;
      onlineActionPending = Boolean(onlinePendingAction);
    }
    const ownTeam = onlineTeamForUid(onlineUid);
    const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
    const stillOwnTurn = ownTeam && (r1Started
      ? currentTeamName() === ownTeam
      : canSubmitR1Nomination(ownTeam));
    if (!pendingIdol || !stillOwnTurn || excluded.has(pendingIdol.id) || personHasBeenDrafted(pendingIdol)) {
      pendingDraftPickId = null;
    }
    updateModeSetup();
    renderNominations();
    renderOnlinePickReveal();
    renderDraft();
    if ($("pickReveal").hidden) renderCandidates();
    renderSucceeded = true;
    onlineLastRenderError = "";
    if (Number.isFinite(incomingRevision)) {
      onlineRenderedStateRevision = gameSessionChanged
        ? incomingRevision
        : Math.max(onlineRenderedStateRevision, incomingRevision);
    }
    if (actionWasAcknowledged && actionWasRejected && pendingActionKind === "next" && activePickReveal) {
      $("pickRevealActionHint").textContent = actionAck.reason || "確認を受け付けられませんでした。もう一度押してください。";
    }
  } catch (error) {
    onlineLastRenderError = error?.message || "state render failed";
    console.error("Could not render the latest shared draft state; it will be retried", error);
  } finally {
    onlineStateApplying = false;
  }
  renderOnlineSyncDebug();
  if (!renderSucceeded) return;
  if (shouldScrollToCandidatePool) scrollToCandidatePool();
  scheduleOnlineGuestRebidFallback();
  recoverIdleGuestFirstRoundResolution();
}

function resumeOnlineHostProgress() {
  if (!onlineIsHost || !gameStarted) return;
  if (!activePickReveal) {
    if (pickRevealQueue.length) showNextPickReveal();
    else {
      renderDraft();
      renderCandidates();
    }
    return;
  }
  if (activePickReveal.type === "lottery") {
    if (activePickReveal.winner) {
      scheduleRevealAutoAdvance(onlineRevealAutoAdvanceDelay(activePickReveal));
      return;
    }
    if (activePickReveal.opening) {
      const winnerAt = Number(activePickReveal.winnerAt) || onlineServerNow() + 560;
      pickRevealTimer = window.setTimeout(() => {
        pickRevealTimer = null;
        completeLotteryReveal(activePickReveal);
      }, Math.max(0, winnerAt - onlineServerNow()));
    } else if (activePickReveal.revealing) {
      pickRevealTimer = window.setTimeout(() => revealLotteryResults(activePickReveal), 350);
    } else if (pickRevealPhase === "intro") {
      const introDeadline = (Number(activePickReveal.introStartedAt) || onlineServerNow()) +
        (Number(activePickReveal.introDurationMs) || 1050);
      pickRevealTimer = window.setTimeout(revealPickCard, Math.max(0, introDeadline - onlineServerNow()));
    } else {
      scheduleAINextLotteryEnvelope();
    }
    return;
  }
  if (pickRevealPhase === "intro") {
    const introDeadline = (Number(activePickReveal.introStartedAt) || onlineServerNow()) +
      (Number(activePickReveal.introDurationMs) || 2000);
    pickRevealTimer = window.setTimeout(revealPickCard, Math.max(0, introDeadline - onlineServerNow()));
  } else if (pickRevealPhase === "revealed") {
    if (activeMode === "online") {
      scheduleRevealAutoAdvance(onlineRevealAutoAdvanceDelay());
    } else {
      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1300 : 2600;
      pickRevealTimer = window.setTimeout(showNextPickReveal, delay);
    }
  }
}

function submitOnlineConfirmation() {
  if (!onlineRoomRef || !onlineUid || !activePickReveal || pickRevealPhase !== "revealed") {
    $("pickRevealActionHint").textContent = "確認を送れません。ルーム接続と発表画面を確認してください。";
    return false;
  }
  if (onlineIsHost || onlineActionPending) return false;

  onlineActionPending = true;
  renderDraft();
  renderOnlinePickReveal();
  if ($("pickReveal").hidden) renderCandidates();

  const confirmationRef = onlineRoomRef.child(`confirmations/${onlineUid}`);
  const confirmationId = confirmationRef.push().key;
  const idol = activePickReveal.idol || {};
  const payload = {
    uid: onlineUid,
    kind: "next",
    id: confirmationId,
    revealKey: currentRevealKey(),
    revealPhase: pickRevealPhase,
    revealType: activePickReveal.type,
    revealRound: Number(activePickReveal.round),
    revealIdolId: idol.id || activePickReveal.idolId || "",
    revealPersonKey: idol.personKey || "",
    revealName: idol.japaneseName || "",
    revealGroup: idol.group || "",
    createdAt: Date.now()
  };
  onlinePendingAction = {
    key: confirmationId,
    kind: "next",
    team: onlineTeamForUid(onlineUid),
    round: round,
    revealKey: payload.revealKey,
    revealPhase: pickRevealPhase,
    deliveryState: "sending"
  };

  confirmationRef.set(payload)
    .then(() => {
      if (onlinePendingAction?.key === confirmationId) {
        onlinePendingAction.deliveryState = "sent";
        setOnlineStatus("Firebaseへ確認を保存しました。ホストの受信確認を待っています…");
        renderOnlinePickReveal();
      }
    })
    .catch(error => {
      onlinePendingAction = null;
      onlineActionPending = false;
      setOnlineStatus(error.message || "確認を送れませんでした。接続とFirebaseルールを確認してください。");
      renderDraft();
      renderOnlinePickReveal();
      renderCandidates();
      $("pickRevealActionHint").textContent = `確認を送れませんでした：${error.message || "接続とFirebaseルールを確認してください。"}`;
    });

  window.setTimeout(() => {
    if (!onlineActionPending || onlinePendingAction?.key !== confirmationId) return;
    const writeSucceeded = onlinePendingAction.deliveryState === "sent";
    onlinePendingAction = null;
    onlineActionPending = false;
    setOnlineStatus(writeSucceeded
      ? "Firebaseへの保存は完了しましたが、ホストの受信確認がありません。"
      : "Firebaseへの送信が12秒以内に完了しませんでした。");
    renderDraft();
    renderOnlinePickReveal();
    renderCandidates();
    $("pickRevealActionHint").textContent = writeSucceeded
      ? "送信側のFirebase保存は成功しています。ホストの受信・処理・状態返信で止まっています。ホスト画面のエラー表示を確認してください。"
      : "送信元からFirebaseへの保存が完了していません。送信元の接続状態かFirebase書き込みルールで止まっています。";
  }, 12000);
  return true;
}

function submitOnlineAction(action) {
  if (action.kind === "next") return submitOnlineConfirmation();
  if (!onlineRoomRef) {
    setOnlineStatus("ルームへの接続が切れています。再接続してから、もう一度押してください。");
    if (action.kind === "next") {
      $("pickRevealActionHint").textContent = "ルームに接続できていません。再接続後にもう一度押してください。";
    }
    return false;
  }
  if (onlineIsHost || onlineActionPending) {
    if (action.kind === "next" && onlineActionPending) {
      $("pickRevealActionHint").textContent = "確認を送信中です。少し待ってください。";
    }
    return false;
  }
  onlineActionPending = true;
  renderDraft();
  renderOnlinePickReveal();
  renderCandidates();
  const actionRef = onlineRoomRef.child("actions").push();
  const actionKey = actionRef.key;
  const payload = { uid: onlineUid, ...action, createdAt: Date.now() };
  if (action.kind === "pick") {
    const team = onlineTeamForUid(onlineUid);
    const idol = idols.find(item => item.id === action.idolId);
    payload.r1NominationAttempt = r1NominationAttempt;
    payload.round = round;
    payload.pickCount = (picks[team] || []).length;
    payload.clientBuild = onlineClientBuild;
    payload.idolData = idol ? {
      personKey: idol.personKey,
      japaneseName: idol.japaneseName,
      group: idol.group
    } : null;
  }
  if (["envelope", "next", "skip"].includes(action.kind)) {
    payload.revealKey = currentRevealKey();
    payload.revealPhase = pickRevealPhase;
  }
  if (action.kind === "next" && activePickReveal) {
    const revealIdol = activePickReveal.idol || {};
    payload.revealType = activePickReveal.type;
    payload.revealRound = Number(activePickReveal.round);
    payload.revealIdolId = revealIdol.id || activePickReveal.idolId || "";
    payload.revealPersonKey = revealIdol.personKey || "";
    payload.revealName = revealIdol.japaneseName || "";
    payload.revealGroup = revealIdol.group || "";
    payload.revealPhase = pickRevealPhase;
    payload.id = actionKey;
  }
  onlinePendingAction = {
    key: actionKey,
    kind: action.kind,
    idolId: action.idolId || "",
    idolName: payload.idolData?.japaneseName || "",
    idolGroup: payload.idolData?.group || "",
    clientBuild: payload.clientBuild || "",
    team: onlineTeamForUid(onlineUid),
    r1NominationAttempt,
    round: round,
    pickCount: (picks[onlineTeamForUid(onlineUid)] || []).length,
    revealKey: payload.revealKey || "",
    revealPhase: pickRevealPhase,
    envelope: action.envelope
  };
  actionRef.set(payload)
    .then(() => {
      if (onlinePendingAction?.key === actionKey && action.kind === "next") {
        setOnlineStatus("確認を送信しました。ホスト側で反映中です…");
        $("pickRevealActionHint").textContent = "確認を送信しました。ホスト側の反映を待っています…";
      }
    })
    .catch(error => {
      onlinePendingAction = null;
      onlineActionPending = false;
      setOnlineStatus(error.message || "操作を送れませんでした。もう一度試してください。");
      renderDraft();
      renderOnlinePickReveal();
      renderCandidates();
      if (action.kind === "next") {
        $("pickRevealActionHint").textContent = `確認を送れませんでした：${error.message || "通信を確認して、もう一度押してください。"}`;
      }
    });
  window.setTimeout(() => {
    if (!onlineActionPending || onlinePendingAction?.key !== actionKey) return;
    onlinePendingAction = null;
    onlineActionPending = false;
    setOnlineStatus("応答を待っています。画面が更新されない場合はホストに確認してください。");
    renderDraft();
    renderOnlinePickReveal();
    renderCandidates();
    if (action.kind === "next") {
      $("pickRevealActionHint").textContent = "ホストから確認応答が届いていません。接続を確認して、もう一度押してください。";
    }
  }, 12000);
  return true;
}

function enqueueOnlineConfirmation(snapshot) {
  if (!onlineIsHost || !snapshot?.key) return onlineConfirmationQueue;
  const confirmation = snapshot.val();
  if (!confirmation || confirmation.kind !== "next" ||
      confirmation.uid !== snapshot.key || !confirmation.id) return onlineConfirmationQueue;
  const confirmationId = String(confirmation.id);
  if (onlineHandledConfirmationIds.has(confirmationId) ||
      onlineQueuedConfirmationIds.has(confirmationId)) return onlineConfirmationQueue;

  const roomRef = onlineRoomRef;
  onlineQueuedConfirmationIds.add(confirmationId);
  onlineConfirmationQueue = onlineConfirmationQueue
    .catch(() => {})
    .then(() => processOnlineConfirmation(roomRef, snapshot.ref, snapshot.key, confirmation, confirmationId))
    .catch(error => {
      console.error("Online confirmation processing failed", error);
      reportOnlineConfirmationsReadError(error);
    })
    .finally(() => onlineQueuedConfirmationIds.delete(confirmationId));
  return onlineConfirmationQueue;
}

async function removeOnlineConfirmationIfCurrent(ref, confirmationId) {
  try {
    const current = await ref.once("value");
    if (String(current.val()?.id || "") === confirmationId) await ref.remove();
  } catch (error) {
    console.error("Processed online confirmation could not be cleared", error);
  }
}

async function processOnlineConfirmation(roomRef, ref, uid, confirmation, confirmationId) {
  if (!onlineIsHost || !roomRef || roomRef !== onlineRoomRef) return;
  if (onlineHandledConfirmationIds.has(confirmationId)) return;
  onlineHandledConfirmationIds.add(confirmationId);

  if (onlineActionAcks[uid]?.key === confirmationId) {
    const stateSaved = await flushOnlineState();
    if (stateSaved) await removeOnlineConfirmationIfCurrent(ref, confirmationId);
    else onlineHandledConfirmationIds.delete(confirmationId);
    return;
  }

  let accepted = false;
  let reason = "";
  try {
    if (!onlinePlayers[uid]) {
      reason = "参加者情報を確認できませんでした。全員が同じルームに入り直してください。";
    } else if (!actionMatchesCurrentReveal(confirmation)) {
      reason = "発表データが一致しません。全員で新しいルームに入り直してください。";
    } else {
      accepted = acknowledgeOnlineReveal(uid);
      if (!accepted) {
        reason = !activePickReveal || pickRevealPhase !== "revealed"
          ? "発表画面の状態がずれています。全員で新しいルームに入り直してください。"
          : !onlineRevealParticipantUids().includes(uid)
            ? "この発表の確認対象に含まれていません。"
            : "確認を処理できませんでした。もう一度押してください。";
      }
    }
  } catch (error) {
    reason = error?.message || "確認を処理できませんでした。もう一度押してください。";
    console.error("Online confirmation could not be applied", error);
  }

  if (roomRef !== onlineRoomRef || !onlineIsHost) {
    onlineHandledConfirmationIds.delete(confirmationId);
    return;
  }
  onlineActionAcks[uid] = {
    key: confirmationId,
    accepted,
    reason: accepted ? "" : reason || "確認を受け付けられませんでした。発表画面を確認して、もう一度試してください。",
    at: Date.now()
  };
  const stateSaved = await flushOnlineState();
  if (stateSaved) {
    await removeOnlineConfirmationIfCurrent(ref, confirmationId);
  } else {
    onlineHandledConfirmationIds.delete(confirmationId);
  }
}

function enqueueOnlineAction(snapshot, sourceRoomRef = onlineRoomRef) {
  if (!sourceRoomRef || sourceRoomRef !== onlineRoomRef || !onlineIsHost) return onlineActionQueue;
  if (!snapshot?.key || onlineHandledActionIds.has(snapshot.key) || onlineQueuedActionIds.has(snapshot.key)) {
    return onlineActionQueue;
  }
  onlineQueuedActionIds.add(snapshot.key);
  onlineActionQueue = onlineActionQueue
    .then(() => processOnlineAction(snapshot, sourceRoomRef))
    .catch(error => setOnlineStatus(error.message || "操作を処理できませんでした。"))
    .finally(() => onlineQueuedActionIds.delete(snapshot.key));
  return onlineActionQueue;
}

async function removeProcessedOnlineAction(snapshot) {
  await snapshot.ref.remove().catch(() => {});
}

function recoverHostRebidFromPickAction(action, team) {
  const batch = pendingR1Resolution;
  const actionAttempt = Number(action?.r1NominationAttempt);
  const actionPickCount = Number(action?.pickCount);
  if (!batch || r1Started || Number(action?.round) !== 1 ||
      !Number.isInteger(actionAttempt) || actionAttempt !== r1NominationAttempt + 1 ||
      !batch.waiting.has(team) || actionPickCount !== (picks[team] || []).length ||
      pickRevealQueue.length > 0) return false;

  const reveal = activePickReveal;
  const unrevealedNominations = (batch.nominations || []).filter(item => !batch.revealedTeams.has(item.team));
  if (reveal) {
    if (pickRevealPhase !== "revealed") return false;
    if (reveal.type === "nomination") {
      if (unrevealedNominations.some(item => item.team !== reveal.team)) return false;
    } else if (reveal.type === "lottery") {
      if (!reveal.winner || unrevealedNominations.length > 0) return false;
    } else {
      return false;
    }
  } else if (pickRevealPhase !== "closed" || !$("pickReveal").hidden || unrevealedNominations.length > 0) {
    return false;
  }

  if ((batch.results || []).length < firstRoundConflictCount(batch)) return false;
  if (reveal?.type === "nomination") completeFirstRoundNomination(reveal);
  if (reveal?.type === "lottery") applyFirstRoundLotteryOutcome(reveal);

  activePickReveal = null;
  pickRevealPhase = "closed";
  $("pickReveal").hidden = true;
  finishFirstRoundResolution();
  renderOnlinePickReveal();
  return !pendingR1Resolution && canSubmitR1Nomination(team);
}

async function markOnlinePlayerDeparted(uid, roomRef = onlineRoomRef, kickedByHost = false) {
  if (!uid || !roomRef || roomRef !== onlineRoomRef || !onlineIsHost ||
      !["lobby", "playing"].includes(onlineGameStatus)) return false;
  const player = onlinePlayers[uid];
  const ownerTeam = onlineTeamForUid(uid);
  if (!player || player.host || !ownerTeam) return false;

  const departedAt = Number(player.departedAt) || Date.now();
  const updates = { departed: true, departedAt };
  if (kickedByHost || player.kickedByHost) updates.kickedByHost = true;
  if (!player.departed || (kickedByHost && !player.kickedByHost)) {
    await roomRef.child(`players/${uid}`).update(updates);
  }
  if (roomRef !== onlineRoomRef || !onlineIsHost) return false;
  onlinePlayers[uid] = { ...player, ...updates };

  if (onlineGameStatus === "playing") {
    onlineDepartedTeams.add(ownerTeam);
    onlineRevealAcks.delete(uid);
    const hasSubmittedNomination = r1Nominations.some(item => item.team === ownerTeam);
    if (!r1Started && !pendingR1Resolution && !r1RevealPending && !hasSubmittedNomination) {
      const removedIndex = r1NominationOrder.indexOf(ownerTeam);
      r1NominationOrder = r1NominationOrder.filter(team => team !== ownerTeam);
      if (removedIndex >= 0 && removedIndex < r1NominationIndex) {
        r1NominationIndex = Math.max(0, r1NominationIndex - 1);
      }
    }
    if (r1Started) advancePastCompletedTurns();
    if (!r1Started && !pendingR1Resolution && !r1RevealPending && allR1BidsSubmitted()) {
      resolveFirstRound();
    }
    scheduleAINextLotteryEnvelope();
    renderNominations();
    renderDraft();
    renderCandidates();
  }
  renderOnlineLobby();
  return true;
}

async function forceRemoveOnlinePlayer(uid) {
  const roomRef = onlineRoomRef;
  const player = onlinePlayers[uid];
  if (!onlineIsHost || !roomRef || onlineForceKickPending || onlineStartPending || onlineRestartPending ||
      !["lobby", "playing"].includes(onlineGameStatus) || !player || player.host || player.departed) return;
  const playerName = player.teamName || player.name || "プレイヤー";
  const isPlaying = onlineGameStatus === "playing";
  const confirmMessage = `${playerName}をルームから強制退出させますか？${isPlaying ? "\nこのチームの残り指名はスキップされます。" : ""}`;
  if (!window.confirm(confirmMessage)) return;

  onlineForceKickPending = true;
  renderOnlineLobby();
  let resultMessage = "";
  const kickTask = onlineActionQueue.then(async () => {
    if (roomRef !== onlineRoomRef || !onlineIsHost) return false;
    const latestSnapshot = await roomRef.child(`players/${uid}`).once("value");
    const latestPlayer = latestSnapshot.val();
    if (!latestPlayer || latestPlayer.host || latestPlayer.departed) return false;
    onlinePlayers[uid] = latestPlayer;
    const removed = await markOnlinePlayerDeparted(uid, roomRef, true);
    if (!removed) return false;
    if (onlineGameStatus === "playing" && !await flushOnlineState()) {
      throw new Error("退出状態を全員に共有できませんでした。接続を確認してください。");
    }
    resultMessage = `${playerName}をルームから退出させました。${isPlaying ? "残りの指名をスキップします。" : ""}`;
    return true;
  });
  onlineActionQueue = kickTask.catch(error => {
    resultMessage = error?.message || "プレイヤーを退出させられませんでした。";
    return false;
  });

  try {
    const removed = await kickTask;
    if (!removed && !resultMessage && roomRef === onlineRoomRef) {
      resultMessage = "対象プレイヤーはすでに退出しているか、見つかりません。";
    }
  } catch (error) {
    resultMessage = error?.message || "プレイヤーを退出させられませんでした。";
  } finally {
    if (roomRef === onlineRoomRef) {
      onlineForceKickPending = false;
      renderOnlineLobby();
      if (resultMessage) setOnlineStatus(resultMessage);
    }
  }
}

async function processOnlineAction(snapshot, processingRoomRef = onlineRoomRef) {
  if (!onlineIsHost || !onlineRoomRef || processingRoomRef !== onlineRoomRef) return;
  if (onlineProcessedActionIds.has(snapshot.key)) {
    const stateSaved = await flushOnlineState();
    if (stateSaved) {
      onlineProcessedActionIds.delete(snapshot.key);
      await removeProcessedOnlineAction(snapshot);
    } else {
      onlineHandledActionIds.delete(snapshot.key);
    }
    return;
  }
  const action = snapshot.val();
  if (action?.uid && onlineActionAcks[action.uid]?.key === snapshot.key) {
    await removeProcessedOnlineAction(snapshot);
    return;
  }
  if (onlineHandledActionIds.has(snapshot.key)) return;
  onlineHandledActionIds.add(snapshot.key);
  const ownerTeam = onlineTeamForUid(action?.uid);
  const revealMatches = actionMatchesCurrentReveal(action);
  const hostPhaseBefore = onlineStatePhaseSummary(serializeOnlineGame());
  const hostAttemptBefore = r1NominationAttempt;
  const actionIdol = action?.kind === "pick"
    ? idols.find(item => item.id === String(action.idolId || ""))
    : null;
  const requestedIdol = action?.idolData
    ? `${action.idolData.japaneseName || "?"}/${action.idolData.group || "?"} [${action.idolData.personKey || "keyなし"}]`
    : String(action?.idolId || "IDなし");
  const hostResolvedIdol = actionIdol
    ? `${actionIdol.japaneseName}/${actionIdol.group} [${actionIdol.personKey || actionIdol.id}]`
    : action?.kind === "pick" ? `ID ${String(action?.idolId || "なし")} が候補一覧にない` : "対象外";
  let actionAccepted = false;
  let actionRejectionReason = "";
  try {
    if (!action || !onlinePlayers[action.uid]) {
      actionRejectionReason = "参加者情報を確認できませんでした。全員が同じルームに入り直してください。";
    } else if (action.kind === "leave") {
      const player = onlinePlayers[action.uid];
      if (onlineGameStatus !== "playing" || player.host || !ownerTeam) {
        actionRejectionReason = "このルームから退出できません。ホストまたは参加状態を確認してください。";
      } else {
        actionAccepted = await markOnlinePlayerDeparted(action.uid, processingRoomRef);
        if (!actionAccepted) actionRejectionReason = "退出を反映できませんでした。ルームの接続状態を確認してください。";
      }
    } else if (onlinePlayers[action.uid].departed) {
      actionRejectionReason = "このチームは退出済みのため、残りの指名はスキップされます。";
    } else {
      if (action.kind === "pick" && ownerTeam && !r1Started && !canSubmitR1Nomination(ownerTeam)) {
        recoverHostRebidFromPickAction(action, ownerTeam);
      }
      const canAcceptPick = action.kind === "pick" && ownerTeam && (
        !r1Started ? canSubmitR1Nomination(ownerTeam) : ownerTeam === currentTeamName()
      );
      if (canAcceptPick) {
        const wasFirstRound = !r1Started;
        const previousPickCount = (picks[ownerTeam] || []).length;
        const localPendingPickId = pendingDraftPickId;
        pendingDraftPickId = String(action.idolId || "");
        try {
          confirmDraftPick(action.uid);
        } finally {
          pendingDraftPickId = localPendingPickId;
          renderNominations();
          renderDraft();
          renderCandidates();
        }
        actionAccepted = wasFirstRound
          ? r1Nominations.some(item => item.team === ownerTeam) || (picks[ownerTeam] || []).length > previousPickCount
          : (picks[ownerTeam] || []).length > previousPickCount;
      } else if (action.kind === "pick") {
        actionRejectionReason = pendingR1Resolution
          ? "ホスト側で抽選結果を反映中です。候補は保持したまま、少し待ってからもう一度提出してください。"
          : "指名順が更新されました。画面を確認して、もう一度提出してください。";
      } else if (action.kind === "envelope" && revealMatches && activePickReveal?.type === "lottery") {
        const drawer = activePickReveal.drawOrder[activePickReveal.drawIndex];
        if (drawer && teamOwnerUid(drawer) === action.uid) {
          selectLotteryEnvelope(action.envelope, false, action.uid);
          actionAccepted = activePickReveal?.selections?.get(Number(action.envelope)) === drawer;
        }
      } else if (action.kind === "next" && revealMatches) {
        actionAccepted = acknowledgeOnlineReveal(action.uid);
        if (!actionAccepted) {
          actionRejectionReason = !onlinePlayers[action.uid]
            ? "参加者情報を確認できませんでした。"
            : !activePickReveal || pickRevealPhase !== "revealed"
              ? "発表画面の状態がずれています。全員で画面を更新して、新しいルームでお試しください。"
              : activePickReveal.type === "lottery" && !activePickReveal.winner
                ? "抽選結果が確定する前は次へ進めません。"
                : !onlineRevealParticipantUids().includes(action.uid)
                  ? "この発表の確認対象に含まれていません。"
                  : "確認を処理できませんでした。もう一度押してください。";
        }
      } else if (action.kind === "next") {
        actionRejectionReason = "端末間で発表データが一致しません。全員で画面を更新して、新しいルームでお試しください。";
      } else if (action.kind === "skip" && revealMatches && activeMode !== "online") {
        const previousPhase = pickRevealPhase;
        skipCurrentPickReveal();
        actionAccepted = currentRevealKey() !== action.revealKey || pickRevealPhase !== previousPhase;
      }
    }
  } catch (error) {
    actionRejectionReason = error?.message || "操作を処理できませんでした。もう一度お試しください。";
    console.error("Online action processing failed", error);
  } finally {
    if (action?.uid && processingRoomRef === onlineRoomRef) {
      onlineActionAcks[action.uid] = {
        key: snapshot.key,
        kind: action?.kind || "?",
        accepted: actionAccepted,
        reason: actionAccepted ? "" : actionRejectionReason || "操作を確認できませんでした。発表画面を確認して、もう一度試してください。",
        team: ownerTeam || "",
        clientBuild: action?.clientBuild || "",
        hostBuild: onlineClientBuild,
        requestedIdol,
        hostResolvedIdol,
        actionAttempt: action?.r1NominationAttempt != null && Number.isFinite(Number(action.r1NominationAttempt))
          ? Number(action.r1NominationAttempt)
          : null,
        hostAttemptBefore,
        hostAttemptAfter: r1NominationAttempt,
        hostPhaseBefore,
        hostPhaseAfter: onlineStatePhaseSummary(serializeOnlineGame()),
        at: Date.now()
      };
    }
    if (processingRoomRef === onlineRoomRef && onlineIsHost) {
      onlineProcessedActionIds.add(snapshot.key);
      const stateSaved = await flushOnlineState();
      if (stateSaved) {
        onlineProcessedActionIds.delete(snapshot.key);
        await removeProcessedOnlineAction(snapshot);
      } else {
        onlineHandledActionIds.delete(snapshot.key);
      }
    }
  }
}

function onlinePlayersInDraftOrder() {
  return Object.entries(onlinePlayers).filter(([, player]) => !player.departed).sort(([, a], [, b]) =>
    Number(a.order || 0) - Number(b.order || 0)
  );
}

async function startOnlineGame() {
  if (!onlineIsHost || onlineGameStatus !== "lobby" || onlineForceKickPending || onlineStartPending) return;
  const players = onlinePlayersInDraftOrder();
  if (players.length < 2 || players.length > 10) {
    setOnlineStatus("オンラインドラフトは2〜10人で開始できます。参加者の人数を確認してください。");
    return;
  }
  onlineStartPending = true;
  renderOnlineLobby();
  try {
    const onlineSettings = {
      pickLimit: Number($("pickLimit").value),
      orderMode: $("orderMode").value,
      startOrderMode: $("startOrderMode").value
    };
    await onlineRoomRef.child("settings").set(onlineSettings);
    await onlineRoomRef.child("status").set("playing");
    startGame("online");
  } catch (error) {
    setOnlineStatus(error.message || "ドラフトを開始できませんでした。");
  } finally {
    onlineStartPending = false;
    renderOnlineLobby();
  }
}

async function restartOnlineGame() {
  if (!onlineIsHost || !onlineRoomRef || onlineGameStatus !== "playing" ||
      !gameStarted || !allTeamsComplete() || pendingR1Resolution || !$("pickReveal").hidden || pickRevealQueue.length || onlineRestartPending || onlineForceKickPending || onlineStartPending) return;
  const players = onlinePlayersInDraftOrder();
  if (players.length < 2 || players.length > 10) {
    setOnlineStatus("再ドラフトには2〜10人の参加者が必要です。ルームの参加者を確認してください。");
    return;
  }

  onlineRestartPending = true;
  renderOnlineLobby();
  try {
    if (onlineStateWriteTimer !== null) {
      clearTimeout(onlineStateWriteTimer);
      onlineStateWriteTimer = null;
    }
    const actionsSnapshot = await onlineRoomRef.child("actions").once("value");
    const oldActionIds = Object.keys(actionsSnapshot.val() || {});
    await Promise.all(oldActionIds.map(actionId =>
      onlineRoomRef.child(`actions/${actionId}`).remove()
    ));
    const departedUids = Object.entries(onlinePlayers)
      .filter(([, player]) => player.departed)
      .map(([uid]) => uid);
    await Promise.all(departedUids.map(uid => onlineRoomRef.child(`players/${uid}`).remove()));
    departedUids.forEach(uid => delete onlinePlayers[uid]);
    onlineActionAcks = {};
    onlinePendingAction = null;
    onlineActionPending = false;
    onlineHandledActionIds.clear();
    onlineProcessedActionIds.clear();
    startGame("online");
    await flushOnlineState();
  } catch (error) {
    setOnlineStatus(error.message || "同じルームで再ドラフトを開始できませんでした。");
  } finally {
    onlineRestartPending = false;
    renderOnlineLobby();
  }
}

function restartLocalOrAiDraft() {
  const mode = $("playMode").value;
  if (!isDraftFinished() || mode !== activeMode || !["ai", "local"].includes(mode)) return;
  startGame(mode, mode === "ai" ? Number($("aiCount").value) : 3);
}

function scrollToCandidatePool() {
  requestAnimationFrame(() => {
    if (!gameStarted) return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    $("pool").scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
      inline: "nearest"
    });
    $("pool").focus({ preventScroll: true });
  });
}

function startGame(mode, aiCount = 3) {
  clearOnlineGuestRebidFallback();
  if (aiAdvanceTimer !== null) {
    clearTimeout(aiAdvanceTimer);
    aiAdvanceTimer = null;
  }
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }
  pickRevealQueue = [];
  pickRevealPhase = "closed";
  activePickReveal = null;
  onlineRevealAcks = new Set();
  onlineShownRevealKey = "";
  gameSessionId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  finalResultsWasVisible = false;
  if (mode === "online") {
    onlinePendingAction = null;
    onlineActionPending = false;
    onlineActionAcks = {};
    if (onlineIsHost) onlineHandledActionIds.clear();
  }
  $("pickReveal").hidden = true;
  setFinalScreenshotMode(false, false);
  activeMode = mode;
  onlineDepartedTeams = new Set();
  pickLimit = Number($("pickLimit").value);
  orderMode = $("orderMode").value;
  startOrderMode = $("startOrderMode").value || "random";
  teamNames = mode === "ai"
    ? [(playerTeamNameValue.trim() || "あなた"), ...Array.from({ length: aiCount }, (_, index) => `AI${index + 1}`)]
    : mode === "online"
      ? onlinePlayersInDraftOrder().map(([, player]) => player.teamName || player.name || "プレイヤー")
      : localTeamNames.slice(0, Number($("localTeamCount").value)).map((defaultName, index) =>
        localTeamNameValues[index].trim() || defaultName
      );
  aiTeams = new Set(mode === "ai" ? teamNames.slice(1) : []);
  assignAIStrategies([...aiTeams]);
  if (startOrderMode === "random") teamNames = shuffle(teamNames);
  gameStarted = true;
  setDraftedMembers([]);
  selectedId = null;
  pendingDraftPickId = null;
  picks = Object.fromEntries(teamNames.map(team => [team, []]));
  firstRoundLotteryLosses = Object.fromEntries(teamNames.map(team => [team, []]));
  round = 1;
  r1Started = false;
  r1NominationOrder = teamNames.slice();
  r1NominationIndex = 0;
  r1NominationAttempt = 1;
  r1Nominations = [];
  r1Queue = [];
  r1RevealPending = false;
  pendingR1Resolution = null;
  waiverOrder = teamNames.slice();
  firstRoundWaiverOrder = orderMode === "snake"
    ? teamNames.slice().reverse()
    : waiverOrder.slice();
  turnIndex = 0;
  lotterySummary = "";
  $("selectedMember").textContent = "候補を選ぶと確認画面が出ます。確定ボタンを押すと指名を提出します。";
  $("randomResult").hidden = true;
  renderNominations();
  renderCandidates();
  updateModeSetup();
  renderDraft();
  advanceAI();
  syncOnlineState();
  scrollToCandidatePool();
}

$("playMode").addEventListener("change", updateModeSetup);
$("aiCount").addEventListener("change", updateModeSetup);
$("localTeamCount").addEventListener("change", updateModeSetup);
$("pickLimit").addEventListener("change", updateModeSetup);
$("orderMode").addEventListener("change", updateModeSetup);
$("startOrderMode").addEventListener("change", updateModeSetup);
$("pickLimit").addEventListener("change", () => {
  if (onlineIsHost && onlineGameStatus === "lobby") {
    onlineRoomRef.child("settings").update({ pickLimit: Number($("pickLimit").value) });
  }
});
$("startOrderMode").addEventListener("change", () => {
  if (onlineIsHost && onlineGameStatus === "lobby") {
    onlineRoomRef.child("settings").update({ startOrderMode: $("startOrderMode").value });
  }
});
$("orderMode").addEventListener("change", () => {
  if (onlineIsHost && onlineGameStatus === "lobby") {
    onlineRoomRef.child("settings").update({ orderMode: $("orderMode").value });
  }
});
$("createOnlineRoom").addEventListener("click", createOnlineRoom);
$("joinOnlineRoom").addEventListener("click", joinOnlineRoom);
$("copyOnlineInvite").addEventListener("click", copyOnlineInvite);
$("closeOnlineRoom").addEventListener("click", closeOnlineRoom);
$("onlinePlayerList").addEventListener("click", event => {
  const button = event.target.closest("[data-kick-player]");
  if (!button || button.disabled) return;
  void forceRemoveOnlinePlayer(button.dataset.kickPlayer);
});
$("leaveOnlineRoom").addEventListener("click", leaveOnlineRoom);
$("leaveOnlineRoomFromResults").addEventListener("click", leaveOnlineRoom);
$("closeOnlineRoomFromResults").addEventListener("click", closeOnlineRoom);
$("startOnlineGame").addEventListener("click", startOnlineGame);
$("restartOnlineGame").addEventListener("click", restartOnlineGame);
$("restartOfflineDraft").addEventListener("click", restartLocalOrAiDraft);
$("shareFinalResultsX").addEventListener("click", shareDraftResultsOnX);
$("confirmFirstRoundReveal").addEventListener("click", confirmFirstRoundReveal);
$("startGame").addEventListener("click", () => {
  const mode = $("playMode").value;
  if (mode === "ai") startGame("ai", Number($("aiCount").value));
  else if (mode === "local") startGame("local");
  else startOnlineGame();
});

function setFinalScreenshotMode(enabled, shouldScroll = true) {
  const screenshotButton = $("finalScreenshotToggle");
  if (!screenshotButton) return;
  document.body.classList.toggle("final-screenshot-mode", enabled);
  $("finalResultsBoard").hidden = enabled;
  $("finalSnapshotGrid").hidden = !enabled;
  $("finalResultsTableHint").hidden = enabled;
  screenshotButton.setAttribute("aria-pressed", String(enabled));
  screenshotButton.textContent = enabled ? "通常の結果表に戻る" : "スクショ用レイアウト";
  if (enabled && shouldScroll) {
    requestAnimationFrame(() => $("finalResults").scrollIntoView({ behavior: "smooth", block: "start" }));
  }
}

$("finalScreenshotToggle").addEventListener("click", () => {
  setFinalScreenshotMode($("finalSnapshotGrid").hidden);
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("final-screenshot-mode")) {
    setFinalScreenshotMode(false, false);
  }
});

function teamIsComplete(team) {
  if (activeMode === "online" && onlineDepartedTeams.has(team)) return true;
  return (picks[team] || []).length >= pickLimit;
}

function allTeamsComplete() {
  return teamNames.length > 0 && teamNames.every(teamIsComplete);
}

function canSubmitR1Nomination(team) {
  if (activeMode === "online" && onlineDepartedTeams.has(team)) return false;
  if (!team || !r1NominationOrder.includes(team) || r1Nominations.some(item => item.team === team)) return false;
  return activeMode === "online" || team === r1NominationOrder[r1NominationIndex];
}

function r1BidCount() {
  const submittedTeams = new Set(r1Nominations.map(item => item.team));
  return r1NominationOrder.filter(team => !onlineDepartedTeams.has(team) && submittedTeams.has(team)).length;
}

function allR1BidsSubmitted() {
  return r1NominationOrder.length > 0 && r1NominationOrder
    .filter(team => !onlineDepartedTeams.has(team))
    .every(team => r1Nominations.some(item => item.team === team));
}

function areR1BidsSealed() {
  return !r1Started && !pendingR1Resolution &&
    r1NominationOrder.some(team => !r1Nominations.some(item => item.team === team));
}

function currentTeamName() {
  if (!gameStarted) return null;
  if (!r1Started) {
    if (activeMode === "online") {
      const ownTeam = onlineTeamForUid(onlineUid);
      return canSubmitR1Nomination(ownTeam) ? ownTeam : null;
    }
    return r1NominationOrder[r1NominationIndex] || null;
  }
  if (allTeamsComplete()) return null;
  while (turnIndex < waiverOrder.length && teamIsComplete(waiverOrder[turnIndex])) {
    turnIndex += 1;
  }
  return waiverOrder[turnIndex] || null;
}

function availableForAI() {
  return preferredPersonCandidates(
    idols.filter(idol => !personHasBeenDrafted(idol) && !excluded.has(idol.id))
  );
}

function chooseAIIdol(team) {
  const available = availableForAI();
  if (!available.length) return null;

  const strategy = aiStrategyFor(team);
  if (strategy.style === "random") {
    return available[Math.floor(Math.random() * available.length)];
  }

  const teamPicks = picks[team] || [];
  const firstKnownPick = teamPicks.find(pick => pick.agency && pick.agency !== "未確認");
  const firstKnownAgency = firstKnownPick ? agencyFilterName(firstKnownPick.agency) : "";
  const ranked = available.map(idol => {
    const groupCount = teamPicks.filter(pick => pick.group === idol.group).length;
    const generationCount = teamPicks.filter(pick => pick.generation === idol.generation).length;
    const nationalityCount = teamPicks.filter(pick => pick.nationality === idol.nationality).length;
    const agency = idol.agency !== "未確認" ? agencyFilterName(idol.agency) : "";
    const agencyCount = agency
      ? teamPicks.filter(pick => agencyFilterName(pick.agency) === agency).length
      : 0;
    const popularity = idol.popularityStars > 1
      ? (idol.popularityStars - 1) * 1.4 + idol.popularitySortScore / 20
      : 0;

    let compositionScore = 0;
    switch (strategy.style) {
      case "nationalityMix":
        compositionScore += 9 / (nationalityCount + 1);
        compositionScore += agency ? 2 / (agencyCount + 1) : 0;
        compositionScore += groupCount === 0 ? 2 : -groupCount;
        break;
      case "agencyFocus":
        if (agency && firstKnownAgency) {
          compositionScore += agency === firstKnownAgency ? 10 : -7;
        } else if (agency) {
          compositionScore += 2;
        }
        compositionScore += popularity * 0.25;
        break;
      case "agencyMix":
        compositionScore += agency ? 10 / (agencyCount + 1) : 0;
        compositionScore += groupCount === 0 ? 3 : -groupCount;
        compositionScore += popularity * 0.2;
        break;
      case "generationFocus":
        compositionScore += generationCount > 0 ? 9 * generationCount : 0;
        compositionScore += popularity * 0.3;
        break;
      case "generationMix":
        compositionScore += 9 / (generationCount + 1);
        compositionScore += nationalityCount === 0 ? 2 : 0;
        compositionScore += popularity * 0.35;
        break;
      case "nationalityFocus":
        compositionScore += nationalityCount > 0 ? 9 * nationalityCount : 0;
        compositionScore += popularity * 0.3;
        break;
      default:
        compositionScore += popularity * 0.35;
        break;
    }
    const score = Math.random() * 4 + compositionScore;
    return { idol, score };
  }).sort((a, b) => b.score - a.score);

  const shortlist = ranked.slice(0, Math.min(3, ranked.length));
  return shortlist[Math.floor(Math.random() * shortlist.length)].idol;
}

function pickRecord(idol, pickRound = round) {
  return {
    round: pickRound,
    personKey: idol.personKey,
    name: idol.japaneseName,
    group: idol.group,
    agency: idol.agency,
    generation: idol.generation,
    nationality: idol.nationality,
    activity: idol.activity
  };
}

function queuePickReveal(team, idol, pickRound, type = "pick", extra = {}) {
  const participantTeams = type === "lottery"
    ? (extra.drawOrder?.length ? extra.drawOrder : extra.teams || [])
    : [team];
  const participantUids = activeMode === "online"
    ? [...new Set(participantTeams.map(teamOwnerUid).filter(Boolean))]
    : [];
  pickRevealQueue.push({ team, idol, round: pickRound, type, ...extra, participantUids });
  if ($("pickReveal").hidden) showNextPickReveal();
}

function renderLotteryTickets(reveal) {
  $("lotteryTickets").innerHTML = reveal.envelopes.map((envelope, index) => `
    <button class="lottery-envelope" type="button" data-lottery-envelope="${envelope}"
      aria-label="抽選封筒 ${index + 1}。全員が選んだ後に開示されます" disabled style="--ticket-delay:${index * 90}ms">
      <span class="lottery-envelope-paper">
        <strong class="lottery-envelope-team">封筒 ${index + 1}</strong>
        <span class="lottery-envelope-art" aria-hidden="true">
          <span class="lottery-envelope-letter">✦</span>
          <span class="lottery-envelope-flap"></span>
          <span class="lottery-envelope-seal">OPEN</span>
        </span>
        <small class="lottery-envelope-hint">封筒を選ぶ</small>
      </span>
      <span class="lottery-envelope-result" aria-hidden="true">
        <span>
          <strong>抽選結果</strong>
          <small>開示待ち</small>
        </span>
      </span>
    </button>
  `).join("");
}

function updateLotteryProgress() {
  if (!activePickReveal || activePickReveal.type !== "lottery") return;
  const reveal = activePickReveal;
  const total = reveal.drawOrder.length;
  const drawer = reveal.drawOrder[reveal.drawIndex];
  const allEnvelopesSelected = reveal.selections.size === total;
  const hostCanOpen = activeMode === "online" && onlineIsHost && allEnvelopesSelected &&
    !reveal.winner && !reveal.revealing && !reveal.opening;
  $("pickRevealNext").hidden = activeMode === "online" && !hostCanOpen;
  $("lotteryBoardTitle").textContent = activeMode === "online"
    ? "全員が封筒を選び終わったら、ホストが開封を開始します"
    : "順番に封筒を選び、全員が選び終わったら一斉に開封します";
  if (reveal.winner) {
    $("lotteryBoard").classList.add("is-revealed");
    $("lotteryTurn").textContent = `交渉権獲得チーム：${displayTeamName(reveal.winner)}`;
    $("lotteryOutcome").textContent = "このチームが交渉権を獲得しました";
    const winnerIndex = Math.max(0, teamNames.indexOf(reveal.winner));
    $("lotteryBoard").style.setProperty("--lottery-winner-color", teamColorPalette[winnerIndex % teamColorPalette.length]);
    $("pickRevealNext").disabled = false;
    $("pickRevealNext").textContent = pickRevealQueue.length
      ? "次の発表へ"
      : "次へ進む";
    $("pickRevealActionHint").textContent = pickRevealQueue.length
      ? "抽選結果を確認したら「次の発表へ」で続けられます。"
      : "抽選結果を確認したら「次へ進む」で表に戻れます。";
    updateOnlineRevealConfirmation();
    $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").forEach(button => {
      button.disabled = true;
    });
    return;
  }

  if (reveal.revealing) {
    const waitingForOpeningCue = !reveal.opening;
    $("lotteryTurn").textContent = waitingForOpeningCue
      ? "開封の準備が整いました"
      : `全${total}チームの封筒を一斉に開封！`;
    $("lotteryOutcome").textContent = waitingForOpeningCue ? "交渉権獲得チームは…" : "せーの…！";
    $("pickRevealNext").disabled = true;
    $("pickRevealNext").textContent = "結果を開示中";
    $("pickRevealActionHint").textContent = waitingForOpeningCue
      ? activeMode === "online"
        ? "ホストが開示を開始しました。結果を発表します。"
        : "全員の封筒がそろいました。まもなく開封します。"
      : "全チームの封筒を同時に開封しています。";
    $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").forEach(button => {
      button.disabled = true;
    });
    return;
  }

  if (allEnvelopesSelected) {
    $("lotteryTurn").textContent = "全員の封筒がそろいました";
    $("lotteryOutcome").textContent = activeMode === "online"
      ? "ホストが開封を始めるまで、抽選結果は伏せられています。"
      : "選んだ封筒を一斉に開封します…";
    $("pickRevealNext").disabled = !hostCanOpen;
    $("pickRevealNext").textContent = "抽選結果を開示";
    $("pickRevealActionHint").textContent = hostCanOpen
      ? "準備ができました。確認したら「抽選結果を開示」を押してください。"
      : activeMode === "online"
        ? "全員が封筒を選びました。ホストの開示操作を待っています。"
        : "全員の封筒がそろいました。開封します。";
    $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").forEach(button => {
      button.disabled = true;
    });
    return;
  }

  if (!drawer) return;
  $("lotteryBoard").classList.remove("is-revealed");
  $("lotteryTurn").textContent = `抽選順 ${reveal.drawIndex + 1} / ${total}：${displayTeamName(drawer)}が封筒を選択`;
  $("lotteryOutcome").textContent = `${reveal.selections.size} / ${total}チームが選択済み。全員が選んだ後に一斉開示します。`;
  $("pickRevealNext").disabled = true;
  $("pickRevealNext").textContent = "全員の封筒選択を待っています";
  $("pickRevealActionHint").textContent = `${displayTeamName(drawer)}の番です。封筒を一つ選ぶと、全員の選択後に一斉開示します。`;
  const canChoose = pickRevealPhase === "revealed" && !reveal.opening &&
    !onlineActionPending && Boolean(drawer && canControlTeam(drawer));
  $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").forEach(button => {
    const envelope = Number(button.dataset.lotteryEnvelope);
    button.disabled = !canChoose || reveal.selections.has(envelope);
  });
}

function scheduleAINextLotteryEnvelope() {
  const reveal = activePickReveal;
  if (!reveal || reveal.type !== "lottery" || reveal.winner || reveal.opening || reveal.revealing || pickRevealPhase !== "revealed") return;
  const team = reveal.drawOrder[reveal.drawIndex];
  const departedOnlineTeam = activeMode === "online" && onlineIsHost && onlineDepartedTeams.has(team);
  if (!team || (!aiTeams.has(team) && !departedOnlineTeam)) return;
  const availableEnvelopes = reveal.envelopes.filter(envelope => !reveal.selections.has(envelope));
  if (!availableEnvelopes.length) return;

  pickRevealTimer = window.setTimeout(() => {
    pickRevealTimer = null;
    if (activePickReveal !== reveal) return;
    const envelope = availableEnvelopes[Math.floor(Math.random() * availableEnvelopes.length)];
    selectLotteryEnvelope(envelope, true);
  }, 700);
}

function selectLotteryEnvelope(envelope, automatic = false, actorUid = onlineUid) {
  const reveal = activePickReveal;
  if (!reveal || reveal.type !== "lottery" || reveal.winner || reveal.opening || reveal.revealing) return;
  const team = reveal.drawOrder[reveal.drawIndex];
  const envelopeId = Number(envelope);
  if (!team || !reveal.envelopes.includes(envelopeId) || reveal.selections.has(envelopeId)) return;
  if (pickRevealPhase !== "revealed") return;
  if (activeMode === "online" && !onlineIsHost && !automatic) {
    if (teamOwnerUid(team) !== onlineUid) return;
    submitOnlineAction({ kind: "envelope", envelope: envelopeId });
    return;
  }
  if (activeMode === "online") {
    if (!automatic && teamOwnerUid(team) !== actorUid) return;
  } else if (aiTeams.has(team) !== automatic || (!automatic && !canControlTeam(team))) {
    return;
  }

  if (!automatic && pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }

  const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
    .find(item => Number(item.dataset.lotteryEnvelope) === envelopeId);
  if (!button) return;
  reveal.selections.set(envelopeId, team);
  reveal.drawIndex += 1;
  button.classList.add("is-chosen", "is-selected");
  button.querySelector(".lottery-envelope-hint").textContent = "選択済み";
  button.setAttribute("aria-label", `封筒 ${envelopeId + 1}は選択済み。開示まで結果は伏せられます`);

  if (reveal.drawIndex >= reveal.drawOrder.length) {
    reveal.revealing = activeMode !== "online";
    reveal.hostOpenConfirmed = false;
    updateLotteryProgress();
    syncOnlineState();
    if (activeMode === "online") return;
    const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;
    pickRevealTimer = window.setTimeout(() => revealLotteryResults(reveal), revealDelay);
    return;
  }

  updateLotteryProgress();
  syncOnlineState();
  scheduleAINextLotteryEnvelope();
}

function revealLotteryResults(reveal) {
  if (activePickReveal !== reveal || reveal.winner || reveal.opening || reveal.selections.size !== reveal.drawOrder.length) return;
  if (activeMode === "online" && (!onlineIsHost || !reveal.hostOpenConfirmed)) return;
  pickRevealTimer = null;
  reveal.opening = true;
  const openingDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 560;
  if (activeMode === "online") {
    reveal.openingAt = onlineServerNow() + ONLINE_REVEAL_SYNC_LEAD_MS;
    reveal.openingDurationMs = openingDelay;
    reveal.winnerAt = reveal.openingAt + openingDelay;
  } else {
    reveal.openingAt = 0;
    reveal.openingDurationMs = openingDelay;
    reveal.winnerAt = openingDelay;
  }
  $("lotteryTurn").textContent = "全員の封筒を一斉に開封！";
  $("lotteryOutcome").textContent = "せーの…！";

  if (activeMode !== "online") {
    reveal.envelopes.forEach(envelope => {
      const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
        .find(item => Number(item.dataset.lotteryEnvelope) === envelope);
      const team = reveal.selections.get(envelope);
      const won = envelope === reveal.winningEnvelope;
      if (!button || !team) return;
      const result = button.querySelector(".lottery-envelope-result");
      result.querySelector("strong").textContent = displayTeamName(team);
      result.querySelector("small").textContent = won ? "交渉権獲得" : "再指名へ";
      const teamIndex = Math.max(0, teamNames.indexOf(team));
      button.style.setProperty("--lottery-team-color", teamColorPalette[teamIndex % teamColorPalette.length]);
      button.classList.add("is-opening");
      button.disabled = true;
    });
  }
  syncOnlineState();
  scheduleOnlineRevealVisualTimeline();
  const waitForOutcome = activeMode === "online"
    ? Math.max(0, Number(reveal.winnerAt) - onlineServerNow())
    : openingDelay;
  pickRevealTimer = window.setTimeout(() => {
    pickRevealTimer = null;
    completeLotteryReveal(reveal);
  }, waitForOutcome);
}

function completeLotteryReveal(reveal) {
  if (activePickReveal !== reveal || reveal.winner) return;
  const winner = reveal.selections.get(Number(reveal.winningEnvelope));
  if (!winner) return;

  reveal.opening = false;
  reveal.revealing = false;
  reveal.opened = new Set(reveal.envelopes);
  reveal.winner = winner;
  if (activeMode === "online") {
    reveal.revealedAt = Number(reveal.winnerAt) || onlineServerNow();
    reveal.nextRevealAt = reveal.revealedAt + onlineRevealAutoAdvanceDelay(reveal);
  }
  reveal.opened.forEach(envelope => {
    const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
      .find(item => Number(item.dataset.lotteryEnvelope) === Number(envelope));
    const team = reveal.selections.get(Number(envelope));
    const won = Number(envelope) === Number(reveal.winningEnvelope);
    if (!button || !team) return;
    button.classList.remove("is-opening");
    button.classList.add("is-open", won ? "is-winner" : "is-loser");
    const result = button.querySelector(".lottery-envelope-result");
    result.classList.add(won ? "is-winner" : "is-loser");
    button.setAttribute("aria-label", won
      ? `${displayTeamName(team)}が交渉権を獲得`
      : `${displayTeamName(team)}は再指名へ`);
  });

  reveal.teams.forEach(losingTeam => {
    if (losingTeam === winner) return;
    if (!firstRoundLotteryLosses[losingTeam]) firstRoundLotteryLosses[losingTeam] = [];
    firstRoundLotteryLosses[losingTeam].push({
      name: reveal.idol.japaneseName,
      group: reveal.idol.group,
      agency: reveal.idol.agency
    });
  });
  picks[winner].push(pickRecord(reveal.idol, 1));
  markPersonDrafted(reveal.idol);
  if (pendingR1Resolution) {
    pendingR1Resolution.waiting.delete(winner);
    pendingR1Resolution.results.push(`${reveal.idol.japaneseName}：${displayTeamName(winner)}が交渉権を獲得`);
  }
  renderNominations();
  renderDraft();
  if ($("pickReveal").hidden) renderCandidates();
  updateLotteryProgress();
  syncOnlineState();
  if (activeMode === "online") {
    updateOnlineRevealConfirmation();
    scheduleRevealAutoAdvance(onlineRevealAutoAdvanceDelay(reveal));
  }
}

function skipCurrentPickReveal() {
  if (activePickReveal?.type === "lottery") return;
  if (activeMode === "online" && !onlineIsHost) {
    submitOnlineAction({ kind: "skip" });
    return;
  }
  revealPickCard();
}

function showNextPickReveal() {
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }

  const completedNomination = activePickReveal?.type === "nomination";
  if (completedNomination) completeFirstRoundNomination(activePickReveal);
  onlineRevealAcks = new Set();

  const reveal = pickRevealQueue.shift();
  if (!reveal) {
    clearOnlineRevealTimeline();
    pickRevealPhase = "closed";
    activePickReveal = null;
    $("pickReveal").hidden = true;
    if (pendingR1Resolution) finishFirstRoundResolution();
    else renderDraft();
    // The host does not apply its own Firebase snapshots. Refresh the candidate
    // controls here so they reflect the newly opened turn immediately.
    renderCandidates();
    advanceAI();
    syncOnlineState();
    return;
  }

  activePickReveal = reveal;
  if (completedNomination) {
    renderNominations();
    renderDraft();
    if ($("pickReveal").hidden) renderCandidates();
  }
  const isLottery = reveal.type === "lottery";
  const introDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 80
    : isLottery ? 1050 : 2000;
  if (activeMode === "online") {
    reveal.introStartedAt = onlineServerNow() + ONLINE_REVEAL_SYNC_LEAD_MS;
    reveal.introDurationMs = introDelay;
    reveal.revealedAt = 0;
    reveal.nextRevealAt = 0;
    reveal.openingAt = 0;
    reveal.openingDurationMs = 0;
    reveal.winnerAt = 0;
  }
  if (isLottery) {
    reveal.opened = new Set();
    reveal.selections = new Map();
    reveal.opening = false;
    reveal.revealing = false;
    reveal.hostOpenConfirmed = false;
    reveal.envelopes = reveal.teams.map((_, index) => index);
    reveal.winningEnvelope = Math.floor(Math.random() * reveal.envelopes.length);
    reveal.drawIndex = 0;
    reveal.winner = null;
  }
  const teamIndex = Math.max(0, teamNames.indexOf(isLottery ? reveal.drawOrder[0] : reveal.team));
  const card = $("pickRevealCard");
  card.style.setProperty("--reveal-team-color", teamColorPalette[teamIndex % teamColorPalette.length]);
  card.classList.toggle("is-lottery", isLottery);
  $("pickRevealRound").textContent = isLottery ? "1巡目 / 重複指名の抽選" : reveal.round + "巡目";
  $("pickRevealLabel").textContent = isLottery
    ? "指名が重複しました"
    : reveal.type === "nomination"
      ? "1巡目入札メンバー"
      : reveal.round + "巡目指名";
  $("pickRevealTeamLabel").textContent = "指名チーム";
  $("pickRevealTeam").textContent = displayTeamName(reveal.team);
  $("pickRevealTeamBand").hidden = isLottery;
  $("lotteryBoard").classList.remove("is-revealed");
  $("pickRevealCaption").textContent = isLottery
    ? "封筒を一つ選んで、交渉権を引き当てよう"
    : "選ばれたメンバーは…";
  $("pickRevealName").textContent = reveal.idol.japaneseName;
  $("pickRevealAgency").textContent = shortAgencyName(fullAgencyName(reveal.idol.group, reveal.idol.agency));
  $("pickRevealGroup").textContent = reveal.idol.group;
  $("lotteryBoard").hidden = !isLottery;
  $("pickRevealNext").disabled = false;
  if (isLottery) {
    $("lotteryOutcome").textContent = "全員が封筒を選ぶまで、結果は伏せられます。";
  } else {
    $("lotteryTickets").innerHTML = "";
  }

  $("pickReveal").hidden = false;
  $("pickRevealFlipCard").classList.remove("is-flipped");
  card.classList.remove("is-visible");
  if (activeMode !== "online") {
    void card.offsetWidth;
    card.classList.add("is-visible");
  }
  pickRevealPhase = "intro";
  $("pickRevealNext").textContent = isLottery ? "抽選を開始" : "指名を発表";
  $("pickRevealSkip").textContent = "演出をスキップ";
  $("pickRevealSkip").hidden = activeMode === "online" || isLottery;
  $("pickRevealActionHint").textContent = isLottery
    ? activeMode === "online"
      ? "全員が封筒を選び終わると、ホストが開示を始めます。"
      : "封筒を選ぶ抽選です。結果は全員が選び終わってから同時に開きます。"
    : "指名チームの発表後、約2秒でメンバーを開示します。内容を確認したら下のボタンで次へ進みます。";
  requestAnimationFrame(() => $("pickRevealNext").focus({ preventScroll: true }));

  const introDeadline = activeMode === "online"
    ? (Number(reveal.introStartedAt) || onlineServerNow()) + introDelay
    : 0;
  const waitForReveal = activeMode === "online"
    ? Math.max(0, introDeadline - onlineServerNow())
    : introDelay;
  pickRevealTimer = window.setTimeout(revealPickCard, waitForReveal);
  renderOnlinePickReveal();
  syncOnlineState();
}

function revealPickCard() {
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }
  if (pickRevealPhase !== "intro") return;

  pickRevealPhase = "revealed";
  if (activeMode === "online" && activePickReveal) {
    activePickReveal.revealedAt = onlineServerNow();
    const advanceDelay = onlineRevealAutoAdvanceDelay(activePickReveal);
    activePickReveal.nextRevealAt = advanceDelay ? activePickReveal.revealedAt + advanceDelay : 0;
  }
  $("pickRevealFlipCard").classList.add("is-flipped");
  $("pickRevealSkip").hidden = true;
  if (activePickReveal?.type === "lottery") {
    updateLotteryProgress();
    scheduleAINextLotteryEnvelope();
    syncOnlineState();
    return;
  }
  $("pickRevealNext").disabled = false;
  $("pickRevealNext").textContent = pickRevealQueue.length
    ? "次の指名へ（あと" + pickRevealQueue.length + "件）"
    : "次へ進む";
  $("pickRevealActionHint").textContent = pickRevealQueue.length
    ? "指名内容を確認したら「次の指名へ」で次の発表に進みます。"
    : "指名内容を確認したら「次へ進む」で結果表に戻れます。";

  const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1300 : 2600;
  if (activeMode === "online") {
    updateOnlineRevealConfirmation();
    scheduleRevealAutoAdvance(onlineRevealAutoAdvanceDelay(activePickReveal));
  } else {
    pickRevealTimer = window.setTimeout(showNextPickReveal, revealDelay);
  }
  syncOnlineState();
}

function advancePickReveal() {
  if (activeMode === "online") {
    if (onlineActionPending) {
      $("pickRevealActionHint").textContent = "確認を送信中です。少し待ってください。";
      return false;
    }
    if (pickRevealPhase !== "revealed") {
      $("pickRevealActionHint").textContent = "発表演出が終わってから確認できます。";
      return false;
    }
    if (activePickReveal?.type === "lottery" && !activePickReveal.winner) {
      const reveal = activePickReveal;
      if (!onlineIsHost || reveal.selections.size !== reveal.drawOrder.length || reveal.revealing || reveal.opening) {
        $("pickRevealActionHint").textContent = "全員が封筒を選んだ後、ホストが開示を開始します。";
        return false;
      }
      reveal.hostOpenConfirmed = true;
      reveal.revealing = true;
      updateLotteryProgress();
      syncOnlineState();
      const suspenseDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100;
      pickRevealTimer = window.setTimeout(() => revealLotteryResults(reveal), suspenseDelay);
      return true;
    }
    if (onlineRevealAutoAdvanceDelay() > 0) {
      $("pickRevealActionHint").textContent = "この発表は数秒後に自動で次へ進みます。";
      return false;
    }
    if (!onlineIsHost) return submitOnlineAction({ kind: "next" });
    const accepted = acknowledgeOnlineReveal(onlineUid);
    if (!accepted) {
      $("pickRevealActionHint").textContent = "この端末は確認対象ではないか、ルーム接続が切れています。";
    }
    return accepted;
  }
  if (pickRevealPhase === "intro") revealPickCard();
  else if (pickRevealPhase === "revealed" && (
    activePickReveal?.type !== "lottery" ||
    Boolean(activePickReveal.winner)
  )) showNextPickReveal();
  else return false;
  return true;
}

const pickRevealNextButton = $("pickRevealNext");
function handlePickRevealNextActivation(event) {
  if (event.type === "pointerup" && event.pointerType === "mouse" && event.button !== 0) return;
  if (event.type === "touchend") event.preventDefault();

  const isDirectTouch = event.type === "pointerup" || event.type === "touchend";
  if (Date.now() - lastPickRevealPointerActionAt < 800 && (isDirectTouch || event.detail > 0)) return;

  const accepted = advancePickReveal();
  // Only suppress the browser's follow-up click after an activation was
  // actually accepted. A rejected pointer event must leave click as fallback.
  if (accepted && isDirectTouch) lastPickRevealPointerActionAt = Date.now();
}
pickRevealNextButton.addEventListener("pointerup", handlePickRevealNextActivation);
pickRevealNextButton.addEventListener("touchend", handlePickRevealNextActivation, { passive: false });
pickRevealNextButton.addEventListener("click", handlePickRevealNextActivation);
$("pickRevealSkip").addEventListener("click", skipCurrentPickReveal);
$("lotteryTickets").addEventListener("click", event => {
  const button = event.target.closest("button[data-lottery-envelope]");
  if (button) selectLotteryEnvelope(button.dataset.lotteryEnvelope);
});
function nextRoundOrder() {
  if (orderMode === "snake") return waiverOrder.slice().reverse();
  return teamNames.slice();
}

function advancePastCompletedTurns() {
  if (!r1Started) return;
  while (turnIndex < waiverOrder.length && teamIsComplete(waiverOrder[turnIndex])) {
    turnIndex += 1;
  }
  if (turnIndex >= waiverOrder.length && !allTeamsComplete()) {
    round += 1;
    waiverOrder = nextRoundOrder();
    turnIndex = 0;
    while (turnIndex < waiverOrder.length && teamIsComplete(waiverOrder[turnIndex])) {
      turnIndex += 1;
    }
  }
}

function advanceAfterPick() {
  turnIndex += 1;
  if (allTeamsComplete()) return;
  advancePastCompletedTurns();
}

function recordPick(team, idol) {
  const pickRound = round;
  picks[team].push(pickRecord(idol, pickRound));
  markPersonDrafted(idol);
  advanceAfterPick();
}

function scheduleAIAdvance(delay = 420) {
  if (aiAdvanceTimer !== null) return;
  aiAdvanceTimer = window.setTimeout(() => {
    aiAdvanceTimer = null;
    advanceAI();
  }, delay);
}

function advanceAI() {
  if (
    activeMode !== "ai" || !gameStarted || aiAdvanceTimer !== null || !$("pickReveal").hidden ||
    pickRevealQueue.length || pendingR1Resolution
  ) return;

  if (!r1Started) {
    const team = r1NominationOrder[r1NominationIndex];
    if (!team || !aiTeams.has(team)) return;
    const idol = chooseAIIdol(team);
    r1Nominations.push({ team, id: idol?.id || "" });
    r1NominationIndex += 1;
    if (allR1BidsSubmitted()) {
      resolveFirstRound();
    } else {
      scheduleAIAdvance(idol ? 420 : 0);
    }
  } else {
    const team = currentTeamName();
    if (!team || !aiTeams.has(team)) return;
    const idol = chooseAIIdol(team);
    if (!idol) return;
    recordPick(team, idol);
  }
  renderNominations();
  renderDraft();
  renderCandidates();
  if (r1Started) {
    const nextTeam = currentTeamName();
    if (nextTeam && aiTeams.has(nextTeam)) scheduleAIAdvance();
  }
}

function enterSecondRound() {
  r1Started = true;
  r1NominationOrder = [];
  r1NominationIndex = 0;
  r1Nominations = [];
  r1Queue = [];
  if (allTeamsComplete()) return;
  round = 2;
  waiverOrder = firstRoundWaiverOrder.slice();
  turnIndex = 0;
}

function completeFirstRoundNomination(reveal) {
  const batch = pendingR1Resolution;
  if (!batch || reveal?.type !== "nomination" || batch.revealedTeams.has(reveal.team)) return;

  batch.revealedTeams.add(reveal.team);
  const nomination = (batch.nominations || []).find(item => item.team === reveal.team);
  const idol = nomination && idols.find(item => item.id === nomination.idolId);
  if (!idol) return;

  const personKey = idol.personKey || idol.id;
  const nominationsForPerson = (batch.nominations || []).filter(item => {
    const candidate = idols.find(entry => entry.id === item.idolId);
    return candidate && (candidate.personKey || candidate.id) === personKey;
  });
  if (nominationsForPerson.length !== 1 || (picks[reveal.team] || []).some(item => item.round === 1)) return;

  picks[reveal.team].push(pickRecord(idol, 1));
  markPersonDrafted(idol);
}

function finishFirstRoundResolution() {
  const batch = pendingR1Resolution;
  if (!batch) return;
  pendingR1Resolution = null;
  r1NominationOrder = batch.batchOrder.filter(team => batch.waiting.has(team) && !onlineDepartedTeams.has(team));
  r1NominationIndex = 0;
  r1Nominations = [];
  selectedId = null;
  if (r1NominationOrder.length > 0) r1NominationAttempt += 1;
  else enterSecondRound();
  lotterySummary = batch.results.length ? batch.results.join("、") : "重複なし";
  renderNominations();
  renderDraft();
  renderCandidates();
  // Publish the reopened first-round nomination phase immediately. Re-bids
  // can start as soon as the last reveal/lottery closes, so don't leave this
  // transition behind the normal debounced state write.
  if (activeMode === "online" && onlineIsHost) void flushOnlineState();
  else syncOnlineState();
}

function resolveFirstRound(hostConfirmed = false) {
  if (!gameStarted || r1Started || !allR1BidsSubmitted()) return;
  if (activeMode === "online" && onlineIsHost && !hostConfirmed) {
    if (!r1RevealPending) {
      r1RevealPending = true;
      renderNominations();
      renderDraft();
      renderCandidates();
      syncOnlineState();
    }
    return;
  }
  r1RevealPending = false;

  const batchOrder = r1NominationOrder.slice();
  const nominations = batchOrder.map(team => {
    const id = r1Nominations.find(item => item.team === team)?.id || "";
    // Exclusions belong to each browser. A guest nomination was already
    // validated when the host accepted its action; the host's local list must
    // not erase that nomination when opening the sealed first-round bids.
    return { team, id };
  });
  const validNominations = nominations.map(item => ({
    team: item.team,
    idol: idols.find(idol => idol.id === item.id)
  })).filter(item => item.idol);

  const waiting = new Set(nominations.filter(item => !idols.some(idol => idol.id === item.id)).map(item => item.team));
  const byMember = new Map();
  validNominations.forEach(({ team, idol }) => {
    const personKey = idol.personKey || idol.id;
    if (!byMember.has(personKey)) byMember.set(personKey, { idol, teams: [] });
    byMember.get(personKey).teams.push(team);
  });

  const results = [];
  const lotteries = [];
  byMember.forEach(({ idol, teams }) => {
    if (teams.length === 1) return;

    teams.forEach(team => waiting.add(team));
    const drawOrder = firstRoundWaiverOrder.filter(team => teams.includes(team));
    lotteries.push({
      team: drawOrder[0] || teams[0],
      idol,
      teams: teams.slice(),
      drawOrder: drawOrder.length ? drawOrder : teams.slice()
    });
  });

  pendingR1Resolution = {
    batchOrder,
    nominations: validNominations.map(({ team, idol }) => ({ team, idolId: idol.id })),
    revealedTeams: new Set(),
    waiting,
    results
  };
  r1NominationOrder = [];
  r1NominationIndex = 0;
  selectedId = null;

  validNominations.forEach(({ team, idol }) => queuePickReveal(team, idol, 1, "nomination"));
  lotteries.forEach(event => queuePickReveal(event.team, event.idol, 1, "lottery", event));

  if (pickRevealQueue.length === 0 && $("pickReveal").hidden) {
    finishFirstRoundResolution();
    advanceAI();
  }
  renderNominations();
  renderDraft();
  renderCandidates();
}

function confirmFirstRoundReveal() {
  if (activeMode !== "online" || !onlineIsHost || !r1RevealPending || !allR1BidsSubmitted()) return;
  r1RevealPending = false;
  resolveFirstRound(true);
  renderNominations();
  renderDraft();
  renderCandidates();
  syncOnlineState();
}

function renderFinalSnapshot() {
  const dense = teamNames.length >= 8 || pickLimit >= 7;
  $("finalSnapshotGrid").classList.toggle("is-ultra-compact", dense);
  const headers = teamNames.map((team, index) => `
    <th scope="col" class="final-snapshot-team-header" style="--team-color:${teamColorPalette[index % teamColorPalette.length]}">
      <strong>${escapeHTML(displayTeamName(team))}</strong>
      <small>${(picks[team] || []).length} / ${pickLimit}人</small>
    </th>
  `).join("");
  const rows = Array.from({ length: pickLimit }, (_, roundIndex) => `
    <tr>
      <th scope="row" class="final-snapshot-round">${roundIndex + 1}巡</th>
      ${teamNames.map(team => {
        const pick = (picks[team] || []).find(item => item.round === roundIndex + 1);
        const losses = roundIndex === 0 ? (firstRoundLotteryLosses[team] || []) : [];
        const memberName = pick?.name || "—";
        const details = losses.map(lost => lost.name + " " + memberAffiliationTitle(lost))
          .concat(pick ? [memberName + " " + memberAffiliationTitle(pick)] : [])
          .filter(Boolean).join(" / ");
        const lossMarkup = losses.map(lost =>
          '<small class="final-snapshot-loss"><strong>' + escapeHTML(lost.name) + '</strong>' +
          memberAffiliationMarkup(lost) + '</small>'
        ).join("");
        const pickMarkup = pick
          ? '<strong>' + escapeHTML(memberName) + '</strong>' + memberAffiliationMarkup(pick)
          : '<strong>—</strong>';
        return '<td title="' + escapeHTML(details) + '">' + lossMarkup + pickMarkup + '</td>';
      }).join("")}
    </tr>
  `).join("");
  $("finalSnapshotGrid").innerHTML = `
    <table class="final-snapshot-table" style="--team-count:${teamNames.length};--round-count:${pickLimit}">
      <thead><tr><th scope="col" class="final-snapshot-round">巡目</th>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function drawShareCanvasText(ctx, value, x, y, maxWidth, fontSize, color, weight = 600, align = "left", minFontSize = 12) {
  const family = 'Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif';
  let text = String(value ?? "");
  let size = fontSize;
  const setFont = () => { ctx.font = `${weight} ${size}px ${family}`; };
  setFont();
  while (size > minFontSize && ctx.measureText(text).width > maxWidth) {
    size -= 1;
    setFont();
  }
  if (ctx.measureText(text).width > maxWidth) {
    const characters = Array.from(text);
    while (characters.length > 1) {
      characters.pop();
      const shortened = `${characters.join("")}…`;
      if (ctx.measureText(shortened).width <= maxWidth) {
        text = shortened;
        break;
      }
    }
  }
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

async function createDraftResultsShareImage() {
  const columnCount = Math.max(1, teamNames.length);
  const canvasWidth = Math.max(1100, Math.min(2300, 300 + columnCount * 190));
  const padding = 44;
  const roundColumnWidth = 112;
  const headerHeight = 96;
  const regularRowHeight = 108;
  const firstRoundLossCount = Math.max(0, ...teamNames.map(team => (firstRoundLotteryLosses[team] || []).length));
  const firstRoundRowHeight = firstRoundLossCount
    ? Math.max(regularRowHeight, firstRoundLossCount * 43 + 64)
    : regularRowHeight;
  const headingHeight = 164;
  const footerHeight = 60;
  const tableWidth = canvasWidth - padding * 2;
  const teamColumnWidth = (tableWidth - roundColumnWidth) / columnCount;
  const rowsHeight = firstRoundRowHeight + Math.max(0, pickLimit - 1) * regularRowHeight;
  const canvasHeight = padding + headingHeight + headerHeight + rowsHeight + footerHeight;
  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("結果画像を作成できませんでした。");

  const background = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  background.addColorStop(0, "#f1e9ff");
  background.addColorStop(0.55, "#f8f5ff");
  background.addColorStop(1, "#e8f5ff");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(20, 20, canvasWidth - 40, canvasHeight - 40);
  const accent = ctx.createLinearGradient(padding, 0, canvasWidth - padding, 0);
  accent.addColorStop(0, "#d95ed3");
  accent.addColorStop(0.53, "#7455e7");
  accent.addColorStop(1, "#42aee8");
  ctx.fillStyle = accent;
  ctx.fillRect(20, 20, canvasWidth - 40, 8);

  const drawMember = (member, centerX, top, maxWidth, muted = false) => {
    const nameColor = muted ? "#aab5c1" : "#24334c";
    const detailColor = muted ? "#b7c1cb" : "#708198";
    const agency = shortAgencyName(fullAgencyName(member?.group, member?.agency));
    drawShareCanvasText(ctx, member?.name || member?.japaneseName || "", centerX, top + 8,
      maxWidth, muted ? 12 : 16, nameColor, muted ? 600 : 800, "center", muted ? 9 : 11);
    if (agency) {
      drawShareCanvasText(ctx, agency, centerX, top + 22, maxWidth,
        muted ? 9 : 11, detailColor, 500, "center", 8);
    }
    if (member?.group) {
      drawShareCanvasText(ctx, member.group, centerX, top + 34, maxWidth,
        muted ? 9 : 11, detailColor, 500, "center", 8);
    }
  };

  drawShareCanvasText(ctx, "KDRAFT  ·  K-POP GIRL GROUP DRAFT", padding, 62, tableWidth, 18, "#6950cf", 800);
  drawShareCanvasText(ctx, "ドラフト結果", padding, 112, tableWidth, 44, "#172449", 800);
  const totalPicks = teamNames.reduce((sum, team) => sum + (picks[team] || []).length, 0);
  drawShareCanvasText(ctx, `${columnCount}チーム  ·  合計${totalPicks}人`, padding, 158, tableWidth, 19, "#66708f", 600);

  const tableX = padding;
  const tableY = padding + headingHeight;
  ctx.fillStyle = "#e9e5f3";
  ctx.fillRect(tableX, tableY, roundColumnWidth, headerHeight);
  ctx.strokeStyle = "#d8d5e5";
  ctx.lineWidth = 1;
  ctx.strokeRect(tableX, tableY, roundColumnWidth, headerHeight);
  drawShareCanvasText(ctx, "巡目", tableX + roundColumnWidth / 2, tableY + headerHeight / 2, roundColumnWidth - 12, 20, "#384366", 800, "center");

  teamNames.forEach((team, index) => {
    const x = tableX + roundColumnWidth + teamColumnWidth * index;
    ctx.fillStyle = teamColorPalette[index % teamColorPalette.length];
    ctx.fillRect(x, tableY, teamColumnWidth, headerHeight);
    ctx.strokeStyle = "rgba(255,255,255,.35)";
    ctx.strokeRect(x, tableY, teamColumnWidth, headerHeight);
    drawShareCanvasText(ctx, displayTeamName(team), x + teamColumnWidth / 2, tableY + 36, teamColumnWidth - 16, Math.min(23, teamColumnWidth * 0.13), "#ffffff", 800, "center", 12);
    drawShareCanvasText(ctx, `${(picks[team] || []).length} / ${pickLimit}人`, x + teamColumnWidth / 2, tableY + 70, teamColumnWidth - 16, 15, "#ffffff", 700, "center", 11);
  });

  let rowY = tableY + headerHeight;
  for (let roundIndex = 1; roundIndex <= pickLimit; roundIndex += 1) {
    const rowHeight = roundIndex === 1 ? firstRoundRowHeight : regularRowHeight;
    const y = rowY;
    ctx.fillStyle = "#eeeafa";
    ctx.fillRect(tableX, y, roundColumnWidth, rowHeight);
    ctx.strokeStyle = "#ddd9e9";
    ctx.strokeRect(tableX, y, roundColumnWidth, rowHeight);
    drawShareCanvasText(ctx, `${roundIndex}巡目`, tableX + roundColumnWidth / 2, y + rowHeight / 2, roundColumnWidth - 12, 18, "#414b6e", 800, "center", 12);

    teamNames.forEach((team, index) => {
      const x = tableX + roundColumnWidth + teamColumnWidth * index;
      const losses = roundIndex === 1 ? (firstRoundLotteryLosses[team] || []) : [];
      ctx.fillStyle = roundIndex % 2 === 0 ? "#f5f7fc" : "#ffffff";
      ctx.fillRect(x, y, teamColumnWidth, rowHeight);
      ctx.strokeStyle = "#e0e3ed";
      ctx.strokeRect(x, y, teamColumnWidth, rowHeight);
      const pick = (picks[team] || []).find(item => item.round === roundIndex);
      if (!pick) {
        drawShareCanvasText(ctx, "—", x + teamColumnWidth / 2, y + rowHeight / 2, teamColumnWidth - 18, 20, "#a8aabd", 500, "center");
        return;
      }
      const centerX = x + teamColumnWidth / 2;
      if (losses.length) {
        const stackHeight = losses.length * 43 + 42;
        let memberTop = y + Math.max(8, (rowHeight - stackHeight) / 2);
        losses.forEach(lost => {
          drawMember(lost, centerX, memberTop, teamColumnWidth - 16, true);
          memberTop += 43;
        });
        drawMember(pick, centerX, memberTop, teamColumnWidth - 16);
      } else {
        drawMember(pick, centerX, y + (rowHeight - 42) / 2, teamColumnWidth - 16);
      }
    });
    rowY += rowHeight;
  }

  drawShareCanvasText(ctx, "KDraft", canvasWidth - padding, canvasHeight - 42, tableWidth, 14, "#7b6cb2", 700, "right", 11);
  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(result => result ? resolve(result) : reject(new Error("結果画像を書き出せませんでした。")), "image/png");
  });
  return new File([blob], "kdraft-draft-results.png", { type: "image/png" });
}

function downloadDraftResultsImage(imageFile) {
  const imageUrl = URL.createObjectURL(imageFile);
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = imageFile.name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(imageUrl), 60_000);
}

function createXPostIntent(postText) {
  const intentUrl = new URL("https://twitter.com/intent/tweet");
  intentUrl.searchParams.set("text", postText);
  return intentUrl.toString();
}

async function shareDraftResultsOnX() {
  const button = $("shareFinalResultsX");
  const status = $("finalShareStatus");
  const postText = `#KDraft\n${publicSiteUrl}`;
  button.disabled = true;
  button.textContent = "画像を準備中…";
  status.hidden = true;
  try {
    const image = await createDraftResultsShareImage();
    const canShareFiles = typeof navigator.share === "function" &&
      (typeof navigator.canShare !== "function" || navigator.canShare({ files: [image] }));
    if (canShareFiles) {
      try {
        await navigator.share({ files: [image], text: postText, title: "KDraft ドラフト結果" });
        status.textContent = "共有メニューを開きました。Xを選ぶと画像と文面を共有できます。";
        status.hidden = false;
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    downloadDraftResultsImage(image);
    window.open(createXPostIntent(postText), "_blank", "noopener,noreferrer");
    status.textContent = "結果画像を保存しました。Xの投稿画面で画像を添付してください。";
    status.hidden = false;
  } catch (error) {
    console.error("Could not share draft results", error);
    status.textContent = "結果画像を作成できませんでした。もう一度お試しください。";
    status.hidden = false;
  } finally {
    button.disabled = false;
    button.textContent = "画像付きでX共有";
  }
}

function renderDraft() {
  const currentTeam = currentTeamName();
  const ownOnlineTeam = activeMode === "online" ? onlineTeamForUid(onlineUid) : "";
  const ownOnlineSubmitted = Boolean(ownOnlineTeam && r1Nominations.some(item => item.team === ownOnlineTeam));
  const ownOnlineFirstPick = Boolean(ownOnlineTeam && (picks[ownOnlineTeam] || []).some(item => item.round === 1));
  const finished = isDraftFinished();
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  const canConfirm = Boolean(
    gameStarted && pendingIdol &&
    candidateSelectionGate(currentTeam).canPickNow
  );
  if (!finished) {
    $("finalShareStatus").hidden = true;
    $("finalShareStatus").textContent = "";
  }

  const revealGate = $("firstRoundRevealGate");
  const revealButton = $("confirmFirstRoundReveal");
  const canHostRevealFirstRound = Boolean(r1RevealPending && activeMode === "online" && onlineIsHost);
  revealGate.hidden = !r1RevealPending;
  revealButton.hidden = !canHostRevealFirstRound;
  if (canHostRevealFirstRound && !firstRoundRevealAutoScrollArmed) {
    firstRoundRevealAutoScrollArmed = true;
    requestAnimationFrame(() => {
      if (!r1RevealPending || activeMode !== "online" || !onlineIsHost || revealButton.hidden) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      revealButton.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "center",
        inline: "nearest"
      });
    });
  } else if (!canHostRevealFirstRound) {
    firstRoundRevealAutoScrollArmed = false;
  }
  $("firstRoundRevealHint").textContent = activeMode === "online" && onlineIsHost
    ? "入札内容はまだ各端末に表示されていません。確認してから発表を始めてください。"
    : "ホストが開示を確認すると、各端末で指名メンバーの発表が始まります。";

  $("pickConfirmation").hidden = !canConfirm;
  $("restartOfflineDraft").hidden = !finished || !["ai", "local"].includes(activeMode) || $("playMode").value !== activeMode;
  $("leaveOnlineRoomFromResults").hidden = !finished || activeMode !== "online" || onlineIsHost || !onlineRoomRef;
  $("closeOnlineRoomFromResults").hidden = !finished || activeMode !== "online" || !onlineIsHost || !onlineRoomRef;
  if (canConfirm) {
    $("pickConfirmName").textContent = pendingIdol.japaneseName;
    $("pickConfirmDetails").textContent = `${pendingIdol.group}・${fullAgencyName(pendingIdol.group, pendingIdol.agency) || "事務所未登録"}`;
  }

  $("currentTeam").textContent = !gameStarted
    ? "未開始"
    : pendingR1Resolution
      ? "競合抽選中"
      : r1RevealPending
        ? "ホスト確認待ち"
        : currentTeam
          ? displayTeamName(currentTeam)
          : finished
            ? "指名完了"
            : "指名待ち";
  $("roundStatus").textContent = `${round}巡目`;
  $("roundLabel").textContent = `${round}巡目`;

  if (!gameStarted) {
    $("draftHint").textContent = "設定を選んで「ドラフトを始める」を押してね。";
    $("selectedMember").textContent = "開始後は候補カードを選び、確認してから指名を提出できます。";
  } else if (r1RevealPending) {
    $("draftHint").textContent = "全員の1巡目入札がそろいました。ホストが開示するまで指名内容は非公開です。";
    $("selectedMember").textContent = "ホストの確認後、1巡目の指名メンバーを順番に発表します。";
  } else if (pendingR1Resolution) {
    $("draftHint").textContent = activePickReveal?.type === "lottery"
      ? "全チームの1巡目指名を発表しました。競合したメンバーの抽選を行っています。"
      : "全員の入札がそろいました。各チームの指名を順番に発表し、その後に競合を抽選します。";
    $("selectedMember").textContent = "一巡目の発表と抽選が終わるまで次の指名はできません。";
  } else if (!r1Started) {
    const currentStage = r1NominationAttempt === 1 ? "初回指名" : `${r1NominationAttempt}回目の再指名`;
    $("draftHint").textContent = activeMode === "online"
      ? ownOnlineSubmitted
        ? "入札を提出済みです。全チームの提出後、ホストの確認を経て1巡目の候補を公開します。"
        : ownOnlineFirstPick
          ? "1巡目の指名は確定済みです。抽選と再入札が終わるまでお待ちください。"
          : currentTeam
            ? `${displayTeamName(currentTeam)}の${currentStage}を選んで提出してください。他チームの入札は提出がそろうまで非公開です。`
            : "他チームの入札がそろうのを待っています。"
      : currentTeam
        ? canControlTeam(currentTeam)
          ? `${displayTeamName(currentTeam)}の${currentStage}番です。候補を選んで提出してください。入札内容は全員の提出後に一斉公開します。`
          : `${displayTeamName(currentTeam)}の${currentStage}です。相手が指名しています。`
        : "次の指名チームを準備しています。";
    $("selectedMember").textContent = pendingIdol
      ? "候補を選択しました。確認ボタンから提出できます。"
      : activeMode === "online"
        ? ownOnlineSubmitted
          ? "提出済み。ほかのチームの提出を待っています。"
          : ownOnlineFirstPick
            ? "あなたの1巡目指名は確定しました。"
            : "候補カードを選んで、すぐ下の確認ボタンから入札を提出してください。"
        : `${r1BidCount()} / ${r1NominationOrder.length}チームが入札提出済み。全員の提出後に内容を一斉公開します。`;
  } else if (!currentTeam) {
    $("draftHint").textContent = "全チームの指名が完了しました。";
    $("selectedMember").textContent = "ドラフト終了！設定を変えて、もう一度遊べるよ。";
  } else {
    $("draftHint").textContent =
      (canControlTeam(currentTeam)
        ? !$("pickReveal").hidden
          ? `${displayTeamName(currentTeam)}の指名発表中です。画面の「次へ進む」を押すと候補から指名できます。`
          : `2巡目以降は${orderMode === "snake" ? "前巡の逆順" : "チーム順固定"}。${displayTeamName(currentTeam)}は候補を選び、確認後に提出してね。`
        : `${displayTeamName(currentTeam)}が指名中です。自分のチームの順番を待っています。`);
    $("selectedMember").textContent = pendingIdol
      ? "候補を選択しました。確認ボタンから提出できます。"
      : "候補カードを押すと、指名内容の確認画面が表示されます。";
  }

  const locked = gameStarted && !finished;
  ["playMode", "aiCount", "localTeamCount", "pickLimit", "orderMode", "startOrderMode"].forEach(id => {
    $(id).disabled = locked;
  });
  $("teamNameInputs").querySelectorAll("input").forEach(input => {
    input.disabled = locked;
  });
  $("startGame").disabled = locked;
  $("startGame").textContent = !gameStarted
    ? ($("playMode").value === "ai" ? "AIドラフトを始める" : `${$("localTeamCount").value}チームで始める`)
    : finished
      ? "再ドラフト"
      : "ドラフト進行中";

  const totalPicks = teamNames.reduce((sum, team) => sum + picks[team].length, 0);
  const totalSlots = teamNames.reduce((sum, team) =>
    sum + (activeMode === "online" && onlineDepartedTeams.has(team) ? picks[team].length : pickLimit), 0);
  $("draftBoardCount").textContent = `${totalPicks} / ${totalSlots}人`;
  $("draftBoardSummary").textContent = !gameStarted
    ? `各チーム${pickLimit}人。ドラフト開始後、巡目ごとに表示します。`
    : finished
      ? onlineDepartedTeams.size
        ? `${onlineDepartedTeams.size}チームが退出したため、残り指名をスキップしました。`
        : "全チームの指名が完了しました。"
      : r1RevealPending
        ? "全員の1巡目入札がそろいました。ホストの確認後に順番に公開します。"
        : pendingR1Resolution
          ? `${pendingR1Resolution.revealedTeams.size} / ${(pendingR1Resolution.nominations || []).length}件の入札を順番に発表中。その後、競合を抽選します。`
          : areR1BidsSealed()
            ? `${r1BidCount()} / ${r1NominationOrder.length}チームが入札を提出。全員の提出後に順番に発表します。`
            : !r1Started
              ? teamNames.filter(team => (picks[team] || []).some(item => item.round === 1)).length + " / " + teamNames.length + "チームが1巡目確定。重複は抽選し、落選チームは再指名します。"
              : `${round}巡目を進行中です。`;

  const roundRows = Array.from({ length: pickLimit }, (_, index) => index + 1);
  const cellsFor = (team, pickRound) => {
    const teamPicks = picks[team] || [];
    const pick = teamPicks.find(item => item.round === pickRound);
    const current = gameStarted && !finished && round === pickRound && currentTeam === team;
    const losses = pickRound === 1 ? (firstRoundLotteryLosses[team] || []) : [];
    const lossMarkup = losses.length ? `
      <div class="draft-lottery-history" aria-label="1巡目の競合候補">
        ${losses.map(lost => `
          <div class="draft-cell-card draft-lottery-loss">
            <strong>${escapeHTML(lost.name)}</strong>
            ${memberAffiliationMarkup(lost)}
          </div>
        `).join("")}
      </div>
    ` : "";

    if (pick) {
      return `${lossMarkup}<div class="draft-cell-card draft-pick-confirmed">
        <strong>${escapeHTML(pick.name)}</strong>
        ${memberAffiliationMarkup(pick)}
      </div>`;
    }

    if (pickRound === 1 && gameStarted) {
      const nomination = r1Nominations.find(item => item.team === team);
      if (r1RevealPending && nomination) {
        return `${lossMarkup}<div class="draft-cell-card draft-nomination">
          <small>1巡目入札</small>
          <strong>提出済み・開示待ち</strong>
          <span>ホストの確認後に発表します</span>
        </div>`;
      }
      const nominationRevealed = !pendingR1Resolution || pendingR1Resolution.revealedTeams.has(team);
      const nominee = nomination && !areR1BidsSealed() && nominationRevealed && idols.find(item => item.id === nomination.id);
      if (nomination && (areR1BidsSealed() || (pendingR1Resolution && !nominationRevealed))) {
        return `${lossMarkup}<div class="draft-cell-card draft-nomination">
          <small>1巡目入札</small>
          <strong>提出済み・非公開</strong>
          <span>順番に発表します</span>
        </div>`;
      }
      if (nomination && pendingR1Resolution && !nominee) {
        return `${lossMarkup}<div class="draft-cell-card draft-lottery-wait">
          <small>1巡目入札</small>
          <strong>再指名待ち</strong>
        </div>`;
      }
      if (nominee) {
        const status = pendingR1Resolution?.waiting.has(team) ? "競合抽選待ち" : "入札発表済み";
        return `${lossMarkup}<div class="draft-cell-card draft-nomination">
          <small>${status}</small>
          <strong>${escapeHTML(nominee.japaneseName)}</strong>
          ${memberAffiliationMarkup(nominee)}
        </div>`;
      }
      if (!r1Started && r1NominationOrder.includes(team)) {
        return `${lossMarkup}<div class="draft-cell-card draft-lottery-wait">
          <small>${activeMode === "online" ? (team === currentTeam ? "あなたの入札" : "入札") : (team === currentTeam ? "再指名中" : "再指名待ち")}</small>
          <strong>${activeMode === "online" ? (team === currentTeam ? "候補を選択" : "提出待ち") : (team === currentTeam ? "候補を選択" : "抽選待ち")}</strong>
        </div>`;
      }
    }

    if (activeMode === "online" && onlineDepartedTeams.has(team)) {
      return `${lossMarkup}<span class="empty-pick">スキップ</span>`;
    }

    if (lossMarkup) return lossMarkup;
    return `<span class="empty-pick${current ? " is-current" : ""}">${current ? "指名中" : "—"}</span>`;
  };

  $("draftBoard").innerHTML = `
    <table class="draft-results-table">
      <thead>
        <tr>
          <th class="round-column" scope="col">巡目</th>
          ${teamNames.map((team, index) => {
            const teamSubtitle = aiTeams.has(team)
              ? aiStrategyFor(team).label
              : activeMode === "online"
                ? onlineDepartedTeams.has(team)
                  ? "退出済み"
                  : (team === onlineTeamForUid(onlineUid) ? "あなたのチーム" : "参加チーム")
                : (activeMode === "ai" && index === 0 ? "あなたのチーム" : `チーム ${String(index + 1).padStart(2, "0")}`);
            return `
              <th class="team-column" scope="col" style="--team-color: ${teamColorPalette[index % teamColorPalette.length]}">
                <small class="team-column-subtitle">${escapeHTML(teamSubtitle)}</small>
                <strong>${escapeHTML(team)}</strong>
                <span>${picks[team].length} / ${pickLimit}人</span>
              </th>
            `;
          }).join("")}
        </tr>
      </thead>
      <tbody>
        ${roundRows.map(pickRound => `
          <tr class="${gameStarted && !finished && round === pickRound ? "is-active-round" : ""}">
            <th class="round-column" scope="row">${pickRound}巡目</th>
            ${teamNames.map(team => `
              <td class="pick-cell${gameStarted && !finished && round === pickRound && currentTeam === team ? " is-current-cell" : ""}">
                ${cellsFor(team, pickRound)}
              </td>
            `).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  requestAnimationFrame(updateDraftBoardScrollControls);

  const finalResults = $("finalResults");
  const compactBoard = $("draftBoard").closest(".draft-board");
  if (finished && compactBoard.classList.contains("is-expanded")) setDraftBoardExpanded(false, false);
  finalResults.hidden = !finished;
  compactBoard.hidden = finished;
  if (finished) {
    $("finalResultsSummary").textContent =
      onlineDepartedTeams.size
        ? `${onlineDepartedTeams.size}チームが退出し、残り指名をスキップしました（合計${totalPicks}人）。`
        : `${teamNames.length}チームが各${pickLimit}人を指名しました（合計${totalPicks}人）。`;
    $("finalResultsBoard").innerHTML = $("draftBoard").innerHTML;
    renderFinalSnapshot();
    if (!finalResultsWasVisible) {
      saveCompletedDraftHistory();
      requestAnimationFrame(() => finalResults.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  } else {
    $("finalResultsBoard").innerHTML = "";
    $("finalSnapshotGrid").innerHTML = "";
  }
  finalResultsWasVisible = finished;
  if (activeMode === "online" && onlineRoomRef) renderOnlineLobby();
  syncOnlineState();
}

function updateDraftBoardScrollControls() {
  const board = $("draftBoard");
  const maxScroll = Math.max(0, board.scrollWidth - board.clientWidth);
  $("draftBoardScrollPrev").disabled = maxScroll < 2 || board.scrollLeft < 2;
  $("draftBoardScrollNext").disabled = maxScroll < 2 || board.scrollLeft >= maxScroll - 2;
}

function setDraftBoardExpanded(expanded, restoreFocus = true) {
  const board = $("draftBoard").closest(".draft-board");
  const toggle = $("draftBoardExpand");
  if (!board || !toggle) return;
  board.classList.toggle("is-expanded", expanded);
  document.body.classList.toggle("draft-board-expanded-mode", expanded);
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.querySelector(".draft-board-expand-label").textContent = expanded ? "元の表示に戻る" : "表を広げて見る";
  toggle.setAttribute("aria-label", expanded ? "指名結果表を閉じる" : "指名結果表を広げて見る");
  if (expanded) {
    board.setAttribute("role", "dialog");
    board.setAttribute("aria-modal", "true");
    board.setAttribute("aria-label", "拡大した指名経過・結果");
    board.setAttribute("tabindex", "-1");
    board.focus({ preventScroll: true });
  } else {
    board.setAttribute("role", "region");
    board.removeAttribute("aria-modal");
    board.removeAttribute("aria-label");
    board.removeAttribute("tabindex");
    if (restoreFocus) toggle.focus({ preventScroll: true });
  }
  requestAnimationFrame(updateDraftBoardScrollControls);
}

$("draftBoardExpand").addEventListener("click", () => {
  const expanded = $("draftBoard").closest(".draft-board").classList.contains("is-expanded");
  setDraftBoardExpanded(!expanded);
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("draft-board-expanded-mode")) {
    setDraftBoardExpanded(false);
  }
});

function scrollDraftBoard(direction) {
  const board = $("draftBoard");
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  board.scrollBy({
    left: direction * Math.max(220, board.clientWidth * 0.78),
    behavior: reducedMotion ? "auto" : "smooth"
  });
}

$("draftBoardScrollPrev").addEventListener("click", () => scrollDraftBoard(-1));
$("draftBoardScrollNext").addEventListener("click", () => scrollDraftBoard(1));
$("draftBoard").addEventListener("scroll", updateDraftBoardScrollControls, { passive: true });
window.addEventListener("resize", updateDraftBoardScrollControls);

renderNominations();
refreshPresets();
renderCandidates();
renderDraft();
updateModeSetup();
const invitedRoomCode = new URLSearchParams(location.search).get("room");
if (invitedRoomCode) {
  $("playMode").value = "online";
  $("onlineRoomCode").value = invitedRoomCode.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  updateModeSetup();
  setOnlineStatus("招待リンクから参加できます。名前を確認して「コードで参加」を押してください。");
  requestAnimationFrame(() => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    $("onlinePlayerName").scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "center",
      inline: "nearest"
    });
  });
}

// Open the short site information panel from the persistent header.
const draftHistoryDialog = $("draftHistoryDialog");
document.querySelectorAll(".open-draft-history").forEach(button => {
  button.addEventListener("click", () => {
    renderDraftHistory();
    draftHistoryDialog.showModal();
  });
});
$("draftHistoryClose").addEventListener("click", () => draftHistoryDialog.close());
$("draftHistoryList").addEventListener("click", event => {
  const expandButton = event.target.closest(".draft-history-expand-button");
  if (expandButton) {
    const entry = expandButton.closest(".draft-history-entry");
    if (!entry) return;
    entry.open = true;
    entry.classList.add("is-expanded");
    draftHistoryDialog.classList.add("is-board-expanded");
    requestAnimationFrame(() => entry.querySelector(".draft-history-return-button")?.focus({ preventScroll: true }));
    return;
  }

  if (event.target.closest(".draft-history-return-button")) {
    const entry = event.target.closest(".draft-history-entry");
    draftHistoryDialog.classList.remove("is-board-expanded");
    entry?.classList.remove("is-expanded");
    requestAnimationFrame(() => entry?.querySelector("summary")?.focus({ preventScroll: true }));
    return;
  }

  if (event.target.closest(".draft-history-fullscreen-close")) draftHistoryDialog.close();
});
draftHistoryDialog.addEventListener("cancel", event => {
  const expandedEntry = draftHistoryDialog.querySelector(".draft-history-entry.is-expanded");
  if (!expandedEntry) return;
  event.preventDefault();
  draftHistoryDialog.classList.remove("is-board-expanded");
  expandedEntry.classList.remove("is-expanded");
  requestAnimationFrame(() => expandedEntry.querySelector("summary")?.focus({ preventScroll: true }));
});
draftHistoryDialog.addEventListener("close", () => {
  draftHistoryDialog.classList.remove("is-board-expanded");
  draftHistoryDialog.querySelectorAll(".draft-history-entry.is-expanded").forEach(entry => entry.classList.remove("is-expanded"));
});
draftHistoryDialog.addEventListener("click", event => {
  if (event.target === draftHistoryDialog) draftHistoryDialog.close();
});

const siteInfoDialog = $('siteInfoDialog');
$('siteInfoOpen').addEventListener('click', () => siteInfoDialog.showModal());
$('siteInfoClose').addEventListener('click', () => siteInfoDialog.close());
siteInfoDialog.addEventListener('click', event => {
  if (event.target === siteInfoDialog) siteInfoDialog.close();
});
$('siteInfoDetailsLink').addEventListener('click', event => {
  event.preventDefault();
  siteInfoDialog.close();
  document.querySelectorAll('.site-notice').forEach(notice => { notice.open = true; });
  requestAnimationFrame(() => $('siteFooter').scrollIntoView({ behavior: 'smooth', block: 'start' }));
});
