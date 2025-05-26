import React from 'react';
import '../styles/ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const weeklyActivity = [
  [50, 30, 70],   
  [80, 40, 60],   
  [60, 30, 50],   
  [70, 40, 60],   
  [90, 50, 70],   
  [60, 30, 50],   
  [70, 40, 60],   
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointments on this week</span>
      </div>

      <div className="activity-chart">
        {weeklyActivity.map((dayBars, dayIndex) => (
          <div key={dayIndex} className="day-column">
            <div className="bars">
              {dayBars.map((height, idx) => (
                <div
                  key={idx}
                  className={`bar bar-${idx}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <div className="day-label">{days[dayIndex]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
