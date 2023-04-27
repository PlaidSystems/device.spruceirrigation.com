import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./Footer";

import "typeface-open-sans";

function Layout({ header, children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <body className="leading-normal tracking-normal">
          {/* Navigation */}
          {/* <Header siteTitle={header}/> */}

          {children}

          {/* Footer */}
          {/* <Footer /> */}
        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
