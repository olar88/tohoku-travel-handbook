export interface LocationConfig {
  id: string;
  name: string;
  lat: number;
  lon: number;
  tapeColor: string; // 每個地點配一個可愛的紙膠帶顏色
}

export const TARGET_LOCATIONS: LocationConfig[] = [
  {
    id: "aomori",
    name: "青森市",
    lat: 40.8244,
    lon: 140.74,
    tapeColor: "bg-red-200",
  },
  // 新增：奧入瀨溪流 (座標取自石戶休憩所附近，屬十和田市山區)
  {
    id: "oirase",
    name: "奧入瀨溪流",
    lat: 40.528,
    lon: 140.96,
    tapeColor: "bg-emerald-200",
  },
  {
    id: "hakkoda",
    name: "八甲田山",
    lat: 40.6629,
    lon: 140.8062,
    tapeColor: "bg-blue-200",
  }, // 山區
  {
    id: "hachinohe",
    name: "八戶市",
    lat: 40.5123,
    lon: 141.4884,
    tapeColor: "bg-indigo-200",
  },
  {
    id: "morioka",
    name: "盛岡市",
    lat: 39.702,
    lon: 141.1545,
    tapeColor: "bg-orange-200",
  },
  {
    id: "geibikei",
    name: "猊鼻溪",
    lat: 38.9904,
    lon: 141.253,
    tapeColor: "bg-teal-200",
  },
  {
    id: "ichinoseki",
    name: "一關市",
    lat: 38.9324,
    lon: 141.1332,
    tapeColor: "bg-rose-200",
  },
  {
    id: "sendai",
    name: "仙台市",
    lat: 38.2682,
    lon: 140.8694,
    tapeColor: "bg-green-200",
  },
  {
    id: "zao",
    name: "藏王樹冰",
    lat: 38.1698,
    lon: 140.4057,
    tapeColor: "bg-cyan-200",
  }, // 山區
  {
    id: "yamagata",
    name: "山形市",
    lat: 38.2554,
    lon: 140.3396,
    tapeColor: "bg-yellow-200",
  },
];
