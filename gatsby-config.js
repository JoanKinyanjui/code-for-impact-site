module.exports = {
  siteMetadata: {
    title: `Code For Impact`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  proxy:{
  prefix : "/",
  url:"http://localhost:3000"
  },
  // theme:{
  //   screens:{
  //     "sm" : "640px",
  //     "md":"768px",
  //     "lg":"1024px",
  //    "xl":"1280px",
  //   }
  // },
  plugins:[],
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
  plugins: ['gatsby-plugin-postcss'],
  
  
}