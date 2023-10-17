import React from 'react';

import readTimeEstimate from 'read-time-estimate';

const AVERAGE_WORDS_FOR_MINUTE = 238;

export const ReadTime = ({ postHtml }) => {
  const {
    humanizedDuration,
    totalWords,
  } = readTimeEstimate(postHtml, AVERAGE_WORDS_FOR_MINUTE);

  return (
    <div className='read-time'>
      <p>Read time: ~{humanizedDuration}.</p>
      <p>Total words: {totalWords}</p>
    </div>
  );
};
