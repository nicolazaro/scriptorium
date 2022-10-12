const basePath = '/scriptorium'

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    title: `Digital Publishing with Minimal Computing Project`,
    description: `SCRIPTORIVM`,
    author: `Graciela, Nicolás y Daniela`
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/content/pages`,
        name: `html`,
      },
    },
  ],
}
