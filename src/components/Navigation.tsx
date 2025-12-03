import type { FC } from 'react';
import '../styles/Navigation.css';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
}

const Navigation: FC<NavigationProps> = ({ onNext, onPrev }) => {
  return (
    <div className="navigation">
      <button className="nav-button prev" onClick={onPrev} aria-label="Previous page">
        ← 上一頁
      </button>
      <button className="nav-button next" onClick={onNext} aria-label="Next page">
        下一頁 →
      </button>
    </div>
  );
};

export default Navigation;
