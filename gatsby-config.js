require("dotenv").config({
  path: `.env.GATSBY_ACTIVE_ENV`,
});

//whitelist color css
const { whitelistColors } = require("./src/utilities/buildFunctions");

const landingPageData = require("./src/data/embarkablePageData");

module.exports = {
  siteMetadata: {
    title: landingPageData[0].name,
    description: landingPageData[0].description,
    url: "https://embarkablelabs.com",
    siteUrl: `https://embarkable.io`,
    author: `EmbarkableLabs`,
    //put default image in static folder
    image: `images/embarkable-build-better.webp`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      //options for mobile home screen
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EmbarkableLabs`,
        short_name: `EmbarkableLabs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/${landingPageData[0].icon}`,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "embarkablelabs.com", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
				ErrorDocument 401 /404.html
				ErrorDocument 404 /404.html
				ErrorDocument 500 /404.html
			  `,
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
        ],
        custom: `
				  # This is a custom rule!
				  # This is a another custom rule!
			  `,
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 0.8, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //     disable: false, // Flag for disabling animations

    //     // Advanced Options
    //     selector: "[data-sal]", // Selector of the elements to be animated
    //     animateClassName: "sal-animate", // Class name which triggers animation
    //     disabledClassName: "sal-disabled", // Class name which defines the disabled state
    //     rootMargin: "0% 50%", // Corresponds to root's bounding box margin
    //     enterEventName: "sal:in", // Enter event name
    //     exitEventName: "sal:out", // Exit event name
    //   },
    // },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        whitelist: whitelistColors,
        purgeOnly: ["src/css/style.css", "src/css/global.css"],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       /*
    // 			'GA-TRACKING_ID', // Google Analytics / GA
    // 			'AW-CONVERSION_ID', // Google Ads / Adwords / AW
    // 			'DC-FLOODIGHT_ID' // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    // 			*/
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //       debug_mode: process.env.GATSBY_GTAG_DEBUG,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
    /*,
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-MDBF5NL',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' }

				// Specify optional GTM environment details.
				//gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				//gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				//dataLayerName: 'YOUR_DATA_LAYER_NAME'
			}
		}*/
  ],
};
