import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          siteUrl
          social {
            codeberg {
              link
            }
            telegram {
              link
            }
          }
        }
      }
    }
  `);

  const siteUrl = data.site.siteMetadata?.siteUrl;
  const rssLink = `${siteUrl}/rss.xml`;

  const codebergLink = data.site.siteMetadata?.social.codeberg.link;
  const telegramLink = data.site.siteMetadata?.social.telegram.link;

  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className='main-heading'>
        <Link to='/'>{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className='header-link-home' to='/'>
        {title}
      </Link>
    );
  }

  return (
    <div className='global-wrapper' data-is-root-path={isRootPath}>
      <header className='global-header'>{header}</header>

      <ThemeToggle />

      <main>{children}</main>

      <footer>
        <div className='gatsby-block'>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </div>

        <div className='social-block'>
          <p>
            Subscribe with 
            <a className='social-link' href={rssLink}>
              RSS
            </a>
          </p>

          <p className='social-divider'>|</p>

          <p className='social-text'>Social:</p>

          <a className='social-link' href={codebergLink}>
            Codeberg
          </a>
          <a className='social-link' href={telegramLink}>
            Telegram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
