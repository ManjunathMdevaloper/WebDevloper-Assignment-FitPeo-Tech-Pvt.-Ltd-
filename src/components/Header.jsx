import React from 'react';
import '../styles/Header.css';
import { Search, Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header-container">
      <div className="header-left">
        <Menu className="menu-icon" onClick={toggleSidebar} />

        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search..." />
          <span className="notification-icon">🔔</span>
        </div>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/32"
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Header;
