import React from 'react';
import '../styles/UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard.jsx';
import { upcoming } from '../data/appointments.js';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-heading">The Upcoming Schedule</h3>

      {upcoming.map((group, index) => (
        <div key={index} className="schedule-group">
          <h4 className="group-day">On {group.day}</h4>
          <div className="card-row">
            {group.items.map((item, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={item.title}
                time={item.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
