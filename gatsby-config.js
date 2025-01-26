module.exports = {
  siteMetadata: {
    title: `Roshin Kadanna Pally`,
    description: `Principal Software Engineer with an interest in developing simulation visualization tools.`,
    author: `Roshin Kadanna Pally`,
    "google-site-verification": `lNmGOUh04Gyd1ZjMNo7sqEguydYSuYEcWO7fIf-OUr4`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roshin Kadanna Pally`,
        short_name: `Roshin Kadanna Pally`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/page.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
