import type { OverviewData } from "../data/tripData";
import "../styles/TripFlyTip.css";
import { MyFooter } from "./Footer";



interface TripFlyTipProps {
  data: OverviewData;
}

export default function TripFlyTip({ data }: TripFlyTipProps) {


  return (
    <div className="trip-overview">
      {/* 班機資訊區 */}
      <div className="flight-section">
        <h2 className="section-title">✈️ 班機資訊</h2>

        {/* 去程班機 */}
        <div className="flight-card outbound">
          <div className="flight-header">
            <span className="flight-direction">去程</span>
            <span className="flight-airline">
              {data.flights.outbound.airline}
            </span>
          </div>

          <div className="flight-details">
            <div className="flight-leg">
              <div className="airport-info">
                <div className="airport-code">TPE - {data.flights.outbound.flightNumber}</div>
                <div className="airport-name">台北</div>
                <div className="time departureTime">
                  {data.flights.outbound.departureTime}
                </div>
                <div className="date departureTime">{data.flights.outbound.departure}</div>
              </div>

              <div className="flight-route">
                <div className="plane-icon">✈️</div>
              </div>

              <div className="airport-info">
                <div className="airport-code">SDJ</div>
                <div className="airport-name">仙台</div>
                <div className="time">{data.flights.outbound.arrivalTime}</div>
                <div className="date">{data.flights.outbound.arrival}</div>
              </div>
            </div>
          </div>

          <div className="flight-number">
            班機編號: <span className="text-[#FFA07A]">{data.flights.outbound.flightNumber}</span>
          </div>
        </div>

        {/* 回程班機 */}
        <div className="flight-card return">
          <div className="flight-header">
            <span className="flight-direction">回程</span>
            <span className="flight-airline">
              {data.flights.return.airline}
            </span>
          </div>

          <div className="flight-details">
            <div className="flight-leg">
              <div className="airport-info">
                <div className="airport-code">SDJ  - {data.flights.return.flightNumber}</div>
                <div className="airport-name">仙台</div>
                <div className="time departureTime">{data.flights.return.departureTime}</div>
                <div className="date departureTime">{data.flights.return.departure}</div>
              </div>

              <div className="flight-route">
                <div className="plane-icon">✈️</div>
              </div>

              <div className="airport-info">
                <div className="airport-code">TPE</div>
                <div className="airport-name">台北</div>
                <div className="time">{data.flights.return.arrivalTime}</div>
                <div className="date">{data.flights.return.arrival}</div>
              </div>
            </div>
          </div>

          <div className="flight-number">
            班機編號: <span className="text-[#FFA07A]">{data.flights.return.flightNumber}</span>
          </div>
        </div>
      </div>

      {/* 必須攜帶物品區 */}
      <div className="packing-section">
        <h2 className="section-title">📜出發前確認清單</h2>

        <div className="packing-grid">
          {data.packingList.map((category, index) => (
            <div key={index} className="packing-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.category}</h3>
              </div>

              <ul className="items-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="packing-item">
                    <span className="checkbox">
                      <img src='/checkIcon.png' alt="" width={20} height={20} />
                    </span>
                    <span className="item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 溫馨提示 */}
      <div className="tips-section">
        <div className="tip-card">
          <span className="tip-icon">💡</span>
          <p>
            1月日本東北氣溫約 -5°C ~
            5°C，雪靴和保暖衣物是必須的！別忘了帶暖暖包和護手霜 🥶
          </p>
        </div>
      </div>
      {/* Footer */}
      <MyFooter />
    </div>
  );
}
