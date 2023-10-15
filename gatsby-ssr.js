/* eslint-disable no-undef */
const React = require('react');
const { ThemeSettler } = require('./src/components/themeSettler');

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeSettler />);
  setHtmlAttributes({ lang: `en` });
};
