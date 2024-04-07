/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const rootPath = `${__PATH_PREFIX__}/`;

  const author = data.site.siteMetadata?.author;

  return (
    <div className='bio'>
      <StaticImage
        className='bio-avatar'
        layout='fixed'
        formats={['auto', 'webp', 'avif']}
        src='../../images/profile-pic.jpg'
        width={50}
        height={50}
        quality={95}
        alt='Profile picture'
      />

      {author?.name && (
        <div className='bio-text'>
          <p>
            Written by <strong>{author.name}</strong>
          </p>
          <p>
            {author?.summary || null}
            &nbsp; &mdash; &nbsp;
            {location.pathname === rootPath ? (
              <a href='/about'>About me</a>
            ) : (
              <a href={rootPath}>Posts</a>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Bio;
