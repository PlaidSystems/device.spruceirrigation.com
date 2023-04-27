import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

/*SEO guidelines
siteMetaData in gatsby-config
title: max 60 chars
description: max 160 chars
keywords: generally not used, but might be useful for something
image: important, shows up in web snippets
*/

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaImage =
          image || data.site.siteMetadata.siteUrl + '/' + data.site.siteMetadata.image;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `image`,
                content: metaImage
              },              
              {
                name: `robots`,
                content: 'index, follow'
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:image`,
                content: metaImage
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        url
        siteUrl
        author
        image
      }
    }
  }
`;
