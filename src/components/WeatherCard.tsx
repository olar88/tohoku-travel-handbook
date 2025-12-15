// --- 2. 工具函式：天氣代碼轉中文與圖示 ---

import { Snowflake, Thermometer, Umbrella } from "lucide-react";
import type { WeatherData } from "../wheatherAPI/types";
import { getWeatherInfo } from "../wheatherAPI/hooks/getWeatherInfo";
import React, { useState } from "react";

// --- 4. 子組件：手繪風卡片 ---

export const CuteWeatherCard: React.FC<{ data: WeatherData }> = ({ data }) => {
  const { icon } = getWeatherInfo(data.weatherCode);
  // 新增狀態：控制卡片是否展開
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative group
         ${isExpanded ? "col-span-2" : "col-span-1"} 
    `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* 4-1. 紙膠帶裝飾 (Masking Tape) */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 ${data.tapeColor} opacity-90 rotate-2 shadow-sm z-10`}
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 2%, black 5%, black 95%, transparent 98%)",
        }}
      >
        {/* 紙膠帶紋理 */}
        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      </div>

      {/* 4-2. 卡片本體 */}
      <div
        className={`
        relative bg-[#fffdf5]
        rounded-[2rem] 
        border-4 border-stone-200 border-dashed 
        shadow-[4px_6px_0px_0px_rgba(214,211,200,1)] 
        transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_10px_0px_0px_rgba(214,211,200,0.8)]
         ${isExpanded ? "p-4 pt-4" : "p-1 pt-4"} 
      `}
      >
        {isExpanded ? (
          <React.Fragment>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col items-center gap-2 justify-start">
                {/* 地點名稱 */}
                <div className="text-center">
                  <h3 className="text-[12px] font-black text-stone-700 tracking-wider">
                    {data.locationName}
                  </h3>
                </div>

                {/* 主要天氣圖示區 */}
                <div className="flex items-center justify-center w-full py-2">
                  <div className="relative">
                    {/* 圖示背景光暈 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-100 rounded-full blur-xl opacity-60"></div>
                    {icon}
                  </div>
                </div>

                {/* 溫度大字 */}
                <div className="flex items-start justify-center text-stone-700">
                  <span className="text-3xl font-black tracking-tight">
                    {data.currentTemp}
                  </span>
                  <span className="text-xl mt-1 font-bold text-stone-400">
                    °C
                  </span>
                </div>
              </div>

              {/* 分隔線 (手繪風格) */}
              <div className="w-1 h-full min-h-[80px] border-l-2 border-stone-200 border-dotted my-1"></div>

              <div className="flex flex-col items-center gap-2 justify-start">
                {/* 日期 */}
                <p className="text-xs text-stone-400 font-bold mt-1 bg-stone-100 px-3 py-0.5 rounded-full inline-block">
                  {new Date().toLocaleDateString("zh-TW", {
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* 天氣描述 */}
                <div className="text-stone-600 font-bold text-sm">
                  {data.weatherLabel}
                </div>
                {/* 詳細數據網格 */}
                <div className="w-full grid grid-cols-2 gap-3 text-sm">
                  {/* 左下：溫度範圍 */}
                  <div className="flex flex-col items-center bg-orange-50/50 p-2 rounded-xl">
                    <div className="flex items-center gap-1 text-stone-400 text-xs font-bold mb-1">
                      <Thermometer size={14} /> 氣溫
                    </div>
                    <div className="font-bold text-stone-600">
                      <span className="text-blue-400">{data.minTemp}°</span>
                      <span className="mx-1 text-stone-300">~</span>
                      <span className="text-red-400">{data.maxTemp}°</span>
                    </div>
                  </div>

                  {/* 右下：降雨/降雪機率 */}
                  <div
                    className={`flex flex-col items-center p-2 rounded-xl ${
                      data.isSnowing ? "bg-blue-50/50" : "bg-blue-50/50"
                    }`}
                  >
                    {data.isSnowing ? (
                      <>
                        <div className="flex items-center gap-1 text-blue-400 text-xs font-bold mb-1">
                          <Snowflake size={14} /> 降雪
                        </div>
                        <div className="font-bold text-stone-600">
                          {data.snowfall}{" "}
                          <span className="text-xs scale-75 inline-block">
                            cm
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1 text-sky-400 text-xs font-bold mb-1">
                          <Umbrella size={14} /> 機率
                        </div>
                        <div className="font-bold text-stone-600">
                          {data.precipProb}{" "}
                          <span className="text-xs scale-75 inline-block">
                            %
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* 如果很冷，顯示溫馨小貼士 */}
            {data.currentTemp <= 0 && (
              <div className="mt-1 w-full text-center bg-red-50 text-red-400 text-xs font-bold py-1.5 rounded-lg border border-red-100">
                🧣 記得圍圍巾喔！
              </div>
            )}
          </React.Fragment>
        ) : (
          // --- 縮圖模式 (Collapsed Mode) ---
          <div className="flex flex-row items-center gap-2 pb-1 animate-in fade-in zoom-in duration-300">
            {/* 地點名稱 */}
            <div className="text-center">
              <h3 className="text-sm font-black text-stone-700 tracking-wider">
                {data.locationName}
              </h3>
            </div>

            {/* Icon (稍微縮小一點以適應縮圖) */}
            <div className="transform scale-50 -my-1">{icon}</div>

            {/* 溫度 */}
            <div className="flex items-start justify-center text-stone-700">
              <span className="text-xl font-black tracking-tight">
                {data.currentTemp}
              </span>
              <span className="text-sm mt-1 font-bold text-stone-400">°C</span>
            </div>

            {/* 點擊提示 (Hover才顯示) */}
            <div className="text-[10px] text-stone-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1">
              ▼
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
