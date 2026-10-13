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
  return String(value).normalize("NFKC").toLocaleLowerCase().replace(/[\s·._-]/g, "");
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
  HITGS: "H MUSIC Entertainment"
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

let excluded = new Set(readSaved("stagePickExcluded", []));
let savedPresets = readSaved("stagePickPresets", {});
let selectedId = null;
let gameStarted = false;
let finalResultsWasVisible = false;
let drafted = new Set();
function personHasBeenDrafted(idol) {
  return drafted.has(idol.personKey || idol.id);
}
function markPersonDrafted(idol) {
  drafted.add(idol.personKey || idol.id);
}
let pendingDraftPickId = null;
let picks = Object.fromEntries(teamNames.map(team => [team, []]));
let round = 1;
let r1Started = false;
let r1NominationOrder = [];
let r1NominationIndex = 0;
let r1NominationAttempt = 1;
let r1Nominations = [];
let r1Queue = [];
let pendingR1Resolution = null;
let waiverOrder = teamNames.slice().reverse();
let firstRoundWaiverOrder = [];
let turnIndex = 0;
let lotterySummary = "";
let pickLimit = 5;
let orderMode = "snake";
let firstRoundLotteryLosses = {};
let onlineRoomRef = null;
let onlineRoomCode = "";
let onlineGameStatus = "";
let onlineUid = "";
let onlineIsHost = false;
let onlinePlayers = {};
let onlineActionPending = false;
let onlineStateApplying = false;
let onlineStateWriteTimer = null;
let onlineListenersAttached = false;
let onlineHandledActionIds = new Set();
let onlineJoinQueue = Promise.resolve();
let onlineShownRevealKey = "";
let onlineHostRestoring = false;

const teamColorPalette = [
  "#a72e45", "#24539d", "#116d68", "#98500f", "#6740a5",
  "#21693b", "#a32e64", "#12627c", "#78571b", "#3f5687"
];

const aiStrategies = [
  { label: "バランス型", style: "balanced" },
  { label: "国籍ミックス型", style: "nationalityMix" },
  { label: "同事務所ドリーム型", style: "agencyFocus" },
  { label: "事務所ミックス型", style: "agencyMix" },
  { label: "同世代ユニット型", style: "generationFocus" },
  { label: "世代ミックス型", style: "generationMix" },
  { label: "現役中心型", style: "active" },
  { label: "完全ランダム型", style: "random" }
];

