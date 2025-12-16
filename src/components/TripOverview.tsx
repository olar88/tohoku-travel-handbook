import type { FC } from 'react';
import '../styles/TripOverview.css';
import type { OverviewData } from '../data/tripData';
import { MyFooter } from './Footer';



interface TripOverviewProps {
  data: OverviewData;
}

const TripOverview: FC<TripOverviewProps> = ({ data }) => {
  return (
    <div className="trip-overview">
      <div className="overview-content">
        <h2 className="overview-title">✈️ 旅程總覽</h2>

        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-icon">🗺️</div>
            <div className="card-label">旅遊地區</div>
            <div className="card-value">{data.regions}</div>
          </div>

          <div className="overview-card">
            <div className="card-icon">📅</div>
            <div className="card-label">旅遊日期</div>
            <div className="card-value">2026年1月8日<br />至 1月15日</div>
          </div>

          <div className="overview-card">
            <div className="card-icon">✈️</div>
            <div className="card-label">去程班機</div>
            <div className="card-value">{data.flights.outboundFlightSummary}</div>
          </div>

          <div className="overview-card">
            <div className="card-icon">✈️</div>
            <div className="card-label">回程班機</div>
            <div className="card-value">{data.flights.returnFlightSummary}</div>
          </div>

          <div className="overview-card">
            <div className="card-icon">🚂</div>
            <div className="card-label">主要交通</div>
            <div className="card-value">{data.transport}</div>
          </div>
        </div>

        <div className="overview-highlights">
          <h3>✨ 旅程亮點</h3>
          <ul className="highlights-list">
            <li>🏔️ 八甲田山樹冰奇景</li>
            <li>❄️ 十和田冰瀑燈光秀</li>
            <li>🦊 宮城狐狸村互動體驗</li>
            <li>🏮 銀山溫泉古鎮漫步</li>
            <li>⛩️ 山寺登頂俯瞰</li>
            <li>♨️ 藏王溫泉暖湯</li>
          </ul>
        </div>
      </div>
      {/* Footer */}
      <MyFooter />
    </div>
  );
};

export default TripOverview;
