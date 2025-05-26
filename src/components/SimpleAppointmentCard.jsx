import React from 'react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-card">
      <div className="simple-title">{title}</div>
      <div className="simple-time">{time}</div>
    </div>
  );
}

export default SimpleAppointmentCard;
