import React from 'react';
import { DateTime } from 'luxon';

import experienceData from './experienceData.json';

import './style.css';
import { WorkDescription } from './WorkDescription/WorkDescription';

export const ExperienceWidget = () => {
  return (
    <div className='experience-widget-container'>
      {experienceData.map(
        ({
          id,
          startDate,
          endDate,
          workplace,
          workDescription,
          workplaceLink,
          positionName,
        }) => {
          const startDateFormatted = new DateTime(startDate).toLocaleString(DateTime.DATE_FULL);
          const endDateFormatted = new DateTime(
            endDate || new Date(),
          ).toLocaleString(DateTime.DATE_FULL);

          return (
            <div key={id} id={id} className='workplace-item'>
              <div className='workplace-dates'>
                <p className='workplace-dates-text'>
                  {startDateFormatted} -
                  {endDate ? endDateFormatted : 'Currently'}
                </p>

                <div className='workplaces-line' />
              </div>

              <div className='workplace-description'>
                <h4 className='workplace-title'>{workplace}</h4>
                {workplaceLink && (
                  <a
                    href={workplaceLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {workplaceLink}
                  </a>
                )}

                <h4 className='workplace-position-name'>{positionName}</h4>

                <WorkDescription descriptions={workDescription} />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};
