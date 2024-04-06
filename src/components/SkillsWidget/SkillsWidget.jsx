import React from 'react';
import './style.css';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export const data = {
  labels: [
    'JS/TS',
    'React',
    'Node.js',
    'Linux',
    'Software Architecture',
    'Computer Science',
  ],
  datasets: [
    {
      label: 'Skill from 1 to 10',
      data: [9, 9, 7, 4, 6, 5],

      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const SkillsWidget = () => {
  return (
    <div className='skills-widget'>
      <h3 className='skills-title'>My skills</h3>

      <Radar
        data={data}
        options={{
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 10,
            },
          },
        }}
      />
    </div>
  );
};
