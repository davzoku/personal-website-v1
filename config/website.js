module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'Walter Teng', // Navigation and Site Title
  siteTitleAlt: 'Walter is a fullstack developer', // Alternative Site title for SEO
  siteTitleShort: 'Walter Teng', // short_name for manifest
  siteUrl: 'https://walterteng.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/favicon.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Walter Teng is a full stack developer who specializes in transforming and developing digital experiences.',
  author: 'Walter Teng', // Author for schemaORGJSONLD
  organization: 'Walter Teng',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@davzoku', // Twitter Username
  ogSiteName: 'Walter Teng', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'G-HP6C32D6T4',
  ogImage: '/og.png',

  // Manifest and Progress color
  themeColor: '#16161a',
  backgroundColor: '#16161a',

  // Social component
  twitter: 'https://twitter.com/davzoku/',
  twitterHandle: '@davzoku',
  github: 'https://github.com/davzoku',
  linkedin: 'https://sg.linkedin.com/in/tengkokwai',
  instagram: 'https://www.instagram.com/drawwithwalter/',
  instagramHandle: '@drawwithwalter',
  email: 'walter.tengkw@gmail.com',

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Projects',
      url: '/projects',
    },
    {
      name: 'Digital Garden',
      url: '/garden',
    },
    { name: 'Resonance Library', url: '/library' },
  ],

  navLinksShort: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Projects',
      url: '/projects',
    },
    {
      name: 'Garden',
      url: '/garden',
    },
    { name: 'Library', url: '/library' },
  ],

  projectDesc: "A collection of things I've built.",
  gardenIndexDesc:
    "Some of my personal picks from my digital garden; an open collection of notes, articles I'm currently cultivating. The maturity level ranges from Seedling 🌱, Budding 🌿 and Evergreen 🌳.",
  gardenDesc:
    "An open collection of notes, articles I'm currently cultivating. The maturity level ranges from Seedling 🌱, Budding 🌿 and Evergreen 🌳.",
  libraryDesc:
    'A list of books that have contributed to my skill stack or improved my worldview.',
  libraryIndexDesc:
    'Some of my personal favourites from my resonance library; a list of books that have contributed to my skill stack or improved my worldview.',
};
