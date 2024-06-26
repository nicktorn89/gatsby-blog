import React from 'react';
import Bio from '../components/Bio/Bio';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import Seo from '../components/Seo/Seo';

import { AboutDesc } from '../components/AboutDesc/AboutDesc';
import { LinksBlock } from '../components/LinksBlock/LinksBlock';
import { ExperienceWidget } from '../components/ExperienceWidget/ExperienceWidget';
import { SkillsWidget } from '../components/SkillsWidget/SkillsWidget';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Bio location={location} />

      <AboutDesc />

      <LinksBlock />

      <ExperienceWidget />

      <SkillsWidget />
    </Layout>
  );
};

export default About;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='All posts' />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
