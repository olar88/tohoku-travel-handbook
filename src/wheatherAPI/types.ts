import type { JSX } from "react";

export interface WeatherData {
  /** 位置 ID 對應 LocationConfig 的 id */
  locationId: string;
  /** 位置名稱 */
  locationName: string;
  /** 即時溫度 */
  currentTemp: number;
  /** 最高溫度 */
  maxTemp: number;
  /** 最低溫度 */
  minTemp: number;
  /** 降水機率 */
  precipProb: number;
  /** 降雪量 */
  snowfall: number;
  /** 天氣代碼 */
  weatherCode: number;
  /** 天氣圖示 */
  weatherIcon: JSX.Element;
  /** 天氣中文描述 */
  weatherLabel: string;
  /** 是否有下雪 */
  isSnowing: boolean;
  /** 紙膠帶顏色 */
  tapeColor: string;
}
