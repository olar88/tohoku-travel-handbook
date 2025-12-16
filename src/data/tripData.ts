export interface OverviewData {
  regions: string;
  flights: {
    outbound: {
      airline: string;
      flightNumber: string;
      departure: string;
      departureTime: string;
      arrival: string;
      arrivalTime: string;
      duration: string;
    };
    return: {
      airline: string;
      flightNumber: string;
      departure: string;
      departureTime: string;
      arrival: string;
      arrivalTime: string;
      duration: string;
    };
    outboundFlightSummary: string;
    returnFlightSummary: string;
  };
  transport: string;
  packingList: {
    category: string;
    icon: string;
    items: string[];
  }[];
}

export const tripData = {
  coverPage: {},

  overview: {
    regions: "青森、奧入瀨溪流、八戶、盛岡、一關、仙台、藏王、山形、銀山溫泉",
    flights: {
      outbound: {
        airline: "長榮航空",
        flightNumber: "BR122",
        departure: "2026.1.8 (四)",
        departureTime: "10:00",
        departureAirport: "桃園國際機場 (TPE)",
        arrival: "2026.1.8 (四)",
        arrivalTime: "14:30",
        arrivalAirport: "仙台國際機場 (SDJ)",
      },
      return: {
        airline: "台灣虎航",
        flightNumber: "IT255",
        departure: "2026.1.15 (四)",
        departureTime: "19:40",
        departureAirport: "仙台國際機場 (SDJ)",
        arrival: "2026.1.15 (四)",
        arrivalTime: "23:00",
        arrivalAirport: "桃園國際機場 (TPE)",
      },
      outboundFlightSummary: "長榮航空 BR122 | 10:00 台北 → 14:30 仙台",
      returnFlightSummary: "台灣虎航 IT255 | 19:40 仙台 → 23:00 台北",
    },
    transport: "JR鐵路 & 自駕",
    packingList: [
      {
        category: "證件",
        icon: "💳️",
        items: ["護照", "台灣駕照 (國際駕照)", "健保卡", "信用卡/現金"],
      },
      {
        category: "衣著",
        icon: "🧥",
        items: [
          "羽絨衣",
          "厚毛衣",
          "加熱衣",
          "厚褲子",
          "雪靴",
          "厚襪子",
          "手套",
          "圍巾",
          "毛帽",
        ],
      },
      {
        category: "保暖用品",
        icon: "❄️",
        items: ["暖暖包", "保溫杯", "口罩", "護唇膏"],
      },
      {
        category: "盥洗用品",
        icon: "🧴",
        items: [
          "保濕乳液",
          "護手霜",
          "唇膏",
          "防曬乳",
          "牙刷牙膏",
          "洗面乳",
          "化妝品",
        ],
      },
      {
        category: "其他必需品",
        icon: "🎒",
        items: [
          "行充",
          "手機充電線",
          "藥品 (感冒藥、腸胃藥)",
          "墨鏡❗❗",
          "自拍桿",
        ],
      },
    ],
  },

  days: [
    {
      day: 1,
      date: "2026年1月8日(四)",
      title: "抵達青森 🛬",
      weatherLocationId: ["aomori"],
      accommodation: "Art Hotel",
      accommodationGoogleMap: "https://maps.app.goo.gl/FydjxYB5Ji63ygZq9",
      highlight: "抵達日本、青森市區初探",
      activities: [
        {
          time: "14:30",
          activity: "抵達青森機場 (AOJ)",
          note: "準備展開東北雪國之旅！",
        },
        {
          time: "15:00",
          activity: "搭乘 JR 前往青森",
          note: "機場巴士 → 新青森站 → JR奧羽本線",
        },
        {
          time: "16:00",
          activity: "飯店 Check-in",
          note: "Art Hotel 稍作休息",
        },
        {
          time: "17:00",
          activity: "晚餐：Osanai 烤扇貝",
          note: "青森當地新鮮海味",
          tags: [
            {
              lable: "🦪 Osanai 烤扇貝",
              url: "https://notion.so/2adf967c041e80a5b78ef63e6044300f?pvs=25",
            },
          ],
        },
        {
          time: "19:00",
          activity: "晚間娛樂：Jazz bar",
          note: "享受爵士樂的愜意氛圍",
          tags: [
            {
              lable: "🎺 Live cafe bar Atom",
              url: "https://maps.app.goo.gl/bTg5cRM5woDsGwu99",
            },
            {
              lable: "🎺 DJ Bar SOUL.SOUL",
              url: "https://maps.app.goo.gl/m5bmmjCNcrLckr4t5",
            },
          ],
        },
      ],
      icons: ["🛬", "🦪", "🎷"],
      reminder: null,
    },
    {
      day: 2,
      date: "2026年1月9日(五)",
      title: "冰瀑奇觀 ❄️",
      weatherLocationId: ["oirase"],
      accommodation: "奧入瀨溪流飯店",
      accommodationGoogleMap: "https://maps.app.goo.gl/zaWScprCAxtqxpdJ9",
      highlight: "十和田神社、奧入瀨溪流冰瀑燈光秀",
      activities: [
        {
          time: "10:00",
          activity: "前往租車處",
          note: "開啟自駕旅程",
        },
        {
          time: "11:00",
          activity: "開車前往十和田神社",
          note: "湖畔靜謐神社，停留1小時",
        },
        {
          time: "15:00",
          activity: "飯店 Check-in",
          note: "星野集團奧入瀨溪流飯店",
        },
        {
          time: "16:35",
          activity: "飯店休息、泡湯",
          note: "溪流旁溫泉放鬆身心",
        },
        {
          time: "18:00",
          activity: "晚餐：十和田市烤肉",
          note: "美味日式燒肉",
          tags: [
            {
              lable: "🥩 燒肉 牛楽館",
              url: "https://www.notion.so/298f967c041e81c1a6bccf3839dce7f9",
            },
          ],
        },
        {
          time: "21:15",
          activity: "參加冰瀑燈光秀",
          warning: "已預約！現場支付現金 3000 ¥",
        },
      ],
      icons: ["🚗", "♨️", "❄️", "✨"],
      reminder: "現場支付現金3000¥！",
    },
    {
      day: 3,
      date: "2026年1月10日(六)",
      title: "樹冰與八戶 ☃️",
      weatherLocationId: ["hakkoda", "hachinohe"],
      accommodation: "八方餃子",
      accommodationGoogleMap: "https://maps.app.goo.gl/8sfigkxq8sduU3UU7",
      highlight: "八甲田山樹冰、探索八戶",
      activities: [
        {
          time: "10:00",
          activity: "開車前往八甲田",
          warning: "需排隊購票，纜車15:40截止",
          tags: [
            {
              lable: "八甲田",
              url: "https://www.notion.so/298f967c041e8099a5dedc86d1ef5990",
            },
          ],
        },
        {
          time: "15:00",
          activity: "還車",
          note: "結束上午自駕",
        },
        {
          time: "15:59",
          activity: "搭乘JR前往八戶",
          note: "15:59 青森往新青森，16:30 新青森往八戶",
        },
        {
          time: "17:30",
          activity: "抵達八戶、租車",
          note: "車站出口租車，先check-in",
        },
        {
          time: "18:00",
          activity: "晚餐：八方餃子、串乃助(串燒)",
          note: "入住的餃子館本身也是知名美食！",
          tags: [
            {
              lable: "🍻 串乃助",
              url: "https://www.notion.so/2b4f967c041e8015af5ae55ca116cbeb",
            },
          ],
        },
        {
          time: "19:00",
          activity: "體驗大浴場",
          note: "在地生活體驗",
          tags: [
            {
              lable: "♨️ 長寿の湯",
              url: "https://www.notion.so/2b0f967c041e8158a49fcc728313b638",
            },
            {
              lable: "♨️ 温泉みちのく",
              url: "https://www.notion.so/2b0f967c041e81569065e1cbe88620fc",
            },
            {
              lable: "♨️ Midori Onsen",
              url: "https://www.notion.so/Midori-Onsen-2b0f967c041e80098fddd15be72e0151",
            }
          ],
        },
        {
          time: "20:00",
          activity: "晚間娛樂：Live Bar",
          note: "現場音樂伴隨",
          tags: [
            {
              lable: "🎵 レコード酒場EG",
              url: "https://www.notion.so/EG-2b0f967c041e80ffb3d3eb6b05f84fbe",
            },
            {
              lable: "🎵 パワーステーションA7 ",
              url: "https://www.notion.so/Powerstation-A7-2b0f967c041e8021b4b7c7e1c235de93?pvs=21",
            },
          ],
        },
      ],
      icons: ["☃️", "🚂", "🥟", "♨️", "🎵"],
      reminder: "纜車15:40截止！需排隊購票",
    },
    {
      day: 4,
      date: "2026年1月11日(日)",
      title: "八食中心 🍣 ，盛岡之旅",
      weatherLocationId: ["hachinohe", "morioka"],
      accommodation: "大和魯內酒店",
      accommodationGoogleMap: "https://maps.app.goo.gl/9f3eKhFumJ4z6Dwe7",
      highlight: "八食中心、盛岡蕎麥麵 🍜",
      activities: [
        {
          time: "09:00",
          activity: "八食中心",
          note: "自駕前往八食中心，品嚐新鮮生魚片🍣",
        },
        {
          time: "12:00",
          activity: "還車",
          note: "結束上午自駕",
          warning: "搭乘 12:16 往盛岡",
        },
        {
          time: "12:45",
          activity: "抵達盛岡，飯店check-in",
          note: "抵達盛岡市區，稍作休息",
        },
        {
          time: "14:00",
          activity: "城跡公園",
          note: "眺望盛岡市景",
        },
        {
          time: "16:00",
          activity: "小岩井農場",
          note: "農場內午晚餐",
          warning: "冬季接駁車需注意！15:20、16:50",
          tags: [
            {
              lable: "🌾 小岩井農場",
              url: "https://www.notion.so/298f967c041e80739372dccdf62a6e0a?source=copy_link",
            },
          ],
        },
        {
          time: "14:00",
          activity: "農場探索",
          note: "雪地中的牧場景緻",
        },
        {
          time: "20:00",
          activity: "小岩井農場回程",
          warning: "冬季接駁車需注意！20:00",
        },
        {
          time: "20:30",
          activity: "晚餐：盛岡蕎麥麵",
          note: "盛岡在地美食代表，吃飽去超商買生魚片🍣",
        },
        {
          time: "21:00",
          activity: "晚間娛樂：Live Bar",
          note: "現場音樂伴隨",
          tags: [
            {
              lable: "🎵 MUSIC + BAR crates",
              url: "https://www.notion.so/MUSIC-BAR-crates-2b0f967c041e80cb8201d46aad9f0e66",
            },
          ],
        },
      ],
      icons: ["🍣", "🍜", "🐮", "❄️", "🎵"],
      reminder: "小岩井農場涮涮鍋需預約",
    },
    {
      day: 5,
      date: "2026年1月12日(一)",
      title: "猊鼻溪遊船 🚤",
      weatherLocationId: ["geibikei", "ichinoseki"],
      accommodation: "仙台遠景酒店",
      accommodationGoogleMap: "https://maps.app.goo.gl/T16Rhv8ecs5D6xZ18",
      highlight: "猊鼻溪、一關文化、仙台夜晚",
      activities: [
        {
          time: "08:30",
          activity: "起床！",
          note: "早餐時間",
        },
        {
          time: "09:30",
          activity: "搭乘JR 往一關",
          warning: "09:33 JR",
        },
        {
          time: "10:54",
          activity: "抵達一關",
          note: "車站內寄放行李",
        },
        {
          time: "11:00",
          activity: "午餐時間",
          warning: "稍作休息，找食物吃",
        },
        {
          time: "13:00",
          activity: "搭乘大船渡線",
          warning: "13:18 大船渡線",
        },
        {
          time: "14:00",
          activity: "抵達猊鼻溪",
          warning: "14:00 暖桌遊船",
        },
        {
          time: "17:00",
          activity: "搭乘大船渡線回一關",
          warning: "17:08 大船渡線，17:37 抵達一關",
        },
        {
          time: "18:00",
          activity: "搭乘JR往仙台",
          warning: "18:12 仙台",
        },
        {
          time: "18:45",
          activity: "抵達仙台",
          note: "抽善治郎號碼牌，飯店 check in",
        },
        {
          time: "19:00",
          activity: "晚餐：善治郎牛舌",
          note: "晚餐後逛街！",
        },
      ],
      icons: ["🚤", "⛰️", "❄️", "🥩"],
      reminder: "遊船營運時間09:30-16:30",
    },
    {
      day: 6,
      date: "2026年1月13日(二)",
      title: "狐狸村 & 藏王 🦊",
      weatherLocationId: ["sendai", "zao"],
      accommodation: "仙台遠景酒店",
      accommodationGoogleMap: "https://maps.app.goo.gl/T16Rhv8ecs5D6xZ18",
      highlight: "宮城狐狸村、藏王溫泉",
      activities: [
        {
          time: "08:30",
          activity: "起床！",
          note: "早餐時間",
        },
        {
          time: "09:30",
          activity: "租車前往狐狸村",
          note: "租車去狐狸村~車程約 50 min",
        },
        {
          time: "10:30",
          activity: "藏王溫泉泡湯 ♨️",
          note: "八甲田沒看到樹冰就去藏王看",
          warning: "最後入場時間15:30",
          tags: [
            {
              lable: "♨️ 泡湯 三治郎",
              url: "https://www.notion.so/2a1f967c041e808198a6ed1dac9bead4?pvs=25",
            },
          ],
        },
        {
          time: "12:30",
          activity: "藏王溫泉午餐",
          tags: [
            {
              lable: "🍜 Hanamizuki 定食",
              url: "https://www.notion.so/Hanamizuki-2b6f967c041e8062ba47d584c0097842",
            },
          ],
        },
        {
          time: "13:30",
          activity: "出發去狐狸村",
          note: "路上去吃冰淇淋",
        },
        {
          time: "14:00",
          activity: "狐狸村漫步 🦊",
          warning: "狐狸村最後入場時間15:30",
        },
        {
          time: "15:30",
          activity: "出發回仙台",
          note: "車程 1 hr",
        },
        {
          time: "16:30",
          activity: "抵達仙台",
          note: "還車，稍作休息",
        },
        {
          time: "18:00",
          activity: "Shopping 🛍️",
          note: "逛街，晚餐：夜ノ焼魚",
          tags: [
            {
              lable: "🍜 夜ノ焼魚",
              url: "https://www.notion.so/Cho-chomusubi-2adf967c041e80e086ebf4a2d9f30539",
            },
          ],
        },
      ],
      icons: ["🦊", "♨️", "❄️", "🛍️", "🍻"],
      reminder: "狐狸村最後入場15:30！",
    },
    {
      day: 7,
      date: "2026年1月14日(三)",
      title: "銀山溫泉古鎮 🏮",
      weatherLocationId: ["zao", "yamagata"],
      accommodation: "仙台遠景酒店",
      accommodationGoogleMap: "https://maps.app.goo.gl/T16Rhv8ecs5D6xZ18",
      highlight: "山寺、銀山溫泉古鎮",
      activities: [
        {
          time: "08:00",
          activity: "起床！",
          note: "早餐時間",
        },
        {
          time: "09:00",
          activity: "租車前往山形縣",
          note: "車程約 1.5 hr",
        },
        {
          time: "10:00",
          activity: "山形市漫步",
          note: "午餐時間-拉麵",
          tags: [
            {
              lable: "🍜 拉麵",
              url: "https://www.notion.so/2b4f967c041e805fa546d6ec22c21ad1",
            },
          ],
        },
        {
          time: "11:00",
          activity: "抵達銀山溫泉古鎮",
          note: "時光凝結的溫泉街",
          warning: "需搭乘接駁公車上去",
        },
        {
          time: "12:00",
          activity: "散步溫泉街、品嚐布丁",
          warning: "酒茶房クリエ 只收現金",
          tags: [
            {
              lable: "🍰 酒茶房",
              url: "https://www.notion.so/2b4f967c041e8026aef0cc573215dbbf",
            },
          ],
        },
        {
          time: "14:00",
          activity: "(彈性) 出發去山寺 (60 min)",
          note: "山寺營運時間08:00-16:00，帶鞋爪！",
        },
        {
          time: "15:00",
          activity: "(彈性) 參觀山寺",
          note: "享受山寺的美景",
        },
        {
          time: "16:00",
          activity: "前往山形市區",
          note: "晚餐-米澤牛壽喜燒",
          tags: [
            {
              lable: "🥩 米澤牛寿喜燒",
              url: "https://www.notion.so/2a6f967c041e80a195dacc937ca305d8",
            },
          ],
        },
        {
          time: "18:00",
          activity: "回仙台",
          note: "車程約 1 hr",
        },
        {
          time: "19:00",
          activity: "抵達仙台",
          note: "還車，逛街🛍️",
        },
      ],
      icons: ["⛩️", "🏮", "♨️", "❄️", "🥩", "🛍️"],
      reminder: "山寺路面結冰，務必帶鞋爪！布丁只收現金",
    },
    {
      day: 8,
      date: "2026年1月15日(四)",
      title: "返回台灣 ✈️",
      weatherLocationId: ["sendai"],
      accommodation: "Sweet Home",
      accommodationGoogleMap: undefined,
      highlight: "返程",
      activities: [
        {
          time: "09:00",
          activity: "飯店 Check-out",
          note: "記得將行李借放飯店",
        },
        {
          time: "10:00",
          activity: "逛街🛍️",
          note: "記得買點紀念品",
        },
        {
          time: "15:00",
          activity: "最後的牛舌!",
          note: "吃飽才能搭飛機",
        },
        {
          time: "17:00",
          activity: "搭乘 JR 前往仙台機場",
          note: "車程約 25 min",
        },
        {
          time: "17:30",
          activity: "抵達機場",
          note: "第一航廈 班機：台灣虎航 IT255",
        },
        {
          time: "19:40",
          activity: "搭乘飛機",
          note: "起飛回國",
        },
        {
          time: "23:00",
          activity: "抵達台北",
          note: "東北冬季之旅圓滿結束！",
        },
      ],
      icons: ["✈️", "🏮"],
      reminder: "記得整理行李！感謝東北的美好回憶",
    },
  ],
};
