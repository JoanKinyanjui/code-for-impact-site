module.exports = {
  siteMetadata: {
    title: `Code For Impact`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  theme:{
    screens:{
      "xsm": "400px",
      "sm" : "640px",
      "md":"768px",
      "lg":"1024px",
     "xl":"1280px",
    }
  },
  plugins:[],
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
  plugins: ['gatsby-plugin-postcss'],
}
