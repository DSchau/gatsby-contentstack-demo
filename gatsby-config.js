module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key': process.env.CONTENTSTACK_API_KEY,
        'delivery_token': process.env.CONTENTSTACK_DELIVERY_TOKEN,
        'environment': process.env.CONTENTSTACK_ENVIRONMENT
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
