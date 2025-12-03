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
      accommodation: "Art Hotel",
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
        },
        {
          time: "19:00",
          activity: "晚間娛樂：Jazz bar",
          note: "享受爵士樂的愜意氛圍",
        },
      ],
      icons: ["🛬", "🦪", "🎷"],
      reminder: null,
    },
    {
      day: 2,
      date: "2026年1月9日(五)",
      title: "冰瀑奇觀 ❄️",
      accommodation: "奧入瀨溪流飯店",
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
      accommodation: "八方餃子",
      highlight: "八甲田山樹冰、探索八戶",
      activities: [
        {
          time: "10:00",
          activity: "開車前往八甲田",
          warning: "需排隊購票，纜車15:40截止",
        },
        {
          time: "15:00",
          activity: "還車",
          note: "結束上午自駕",
        },
        {
          time: "16:24",
          activity: "搭乘JR前往八戶",
          note: "鐵路銜接",
        },
        {
          time: "17:55",
          activity: "抵達八戶、租車",
          note: "車站出口租車",
        },
        {
          time: "18:00",
          activity: "晚餐：八方餃子、串乃助",
          note: "入住的餃子館本身也是知名美食！",
        },
        {
          time: "19:00",
          activity: "體驗大浴場",
          note: "在地生活體驗",
        },
        {
          time: "20:00",
          activity: "晚間娛樂：Live Bar",
          note: "現場音樂伴隨",
        },
      ],
      icons: ["☃️", "🚂", "🥟", "🎵"],
      reminder: "纜車15:40截止！需排隊購票",
    },
    {
      day: 4,
      date: "2026年1月11日(日)",
      title: "盛岡美食 🍜",
      accommodation: "盛岡飯店",
      highlight: "盛岡市區、小岩井農場",
      activities: [
        {
          time: "09:00",
          activity: "前往小岩井農場",
          note: "自駕前往",
        },
        {
          time: "12:00",
          activity: "午餐：鐮倉 GyuGyu 涮涮鍋",
          warning: "農場內餐廳，冬季需預約",
        },
        {
          time: "14:00",
          activity: "農場探索",
          note: "雪地中的牧場景緻",
        },
        {
          time: "17:00",
          activity: "飯店 Check-in",
          note: "盛岡市區",
        },
        {
          time: "18:30",
          activity: "晚餐：盛岡冷麵",
          note: "盛岡在地美食代表",
        },
      ],
      icons: ["🍜", "🏕️", "❄️"],
      reminder: "小岩井農場涮涮鍋需預約",
    },
    {
      day: 5,
      date: "2026年1月12日(月)",
      title: "猊鼻溪遊船 🚤",
      accommodation: "一關飯店",
      highlight: "猊鼻溪、一關文化",
      activities: [
        {
          time: "09:30",
          activity: "搭乘遊船遊覽猊鼻溪",
          note: "營運時間09:30-16:30",
        },
        {
          time: "12:00",
          activity: "午餐：溪邊料理",
          note: "品嚐在地美食",
        },
        {
          time: "14:00",
          activity: "繼續遊船探索",
          note: "冬季雪景",
        },
        {
          time: "17:00",
          activity: "飯店 Check-in",
          note: "一關市區",
        },
        {
          time: "18:30",
          activity: "晚餐：在地鄉土料理",
          note: "品嚐岩手在地風味",
        },
      ],
      icons: ["🚤", "⛰️", "❄️"],
      reminder: "遊船營運時間09:30-16:30",
    },
    {
      day: 6,
      date: "2026年1月13日(二)",
      title: "狐狸村 & 藏王 🦊",
      accommodation: "藏王溫泉飯店",
      highlight: "宮城狐狸村、藏王溫泉",
      activities: [
        {
          time: "10:00",
          activity: "前往狐狸村",
          note: "搭乘JR前往宮城",
        },
        {
          time: "11:00",
          activity: "狐狸村親近體驗",
          warning: "最後入場時間15:30",
        },
        {
          time: "14:00",
          activity: "返回、前往藏王溫泉",
          note: "開始溫泉之旅",
        },
        {
          time: "16:00",
          activity: "飯店 Check-in",
          note: "藏王溫泉飯店",
        },
        {
          time: "17:00",
          activity: "泡溫泉",
          note: "享受溫泉放鬆",
        },
        {
          time: "18:30",
          activity: "晚餐：飯店會席料理",
          note: "山形在地美食",
        },
      ],
      icons: ["🦊", "♨️", "❄️"],
      reminder: "狐狸村最後入場15:30！三治郎溫泉最晚22:00",
    },
    {
      day: 7,
      date: "2026年1月14日(三)",
      title: "銀山溫泉古鎮 🏮",
      accommodation: "銀山溫泉飯店",
      highlight: "山寺、銀山溫泉古鎮",
      activities: [
        {
          time: "08:00",
          activity: "前往山寺",
          warning: "營運時間08:00-16:00，帶鞋爪！",
        },
        {
          time: "09:00",
          activity: "登山寺",
          note: "結冰路面需小心",
        },
        {
          time: "11:00",
          activity: "下山、前往銀山溫泉",
          note: "搭乘接駁巴士上山",
        },
        {
          time: "13:00",
          activity: "抵達銀山溫泉古鎮",
          note: "時光凝結的溫泉街",
        },
        {
          time: "14:00",
          activity: "散步溫泉街、品嚐布丁",
          warning: "酒茶房クリエ 只收現金",
        },
        {
          time: "16:00",
          activity: "飯店 Check-in",
          note: "銀山溫泉飯店",
        },
        {
          time: "17:30",
          activity: "泡溫泉",
          note: "享受古鎮溫泉",
        },
        {
          time: "18:30",
          activity: "晚餐：飯店料理",
          note: "山形特色美食",
        },
      ],
      icons: ["⛩️", "🏮", "♨️", "❄️"],
      reminder: "山寺路面結冰，務必帶鞋爪！布丁只收現金",
    },
    {
      day: 8,
      date: "2026年1月15日(四)",
      title: "返回台灣 ✈️",
      accommodation: "N/A",
      highlight: "返程",
      activities: [
        {
          time: "08:00",
          activity: "飯店 Check-out",
          note: "離開銀山溫泉",
        },
        {
          time: "09:00",
          activity: "前往仙台機場",
          note: "搭乘接駁巴士下山，轉乘JR",
        },
        {
          time: "15:00",
          activity: "抵達仙台機場",
          note: "辦理登機手續",
        },
        {
          time: "19:40",
          activity: "起飛返台",
          note: "台灣虎航 IT255",
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
