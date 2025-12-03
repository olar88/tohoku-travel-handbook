import type { FC } from 'react';
import '../styles/PageIndicator.css';

interface PageIndicatorProps {
  current: number;
  total: number;
}

const PageIndicator: FC<PageIndicatorProps> = ({ current, total }) => {
  return (
    <div className="page-indicator">
      <span className="page-count">{current} / {total}</span>
      <div className="page-dots">
        {Array.from({ length: total }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx + 1 === current ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PageIndicator;
