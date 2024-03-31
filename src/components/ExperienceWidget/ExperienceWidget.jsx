import React from 'react';
import { DateTime } from 'luxon';

import experienceData from './experienceData.json';

import './style.css';

export const ExperienceWidget = () => {
  return (
    <div className='experience-widget-container'>
      {experienceData.map(
        ({ id, startDate, endDate, workplace, workDescription }) => {
          const startDateFormatted = new DateTime(startDate).toLocaleString();
          const endDateFormatted = new DateTime(endDate).toLocaleString();
          
          return (
            <div key={id} id={id} className='workplace-item'>
              <div className='workplace-dates'>
                <p className='workplace-dates-text'>
                  {startDateFormatted} - 
                  {endDateFormatted}
                </p>

                <div className='workplaces-line' />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};
