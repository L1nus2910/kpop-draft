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
      ["Eunbi", "韓国"], ["Hyewon", "韓国"], ["Yena", "韓国"],
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
    members: [["Minji", "韓国"], ["Hanni", "オーストラリア"], ["Haerin", "韓国"], ["Hyein", "韓国"]]
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
  "yihyun": "イヒョン"
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
  hikaru: "히카루", haewon: "해원", hayoung: "하영 오하영",
  eunji: "은지 정은지", "chanelle moon": "샤넬 문", "moon sua": "문수아",
  "kim lip": "김립", "go won": "고원", "a-na": "에이나", juun: "주은",
  "ye-eun": "예은", "yi hani": "이하니", "lee sem": "이샘", lily: "리리",
  shuhua: "슈화", hyuna: "현아", seunghee: "승희", gyuri: "규리"
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

let nextId = 1;
const idols = groups.flatMap(group =>
  group.members.map(member => ({
    id: String(nextId++),
    name: member[0],
    japaneseName: toJapaneseMemberName(member[0]),
    koreanName: toKoreanMemberName(member[0]),
    nationality: member[1],
    group: group.name,
    agency: agencyByGroup[group.name] || "未確認",
    generation: group.generation,
    activity: group.activity
  }))
);

const choeaedolIndividualRanks = [
  ["NiziU", "Maya", 1], ["BABYMONSTER", "Ahyeon", 2], ["NiziU", "Mako", 3],
  ["IVE", "Leeseo", 4], ["CLASS:y", "Boeun", 5], ["aespa", "Winter", 6],
  ["NiziU", "Ayaka", 7], ["NiziU", "Rima", 8], ["NiziU", "Riku", 9],
  ["NiziU", "Miihi", 10], ["Kep1er", "Hikaru", 11], ["NiziU", "Mayuka", 12],
  ["NiziU", "Rio", 13], ["aespa", "Ningning", 14], ["aespa", "Karina", 15],
  ["NiziU", "Nina", 16], ["LE SSERAFIM", "Sakura", 17], ["IVE", "Yujin", 18],
  ["Hearts2Hearts", "Carmen", 19], ["NMIXX", "Haewon", 20],
  ["TWICE", "Tzuyu", 1], ["BLACKPINK", "Lisa", 2], ["TWICE", "Mina", 2],
  ["TWICE", "Momo", 4], ["BLACKPINK", "Jennie", 5], ["TWICE", "Jeongyeon", 6],
  ["I.O.I", "Sejeong", 12], ["TWICE", "Nayeon", 8], ["TWICE", "Sana", 9],
  ["TWICE", "Dahyun", 10], ["BLACKPINK", "Jisoo", 11], ["TWICE", "Jihyo", 13],
  ["TWICE", "Chaeyoung", 14], ["BLACKPINK", "Rosé", 15], ["Apink", "Hayoung", 16],
  ["ITZY", "Yeji", 17], ["Girls' Generation", "Taeyeon", 18], ["Apink", "Eunji", 19],
  ["ITZY", "Yuna", 20]
];

const popularityRankingSources = [
  {
    id: "youloy",
    weight: 50,
    topN: 30,
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
    id: "starnews",
    weight: 15,
    topN: 5,
    ranks: [
      ["NewJeans", "Minji", 1], ["NewJeans", "Hyein", 2],
      ["NewJeans", "Hanni", 3], ["NewJeans", "Haerin", 4],
      ["Red Velvet", "Irene", 5]
    ]
  },
  {
    id: "fannstar",
    weight: 10,
    topN: 16,
    ranks: [
      ["Girls' Generation", "Yoona", 3], ["NMIXX", "Haewon", 5],
      ["i-dle", "Yuqi", 9], ["NMIXX", "Sullyoon", 10],
      ["aespa", "Winter", 11], ["BABYMONSTER", "Ahyeon", 13],
      ["ILLIT", "Wonhee", 15], ["i-dle", "Soyeon", 16]
    ]
  }
];

const normalizeRankingName = value => String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
const memberRankingKey = (group, member) =>
  `${normalizeRankingName(group)}:${normalizeRankingName(member)}`;

function starsForPopularityScore(score) {
  if (score >= 70) return 5;
  if (score >= 50) return 4;
  if (score >= 30) return 3;
  if (score >= 15) return 2;
  return 1;
}

