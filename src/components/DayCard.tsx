import type { FC } from 'react';
import '../styles/DayCard.css';
import { useTohokuWeather } from '../wheatherAPI/hooks/useTohokuWeather';
import { CuteWeatherCard } from './WeatherCard';

interface Activity {
  time: string;
  activity: string;
  note?: string;
  warning?: string;
}

interface DayCardData {
  day: number;
  date: string;
  title: string;
  weatherLocationId: string[];
  accommodation: string;
  highlight: string;
  activities: Activity[];
  icons?: string[];
  reminder?: string;
}

interface DayCardProps {
  data: DayCardData;
}

const DayCard: FC<DayCardProps> = ({ data }) => {
  const { weatherData, loading } = useTohokuWeather();

  const getDayColor = (day: number): string => {
    if (day <= 2) return 'aomori'; // 青森
    if (day === 3) return 'hachimanai'; // 八甲田
    if (day === 4) return 'morioka'; // 盛岡
    if (day === 5) return 'ichinoseki'; // 一関
    if (day === 6) return 'miyagi-zao'; // 狐狸村 & 藏王
    if (day === 7) return 'yamadera'; // 山寺 & 銀山
    return 'sendai'; // 仙台
  };

  const regionColor = getDayColor(data.day);

  return (
    <div className={`day-card day-${regionColor}`}>
      <div className="day-header">
        <div className="day-number">Day {data.day}</div>
        <div className="day-date">{data.date}</div>

        <div className="day-wheather">
           {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Loading 骨架屏 - 也要很可愛 */}
                <div className="h-[40px] w-[80px] bg-stone-100 rounded-[2rem] animate-pulse border-4 border-dashed border-stone-200"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-12">
            {weatherData.filter(weather => data.weatherLocationId && data.weatherLocationId.includes(weather.locationId)).map((weather) => (
              <CuteWeatherCard key={weather.locationId} data={weather} />
            ))}
          </div>
        )}
         
        </div>
      </div>

      <div className="day-title">
        <span className="day-icon">{data.title}</span>
      </div>

      <div className="day-accommodation">
        🛏️ {data.accommodation}
      </div>

      <div className="day-highlight">
        ⭐ {data.highlight}
      </div>

      <div className="day-timeline">
        {data.activities.map((activity, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-time">{activity.time}</div>
            <div className="timeline-content">
              <div className="activity-name">{activity.activity}</div>
              {activity.note && (
                <div className="activity-note">{activity.note}</div>
              )}
              {activity.warning && (
                <div className="activity-warning">⚠️ {activity.warning}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="day-icons">
        {data.icons && data.icons.map((icon, idx) => (
          <span key={idx} className="day-icon-item">{icon}</span>
        ))}
      </div>

      {data.reminder && (
        <div className="day-reminder">
          <span className="reminder-star">⭐</span>
          <span>{data.reminder}</span>
          <span className="reminder-star">⭐</span>
        </div>
      )}
    </div>
  );
}

export default DayCard;
