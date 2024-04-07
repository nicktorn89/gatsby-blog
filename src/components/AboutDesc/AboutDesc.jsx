import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './style.css';

export const AboutDesc = () => {
  return (
    <>
      <div className='about-description-block'>
        <div className='about-description-with-photo'>
          <StaticImage
            className='bio-avatar'
            layout='fixed'
            formats={['auto', 'webp', 'avif']}
            src='../../images/profile-pic.jpg'
            width={220}
            height={220}
            quality={100}
            alt='Profile picture'
          />

          <div className='about-description-text'>
            <p>
              My name is Vladislav Komanchy, I am 27 years old, and I have been
              programming since childhood. Becoming a programmer was my dream,
              which has come true.
            </p>

            <p>
              Now I work as a Full-stack JavaScript developer and create various
              applications. The most interesting thing about development for me
              is creating products that will help people in the future and{' '}
              <b>simplify</b> their lives.
            </p>
          </div>
        </div>
      </div>

      <div className='about-personal-qualities'>
        <p>My personal qualities are:</p>

        <ul>
          <li>Stress resistance</li>
          <li>Initiative</li>
          <li>Analytical thinking</li>
          <li>Result-orientation</li>
        </ul>
      </div>
    </>
  );
};
