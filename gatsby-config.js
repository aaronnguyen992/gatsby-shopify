require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'rsd-fake-shop',
        accessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: '2020-01',
        verbose: true,
        paginationSize: 250,
        includeCollections: ['shop', 'content']
      }
    }
  ]
}