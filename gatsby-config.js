module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://chocksy.com/`,
    // Your Name
    name: 'Razvan Ciocanel',
    // Main Site Title
    title: `Razvan Ciocanel | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `I passionate about building useful applications.`,
    // Optional: Twitter account handle
    author: `@chocksy`,
    // Optional: Github account URL
    github: `https://github.com/Chocksy`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chocksy/`,
    // Optional: AngelList account URL
    angellist: `https://angel.co/u/chocksy`,
    // Content of the About Me section
    about: `I love investing and working on projects that help me grow. As a developer starting new projects and trying the new frameworks that show up is my go-to thing. I have worked with PHP, Rails, React, Vue, Angular, Swift, and a lot more to get different perspectives on all the approaches they take. As an investor, the idea I go for is to invest in companies that I am eager to follow. I will always try to use their product first and base my investment on the impression I get. I'm a very long-term investor. I'm always thinking in decades. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'EpicPxls',
        description:
          'Digital marketplace that is easy to use and reliable. I built this with my colleagues at EpicCoders using Ruby on Rails.',
        link: 'https://www.epicpxls.com',
      },
      {
        name: 'Hubstaff',
        description:
          'The payroll & billing part of the application has been my task. I learned to work with large teams and follow a sprint schedule.',
        link: 'https://hubstaff.com',
      },
      {
        name: 'Hubstaff Talent',
        description: 'Simple job board website with no bells and whistles.',
        link: 'https://talent.hubstaff.com',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'EpicCoders',
        description: 'Co-Founder, Oct 2021 - Present',
        link: 'https://epiccoders.co',
      },
      {
        name: 'Hubstaff',
        description:
          'Senior Full Stack Developer (Ruby on Rails + Vue.js), Jun 2014 - Present',
        link: 'https://hubstaff.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, Ruby on Rails, PHP, Vue.js',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
