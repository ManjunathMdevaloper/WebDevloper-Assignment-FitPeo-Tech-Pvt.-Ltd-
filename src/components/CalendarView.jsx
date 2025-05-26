import React from 'react';
import '../styles/CalendarView.css';
import calendarAppointments from '../data/appointments.js';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3 className="calendar-title">Jun 2025</h3>
      <div className="calendar-grid">
        {calendarAppointments.days.map((day, idx) => (
          <div key={idx} className="calendar-day">
            <div className="day-label">{day.date}</div>
            <div className="appointments">
              {day.times.map((time, index) => (
                <span key={index} className="appointment-time-c">
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
</div>

<div className="calendar-cards">
  {calendarAppointments.appointmentDetails.map((item, idx) => (
    <div key={idx} className="appointment-card">
      <div className="appointment-title">{item.title}</div>
      <div className="appointment-time">{item.time}</div>
      <div className="appointment-dr">{item.dr}</div>

    </div>
  ))}
</div>
</div>
);
}

export default CalendarView;