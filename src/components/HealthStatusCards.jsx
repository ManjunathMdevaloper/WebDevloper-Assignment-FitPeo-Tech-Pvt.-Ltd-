import React from 'react';
import '../styles/HealthStatusCards.css';
import {healthCards} from '../data/healthData.js';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div
          key={index}
          className={`health-card ${card.status.toLowerCase()}`}
        >
          <div className='card-img'>{card.img}</div>
          <div className="card-title">{card.label}</div>
          <div className="card-date">{card.date}</div>
          <div className="card-status">{card.status}</div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;