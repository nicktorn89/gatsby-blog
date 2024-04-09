import React, { useEffect, useRef, useState } from 'react';

export const ContentList = ({ postHtml }) => {
  const [allTitles, setAllTitles] = useState(null);

  const postElementRef = useRef();

  console.log('allTitles', allTitles);

  useEffect(() => {
    if (postElementRef.current) {
      console.log('found element', postElementRef.current);

      const titlesTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

      const allTitles = titlesTags.reduce((acc, titleTag) => {
        if (acc[titleTag]) {
          acc[titleTag].push(...postElementRef.current.querySelectorAll(titleTag));
        } else {
          acc[titleTag] = Array.from(postElementRef.current.querySelectorAll(titleTag));
        }

        return acc;
      }, {});

      setAllTitles(allTitles);
    }
  }, [postElementRef.current]);

  return (
    <div className='content-list'>
      <div
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: postHtml }}
        ref={postElementRef}
      ></div>

      {allTitles && <div>All titles</div>}
    </div>
  );
};
