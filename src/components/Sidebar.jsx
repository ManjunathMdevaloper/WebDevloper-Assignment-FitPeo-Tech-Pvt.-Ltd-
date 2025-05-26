import React from 'react';
import '../styles/Sidebar.css';
import navigationLinks from '../data/navigationLinks.jsx';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h1 className="app-title"><span>Health</span>care.</h1>

      {navigationLinks.map((section, index) => (
        <div key={index} className="sidebar-section">
          <h4 className="sidebar-heading">{section.section}</h4>
          <nav className="sidebar-nav">
            {section.links.map((item, idx) => (
              <div
                key={idx}
                className={`sidebar-link ${item.active ? 'active' : ''}`}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
