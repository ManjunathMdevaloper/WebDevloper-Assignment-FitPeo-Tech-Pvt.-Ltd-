import React from 'react';
import '../styles/DashboardMainContent.css';

import AnatomySection from './AnatomySection.jsx';
import HealthStatusCards from './HealthStatusCards.jsx';
import CalendarView from './CalendarView.jsx';
import UpcomingSchedule from './UpcomingSchedule.jsx';
import ActivityFeed from './ActivityFeed.jsx';

function DashboardMainContent() {
  return (
    <main className="dashboard-container">
      <h4>Dashboard</h4>
      <section className="top-section">
        <AnatomySection />
        <HealthStatusCards />
      </section>

      <section className="middle-section">
        <CalendarView />
        <UpcomingSchedule />
      </section>

      <section className="bottom-section">
        <ActivityFeed />
      </section>
    </main>
  );
}

export default DashboardMainContent;