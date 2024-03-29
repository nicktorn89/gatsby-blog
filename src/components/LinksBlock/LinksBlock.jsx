import React from 'react';

export const LinksBlock = () => {
  return (
    <div className='links-block'>
      <div id='hh-block'>
        <a
          href='https://hh.ru/resume/5b5b9a7fff05c04ea00039ed1f6e6863396c4e'
          target='_blank'
          rel='noopener noreferrer'
        >
          HeadHunters Link
        </a>
      </div>

      <div id='cv-block'>
        <a href='/CV.pdf' download='Vladislav Komanchy | CV'>
          My CV
        </a>
      </div>
    </div>
  );
};
