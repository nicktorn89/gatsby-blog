import React from 'react';

export const WorkDescription = ({ descriptions }) => {
  return (
    <div className='workplace-descriptions-container'>
      {descriptions.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </div>
  );
};
