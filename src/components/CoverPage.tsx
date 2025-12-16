import type { FC } from "react";
import "../styles/CoverPage.css";

interface CoverPageProps {
  data: Record<string, unknown>;
}

const CoverPage: FC<CoverPageProps> = () => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <img
          src="/main_page_odette.png"
          alt="Tohoku Winter Trip"
          className="contain-image"
        />

        <div className="cover-text">
          <h1 className="cover-title">2026 Winter Tohoku Trip!</h1>
          <p className="cover-subtitle">
            日本東北八日雪国慢遊
            <br />
            🌧️ 🦊
          </p>
          <p className="cover-date">2026.1.8 - 2026.1.15</p>
        </div>

        <div className="snowflake" style={{ top: "10%", left: "10%", fontSize: '2rem' }}>❄️</div>
        <div className="snowflake __web-inspector-hide-shortcut__" style={{ top: "20%", right: "15%", fontSize: '1.5rem' }}>❄️</div>
        <div className="snowflake" style={{ bottom: "15%", left: "10%", fontSize: '2rem' }}>❄️</div>
        <div className="snowflake" style={{ bottom: "25%", right: "10%", fontSize: '3rem' }}>❄️</div>


      </div>

      <div className="washi-tape-left"></div>
      <div className="washi-tape-right"></div>
    </div>
  );
};

export default CoverPage;
