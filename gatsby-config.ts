import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `/.env.${process.env.NODE_ENV}` })

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://www.mrogers.dev`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-source-medium-feed",
      options: {
        userName: "@mikerogers1357",
        name: 'PersonalMediumFeed'
      },
    },
    {
      resolve: "gatsby-source-medium-feed",
      options: {
        userName: "@mike.rogers.jet",
        name: 'MediumFeed'
      },
    },
    "gatsby-plugin-netlify"
  ]
};

export default config;
