import React, { useMemo } from 'react';
import { DateTime } from 'luxon';

import experienceData from './experienceData.json';

import './style.css';
import { WorkDescription } from './WorkDescription/WorkDescription';

export const ExperienceWidget = () => {
  const datesInDateTimeFormat = useMemo(
    () =>
      experienceData.map(({ startDate, endDate }) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();

        const startDt = DateTime.fromJSDate(start);
        const endDt = DateTime.fromJSDate(end);

        return {
          startDt,
          endDt,
        };
      }),
    [experienceData],
  );

  const timeDifferences = useMemo(
    () =>
      datesInDateTimeFormat.map(({ startDt, endDt }) => {
        const { years, months } = endDt
          .diff(startDt, ['years', 'months'])
          .toObject();

        return { years, months };
      }),
    [datesInDateTimeFormat],
  );

  const totalExperience = useMemo(() => {
    const firstWorkplaceDateTimes =
      datesInDateTimeFormat[experienceData.length - 1];

    return DateTime
      .now()
      .diff(firstWorkplaceDateTimes.startDt, ['years', 'months'])
      .toObject();
  }, [datesInDateTimeFormat]);

  return (
    <>
      <h3 className='total-experience'>
        Work experience - {totalExperience?.years} years{' '}
        {Math.floor(totalExperience?.months)} months
      </h3>

      <div className='experience-widget-container'>
        {experienceData.map(
          (
            {
              id,
              endDate,
              workplace,
              workDescription,
              workplaceLink,
              positionName,
            },
            index,
          ) => {
            const { years, months } = timeDifferences[index] || {};
            const { startDt, endDt } = datesInDateTimeFormat[index] || {};

            const startDateFormatted = startDt.toLocaleString(
              DateTime.DATE_FULL,
            );

            const endDateFormatted = endDt.toLocaleString(DateTime.DATE_FULL);

            return (
              <div key={id} id={id} className='workplace-item'>
                <div className='workplace-dates'>
                  <p className='workplace-dates-text'>
                    {startDateFormatted} -{' '}
                    {endDate ? endDateFormatted : 'Currently'}
                    <br />
                    {years >= 1 && `${Math.ceil(years)} years `}
                    {months && `${Math.ceil(months)} months`}
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
    </>
  );
};
