require("dotenv").config();

const siteMetadata = {
  title: `Anvesha Blog`,
  name: `Anvesha`,
  siteUrl: `https://anveshablog.netlify.app/`,
  description: `Official blog of Anvesha, the science club of IISER Thiruvananthapuram.`,
  hero: {
    heading: `Welcome to Anvesha blog! Check out our <a href="/newsletters/">Newsletters</a> here.`,
    maxWidth: 1052,
  },
  social: [
    {
      url: `https://twitter.com/Anvesha_IISER`,
    },
    {
		url: `https://www.instagram.com/anvesha.iisertvm`,
    },
    {
      url: `https://www.facebook.com/anvesha.iisertvm`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      pageLength: 8,
      tags: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'assets',
      path: `${__dirname}/static/`
    }
  },
  {
	 resolve: 'gatsby-plugin-google-fonts',
	 options: {
		fonts: [
		  `Megrim`,
		]
	 }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Anvesha blog`,
      short_name: `Exhibit A`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-goatcounter`,
    options: {
		code: "anveshablog",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://app.us10.list-manage.com/subscribe/post?u=b76305f5f4e7ae24267918d4f&amp;id=f842a1f8c8",
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
