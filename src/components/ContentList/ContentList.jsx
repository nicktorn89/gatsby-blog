import React, { useEffect, useRef } from 'react';

export const ContentList = ({ postHtml }) => {
  const postElementRef = useRef();

  console.log('postHtml', postHtml);

  useEffect(() => {
    if (postElementRef.current) {
      console.log('found element', postElementRef.current);

      const allTitles = postElementRef.current.querySelectorAll('h2');

      console.log('allTitles', allTitles)
    }
  }, [postElementRef.current]);

  return (
    <div className='content-list'>
      <div
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: postHtml }}
        ref={postElementRef}
      ></div>
    </div>
  );
};
