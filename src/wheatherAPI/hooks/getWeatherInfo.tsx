import { Cloud, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";

export const getWeatherInfo = (code: number) => {
  // WMO Code 簡化對應
  if (code === 0)
    return {
      label: "晴朗好天氣",
      icon: <Sun className="w-10 h-10 text-orange-400" />,
    };
  if ([1, 2, 3].includes(code))
    return {
      label: "多雲時晴",
      icon: <Cloud className="w-10 h-10 text-sky-400" />,
    };
  if ([45, 48].includes(code))
    return {
      label: "霧濛濛",
      icon: <Wind className="w-10 h-10 text-stone-400" />,
    };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
    return {
      label: "有雨帶傘",
      icon: <CloudRain className="w-10 h-10 text-blue-400" />,
    };
  if ([71, 73, 75, 77, 85, 86].includes(code))
    return {
      label: "雪花飄飄",
      icon: <CloudSnow className="w-10 h-10 text-indigo-300" />,
    };
  if ([95, 96, 99].includes(code))
    return {
      label: "打雷小心",
      icon: <CloudRain className="w-10 h-10 text-purple-400" />,
    };
  return {
    label: "未知天氣",
    icon: <Cloud className="w-10 h-10 text-stone-300" />,
  };
};
