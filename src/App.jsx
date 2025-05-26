import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar slides in/out on mobile */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main section with Header + Content */}
      <div className="main-section">
        <Header toggleSidebar={() => setSidebarOpen(prev => !prev)} />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;
