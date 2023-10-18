import React from 'react';

export const FallbackStyles = () => {
  return (
    <style>
      {`
        html {
          --color-primary: #005b99;
          --color-text: #2e353f;
          --color-text-light: #4f5969;
          --color-heading: #1a202c;
          --color-heading-black: black;
          --color-accent: #d1dce5;
        }
      `}
    </style>
  );
};