const popularityRanksByMember = new Map();
function addPopularityRank(sourceId, group, member, rank) {
  const key = memberRankingKey(group, member);
  const sourceRanks = popularityRanksByMember.get(key) || {};
  sourceRanks[sourceId] = Math.min(sourceRanks[sourceId] || Infinity, rank);
  popularityRanksByMember.set(key, sourceRanks);
}

choeaedolIndividualRanks.forEach(([group, member, rank]) =>
  addPopularityRank("choeaedol", group, member, rank)
);
popularityRankingSources.forEach(source => {
  source.ranks.forEach(([group, member, rank]) =>
    addPopularityRank(source.id, group, member, rank)
  );
});

idols.forEach(idol => {
  const sourceRanks = popularityRanksByMember.get(memberRankingKey(idol.group, idol.name)) || {};
  const choeaedolRank = sourceRanks.choeaedol || null;
  const compositeScore = popularityRankingSources.reduce((score, source) => {
    const rank = sourceRanks[source.id];
    if (!rank) return score;
    const sourceScore = ((source.topN + 1 - rank) / source.topN) * 100;
    return score + sourceScore * (source.weight / 100);
  }, choeaedolRank ? ((21 - choeaedolRank) / 20) * 25 : 0);

  idol.popularityScore = Math.round(compositeScore * 10) / 10;
  idol.popularityStars = starsForPopularityScore(idol.popularityScore);
  idol.individualPopularityRank = choeaedolRank;
  idol.popularitySortScore = idol.popularityScore;
  idol.popularitySources = sourceRanks;
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

const teamColorPalette = [
  "#b4233b", "#2457aa", "#08786f", "#a55310", "#6741a5",
  "#20764a", "#a72f69", "#116d87", "#826012", "#4b5a71"
];

const aiStrategies = [
  { label: "バランス型", group: 5, generation: 5, nationality: 4, activity: 3 },
  { label: "グループ分散型", group: 10, generation: 3, nationality: 2, activity: 1 },
  { label: "国籍ミックス型", group: 3, generation: 2, nationality: 10, activity: 1 },
  { label: "活動重視型", group: 3, generation: 2, nationality: 2, activity: 9 },
  { label: "世代バランス型", group: 3, generation: 10, nationality: 2, activity: 1 }
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

function getCandidates(ignoreFilter = "") {
  const query = normalizeSearchText($("searchInput").value.trim());
  const generation = ignoreFilter === "generationFilter" ? "" : $("generationFilter").value;
  const nationality = ignoreFilter === "nationalityFilter" ? "" : $("nationalityFilter").value;
  const agency = ignoreFilter === "agencyFilter" ? "" : $("agencyFilter").value;
  const group = ignoreFilter === "groupFilter" ? "" : $("groupFilter").value;
  const hideDrafted = $("hideDrafted").checked;

  return idols.filter(idol => {
    const matchesText = !query ||
      [idol.name, idol.japaneseName, idol.koreanName, idol.group, idol.nationality, idol.agency]
        .some(value => normalizeSearchText(value).includes(query));

    return matchesText &&
      (!generation || idol.generation === generation) &&
      (!nationality || idol.nationality === nationality) &&
      (!agency || idol.agency === agency) &&
      (!group || idol.group === group) &&
      (!hideDrafted || !drafted.has(idol.id)) &&
      ($("showExcluded").checked || !excluded.has(idol.id));
  }).sort((a, b) =>
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
      const values = [...new Set(getCandidates(filter.id).map(idol => idol[filter.field]))]
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

  $("candidateList").innerHTML = list.map(idol => {
    const isExcluded = excluded.has(idol.id);
    const isNominated = !r1Started && r1Nominations.some(item => item.id === idol.id);
    const isUnavailable = isExcluded || drafted.has(idol.id);
    const isSelected = selectedId === idol.id || pendingDraftPickId === idol.id || isNominated;
    const selectHint = isUnavailable
      ? (isExcluded ? "除外中" : "指名済み")
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
      : "参照した個人ランキングに未掲載";
    return `
      <article class="candidate-card ${isSelected ? "is-selected" : ""} ${isExcluded ? "is-excluded" : ""}" data-candidate-id="${idol.id}">
        <button class="candidate-select" type="button" data-action="select" data-id="${idol.id}" aria-pressed="${isSelected}" ${isUnavailable ? "disabled" : ""}>
          <span class="candidate-title-row">
            <span class="candidate-name">${escapeHTML(idol.japaneseName)}</span>
            <span class="candidate-stars" aria-label="人気参考ランク ${idol.popularityStars}つ星">${"★".repeat(idol.popularityStars)}${"☆".repeat(5 - idol.popularityStars)}</span>
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
  if (!idol || excluded.has(id) || drafted.has(id)) return;

  if (!gameStarted) {
    selectedId = id;
    $("selectedMember").textContent = `${idol.japaneseName}（${idol.group}）を選択中。ドラフト開始後に指名できるよ。`;
    renderCandidates();
    return;
  }

  if (!$("pickReveal").hidden || pendingR1Resolution) return;
  const team = currentTeamName();
  if (!team || (activeMode === "ai" && aiTeams.has(team))) return;
  if (!r1Started && team !== r1NominationOrder[r1NominationIndex]) return;

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

function confirmDraftPick() {
  if (!$("pickReveal").hidden || pendingR1Resolution) return;
  const idol = idols.find(item => item.id === pendingDraftPickId);
  if (!idol || excluded.has(idol.id) || drafted.has(idol.id)) {
    cancelDraftPick();
    return;
  }
  const team = currentTeamName();
  if (!team || (activeMode === "ai" && aiTeams.has(team))) return;

  pendingDraftPickId = null;
  selectedId = null;
  if (!r1Started) {
    if (team !== r1NominationOrder[r1NominationIndex]) return;
    r1Nominations.push({ team, id: idol.id });
    r1NominationIndex += 1;
    queuePickReveal(team, idol, 1, "nomination");
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
}

$("confirmPick").addEventListener("click", confirmDraftPick);
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
  const list = getCandidates().filter(idol => !excluded.has(idol.id) && !drafted.has(idol.id));
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
    const idol = nomination && idols.find(item => item.id === nomination.id);
    const firstPick = (picks[team] || []).find(item => item.round === 1);
    const isCurrent = team === currentTeamName();
    const attemptLabel = r1NominationAttempt === 1
      ? "初回指名"
      : `${r1NominationAttempt}回目の再指名`;
    const status = firstPick
      ? `1巡目確定：${escapeHTML(firstPick.name)}`
      : idol
        ? `抽選待ち：${escapeHTML(idol.japaneseName)}`
      : isCurrent
        ? (aiTeams.has(team) ? `AIが${attemptLabel}中` : `${attemptLabel}する番です`)
        : r1NominationOrder.includes(team)
          ? `指名順待ち（${attemptLabel}）`
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
  $("aiCountWrap").hidden = !aiMode;
  $("localTeamCountWrap").hidden = aiMode;
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
  } else {
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
  }

  const teams = aiMode
    ? `あなたとAI${$("aiCount").value}人の合計${Number($("aiCount").value) + 1}チーム`
    : `同じ画面の${$("localTeamCount").value}チーム`;
  $("modeDescription").textContent =
    `${teams}で、各チーム${$("pickLimit").value}人を指名します。` +
    "1巡目は指名が重なったら抽選し、外れたチームは当たるまで再指名します。再指名同士が重なった場合も抽選します。2巡目以降は設定した順番で進みます。";
}

function startGame(mode, aiCount = 3) {
  activeMode = mode;
  pickLimit = Number($("pickLimit").value);
  orderMode = $("orderMode").value;
  teamNames = mode === "ai"
    ? [(playerTeamNameValue.trim() || "あなた"), ...Array.from({ length: aiCount }, (_, index) => `AI${index + 1}`)]
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
}

$("playMode").addEventListener("change", updateModeSetup);
$("aiCount").addEventListener("change", updateModeSetup);
$("localTeamCount").addEventListener("change", updateModeSetup);
$("pickLimit").addEventListener("change", updateModeSetup);
$("orderMode").addEventListener("change", updateModeSetup);
$("startGame").addEventListener("click", () => {
  const mode = $("playMode").value;
  if (mode === "ai") startGame("ai", Number($("aiCount").value));
  else startGame("local");
});

function teamIsComplete(team) {
  return (picks[team] || []).length >= pickLimit;
}

function allTeamsComplete() {
  return teamNames.length > 0 && teamNames.every(teamIsComplete);
}

function currentTeamName() {
  if (!gameStarted) return null;
  if (!r1Started) return r1NominationOrder[r1NominationIndex] || null;
  if (allTeamsComplete()) return null;
  while (turnIndex < waiverOrder.length && teamIsComplete(waiverOrder[turnIndex])) {
    turnIndex += 1;
  }
  return waiverOrder[turnIndex] || null;
}

function availableForAI() {
  return idols.filter(idol => !drafted.has(idol.id) && !excluded.has(idol.id));
}

function chooseAIIdol(team) {
  const available = availableForAI();
  if (!available.length) return null;

  const strategy = aiStrategyFor(team);
  const teamPicks = picks[team] || [];
  const ranked = available.map(idol => {
    const groupCount = teamPicks.filter(pick => pick.group === idol.group).length;
    const generationCount = teamPicks.filter(pick => pick.generation === idol.generation).length;
    const nationalityCount = teamPicks.filter(pick => pick.nationality === idol.nationality).length;
    const score = Math.random() * 4 +
      (groupCount === 0 ? strategy.group : -strategy.group * groupCount) +
      strategy.generation / (generationCount + 1) +
      strategy.nationality / (nationalityCount + 1) +
      (idol.activity === "活動中" ? strategy.activity : 0) +
      idol.popularityScore / 20;
    return { idol, score };
  }).sort((a, b) => b.score - a.score);

  const shortlist = ranked.slice(0, Math.min(3, ranked.length));
  return shortlist[Math.floor(Math.random() * shortlist.length)].idol;
}

function pickRecord(idol, pickRound = round) {
  return {
    round: pickRound,
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
    $("lotteryTurn").textContent = `当選：${displayTeamName(reveal.winner)}`;
    $("lotteryOutcome").textContent = `${displayTeamName(reveal.winner)}が交渉権を獲得！`;
    $("pickRevealNext").disabled = false;
    $("pickRevealNext").textContent = pickRevealQueue.length
      ? "次の指名へ"
      : "ドラフト画面へ";
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
  $("pickRevealNext").textContent = "全員の選択を待っています";
  const canChoose = pickRevealPhase === "revealed" && !reveal.opening && !aiTeams.has(drawer);
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

function selectLotteryEnvelope(envelope, automatic = false) {
  const reveal = activePickReveal;
  if (!reveal || reveal.type !== "lottery" || reveal.winner || reveal.opening || reveal.revealing) return;
  const team = reveal.drawOrder[reveal.drawIndex];
  const envelopeId = Number(envelope);
  if (!team || !reveal.envelopes.includes(envelopeId) || reveal.selections.has(envelopeId)) return;
  if (aiTeams.has(team) !== automatic || pickRevealPhase !== "revealed") return;

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
    const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;
    pickRevealTimer = window.setTimeout(() => revealLotteryResults(reveal), revealDelay);
    return;
  }

  updateLotteryProgress();
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
    result.querySelector("small").textContent = won ? "交渉権獲得" : "再指名へ";
    button.classList.add("is-opening");
    button.disabled = true;
  });

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
    drafted.add(reveal.idol.id);
    if (pendingR1Resolution) {
      pendingR1Resolution.waiting.delete(winner);
      pendingR1Resolution.results.push(`${reveal.idol.japaneseName}：${displayTeamName(winner)}が当選`);
    }
    renderNominations();
    renderDraft();
    renderCandidates();
    updateLotteryProgress();
  }, openingDelay);
}

function skipCurrentPickReveal() {
  if (activePickReveal?.type === "lottery") return;
  showNextPickReveal();
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
      ? "このメンバーを1巡目候補に登録"
      : "指名が確定しました";
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
  $("pickRevealNext").textContent = isLottery ? "抽選を開始" : "指名を見る";
  $("pickRevealSkip").textContent = "演出をスキップ";
  $("pickRevealSkip").hidden = isLottery;
  requestAnimationFrame(() => $("pickRevealNext").focus({ preventScroll: true }));

  const introDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 80
    : isLottery ? 1050 : 720;
  pickRevealTimer = window.setTimeout(revealPickCard, introDelay);
}

function revealPickCard() {
  if (pickRevealTimer !== null) {
    clearTimeout(pickRevealTimer);
    pickRevealTimer = null;
  }
  if (pickRevealPhase !== "intro") return;

  pickRevealPhase = "revealed";
  $("pickRevealFlipCard").classList.add("is-flipped");
  if (activePickReveal?.type === "lottery") {
    updateLotteryProgress();
    scheduleAINextLotteryEnvelope();
    return;
  }
  $("pickRevealNext").disabled = false;
  $("pickRevealNext").textContent = pickRevealQueue.length
    ? "次の指名へ（あと" + pickRevealQueue.length + "件）"
    : "ドラフト画面へ";
  $("pickRevealSkip").textContent = "スキップ";

  const revealDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1300 : 2600;
  pickRevealTimer = window.setTimeout(showNextPickReveal, revealDelay);
}

function advancePickReveal() {
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
  drafted.add(idol.id);
  advanceAfterPick();
  queuePickReveal(team, idol, pickRound);
}

function advanceAI() {
  if (
    activeMode !== "ai" || !gameStarted || !$("pickReveal").hidden ||
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
    if (!byMember.has(item.id)) byMember.set(item.id, []);
    byMember.get(item.id).push(item.team);
  });

  const results = [];
  const lotteries = [];
  const winningPicks = [];

  byMember.forEach((teams, id) => {
    const idol = idols.find(item => item.id === id);
    if (!idol) {
      teams.forEach(team => waiting.add(team));
      return;
    }

    if (teams.length === 1) {
      const team = teams[0];
      picks[team].push(pickRecord(idol, 1));
      drafted.add(id);
      winningPicks.push({ team, idol });
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
  r1Nominations = [];
  selectedId = null;

  lotteries.forEach(event => queuePickReveal(event.team, event.idol, 1, "lottery", event));
  winningPicks.forEach(({ team, idol }) => queuePickReveal(team, idol, 1));

  if (pickRevealQueue.length === 0 && $("pickReveal").hidden) {
    finishFirstRoundResolution();
    advanceAI();
  }
  renderNominations();
  renderDraft();
  renderCandidates();
}

function renderDraft() {
  const currentTeam = currentTeamName();
  const finished = Boolean(
    gameStarted && allTeamsComplete() && !pendingR1Resolution &&
    $("pickReveal").hidden && pickRevealQueue.length === 0
  );
  const pendingIdol = idols.find(item => item.id === pendingDraftPickId);
  const canConfirm = Boolean(
    gameStarted && currentTeam && pendingIdol &&
    !(activeMode === "ai" && aiTeams.has(currentTeam)) &&
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
    $("draftHint").textContent = "1巡目の指名を順番に発表しています。抽選がある場合は、外れたチームが再指名します。";
    $("selectedMember").textContent = "発表が終わるまで次の指名はできません。";
  } else if (!r1Started) {
    const secured = teamNames.filter(team => (picks[team] || []).some(item => item.round === 1)).length;
    const currentStage = r1NominationAttempt === 1 ? "初回指名" : `${r1NominationAttempt}回目の再指名`;
    $("draftHint").textContent = currentTeam
      ? `${displayTeamName(currentTeam)}の${currentStage}番です。候補を選んで確認し、指名を提出してください。`
      : "次の指名チームを準備しています。";
    $("selectedMember").textContent = pendingIdol
      ? `${pendingIdol.japaneseName}を選択中です。確認ボタンを押すと指名が提出されます。`
      : `${secured} / ${teamNames.length}チームの1巡目指名が確定。外れたチームは当たるまで再指名できます。`;
  } else if (!currentTeam) {
    $("draftHint").textContent = "全チームの指名が完了しました。";
    $("selectedMember").textContent = "ドラフト終了！設定を変えて、もう一度遊べるよ。";
  } else {
    $("draftHint").textContent =
      `2巡目以降は${orderMode === "snake" ? "前巡の逆順" : orderMode === "random" ? "毎巡くじ引き" : "チーム順固定"}。${displayTeamName(currentTeam)}は候補を選び、確認後に提出してね。`;
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
      if (!r1Started && r1NominationOrder.includes(team)) {
        if (nominee) {
          return `${lossMarkup}<div class="draft-cell-card draft-nomination">
            <small>抽選待ち</small>
            <strong>${escapeHTML(nominee.japaneseName)}</strong>
            <span>${escapeHTML(nominee.group)}</span>
          </div>`;
        }
        return `${lossMarkup}<div class="draft-cell-card draft-lottery-wait">
          <small>${team === currentTeam ? "再指名中" : "再指名待ち"}</small>
          <strong>${team === currentTeam ? "候補を選択" : "抽選待ち"}</strong>
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
    if (!finalResultsWasVisible) {
      requestAnimationFrame(() => finalResults.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  } else {
    $("finalResultsBoard").innerHTML = "";
  }
  finalResultsWasVisible = finished;
}

renderNominations();
refreshPresets();
renderCandidates();
renderDraft();
updateModeSetup();
