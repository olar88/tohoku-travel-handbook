import { type FC } from 'react';
import '../styles/DayCard.css';
import { useTohokuWeather } from '../wheatherAPI/hooks/useTohokuWeather';
import { CuteWeatherCard } from './WeatherCard';
import { AlertCircle, Bed, ExternalLink, Sun } from 'lucide-react';
import { MyFooter } from './Footer';

interface Activity {
  time: string;
  activity: string;
  note?: string;
  warning?: string;
  tags?: {
    lable: string;
    url: string;
  }[];
}

interface DayCardData {
  day: number;
  date: string;
  title: string;
  weatherLocationId: string[];
  accommodation: string;
  accommodationGoogleMap: string;
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
  // 隨機便利貼顏色
  const stickyColors = ['bg-yellow-100', 'bg-blue-100', 'bg-red-100', 'bg-green-100'];
  const stickyColor = stickyColors[data.day % stickyColors.length];


  return (
    <div className={`day-card day-${regionColor}`}>
      <div data-region-name='dat-title' className="flex flex-col justify-between items-start mt-2">
        <div className='w-full flex justify-between items-center'>
          <span className="inline-block px-2 py-1 bg-[#ffa978] text-[#f8f5f2] text-xs font-bold rounded-md tracking-wider">
            DAY {data.day}
          </span>
          <div className="text-sm text-gray-500 font-medium tracking-wide mb-1 flex items-center gap-1">
            {data.date}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">{data.title}</h3>
      </div>

      <div className="day-wheather">
        {loading ? (
          <div className="grid grid gap-8">
            {/* Loading 骨架屏 - 也要很可愛 */}
            <div className="h-[40px] w-[80px] bg-stone-100 rounded-[2rem] animate-pulse border-4 border-dashed border-stone-200"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 pb-12 justify-end">
            {weatherData.filter(weather => data.weatherLocationId && data.weatherLocationId.includes(weather.locationId)).map((weather) => (
              <CuteWeatherCard key={weather.locationId} data={weather} />
            ))}
          </div>
        )}

      </div>


      {/* Accommodation */}
      <div className="flex items-center text-sm text-gray-600 bg-orange-50 p-2 rounded-lg border border-orange-100">
        <Bed size={16} className="mr-2 text-orange-400" />
        <span className="font-semibold mr-2">住宿:</span>
        {data.accommodationGoogleMap ? (
          <a
            href={data.accommodationGoogleMap}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline decoration-blue-300 decoration-wavy hover:text-blue-600 truncate flex-1"
          >
            {data.accommodation}
          </a>
        ) : (
          <span>{data.accommodation}</span>
        )}
      </div>

      {/* Highlight Tag */}
      <div className="mt-2 inline-flex items-center gap-2 px-3 py-2 bg-[#f0f4f8] rounded-lg border-l-4 border-[#7fb5b5] w-full text-sm text-gray-600 italic">
        <Sun size={16} className="text-[#7fb5b5]" />
        {data.highlight}
      </div>

      {/* Timeline Section */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out px-5 pb-5
       max-h-[2000px] opacity-100
      `}>
        <div className="relative border-l-2 border-dashed border-gray-300 ml-3 my-2 space-y-6">
          {data.activities.map((act, idx) => (
            <div key={idx} className="relative pl-6 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#aaddcd] group-hover:border-[#ff8e72] transition-colors shadow-sm"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-mono text-sm font-bold text-gray-400 min-w-[50px]">{act.time}</span>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-gray-700">{act.activity}</h4>

                  {act.note && (
                    <p className="text-sm text-gray-500 mt-1 font-handwriting">{act.note}</p>
                  )}

                  {/* Tags Section - New Feature */}
                  {act.tags && act.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {act.tags.map((tag, tIdx) => (
                        <a
                          key={tIdx}
                          href={tag.url}
                          target="_blank"
                          rel="noreferrer"
                          className="
                              inline-flex items-center gap-1.5 px-2 py-1 
                              bg-[#fff] border border-[#d7ccc8] rounded-md shadow-sm
                              text-xs text-[#5d4037] font-medium 
                              hover:bg-[#efebe9] hover:border-[#8d6e63] hover:text-[#3e2723] 
                              transition-all cursor-pointer no-underline
                              group/tag
                            "
                        >
                          <ExternalLink size={10} className="text-[#a1887f] group-hover/tag:text-[#6d4c41]" />
                          {tag.lable}
                        </a>
                      ))}
                    </div>
                  )}

                  {act.warning && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2 rounded-md border border-red-100">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <span>{act.warning}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Icons & Reminder */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-end">
            <div className="flex gap-2 text-xl filter grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
              {data.icons?.map((icon, i) => <span key={i} title="Day vibe">{icon}</span>)}
            </div>

            {data.reminder && (
              <div className={`
                max-w-[60%] rotate-2 transform shadow-md p-2 text-xs font-handwriting text-gray-700 leading-tight
                ${stickyColor} text-center font-bold relative
              `}>
                <div className="absolute -top-2 left-1/2 w-8 h-3 bg-[#e5e7eb] opacity-50 -translate-x-1/2"></div>
                📌 {data.reminder}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <MyFooter />
    </div>
  );
}


export default DayCard;
