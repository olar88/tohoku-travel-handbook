import React, { useState, type JSX } from 'react';
import CoverPage from './components/CoverPage';
// import TripOverview from './components/TripOverview';
import DayCard from './components/DayCard';
import Navigation from './components/Navigation';
import PageIndicator from './components/PageIndicator';
import './styles/App.css';
import { tripData } from './data/tripData';
import TripFlyTip from './components/TripFlyTip';

interface PageData {
  type: 'cover' | 'overview' | 'day';
  data: Record<string, unknown>;
}

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: PageData[] = [
    { type: 'cover', data: tripData.coverPage },
    { type: 'overview', data: tripData.overview },
    ...tripData.days.map((day: any) => ({ type: 'day' as const, data: day }))
  ];

  const totalPages = pages.length;
  const currentPageData = pages[currentPage];

  const handleNext = (): void => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = (): void => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderPage = (): JSX.Element | null => {
    switch (currentPageData.type) {
      case 'cover':
        return <CoverPage data={currentPageData.data} />;
      case 'overview':
        return <TripFlyTip data={currentPageData.data as any} />;
      case 'day':
        return <DayCard data={currentPageData.data as any} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="app-container">
          {renderPage()}

          <Navigation onNext={handleNext} onPrev={handlePrev} />
          <PageIndicator current={currentPage + 1} total={totalPages} />
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;