function aiStrategyFor(team) {
  const index = Number(String(team).match(/\d+/)?.[0] || 1) - 1;
  return aiStrategies[index % aiStrategies.length];
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
fillFilter("agencyFilter", idols.map(idol => idol.agency));
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

function getCandidates(ignoreFilter = "", dedupePeople = true) {
  const query = normalizeSearchText($("searchInput").value.trim());
  const generation = ignoreFilter === "generationFilter" ? "" : $("generationFilter").value;
  const nationality = ignoreFilter === "nationalityFilter" ? "" : $("nationalityFilter").value;
  const agency = ignoreFilter === "agencyFilter" ? "" : $("agencyFilter").value;
  const group = ignoreFilter === "groupFilter" ? "" : $("groupFilter").value;
  const hideDrafted = $("hideDrafted").checked;

  const candidates = idols.filter(idol => {
    const matchesText = !query ||
      [idol.name, idol.japaneseName, idol.japaneseSearchName, idol.koreanName, idol.group, idol.nationality, idol.agency]
        .some(value => normalizeSearchText(value).includes(query));

    return matchesText &&
      (!generation || idol.generation === generation) &&
      (!nationality || idol.nationality === nationality) &&
      (!agency || idol.agency === agency) &&
      (!group || idol.group === group) &&
      (!hideDrafted || !personHasBeenDrafted(idol)) &&
      ($("showExcluded").checked || !excluded.has(idol.id));
  });
  return (dedupePeople ? preferredPersonCandidates(candidates, query) : candidates).sort((a, b) =>
    b.popularityStars - a.popularityStars ||
    b.popularitySortScore - a.popularitySortScore ||
    a.japaneseName.localeCompare(b.japaneseName, "ja")
  );
}

function updateDependentFilters() {
  for (let pass = 0; pass < dependentFilters.length; pass += 1) {
    let changed = false;
    dependentFilters.forEach(filter => {
      const select = $(filter.id);
      const current = select.value;
      const values = [...new Set(getCandidates(filter.id, false).map(idol => idol[filter.field]))]
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
}

function renderCandidates() {
  const confirmationPanel = $("pickConfirmation");
  $("pickConfirmationMount").append(confirmationPanel);
  updateDependentFilters();
  const candidates = getCandidates();
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  const list = pendingIdol && !candidates.some(item => item.id === pendingIdol.id)
    ? [pendingIdol, ...candidates]
    : candidates;
  $("candidateCount").textContent = candidates.length;
  $("rosterTotal").textContent = idols.length;
  $("groupTotal").textContent = groups.length;

  if (list.length === 0) {
    $("candidateList").innerHTML =
      '<div class="empty-state">条件に合うメンバーはいません。</div>';
    return;
  }

  const nominatedPersonKeys = areOnlineR1BidsSealed()
    ? new Set()
    : new Set(r1Nominations.map(item =>
      idols.find(idol => idol.id === item.id)?.personKey
    ).filter(Boolean));
  const currentTeam = gameStarted ? currentTeamName() : "";
  const ownOnlineTeam = activeMode === "online" ? onlineTeamForUid(onlineUid) : "";
  const ownOnlineBidSubmitted = Boolean(ownOnlineTeam && r1Nominations.some(item => item.team === ownOnlineTeam));
  const canPickNow = !gameStarted || Boolean(
    currentTeam && canControlTeam(currentTeam) && !onlineActionPending && $("pickReveal").hidden && !pendingR1Resolution
  );
  $("candidateList").innerHTML = list.map(idol => {
    const isExcluded = excluded.has(idol.id);
    const isNominated = !r1Started && nominatedPersonKeys.has(idol.personKey);
    const isUnavailable = isExcluded || personHasBeenDrafted(idol);
    const isSelected = selectedId === idol.id || pendingDraftPickId === idol.id || isNominated;
    const selectHint = isUnavailable
      ? (isExcluded ? "除外中" : "指名済み")
      : gameStarted && !canPickNow
        ? (ownOnlineBidSubmitted && areOnlineR1BidsSealed()
          ? "入札提出済み・開示待ち"
          : "あなたの指名番ではありません")
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
      <article class="candidate-card ${isSelected ? "is-selected" : ""} ${isExcluded ? "is-excluded" : ""}" data-candidate-id="${idol.id}">
        <button class="candidate-select" type="button" data-action="select" data-id="${idol.id}" aria-pressed="${isSelected}" ${isUnavailable || !canPickNow ? "disabled" : ""}>
          <span class="candidate-title-row">
            <span class="candidate-name">${escapeHTML(idol.japaneseName)}</span>
            ${rankingStars}
          </span>
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
  }).join("");

  if (pendingIdol) {
    const selectedCard = [...$("candidateList").querySelectorAll(".candidate-card")]
      .find(card => card.dataset.candidateId === pendingIdol.id);
    const cardActions = selectedCard?.querySelector(".card-actions");
    if (selectedCard && cardActions) selectedCard.insertBefore(confirmationPanel, cardActions);
  }
}

function selectMember(id) {
  const idol = idols.find(item => item.id === id);
  if (!idol || excluded.has(id) || personHasBeenDrafted(idol)) return;

  if (!gameStarted) {
    selectedId = id;
    $("selectedMember").textContent = `${idol.japaneseName}（${idol.group}）を選択中。ドラフト開始後に指名できるよ。`;
    renderCandidates();
    return;
  }

  if (!$("pickReveal").hidden || pendingR1Resolution || onlineActionPending) return;
  const team = currentTeamName();
  if (!team || !canControlTeam(team)) return;
  if (!r1Started && !canSubmitR1Nomination(team)) return;

  pendingDraftPickId = idol.id;
  $("randomResult").hidden = true;
  renderDraft();
  renderCandidates();
}

function cancelDraftPick() {
  pendingDraftPickId = null;
  renderDraft();
  renderCandidates();
}

function confirmDraftPick(submittingUid = "") {
  if (!$("pickReveal").hidden || pendingR1Resolution) return;
  const idol = idols.find(item => item.id === pendingDraftPickId);
  if (!idol || excluded.has(idol.id) || personHasBeenDrafted(idol)) {
    cancelDraftPick();
    return;
  }
  const team = submittingUid ? onlineTeamForUid(submittingUid) : currentTeamName();
  if (!team || !canControlTeam(team, submittingUid || onlineUid)) return;
  if (activeMode === "online" && !onlineIsHost) {
    submitOnlineAction({ kind: "pick", idolId: idol.id });
    return;
  }

  pendingDraftPickId = null;
  selectedId = null;
  if (!r1Started) {
    if (!canSubmitR1Nomination(team)) return;
    r1Nominations.push({ team, id: idol.id });
    r1NominationIndex += 1;
    if (activeMode !== "online") queuePickReveal(team, idol, 1, "nomination");
    if (r1NominationIndex >= r1NominationOrder.length) {
      resolveFirstRound();
    }
  } else {
    recordPick(team, idol);
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

$("searchInput").addEventListener("input", renderCandidates);

$("resetFilters").addEventListener("click", () => {
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
  fillFilter("agencyFilter", idols.map(idol => idol.agency));
  fillFilter("groupFilter", idols.map(idol => idol.group));
  $("searchInput").value = preset.query || "";
  $("generationFilter").value = preset.generation || "";
  $("nationalityFilter").value = preset.nationality || "";
  $("agencyFilter").value = preset.agency || "";
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
    const sealed = areOnlineR1BidsSealed();
    const idol = nomination && !sealed && idols.find(item => item.id === nomination.id);
    const firstPick = (picks[team] || []).find(item => item.round === 1);
    const isCurrent = team === currentTeamName();
    const attemptLabel = r1NominationAttempt === 1
      ? "初回指名"
      : `${r1NominationAttempt}回目の再指名`;
    const status = firstPick
      ? `1巡目確定：${escapeHTML(firstPick.name)}`
      : sealed && nomination
        ? "入札提出済み・開示待ち"
      : idol
        ? `抽選待ち：${escapeHTML(idol.japaneseName)}`
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
    ? "AI対戦を始める"
    : `${$("localTeamCount").value}チームで始める`;

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
    actionStatus.classList.toggle("is-error", /できません|まだです|見つかりません|満員|終了しました|失敗/.test(message));
    actionStatus.classList.toggle("is-success", /作りました|参加しました|再接続しました/.test(message));
  }
}

function firebaseConfigurationReady() {
  const config = window.STAGE_PICK_FIREBASE_CONFIG;
  return Boolean(config && config.apiKey && config.projectId && config.databaseURL &&
    !JSON.stringify(config).includes("YOUR_"));
}

async function ensureOnlineIdentity() {
  if (!firebaseConfigurationReady() || !window.firebase?.auth || !window.firebase?.database) {
    throw new Error("Firebaseの無料プロジェクト設定がまだです。firebase-config.jsに設定を入れてください。");
  }
  if (!firebase.apps.length) firebase.initializeApp(window.STAGE_PICK_FIREBASE_CONFIG);
  const auth = firebase.auth();
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

function setOnlineRoomConnected(code, isHost, initialPlayers = null, deferGameActions = false) {
  onlineRoomCode = code;
  onlineRoomRef = firebase.database().ref(`rooms/${code}`);
  onlineIsHost = isHost;
  onlinePlayers = initialPlayers || {};
  onlineGameStatus = "lobby";
  onlineListenersAttached = false;
  onlineActionPending = false;
  onlineHandledActionIds = new Set();
  $("onlineRoomCode").value = code;
  $("onlineRoomCodeLabel").textContent = code;
  $("onlineLobby").hidden = false;
  $("createOnlineRoom").hidden = true;
  $("joinOnlineRoom").hidden = true;
  $("onlineRoomCode").disabled = true;
  renderOnlineLobby();

  onlineRoomRef.child("players").on("value", snapshot => {
    onlinePlayers = snapshot.val() || {};
    renderOnlineLobby();
    // The playing state can arrive before the player roster on a guest device.
    // Re-render turn controls once the UID-to-team mapping is available.
    if (gameStarted && activeMode === "online") {
      renderNominations();
      renderDraft();
      renderCandidates();
    }
  });
  onlineRoomRef.child("status").on("value", snapshot => {
    onlineGameStatus = snapshot.val() || "closed";
    renderOnlineLobby();
    if (onlineGameStatus === "playing" && !onlineIsHost) {
      attachOnlineGuestListeners();
    }
    if (onlineGameStatus === "closed") setOnlineStatus("このルームは終了しました");
  });

  if (isHost) {
    onlineRoomRef.child("joinRequests").on("child_added", snapshot => {
      onlineJoinQueue = onlineJoinQueue.then(() => acceptOnlineJoinRequest(snapshot));
    });
    if (!deferGameActions) onlineRoomRef.child("actions").on("child_added", processOnlineAction);
  } else {
    onlineRoomRef.child(`players/${onlineUid}`).on("value", snapshot => {
      if (snapshot.exists()) {
        attachOnlineGuestListeners();
      } else {
        setOnlineStatus("参加申請を送っています。ホストの承認を待っています…");
      }
    });
    onlineRoomRef.child(`joinRequests/${onlineUid}`).on("value", snapshot => {
      const request = snapshot.val();
      if (request?.status === "full") setOnlineStatus("このルームは満員です。別のルームを作ってください。");
      if (request?.status === "closed") setOnlineStatus("このルームはすでに開始されています。");
    });
  }

  onlineRoomRef.child("settings").on("value", snapshot => {
    if (onlineIsHost) return;
    const settings = snapshot.val();
    if (!settings) return;
    $("pickLimit").value = String(settings.pickLimit || 5);
    $("orderMode").value = settings.orderMode || "snake";
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
  $("onlinePlayerList").innerHTML = players.map(([, player], index) => `
    <li><span class="online-player-number">${index + 1}</span><strong>${escapeHTML(player.teamName || player.name || "プレイヤー")}</strong><small>${player.host ? "ホスト" : "参加者"}</small></li>
  `).join("");
  const hostCanStart = onlineIsHost && onlineGameStatus === "lobby" && players.length >= 2;
  $("startOnlineGame").hidden = !onlineIsHost || onlineGameStatus !== "lobby";
  $("startOnlineGame").disabled = !hostCanStart;
  $("startOnlineGame").textContent = hostCanStart
    ? `${players.length}人でドラフト開始`
    : `参加者待ち（${players.length} / 10人）`;
  const finished = onlineGameStatus === "playing" && gameStarted && allTeamsComplete();
  $("onlineLobbyHint").textContent = onlineGameStatus === "playing"
    ? finished ? "ドラフトが終了しました。ホストはルームを終了してデータを削除できます。" : "ドラフト進行中です。ホストは必要に応じてルームを終了してデータを削除できます。"
    : "2〜10人で遊べます。参加者がそろったらホストが開始します。終了時はルームを削除してください。";
  $("closeOnlineRoom").hidden = !onlineIsHost || !onlineRoomRef;
  $("leaveOnlineRoom").hidden = onlineIsHost || !["lobby", "closed"].includes(onlineGameStatus);
  $("closeOnlineRoom").textContent = "ルーム終了・データ削除";
  if (onlineGameStatus === "playing") setOnlineStatus(finished ? "ドラフト終了・結果を確認できます" : "ドラフト進行中");
  else if (onlineGameStatus === "lobby") setOnlineStatus(onlineIsHost ? "友達の参加を待っています" : "ルームに参加しました");
  $("pickLimit").disabled = onlineGameStatus === "playing" || (!onlineIsHost && Boolean(onlineRoomRef));
  $("orderMode").disabled = onlineGameStatus === "playing" || (!onlineIsHost && Boolean(onlineRoomRef));
}

async function acceptOnlineJoinRequest(snapshot) {
  if (!onlineIsHost || onlineGameStatus !== "lobby") return;
  const uid = snapshot.key;
  const request = snapshot.val();
  if (!uid || !request) return;
  if (onlinePlayers[uid]) {
    await snapshot.ref.remove();
    return;
  }
  if (Object.keys(onlinePlayers).length >= 10) {
    await snapshot.ref.update({ status: "full" });
    return;
  }
  const baseName = normalizeOnlineName(request.name);
  const occupied = new Set(Object.values(onlinePlayers).map(player => player.teamName));
  let teamName = baseName;
  let suffix = 2;
  while (occupied.has(teamName)) teamName = `${baseName} ${suffix++}`;
  const order = Math.max(-1, ...Object.values(onlinePlayers).map(player => Number(player.order || 0))) + 1;
  await onlineRoomRef.child(`players/${uid}`).set({
    name: baseName,
    teamName,
    order,
    host: false
  });
  onlinePlayers[uid] = { name: baseName, teamName, order, host: false };
  renderOnlineLobby();
  await snapshot.ref.remove();
}

function attachOnlineGuestListeners() {
  if (onlineIsHost || onlineListenersAttached || !onlineRoomRef) return;
  onlineListenersAttached = true;
  onlineRoomRef.child("state").on("value", snapshot => {
    const state = snapshot.val();
    if (state) applyOnlineGameState(state);
  });
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
      settings: { pickLimit: Number($("pickLimit").value), orderMode: $("orderMode").value },
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
      const playersSnapshot = await roomRef.child("players").once("value");
      const isHost = Boolean(memberSnapshot.val()?.host);
      const isPlaying = statusSnapshot.val() === "playing";
      setOnlineRoomConnected(code, isHost, playersSnapshot.val() || {}, isHost && isPlaying);
      if (isHost && isPlaying) {
        const stateSnapshot = await roomRef.child("state").once("value");
        if (stateSnapshot.exists()) {
          onlineHostRestoring = true;
          try {
            applyOnlineGameState(stateSnapshot.val());
          } finally {
            onlineHostRestoring = false;
          }
        }
        onlineRoomRef.child("actions").on("child_added", processOnlineAction);
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
  if (!onlineIsHost || !onlineRoomRef) return;
  if (!window.confirm("ルームを終了し、参加者名・設定・指名結果を含むルームデータを削除します。続けますか？")) return;
  try {
    if (onlineStateWriteTimer !== null) {
      clearTimeout(onlineStateWriteTimer);
      onlineStateWriteTimer = null;
    }
    await onlineRoomRef.remove();
    setOnlineStatus("ルームを閉じました。");
    $("onlineLobbyHint").textContent = "ルームを閉じました。新しいルームを作れます。";
    $("onlineLobby").hidden = true;
    $("createOnlineRoom").hidden = false;
    $("joinOnlineRoom").hidden = false;
    $("onlineRoomCode").disabled = false;
    onlineRoomRef = null;
    onlineRoomCode = "";
    onlineIsHost = false;
    onlinePlayers = {};
    onlineGameStatus = "";
    const url = new URL(location.href);
    url.searchParams.delete("room");
    history.replaceState(null, "", url);
    renderOnlineLobby();
  } catch (error) {
    setOnlineStatus(error.message || "ルームを閉じられませんでした。");
  }
}

async function leaveOnlineRoom() {
  if (!onlineRoomRef || onlineIsHost || !["lobby", "closed"].includes(onlineGameStatus)) return;
  const roomRef = onlineRoomRef;
  try {
    if (onlineGameStatus === "lobby" && onlineUid) {
      await Promise.all([
        roomRef.child(`players/${onlineUid}`).remove(),
        roomRef.child(`joinRequests/${onlineUid}`).remove()
      ]);
    }
    roomRef.child("players").off();
    roomRef.child("status").off();
    roomRef.child(`players/${onlineUid}`).off();
    roomRef.child(`joinRequests/${onlineUid}`).off();
    roomRef.child("settings").off();
    roomRef.child("state").off();
    onlineRoomRef = null;
    onlineRoomCode = "";
    onlineIsHost = false;
    onlinePlayers = {};
    onlineGameStatus = "";
    onlineListenersAttached = false;
    $("onlineLobby").hidden = true;
    $("createOnlineRoom").hidden = false;
    $("joinOnlineRoom").hidden = false;
    $("onlineRoomCode").disabled = false;
    $("onlineRoomCode").value = "";
    const url = new URL(location.href);
    url.searchParams.delete("room");
    history.replaceState(null, "", url);
    updateModeSetup();
    setOnlineStatus("ルームを退出しました。別のルームに参加できます。");
  } catch (error) {
    setOnlineStatus(error.message || "ルームを退出できませんでした。");
  }
}

function teamOwnerUid(team) {
  return Object.entries(onlinePlayers).find(([, player]) =>
    (player.teamName || player.name) === team
  )?.[0] || "";
}

function onlineTeamForUid(uid) {
  const player = onlinePlayers[uid];
  return player?.teamName || player?.name || "";
}

function canControlTeam(team, actorUid = onlineUid) {
  if (activeMode === "online") return Boolean(actorUid && teamOwnerUid(team) === actorUid);
  return !aiTeams.has(team);
}

function currentRevealKey() {
  const reveal = activePickReveal;
  return reveal ? `${reveal.type}:${reveal.team}:${reveal.round}:${reveal.idol?.id || ""}` : "";
}

function serializeOnlineReveal(reveal) {
  if (!reveal) return null;
  return {
    team: reveal.team,
    idolId: reveal.idol?.id || "",
    round: reveal.round,
    type: reveal.type,
    teams: reveal.teams || [],
    drawOrder: reveal.drawOrder || [],
    envelopes: reveal.envelopes || [],
    winningEnvelope: reveal.winningEnvelope,
    drawIndex: reveal.drawIndex || 0,
    selections: reveal.selections ? [...reveal.selections.entries()] : [],
    opened: reveal.opened ? [...reveal.opened] : [],
    opening: Boolean(reveal.opening),
    revealing: Boolean(reveal.revealing),
    winner: reveal.winner || null
  };
}

function restoreOnlineReveal(source) {
  if (!source) return null;
  const idol = idols.find(item => item.id === source.idolId);
  if (!idol) return null;
  return {
    ...source,
    idol,
    selections: new Map(source.selections || []),
    opened: new Set(source.opened || [])
  };
}

function serializeOnlineGame() {
  const sealR1Bids = !r1Started && !pendingR1Resolution &&
    r1NominationIndex < r1NominationOrder.length;
  return {
    teamNames,
    gameStarted,
    picks,
    drafted: [...drafted],
    round,
    r1Started,
    r1NominationOrder,
    r1NominationIndex,
    r1NominationAttempt,
    r1Nominations: sealR1Bids
      ? r1Nominations.map(({ team }) => ({ team, id: "" }))
      : r1Nominations,
    r1Queue,
    pendingR1Resolution: pendingR1Resolution ? {
      batchOrder: pendingR1Resolution.batchOrder,
      waiting: [...pendingR1Resolution.waiting],
      results: pendingR1Resolution.results
    } : null,
    waiverOrder,
    firstRoundWaiverOrder,
    turnIndex,
    lotterySummary,
    pickLimit,
    orderMode,
    firstRoundLotteryLosses,
    pickRevealQueue: pickRevealQueue.map(serializeOnlineReveal),
    activePickReveal: serializeOnlineReveal(activePickReveal),
    pickRevealPhase
  };
}

function syncOnlineState() {
  if (activeMode !== "online" || !onlineIsHost || !onlineRoomRef || !gameStarted || onlineStateApplying) return;
  if (onlineStateWriteTimer !== null) clearTimeout(onlineStateWriteTimer);
  onlineStateWriteTimer = window.setTimeout(() => {
    onlineStateWriteTimer = null;
    onlineRoomRef.child("state").set(serializeOnlineGame()).catch(error => {
      setOnlineStatus(error.message || "ゲーム状態を共有できませんでした。");
    });
  }, 35);
}

function renderOnlinePickReveal() {
  const reveal = activePickReveal;
  if (!reveal) {
    onlineShownRevealKey = "";
    $("pickReveal").hidden = true;
    return;
  }
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
  $("pickRevealAgency").textContent = "所属事務所：" + (reveal.idol.agency || "未確認");
  $("pickRevealGroup").textContent = "グループ：" + reveal.idol.group;
  $("lotteryBoard").hidden = !isLottery;
  $("pickRevealSkip").hidden = isLottery || pickRevealPhase !== "intro";
  $("pickRevealSkip").textContent = "演出をスキップ";
  $("pickReveal").hidden = false;
  if (isNewReveal) {
    $("pickRevealFlipCard").classList.remove("is-flipped");
    card.classList.remove("is-visible");
    void card.offsetWidth;
    card.classList.add("is-visible");
  }
  $("pickRevealFlipCard").classList.toggle("is-flipped", pickRevealPhase === "revealed");

  if (isLottery) {
    renderLotteryTickets(reveal);
    reveal.selections.forEach((team, envelope) => {
      const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
        .find(item => Number(item.dataset.lotteryEnvelope) === Number(envelope));
      if (!button) return;
      button.classList.add("is-chosen", "is-selected");
      button.querySelector(".lottery-envelope-hint").textContent = "選択済み";
      if (reveal.winner || reveal.opening) {
        const won = Number(envelope) === Number(reveal.winningEnvelope);
        const result = button.querySelector(".lottery-envelope-result");
        result.querySelector("strong").textContent = displayTeamName(team);
        result.querySelector("small").textContent = won ? "当選！交渉権獲得" : "落選・再指名へ";
        button.style.setProperty("--lottery-team-color", teamColorPalette[Math.max(0, teamNames.indexOf(team)) % teamColorPalette.length]);
        button.classList.add(reveal.opening ? "is-opening" : "is-open");
        if (reveal.winner) button.classList.add(won ? "is-winner" : "is-loser");
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
      : "指名の発表は全員の画面に同期されます。";
  }
}

function applyOnlineGameState(state) {
  if ((onlineIsHost && !onlineHostRestoring) || !state || onlineStateApplying) return;
  onlineStateApplying = true;
  try {
    teamNames = state.teamNames || [];
    gameStarted = Boolean(state.gameStarted);
    activeMode = "online";
    aiTeams = new Set();
    picks = state.picks || Object.fromEntries(teamNames.map(team => [team, []]));
    drafted = new Set(state.drafted || []);
    round = Number(state.round || 1);
    r1Started = Boolean(state.r1Started);
    r1NominationOrder = state.r1NominationOrder || [];
    r1NominationIndex = Number(state.r1NominationIndex || 0);
    r1NominationAttempt = Number(state.r1NominationAttempt || 1);
    r1Nominations = state.r1Nominations || [];
    r1Queue = state.r1Queue || [];
    pendingR1Resolution = state.pendingR1Resolution ? {
      batchOrder: state.pendingR1Resolution.batchOrder || [],
      waiting: new Set(state.pendingR1Resolution.waiting || []),
      results: state.pendingR1Resolution.results || []
    } : null;
    waiverOrder = state.waiverOrder || [];
    firstRoundWaiverOrder = state.firstRoundWaiverOrder || [];
    turnIndex = Number(state.turnIndex || 0);
    lotterySummary = state.lotterySummary || "";
    pickLimit = Number(state.pickLimit || 5);
    orderMode = state.orderMode || "snake";
    firstRoundLotteryLosses = state.firstRoundLotteryLosses || {};
    pickRevealQueue = (state.pickRevealQueue || []).map(restoreOnlineReveal).filter(Boolean);
    activePickReveal = restoreOnlineReveal(state.activePickReveal);
    pickRevealPhase = state.pickRevealPhase || "closed";
    pendingDraftPickId = null;
    selectedId = null;
    onlineActionPending = false;
    updateModeSetup();
    renderNominations();
    renderOnlinePickReveal();
    renderDraft();
    renderCandidates();
  } finally {
    onlineStateApplying = false;
  }
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
    if (activePickReveal.winner) return;
    if (activePickReveal.revealing || activePickReveal.opening) {
      pickRevealTimer = window.setTimeout(() => revealLotteryResults(activePickReveal), 350);
    } else if (pickRevealPhase === "intro") {
      pickRevealTimer = window.setTimeout(revealPickCard, 450);
    } else {
      scheduleAINextLotteryEnvelope();
    }
    return;
  }
  if (pickRevealPhase === "intro") {
    pickRevealTimer = window.setTimeout(revealPickCard, 450);
  } else if (pickRevealPhase === "revealed") {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1300 : 2600;
    pickRevealTimer = window.setTimeout(showNextPickReveal, delay);
  }
}

function submitOnlineAction(action) {
  if (!onlineRoomRef || onlineIsHost || onlineActionPending) return;
  onlineActionPending = true;
  renderDraft();
  renderOnlinePickReveal();
  const payload = { uid: onlineUid, ...action, createdAt: Date.now() };
  if (["envelope", "next", "skip"].includes(action.kind)) payload.revealKey = currentRevealKey();
  onlineRoomRef.child("actions").push(payload)
    .catch(error => {
      onlineActionPending = false;
      setOnlineStatus(error.message || "操作を送れませんでした。もう一度試してください。");
      renderDraft();
      renderOnlinePickReveal();
    });
  window.setTimeout(() => {
    if (!onlineActionPending) return;
    onlineActionPending = false;
    setOnlineStatus("応答を待っています。画面が更新されない場合はホストに確認してください。");
    renderDraft();
    renderOnlinePickReveal();
  }, 12000);
}

async function processOnlineAction(snapshot) {
  if (!onlineIsHost || !onlineRoomRef || onlineHandledActionIds.has(snapshot.key)) return;
  onlineHandledActionIds.add(snapshot.key);
  const action = snapshot.val();
  const ownerTeam = onlinePlayers[action?.uid]?.teamName || "";
  const revealMatches = Boolean(action?.revealKey && action.revealKey === currentRevealKey());
  try {
    if (!action || !onlinePlayers[action.uid]) return;
    const canAcceptPick = action?.kind === "pick" && ownerTeam && (
      !r1Started ? canSubmitR1Nomination(ownerTeam) : ownerTeam === currentTeamName()
    );
    if (canAcceptPick) {
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
    } else if (action?.kind === "envelope" && revealMatches && activePickReveal?.type === "lottery") {
      const drawer = activePickReveal.drawOrder[activePickReveal.drawIndex];
      if (drawer && teamOwnerUid(drawer) === action.uid) selectLotteryEnvelope(action.envelope, false, action.uid);
    } else if (action?.kind === "next" && revealMatches) {
      advancePickReveal();
    } else if (action?.kind === "skip" && revealMatches) {
      skipCurrentPickReveal();
    }
  } finally {
    await snapshot.ref.remove().catch(() => {});
    syncOnlineState();
    window.setTimeout(() => onlineHandledActionIds.delete(snapshot.key), 30000);
  }
}

function onlinePlayersInDraftOrder() {
  return Object.entries(onlinePlayers).sort(([, a], [, b]) =>
    Number(a.order || 0) - Number(b.order || 0)
  );
}

async function startOnlineGame() {
  if (!onlineIsHost || onlineGameStatus !== "lobby") return;
  const players = onlinePlayersInDraftOrder();
  if (players.length < 2 || players.length > 10) {
    setOnlineStatus("オンライン対戦は2〜10人で開始できます。参加者の人数を確認してください。");
    return;
  }
  try {
    const onlineSettings = {
      pickLimit: Number($("pickLimit").value),
      orderMode: $("orderMode").value
    };
    await onlineRoomRef.child("settings").set(onlineSettings);
    await onlineRoomRef.child("status").set("playing");
    startGame("online");
  } catch (error) {
    setOnlineStatus(error.message || "ドラフトを開始できませんでした。");
  }
}

function startGame(mode, aiCount = 3) {
  if (aiAdvanceTimer !== null) {
    clearTimeout(aiAdvanceTimer);
    aiAdvanceTimer = null;
  }
  setFinalScreenshotMode(false, false);
  activeMode = mode;
  pickLimit = Number($("pickLimit").value);
  orderMode = $("orderMode").value;
  teamNames = mode === "ai"
    ? [(playerTeamNameValue.trim() || "あなた"), ...Array.from({ length: aiCount }, (_, index) => `AI${index + 1}`)]
    : mode === "online"
      ? onlinePlayersInDraftOrder().map(([, player]) => player.teamName || player.name || "プレイヤー")
      : localTeamNames.slice(0, Number($("localTeamCount").value)).map((defaultName, index) =>
        localTeamNameValues[index].trim() || defaultName
      );
  aiTeams = new Set(mode === "ai" ? teamNames.slice(1) : []);
  gameStarted = true;
  drafted = new Set();
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
  pendingR1Resolution = null;
  waiverOrder = teamNames.slice();
  if (orderMode === "random") waiverOrder = shuffle(waiverOrder);
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
  requestAnimationFrame(() => {
    $("pool").scrollIntoView({ behavior: "smooth", block: "start" });
    $("pool").focus({ preventScroll: true });
  });
}

$("playMode").addEventListener("change", updateModeSetup);
$("aiCount").addEventListener("change", updateModeSetup);
$("localTeamCount").addEventListener("change", updateModeSetup);
$("pickLimit").addEventListener("change", updateModeSetup);
$("orderMode").addEventListener("change", updateModeSetup);
$("pickLimit").addEventListener("change", () => {
  if (onlineIsHost && onlineGameStatus === "lobby") {
    onlineRoomRef.child("settings").update({ pickLimit: Number($("pickLimit").value) });
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
$("leaveOnlineRoom").addEventListener("click", leaveOnlineRoom);
$("startOnlineGame").addEventListener("click", startOnlineGame);
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
  return (picks[team] || []).length >= pickLimit;
}

function allTeamsComplete() {
  return teamNames.length > 0 && teamNames.every(teamIsComplete);
}

function canSubmitR1Nomination(team) {
  if (!team || !r1NominationOrder.includes(team) || r1Nominations.some(item => item.team === team)) return false;
  return activeMode === "online" || team === r1NominationOrder[r1NominationIndex];
}

function areOnlineR1BidsSealed() {
  return activeMode === "online" && !r1Started && !pendingR1Resolution &&
    r1NominationIndex < r1NominationOrder.length;
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
  const firstKnownAgency = teamPicks.find(pick => pick.agency && pick.agency !== "未確認")?.agency;
  const ranked = available.map(idol => {
    const groupCount = teamPicks.filter(pick => pick.group === idol.group).length;
    const generationCount = teamPicks.filter(pick => pick.generation === idol.generation).length;
    const nationalityCount = teamPicks.filter(pick => pick.nationality === idol.nationality).length;
    const agency = idol.agency !== "未確認" ? idol.agency : "";
    const agencyCount = agency
      ? teamPicks.filter(pick => pick.agency === agency).length
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
      case "active":
        compositionScore += idol.activity === "活動中" ? 8 : 0;
        compositionScore += popularity * 0.25;
        break;
      default:
        compositionScore += groupCount === 0 ? 5 : -2 * groupCount;
        compositionScore += 5 / (generationCount + 1);
        compositionScore += 4 / (nationalityCount + 1);
        compositionScore += (agency && agencyCount === 0 ? 2 : 0);
        compositionScore += popularity * 0.55;
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
  pickRevealQueue.push({ team, idol, round: pickRound, type, ...extra });
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
  if (reveal.winner) {
    $("lotteryBoard").classList.add("is-revealed");
    $("lotteryTurn").textContent = `🏆 当選チーム：${displayTeamName(reveal.winner)}`;
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
    $("lotteryTickets").querySelectorAll("[data-lottery-envelope]").forEach(button => {
      button.disabled = true;
    });
    return;
  }

  if (reveal.revealing) {
    $("lotteryTurn").textContent = `全${total}チームの封筒がそろいました`;
    $("lotteryOutcome").textContent = "選んだ封筒を一斉に開示します…";
    $("pickRevealNext").disabled = true;
    $("pickRevealNext").textContent = "結果を開示中";
    $("pickRevealActionHint").textContent = "全チームの封筒を同時に開封しています。";
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
  if (!team || !aiTeams.has(team)) return;
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
    reveal.revealing = true;
    updateLotteryProgress();
    syncOnlineState();
    const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;
    pickRevealTimer = window.setTimeout(() => revealLotteryResults(reveal), revealDelay);
    return;
  }

  updateLotteryProgress();
  syncOnlineState();
  scheduleAINextLotteryEnvelope();
}

function revealLotteryResults(reveal) {
  if (activePickReveal !== reveal || reveal.winner || reveal.selections.size !== reveal.drawOrder.length) return;
  pickRevealTimer = null;
  reveal.opening = true;
  $("lotteryTurn").textContent = "全員の封筒を一斉に開封！";
  $("lotteryOutcome").textContent = "せーの…！";

  reveal.envelopes.forEach(envelope => {
    const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
      .find(item => Number(item.dataset.lotteryEnvelope) === envelope);
    const team = reveal.selections.get(envelope);
    const won = envelope === reveal.winningEnvelope;
    if (!button || !team) return;
    const result = button.querySelector(".lottery-envelope-result");
    result.querySelector("strong").textContent = displayTeamName(team);
    result.querySelector("small").textContent = won ? "当選！交渉権獲得" : "落選・再指名へ";
    const teamIndex = Math.max(0, teamNames.indexOf(team));
    button.style.setProperty("--lottery-team-color", teamColorPalette[teamIndex % teamColorPalette.length]);
    button.classList.add("is-opening");
    button.disabled = true;
  });
  syncOnlineState();

  const openingDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 560;
  pickRevealTimer = window.setTimeout(() => {
    pickRevealTimer = null;
    if (activePickReveal !== reveal) return;
    const winner = reveal.selections.get(reveal.winningEnvelope);
    if (!winner) return;

    reveal.opening = false;
    reveal.opened = new Set(reveal.envelopes);
    reveal.winner = winner;
    reveal.envelopes.forEach(envelope => {
      const button = [...$("lotteryTickets").querySelectorAll("[data-lottery-envelope]")]
        .find(item => Number(item.dataset.lotteryEnvelope) === envelope);
      const team = reveal.selections.get(envelope);
      const won = envelope === reveal.winningEnvelope;
      if (!button || !team) return;
      button.classList.remove("is-opening");
      button.classList.add("is-open", won ? "is-winner" : "is-loser");
      const result = button.querySelector(".lottery-envelope-result");
      result.classList.add(won ? "is-winner" : "is-loser");
      button.setAttribute("aria-label", won
        ? `${displayTeamName(team)}が当選。交渉権を獲得`
        : `${displayTeamName(team)}は落選。再指名へ`);
    });

    reveal.teams.forEach(losingTeam => {
      if (losingTeam === winner) return;
      if (!firstRoundLotteryLosses[losingTeam]) firstRoundLotteryLosses[losingTeam] = [];
      firstRoundLotteryLosses[losingTeam].push({
        name: reveal.idol.japaneseName,
        group: reveal.idol.group
      });
    });
    picks[winner].push(pickRecord(reveal.idol, 1));
    markPersonDrafted(reveal.idol);
    if (pendingR1Resolution) {
      pendingR1Resolution.waiting.delete(winner);
      pendingR1Resolution.results.push(`${reveal.idol.japaneseName}：${displayTeamName(winner)}が当選`);
    }
    renderNominations();
    renderDraft();
    renderCandidates();
    updateLotteryProgress();
    syncOnlineState();
  }, openingDelay);
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

  const reveal = pickRevealQueue.shift();
  if (!reveal) {
    pickRevealPhase = "closed";
    activePickReveal = null;
    $("pickReveal").hidden = true;
    if (pendingR1Resolution) finishFirstRoundResolution();
    else renderDraft();
    advanceAI();
    syncOnlineState();
    return;
  }

  activePickReveal = reveal;
  const isLottery = reveal.type === "lottery";
  if (isLottery) {
    reveal.opened = new Set();
    reveal.selections = new Map();
    reveal.opening = false;
    reveal.revealing = false;
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
  $("pickRevealAgency").textContent = "所属事務所：" + (reveal.idol.agency || "未確認");
  $("pickRevealGroup").textContent = "グループ：" + reveal.idol.group;
  $("lotteryBoard").hidden = !isLottery;
  $("pickRevealNext").disabled = false;
  if (isLottery) {
    renderLotteryTickets(reveal);
    $("lotteryOutcome").textContent = "全員が封筒を選ぶまで、結果は伏せられます。";
  } else {
    $("lotteryTickets").innerHTML = "";
  }

  $("pickReveal").hidden = false;
  $("pickRevealFlipCard").classList.remove("is-flipped");
  card.classList.remove("is-visible");
  void card.offsetWidth;
  card.classList.add("is-visible");
  pickRevealPhase = "intro";
  $("pickRevealNext").textContent = isLottery ? "抽選を開始" : "指名を発表";
  $("pickRevealSkip").textContent = "演出をスキップ";
  $("pickRevealSkip").hidden = isLottery;
  $("pickRevealActionHint").textContent = isLottery
    ? "封筒を選ぶ抽選です。結果は全員が選び終わってから同時に開きます。"
    : "右上は演出だけを省略します。指名を確認した後は下のボタンで次へ進みます。";
  requestAnimationFrame(() => $("pickRevealNext").focus({ preventScroll: true }));

  const introDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 80
    : isLottery ? 1050 : 720;
  pickRevealTimer = window.setTimeout(revealPickCard, introDelay);
  syncOnlineState();
}

function revealPickCard() {
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }
  if (pickRevealPhase !== "intro") return;

  pickRevealPhase = "revealed";
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
  if (!(activeMode === "online" && !onlineIsHost)) {
    pickRevealTimer = window.setTimeout(showNextPickReveal, revealDelay);
  }
  syncOnlineState();
}

function advancePickReveal() {
  if (activeMode === "online" && !onlineIsHost) {
    submitOnlineAction({ kind: "next" });
    return;
  }
  if (pickRevealPhase === "intro") revealPickCard();
  else if (pickRevealPhase === "revealed" && (
    activePickReveal?.type !== "lottery" ||
    Boolean(activePickReveal.winner)
  )) showNextPickReveal();
}

$("pickRevealNext").addEventListener("click", advancePickReveal);
$("pickRevealSkip").addEventListener("click", skipCurrentPickReveal);
$("lotteryTickets").addEventListener("click", event => {
  const button = event.target.closest("button[data-lottery-envelope]");
  if (button) selectLotteryEnvelope(button.dataset.lotteryEnvelope);
});
function nextRoundOrder() {
  if (orderMode === "snake") return waiverOrder.slice().reverse();
  if (orderMode === "random") return shuffle(teamNames);
  return teamNames.slice();
}

function advanceAfterPick() {
  turnIndex += 1;
  if (allTeamsComplete()) return;

  while (turnIndex < waiverOrder.length && teamIsComplete(waiverOrder[turnIndex])) {
    turnIndex += 1;
  }
  if (turnIndex >= waiverOrder.length) {
    round += 1;
    waiverOrder = nextRoundOrder();
    turnIndex = 0;
  }
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
    if (idol) queuePickReveal(team, idol, 1, "nomination");
    if (r1NominationIndex >= r1NominationOrder.length) {
      resolveFirstRound();
    } else if (!idol) {
      window.setTimeout(advanceAI, 0);
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

function finishFirstRoundResolution() {
  const batch = pendingR1Resolution;
  if (!batch) return;
  pendingR1Resolution = null;
  r1NominationOrder = batch.batchOrder.filter(team => batch.waiting.has(team));
  r1NominationIndex = 0;
  r1Nominations = [];
  selectedId = null;
  if (r1NominationOrder.length > 0) r1NominationAttempt += 1;
  else enterSecondRound();
  lotterySummary = batch.results.length ? batch.results.join("、") : "重複なし";
  renderNominations();
  renderDraft();
  renderCandidates();
}

function resolveFirstRound() {
  if (!gameStarted || r1Started || r1NominationIndex < r1NominationOrder.length) return;

  const batchOrder = r1NominationOrder.slice();
  const nominations = batchOrder.map(team => {
    const id = r1Nominations.find(item => item.team === team)?.id || "";
    return { team, id: excluded.has(id) ? "" : id };
  });

  const waiting = new Set(nominations.filter(item => !item.id).map(item => item.team));
  const byMember = new Map();

  nominations.filter(item => item.id).forEach(item => {
    const nominee = idols.find(idol => idol.id === item.id);
    if (!nominee) return;
    const personKey = nominee.personKey || nominee.id;
    if (!byMember.has(personKey)) byMember.set(personKey, { idol: nominee, teams: [] });
    byMember.get(personKey).teams.push(item.team);
  });

  const results = [];
  const lotteries = [];

  byMember.forEach(({ idol, teams }, personKey) => {

    if (teams.length === 1) {
      const team = teams[0];
      picks[team].push(pickRecord(idol, 1));
      drafted.add(personKey);
      return;
    }

    teams.forEach(team => waiting.add(team));
    const drawOrder = firstRoundWaiverOrder.filter(team => teams.includes(team));
    lotteries.push({
      team: drawOrder[0] || teams[0],
      idol,
      teams: teams.slice(),
      drawOrder: drawOrder.length ? drawOrder : teams.slice()
    });
  });

  pendingR1Resolution = { batchOrder, waiting, results };
  r1NominationOrder = [];
  r1NominationIndex = 0;
  selectedId = null;

  lotteries.forEach(event => queuePickReveal(event.team, event.idol, 1, "lottery", event));

  if (pickRevealQueue.length === 0 && $("pickReveal").hidden) {
    finishFirstRoundResolution();
    advanceAI();
  }
  renderNominations();
  renderDraft();
  renderCandidates();
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
        const memberName = pick?.name || "—";
        const groupName = pick?.group || "";
        return `<td title="${escapeHTML(groupName)}"><strong>${escapeHTML(memberName)}</strong>${groupName ? `<small>${escapeHTML(groupName)}</small>` : ""}</td>`;
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

function renderDraft() {
  const currentTeam = currentTeamName();
  const ownOnlineTeam = activeMode === "online" ? onlineTeamForUid(onlineUid) : "";
  const ownOnlineSubmitted = Boolean(ownOnlineTeam && r1Nominations.some(item => item.team === ownOnlineTeam));
  const ownOnlineFirstPick = Boolean(ownOnlineTeam && (picks[ownOnlineTeam] || []).some(item => item.round === 1));
  const finished = Boolean(
    gameStarted && allTeamsComplete() && !pendingR1Resolution &&
    $("pickReveal").hidden && pickRevealQueue.length === 0
  );
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  const canConfirm = Boolean(
    gameStarted && currentTeam && pendingIdol &&
    canControlTeam(currentTeam) &&
    !onlineActionPending &&
    !pendingR1Resolution
  );

  $("pickConfirmation").hidden = !canConfirm;
  if (canConfirm) {
    $("pickConfirmName").textContent = pendingIdol.japaneseName;
    $("pickConfirmDetails").textContent = `${pendingIdol.group}・${pendingIdol.agency || "事務所未登録"}`;
  }

  $("currentTeam").textContent = !gameStarted
    ? "未開始"
    : pendingR1Resolution
      ? "競合抽選中"
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
  } else if (pendingR1Resolution) {
    $("draftHint").textContent = activeMode === "online"
      ? "全チームの1巡目入札を一斉公開しました。抽選がある場合は、当選チームを決めています。"
      : "1巡目の指名を順番に発表しています。抽選がある場合は、外れたチームが再指名します。";
    $("selectedMember").textContent = "発表が終わるまで次の指名はできません。";
  } else if (!r1Started) {
    const secured = teamNames.filter(team => (picks[team] || []).some(item => item.round === 1)).length;
    const currentStage = r1NominationAttempt === 1 ? "初回指名" : `${r1NominationAttempt}回目の再指名`;
    $("draftHint").textContent = activeMode === "online"
      ? ownOnlineSubmitted
        ? "入札を提出済みです。今回の対象チームが全員提出すると、1巡目の候補を一斉に公開します。"
        : ownOnlineFirstPick
          ? "1巡目の指名は確定済みです。抽選と再入札が終わるまでお待ちください。"
          : currentTeam
            ? `${displayTeamName(currentTeam)}の${currentStage}を選んで提出してください。他チームの入札は提出がそろうまで非公開です。`
            : "他チームの入札がそろうのを待っています。"
      : currentTeam
        ? canControlTeam(currentTeam)
          ? `${displayTeamName(currentTeam)}の${currentStage}番です。候補を選んで確認し、指名を提出してください。`
          : `${displayTeamName(currentTeam)}の${currentStage}です。相手が指名しています。`
        : "次の指名チームを準備しています。";
    $("selectedMember").textContent = pendingIdol
      ? `${pendingIdol.japaneseName}を選択中です。確認ボタンを押すと指名が提出されます。`
      : activeMode === "online"
        ? ownOnlineSubmitted
          ? "提出済み。ほかのチームの提出を待っています。"
          : ownOnlineFirstPick
            ? "あなたの1巡目指名は確定しました。"
            : "候補カードを選んで、すぐ下の確認ボタンから入札を提出してください。"
        : `${secured} / ${teamNames.length}チームの1巡目指名が確定。外れたチームは当たるまで再指名できます。`;
  } else if (!currentTeam) {
    $("draftHint").textContent = "全チームの指名が完了しました。";
    $("selectedMember").textContent = "ドラフト終了！設定を変えて、もう一度遊べるよ。";
  } else {
    $("draftHint").textContent =
      (canControlTeam(currentTeam)
        ? `2巡目以降は${orderMode === "snake" ? "前巡の逆順" : orderMode === "random" ? "毎巡くじ引き" : "チーム順固定"}。${displayTeamName(currentTeam)}は候補を選び、確認後に提出してね。`
        : `${displayTeamName(currentTeam)}が指名中です。自分のチームの順番を待っています。`);
    $("selectedMember").textContent = pendingIdol
      ? `${pendingIdol.japaneseName}を選択中です。確認ボタンを押すと指名が提出されます。`
      : "候補カードを押すと、指名内容の確認画面が表示されます。";
  }

  const locked = gameStarted && !finished;
  ["playMode", "aiCount", "localTeamCount", "pickLimit", "orderMode"].forEach(id => {
    $(id).disabled = locked;
  });
  $("teamNameInputs").querySelectorAll("input").forEach(input => {
    input.disabled = locked;
  });
  $("startGame").disabled = locked;
  $("startGame").textContent = !gameStarted
    ? ($("playMode").value === "ai" ? "AI対戦を始める" : `${$("localTeamCount").value}チームで始める`)
    : finished
      ? "もう一度遊ぶ"
      : "ドラフト進行中";

  const totalPicks = teamNames.reduce((sum, team) => sum + picks[team].length, 0);
  const totalSlots = teamNames.length * pickLimit;
  $("draftBoardCount").textContent = `${totalPicks} / ${totalSlots}人`;
  $("draftBoardSummary").textContent = !gameStarted
    ? `各チーム${pickLimit}人。ドラフト開始後、巡目ごとに表示します。`
    : finished
      ? "全チームの指名が完了しました。"
      : areOnlineR1BidsSealed()
        ? `${r1NominationIndex} / ${r1NominationOrder.length}チームが入札を提出。対象チームがそろうと一斉公開します。`
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
      <div class="draft-lottery-history" aria-label="1巡目の抽選で外れた候補">
        ${losses.map(lost => `
          <div class="draft-cell-card draft-lottery-loss">
            <strong>${escapeHTML(lost.name)}</strong>
            <span>${escapeHTML(lost.group)}</span>
          </div>
        `).join("")}
      </div>
    ` : "";

    if (pick) {
      return `${lossMarkup}<div class="draft-cell-card draft-pick-confirmed">
        <strong>${escapeHTML(pick.name)}</strong>
        <span>${escapeHTML(pick.group)}</span>
      </div>`;
    }

    if (pickRound === 1 && gameStarted) {
      const nomination = r1Nominations.find(item => item.team === team);
      const nominee = nomination && idols.find(item => item.id === nomination.id);
      if (areOnlineR1BidsSealed() && nomination) {
        return `${lossMarkup}<div class="draft-cell-card draft-nomination">
          <small>1巡目入札</small>
          <strong>提出済み・非公開</strong>
          <span>全員の提出後に開示</span>
        </div>`;
      }
      if (nominee) {
        return `${lossMarkup}<div class="draft-cell-card draft-nomination">
          <small>入札公開・抽選待ち</small>
          <strong>${escapeHTML(nominee.japaneseName)}</strong>
          <span>${escapeHTML(nominee.group)}</span>
        </div>`;
      }
      if (!r1Started && r1NominationOrder.includes(team)) {
        return `${lossMarkup}<div class="draft-cell-card draft-lottery-wait">
          <small>${activeMode === "online" ? (team === currentTeam ? "あなたの入札" : "入札") : (team === currentTeam ? "再指名中" : "再指名待ち")}</small>
          <strong>${activeMode === "online" ? (team === currentTeam ? "候補を選択" : "提出待ち") : (team === currentTeam ? "候補を選択" : "抽選待ち")}</strong>
        </div>`;
      }
    }

    if (lossMarkup) return lossMarkup;
    return `<span class="empty-pick${current ? " is-current" : ""}">${current ? "指名中" : "—"}</span>`;
  };

  $("draftBoard").innerHTML = `
    <table class="draft-results-table">
      <thead>
        <tr>
          <th class="round-column" scope="col">巡目</th>
          ${teamNames.map((team, index) => `
            <th class="team-column" scope="col" style="--team-color: ${teamColorPalette[index % teamColorPalette.length]}">
              <strong>${escapeHTML(displayTeamName(team))}</strong>
              <span>${picks[team].length} / ${pickLimit}人</span>
            </th>
          `).join("")}
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

  const finalResults = $("finalResults");
  const compactBoard = $("draftBoard").closest(".draft-board");
  finalResults.hidden = !finished;
  compactBoard.hidden = finished;
  if (finished) {
    $("finalResultsSummary").textContent =
      `${teamNames.length}チームが各${pickLimit}人を指名しました（合計${totalPicks}人）。`;
    $("finalResultsBoard").innerHTML = $("draftBoard").innerHTML;
    renderFinalSnapshot();
    if (!finalResultsWasVisible) {
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
}
