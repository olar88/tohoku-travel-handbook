import React, { useState, useEffect } from 'react';
import { Plane, MapPin, Calendar, Clock, Sun, CloudSnow, CloudRain, Utensils, Camera, Music, CheckSquare, Square, Info, Heart, Car, Train, Navigation, ExternalLink, ChevronLeft, ChevronRight, Home, BookOpen, Menu } from 'lucide-react';

// Google Fonts import & CSS
const FontImport = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap');
      
      body {
        font-family: 'Zen Maru Gothic', sans-serif, "Microsoft JhengHei", "Heiti TC";
        background-color: #fcf9f2; 
        background-image: radial-gradient(#e5e0d8 1px, transparent 1px);
        background-size: 20px 20px;
        color: #4a4a4a;
        overflow-x: hidden;
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      ::-webkit-scrollbar-thumb {
        background: #d4cbb8; 
        border-radius: 4px;
      }

      /* Container Styles */
      .hand-drawn-box {
        background: #fff;
        border: 2px solid #4a4a4a;
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
        box-shadow: 4px 4px 0px 0px rgba(74, 74, 74, 0.15);
        transition: all 0.2s ease;
      }
      
      /* Washi Tape Effect */
      .washi-tape {
        background-color: rgba(255, 255, 255, 0.8);
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(200, 200, 200, 0.2) 10px,
          rgba(200, 200, 200, 0.2) 20px
        );
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transform: rotate(-1deg);
      }

      /* Marker Highlight */
      .marker-highlight {
        background: linear-gradient(120deg, rgba(255, 215, 0, 0) 0%, rgba(255, 215, 0, 0.3) 100%);
        background-repeat: no-repeat;
        background-size: 100% 40%;
        background-position: 0 88%;
      }

      /* Animations */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in {
        animation: fadeIn 0.4s ease-out forwards;
      }

      /* Button Hover Effects */
      .nav-btn {
        transition: transform 0.1s;
      }
      .nav-btn:active {
        transform: scale(0.95);
      }
    `}
  </style>
);

// --- Data (Unchanged) ---
const flights = {
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
};

const daysData = [
    {
      day: 1,
      date: "2026年1月8日(四)",
      title: "抵達青森 🛬 🍎 🍎 🍎",
      weatherLocationId: ["aomori"],
      accommodation: "Art Hotel 🍎 ",
      accommodationGoogleMap: "https://maps.app.goo.gl/FydjxYB5Ji63ygZq9",
      highlight: "抵達日本、青森市區初探",
      activities: [
        { time: "14:30", activity: "抵達青森機場 (AOJ)", note: "準備展開東北雪國之旅！" },
        { time: "15:00", activity: "搭乘 巴士 🚌 前往青森", note: "機場巴士 → 青森站" },
        { time: "16:00", activity: "飯店 Check-in", note: "Art Hotel 稍作休息" },
        { time: "17:00", activity: "青森港逛逛", note: "A - Factory 青森港散步", tags: [{ lable: "🍎 A - Factory", url: "https://www.notion.so/A-FACTORY-2ccf967c041e80b3b312c73d7a578bef" }] },
        { time: "18:30", activity: "晚餐：Osanai 烤扇貝", note: "青森當地新鮮海味", tags: [{ lable: "🦪 Osanai 烤扇貝", url: "https://notion.so/2adf967c041e80a5b78ef63e6044300f?pvs=25" }] },
        { time: "20:00", activity: "晚間娛樂：Jazz bar", note: "享受爵士樂的愜意氛圍", tags: [{ lable: "🎺 Live cafe bar Atom", url: "https://maps.app.goo.gl/bTg5cRM5woDsGwu99" }, { lable: "🎺 DJ Bar SOUL.SOUL", url: "https://maps.app.goo.gl/m5bmmjCNcrLckr4t5" }, { lable: "🍓 Universe Supermarket", url: "https://maps.app.goo.gl/iLi3vjYxjZ55mxEi6" }] },
      ],
      icons: ["🛬", "🍎", "🍓", "🦪", "🎷"],
      reminder: null,
    },
    {
      day: 2,
      date: "2026年1月9日(五)",
      title: "冰瀑奇觀 ❄️",
      weatherLocationId: ["oirase"],
      accommodation: "奧入瀨溪流飯店 ❄️",
      accommodationGoogleMap: "https://maps.app.goo.gl/zaWScprCAxtqxpdJ9",
      highlight: "十和田神社、奧入瀨溪流冰瀑燈光秀",
      activities: [
        { time: "10:00", activity: "前往租車處", note: "開啟自駕旅程" },
        { time: "11:00", activity: "開車前往十和田神社", note: "湖畔靜謐神社，停留1小時" },
        { time: "15:00", activity: "飯店 Check-in", note: "星野集團奧入瀨溪流飯店" },
        { time: "16:35", activity: "飯店休息、泡湯", note: "溪流旁溫泉放鬆身心" },
        { time: "18:00", activity: "晚餐：十和田市烤肉", note: "美味日式燒肉", tags: [{ lable: "🥩 燒肉 牛楽館", url: "https://www.notion.so/298f967c041e81c1a6bccf3839dce7f9" }] },
        { time: "21:15", activity: "參加冰瀑燈光秀", warning: "已預約！現場支付現金 3000 ¥" },
      ],
      icons: ["🚗", "♨️", "❄️", "✨"],
      reminder: "現場支付現金3000¥！",
    },
    {
      day: 3,
      date: "2026年1月10日(六)",
      title: "樹冰與八戶 ☃️",
      weatherLocationId: ["hakkoda", "hachinohe"],
      accommodation: "八方餃子 🥟",
      accommodationGoogleMap: "https://maps.app.goo.gl/8sfigkxq8sduU3UU7",
      highlight: "八甲田山樹冰、探索八戶",
      activities: [
        { time: "10:00", activity: "開車前往八甲田", warning: "需排隊購票，纜車15:40截止", tags: [{ lable: "八甲田", url: "https://www.notion.so/298f967c041e8099a5dedc86d1ef5990" }] },
        { time: "15:00", activity: "還車", note: "結束上午自駕" },
        { time: "15:59", activity: "搭乘JR前往八戶", note: "15:59 青森往新青森，16:30 新青森往八戶" },
        { time: "17:30", activity: "抵達八戶、租車", note: "車站出口租車，先check-in" },
        { time: "18:00", activity: "晚餐：八方餃子、串乃助(串燒)", note: "入住的餃子館本身也是知名美食！", tags: [{ lable: "🍻 串乃助", url: "https://www.notion.so/2b4f967c041e8015af5ae55ca116cbeb" }] },
        { time: "19:00", activity: "體驗大浴場", note: "在地生活體驗", tags: [{ lable: "♨️ 長寿の湯", url: "https://www.notion.so/2b0f967c041e8158a49fcc728313b638" }, { lable: "♨️ 温泉みちのく", url: "https://www.notion.so/2b0f967c041e81569065e1cbe88620fc" }, { lable: "♨️ Midori Onsen", url: "https://www.notion.so/Midori-Onsen-2b0f967c041e80098fddd15be72e0151" }] },
        { time: "20:00", activity: "晚間娛樂：Live Bar", note: "現場音樂伴隨", tags: [{ lable: "🎵 レコード酒場EG", url: "https://www.notion.so/EG-2b0f967c041e80ffb3d3eb6b05f84fbe" }, { lable: "🎵 パワーステーションA7 ", url: "https://www.notion.so/Powerstation-A7-2b0f967c041e8021b4b7c7e1c235de93?pvs=21" }] },
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
        { time: "09:00", activity: "八食中心", note: "自駕前往八食中心，品嚐新鮮生魚片🍣" },
        { time: "12:00", activity: "還車", note: "結束上午自駕", warning: "搭乘 12:16 往盛岡" },
        { time: "12:45", activity: "抵達盛岡，飯店check-in", note: "抵達盛岡市區，稍作休息" },
        { time: "14:00", activity: "城跡公園", note: "眺望盛岡市景" },
        { time: "16:00", activity: "小岩井農場", note: "農場內午晚餐", warning: "冬季接駁車需注意！15:20、16:50", tags: [{ lable: "🌾 小岩井農場", url: "https://www.notion.so/298f967c041e80739372dccdf62a6e0a?source=copy_link" }] },
        { time: "14:00", activity: "農場探索", note: "雪地中的牧場景緻" },
        { time: "20:00", activity: "小岩井農場回程", warning: "冬季接駁車需注意！20:00" },
        { time: "20:30", activity: "晚餐：盛岡蕎麥麵", note: "盛岡在地美食代表，吃飽去超商買生魚片🍣" },
        { time: "21:00", activity: "晚間娛樂：Live Bar", note: "現場音樂伴隨", tags: [{ lable: "🎵 MUSIC + BAR crates", url: "https://www.notion.so/MUSIC-BAR-crates-2b0f967c041e80cb8201d46aad9f0e66" }] },
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
        { time: "08:30", activity: "起床！", note: "早餐時間" },
        { time: "09:30", activity: "搭乘JR 往一關", warning: "09:33 JR" },
        { time: "10:54", activity: "抵達一關", note: "車站內寄放行李" },
        { time: "11:00", activity: "午餐時間", warning: "稍作休息，找食物吃" },
        { time: "13:00", activity: "搭乘大船渡線", warning: "13:18 大船渡線" },
        { time: "14:00", activity: "抵達猊鼻溪", warning: "14:00 暖桌遊船" },
        { time: "17:00", activity: "搭乘大船渡線回一關", warning: "17:08 大船渡線，17:37 抵達一關" },
        { time: "18:00", activity: "搭乘JR往仙台", warning: "18:12 仙台" },
        { time: "18:45", activity: "抵達仙台", note: "抽善治郎號碼牌，飯店 check in" },
        { time: "19:00", activity: "晚餐：善治郎牛舌", note: "晚餐後逛街！" },
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
        { time: "08:30", activity: "起床！", note: "早餐時間" },
        { time: "09:30", activity: "租車前往狐狸村", note: "租車去狐狸村~車程約 50 min" },
        { time: "10:30", activity: "藏王溫泉泡湯 ♨️", note: "八甲田沒看到樹冰就去藏王看", warning: "最後入場時間15:30", tags: [{ lable: "♨️ 泡湯 三治郎", url: "https://www.notion.so/2a1f967c041e808198a6ed1dac9bead4?pvs=25" }] },
        { time: "12:30", activity: "藏王溫泉午餐", tags: [{ lable: "🍜 Hanamizuki 定食", url: "https://www.notion.so/Hanamizuki-2b6f967c041e8062ba47d584c0097842" }] },
        { time: "13:30", activity: "出發去狐狸村", note: "路上去吃冰淇淋" },
        { time: "14:00", activity: "狐狸村漫步 🦊", warning: "狐狸村最後入場時間15:30" },
        { time: "15:30", activity: "出發回仙台", note: "車程 1 hr" },
        { time: "16:30", activity: "抵達仙台", note: "還車，稍作休息" },
        { time: "17:00", activity: "點心：關東煮🍢", note: "吃關東煮暖暖胃", tags: [{ lable: "🍢 Oden Sankichi", url: "https://www.notion.so/Oden-Sankichi-2cdf967c041e805186e0cf36cb0bde0d" }] },
        { time: "18:00", activity: "Shopping 🛍️", note: "逛街！晚餐：夜ノ焼魚", tags: [{ lable: "🍤 夜ノ焼魚", url: "https://www.notion.so/Cho-chomusubi-2adf967c041e80e086ebf4a2d9f30539" }] },
      ],
      icons: ["🦊", "♨️", "❄️", "🛍️", "🍤"],
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
        { time: "08:00", activity: "起床！", note: "早餐時間" },
        { time: "09:00", activity: "租車前往山形縣", note: "車程約 1.5 hr" },
        { time: "10:00", activity: "山形市漫步", note: "午餐時間-拉麵", tags: [{ lable: "🍜 拉麵", url: "https://www.notion.so/2b4f967c041e805fa546d6ec22c21ad1" }] },
        { time: "11:00", activity: "抵達銀山溫泉古鎮", note: "時光凝結的溫泉街", warning: "需搭乘接駁公車上去" },
        { time: "12:00", activity: "散步溫泉街、品嚐布丁", warning: "酒茶房クリエ 只收現金", tags: [{ lable: "🍰 酒茶房", url: "https://www.notion.so/2b4f967c041e8026aef0cc573215dbbf" }] },
        { time: "14:00", activity: "(彈性) 出發去山寺 (60 min)", note: "山寺營運時間08:00-16:00，帶鞋爪！" },
        { time: "15:00", activity: "(彈性) 參觀山寺", note: "享受山寺的美景" },
        { time: "16:00", activity: "前往山形市區", note: "晚餐-米澤牛壽喜燒", tags: [{ lable: "🥩 米澤牛寿喜燒", url: "https://www.notion.so/2a6f967c041e80a195dacc937ca305d8" }] },
        { time: "18:00", activity: "回仙台", note: "車程約 1 hr" },
        { time: "19:00", activity: "抵達仙台", note: "還車，逛街🛍️", },
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
        { time: "09:00", activity: "飯店 Check-out", note: "記得將行李借放飯店" },
        { time: "10:00", activity: "逛街🛍️", note: "記得買點紀念品" },
        { time: "15:00", activity: "最後的牛舌!", note: "吃飽才能搭飛機" },
        { time: "17:00", activity: "搭乘 JR 前往仙台機場", note: "車程約 25 min" },
        { time: "17:30", activity: "抵達機場", note: "第一航廈 班機：台灣虎航 IT255" },
        { time: "19:40", activity: "搭乘飛機", note: "起飛回國" },
        { time: "23:00", activity: "抵達台北", note: "東北冬季之旅圓滿結束！" },
      ],
      icons: ["✈️", "🏮"],
      reminder: "記得整理行李！感謝東北的美好回憶",
    },
];

// --- Sub Components ---

const FlightCard = ({ flight, type }) => {
  const isOutbound = type === 'outbound';
  const bgColor = isOutbound ? 'bg-sky-50' : 'bg-orange-50';
  const iconColor = isOutbound ? 'text-sky-600' : 'text-orange-600';
  const borderColor = isOutbound ? 'border-sky-200' : 'border-orange-200';

  return (
    <div className={`p-4 rounded-xl border-2 ${borderColor} ${bgColor} relative overflow-hidden mb-4`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-sm font-bold px-2 py-1 rounded-md bg-white ${iconColor} border border-current`}>
          {isOutbound ? '去程' : '回程'}
        </span>
        <span className="text-sm font-bold text-gray-500">{flight.airline} {flight.flightNumber}</span>
      </div>
      
      <div className="flex justify-between items-center text-center">
        <div className="flex-1">
          <div className="text-xl font-black text-gray-700">{flight.departureTime}</div>
          <div className="text-xs text-gray-500 mt-1">{flight.departureAirport}</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-2">
          <div className="w-full h-0.5 bg-gray-300 relative">
             <Plane className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${iconColor} fill-current`} />
          </div>
          <div className="text-xs text-gray-400 mt-1">{flight.departure}</div>
        </div>
        <div className="flex-1">
          <div className="text-xl font-black text-gray-700">{flight.arrivalTime}</div>
          <div className="text-xs text-gray-500 mt-1">{flight.arrivalAirport}</div>
        </div>
      </div>
    </div>
  );
};

const NightlyChecklist = ({ currentDay, nextDayData }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(`checklist-day-${currentDay}`);
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, [currentDay]);

  const handleCheck = (id) => {
    const newItems = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newItems);
    localStorage.setItem(`checklist-day-${currentDay}`, JSON.stringify(newItems));
  };

  if (!nextDayData) {
    return (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 text-center">
            <h4 className="font-bold text-gray-500 mb-2">旅途結束</h4>
            <p className="text-sm text-gray-400">帶著美好的回憶回家吧！</p>
        </div>
    )
  }

  const checklistItems = [
    { id: 'weather', text: `查看明天天氣 (${nextDayData.weatherLocationId.join(', ')})` },
    { id: 'highlight', text: `確認景點開放狀況：${nextDayData.highlight}` },
    { id: 'transport', text: `確認明天交通/租車預約單` },
    ...(nextDayData.reminder ? [{ id: 'reminder', text: `⚠️ 重要：${nextDayData.reminder}` }] : []),
    { id: 'charge', text: '手機、相機充電🔋' },
    { id: 'alarm', text: '設定明天鬧鐘 ⏰' }
  ];

  return (
    <div className="mt-6 pt-4 border-t-2 border-dashed border-stone-300 relative">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fcf9f2] px-3 text-sm font-bold text-stone-500 flex items-center gap-1">
         <CheckSquare className="w-4 h-4" /> 晚間確認 (for Day {nextDayData.day})
      </div>
      
      <div className="space-y-2 mt-2">
        {checklistItems.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-3 p-2 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors"
            onClick={() => handleCheck(item.id)}
          >
            <div className={`transition-all duration-200 ${checkedItems[item.id] ? 'text-green-500 scale-110' : 'text-stone-300'}`}>
               {checkedItems[item.id] ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
            </div>
            <span className={`text-sm ${checkedItems[item.id] ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-700'}`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActivityItem = ({ act }) => {
  return (
    <div className="flex gap-3 mb-4 last:mb-0 relative group">
      <div className="w-14 flex-shrink-0 flex flex-col items-center">
        <span className="text-sm font-bold text-stone-600 bg-stone-200 px-1.5 rounded">{act.time}</span>
        <div className="h-full w-0.5 bg-stone-200 mt-2 group-last:hidden"></div>
      </div>
      
      <div className="flex-1 pb-2">
        <h4 className="font-bold text-stone-800 text-base">{act.activity}</h4>
        {act.note && <p className="text-sm text-stone-600 mt-1">{act.note}</p>}
        {act.warning && (
          <div className="mt-1 flex items-start gap-1 text-xs text-red-500 bg-red-50 p-1.5 rounded border border-red-100">
             <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
             {act.warning}
          </div>
        )}
        
        {act.tags && act.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {act.tags.map((tag, idx) => (
              <a 
                key={idx} 
                href={tag.url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs bg-white border border-stone-200 shadow-sm px-2 py-1 rounded-full text-blue-600 hover:text-blue-800 hover:border-blue-300 transition-colors"
              >
                {tag.lable} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DayCard = ({ dayData, nextDayData }) => {
  return (
    <div className="hand-drawn-box p-5 md:p-8 relative bg-white max-w-2xl mx-auto fade-in">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 washi-tape z-10"></div>
        
        <div className="flex justify-between items-start mb-6 border-b-2 border-stone-100 pb-3">
           <div>
             <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Day {dayData.day}</div>
             <h3 className="text-xl md:text-2xl font-bold text-stone-800 flex items-center gap-2">
                <span className="marker-highlight">{dayData.date.split('(')[0]}</span>
                <span className="text-sm font-normal text-stone-500">({dayData.date.split('(')[1]}</span>
             </h3>
             <div className="text-stone-600 font-bold mt-1 text-lg">{dayData.title}</div>
           </div>
           <div className="flex flex-col items-end gap-1">
             <div className="flex gap-1 text-xl">
               {dayData.icons.map((icon, i) => <span key={i}>{icon}</span>)}
             </div>
           </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-3 mb-6 border border-amber-100">
            <div className="flex items-start gap-2 mb-2">
               <Heart className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
               <span className="text-sm text-stone-700 font-medium">{dayData.highlight}</span>
            </div>
            <div className="flex items-start gap-2">
               <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
               <div className="flex flex-col">
                 <span className="text-sm text-stone-700">宿：{dayData.accommodation}</span>
                 {dayData.accommodationGoogleMap && (
                   <a href={dayData.accommodationGoogleMap} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1">
                     查看地圖 <Navigation className="w-3 h-3" />
                   </a>
                 )}
               </div>
            </div>
        </div>

        <div className="pl-1 mb-6">
          {dayData.activities.map((act, index) => (
             <ActivityItem key={index} act={act} />
          ))}
        </div>

        <NightlyChecklist currentDay={dayData.day} nextDayData={nextDayData} />
    </div>
  );
};

// --- Page & Layout Components ---

const CoverPage = ({ onStart }) => (
  <div className="max-w-3xl mx-auto px-4 fade-in pb-20">
    <div className="text-center py-12">
        <div className="inline-block p-4 rounded-full bg-white border-2 border-stone-300 mb-6 shadow-md">
            <CloudSnow className="w-12 h-12 text-sky-400" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-widest text-stone-800">東北雪國之旅</h1>
        <div className="text-stone-500 flex justify-center items-center gap-2 text-lg">
           <Calendar className="w-5 h-5" /> 2026.01.08 - 2026.01.15
        </div>
        <p className="mt-4 text-stone-400">青森 ‧ 奧入瀨 ‧ 銀山溫泉 ‧ 仙台</p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-200 mb-10 transform -rotate-1 mx-4">
        <h2 className="text-lg font-bold text-stone-700 mb-6 flex items-center gap-2 justify-center">
            <Plane className="w-5 h-5" /> 航班資訊
        </h2>
        <div className="space-y-4">
            <FlightCard flight={flights.outbound} type="outbound" />
            <FlightCard flight={flights.return} type="return" />
        </div>
    </div>

    <div className="text-center">
        <button 
            onClick={onStart}
            className="group bg-stone-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-stone-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
        >
            開啟旅程 <BookOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
  </div>
);

const NavigationBar = ({ currentPage, totalDays, onNext, onPrev, onHome, onJump }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-end pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md border border-stone-200 shadow-xl rounded-full px-4 py-2 flex items-center gap-4 pointer-events-auto transform transition-all hover:scale-105">
                
                <button 
                    onClick={onPrev}
                    disabled={currentPage === 'cover'}
                    className={`nav-btn p-2 rounded-full hover:bg-stone-100 ${currentPage === 'cover' ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700'}`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative">
                     <button 
                        onClick={() => setShowMenu(!showMenu)}
                        className="font-bold text-stone-700 w-24 text-center text-sm flex items-center justify-center gap-1 hover:text-stone-500"
                    >
                        {currentPage === 'cover' ? '封面' : `Day ${currentPage + 1}`}
                        <Menu className="w-3 h-3" />
                     </button>

                     {/* Dropup Menu */}
                     {showMenu && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden w-40 max-h-60 overflow-y-auto">
                            <button onClick={() => { onHome(); setShowMenu(false); }} className="w-full text-left px-4 py-2 hover:bg-stone-50 text-sm border-b border-stone-100">
                                封面
                            </button>
                            {Array.from({ length: totalDays }).map((_, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => { onJump(idx); setShowMenu(false); }}
                                    className={`w-full text-left px-4 py-2 hover:bg-stone-50 text-sm ${currentPage === idx ? 'bg-stone-100 font-bold text-amber-600' : 'text-stone-600'}`}
                                >
                                    Day {idx + 1}
                                </button>
                            ))}
                        </div>
                     )}
                </div>

                <button 
                    onClick={onNext}
                    disabled={currentPage === totalDays - 1}
                    className={`nav-btn p-2 rounded-full hover:bg-stone-100 ${currentPage === totalDays - 1 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700'}`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

// --- Main App ---

const App = () => {
  const [page, setPage] = useState('cover'); // 'cover' or index 0-7

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  const handleStart = () => {
    setPage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (page === 'cover') {
        setPage(0);
    } else if (page < daysData.length - 1) {
        setPage(page + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (page === 0) {
        setPage('cover');
    } else if (page > 0) {
        setPage(page - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJump = (index) => {
      setPage(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleHome = () => {
      setPage('cover');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen pb-24 bg-[#fcf9f2]">
      <FontImport />
      
      {/* Decorative Top Bar */}
      <div className="h-2 w-full bg-repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #fff 10px, #fff 20px) border-b border-stone-200"></div>

      <main className="pt-8">
        {page === 'cover' ? (
            <CoverPage onStart={handleStart} />
        ) : (
            <div className="px-4">
                <DayCard 
                    key={page} // Key change triggers animation
                    dayData={daysData[page]} 
                    nextDayData={daysData[page + 1]} 
                />
            </div>
        )}
      </main>

      <NavigationBar 
        currentPage={page}
        totalDays={daysData.length}
        onNext={handleNext}
        onPrev={handlePrev}
        onHome={handleHome}
        onJump={handleJump}
      />
      
    </div>
  );
};

export default App;