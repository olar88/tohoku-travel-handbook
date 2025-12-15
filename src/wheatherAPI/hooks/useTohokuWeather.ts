// --- 3. 自定義 Hook：抓取真實資料 ---

import { useEffect, useState } from "react";
import type { WeatherData } from "../types";
import { TARGET_LOCATIONS } from "../config";
import { getWeatherInfo } from "./getWeatherInfo";

/** 抓取東北地區多個地點的天氣資料 */
export const useTohokuWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const promises = TARGET_LOCATIONS.map(async (loc) => {
          const params = new URLSearchParams({
            latitude: loc.lat.toString(),
            longitude: loc.lon.toString(),
            current: 'temperature_2m,weather_code',
            daily: 'temperature_2m_max,temperature_2m_min,precipitation_probability_max,snowfall_sum',
            timezone: 'Asia/Tokyo',
            forecast_days: '1'
          });

          // 模擬延遲讓 UI 展示 Loading 效果 (真實串接時可拿掉)
          // await new Promise(resolve => setTimeout(resolve, 800));

          const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
          const json = await res.json();

          const current = json.current;
          const daily = json.daily;
          const wCode = current.weather_code;
          const { label } = getWeatherInfo(wCode);
          const snowSum = daily.snowfall_sum[0];
          
          // 判斷是否為雪天：代碼符合雪 OR 降雪量 > 0
          const isSnowing = (wCode >= 71 && wCode <= 86) || snowSum > 0;

          return {
            locationId: loc.id,
            locationName: loc.name,
            tapeColor: loc.tapeColor,
            currentTemp: Math.round(current.temperature_2m),
            maxTemp: Math.round(daily.temperature_2m_max[0]),
            minTemp: Math.round(daily.temperature_2m_min[0]),
            precipProb: daily.precipitation_probability_max[0],
            snowfall: snowSum,
            weatherCode: wCode,
            weatherLabel: isSnowing && snowSum > 5 ? '大雪紛飛' : label, // 特殊邏輯：大雪
            weatherIcon: getWeatherInfo(wCode).icon,
            isSnowing: isSnowing,
          };
        });

        const results = await Promise.all(promises);
        setWeatherData(results);
      } catch (error) {
        console.error("Fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weatherData, loading };
};