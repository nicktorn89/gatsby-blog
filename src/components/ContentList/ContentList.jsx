import React, { forwardRef, useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line react/display-name
export const ContentList = forwardRef((props, postElementRef) => {
  const [allTitles, setAllTitles] = useState(null);

  useEffect(() => {
    if (postElementRef.current) {
      const titlesTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

      const allTitles = titlesTags.reduce((acc, titleTag) => {
        acc.push(...postElementRef.current.querySelectorAll(titleTag));

        return acc;
      }, []);

      setAllTitles(allTitles);
    }
  }, [postElementRef.current]);

  const titlesMap = useMemo(() => {
    if (!allTitles) return null;

    const allTitlesWithPosition = allTitles.map((title, index) => ({
      title,
      titleOrder: title.nodeName.replace('H', ''),
      position: title.getBoundingClientRect().y,
      id: `title-${index}`,
    }));

    allTitlesWithPosition.forEach(({ title, id }) => {
      title.id = id;
    });

    allTitlesWithPosition.sort((a, b) => a.position - b.position);

    return allTitlesWithPosition;
  }, [allTitles]);

  console.log('titlesMap', titlesMap);

  return (
    allTitles &&
    titlesMap && (
      <div className='content-list-container'>
        <span>Content list</span>

        <ul className='content-list'>
          {titlesMap.map(({ title, titleOrder, position, id }) => (
            <li
              className='content-list-item'
              key={position}
              style={{ marginLeft: 8 * titleOrder }}
            >
              <a href={`#${id}`}>{title.innerText}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
});
