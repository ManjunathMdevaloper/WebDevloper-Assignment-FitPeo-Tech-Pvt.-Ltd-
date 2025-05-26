import React from 'react';
import '../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-wrapper">
              <span className='details' >This Week🔻</span>

        <img
          src="/anatomy.png"
          alt="Human Anatomy"
          className="anatomy-image"
        />

        <div className="indicators">
          <div className="indicator healthy" style={{ top: '30%', left: '65%' }}>
            <span className="indicator-label">💗 Healthy Heart</span>
          </div>

          <div className="indicator healthy" style={{ top: '75%', left: '35%' }}>
            <span className="indicator-label"> 🦵Healthy Leg</span>
          </div>
        </div>
      </div>
      <div className='details'>Details -></div>
    </div>
  );
}

export default AnatomySection;
