module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://chocksy.com/`,
    // Your Name
    name: 'Razvan Ciocanel',
    // Main Site Title
    title: `Răzvan Ciocănel | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `AI Toolmaker | Lead Dev at <a class=" text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400" href="https://hubstaff.com">@hubstaff</a> | Founder of <a class=" text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400" href="https://github.com/EpicCoders">@epiccoders</a>`,
    // Optional: Twitter account handle
    author: `@chocksy`,
    // Optional: Github account URL
    github: `https://github.com/Chocksy`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chocksy/`,
    // Optional: AngelList account URL
    angellist: `https://angel.co/u/chocksy`,
    // Content of the About Me section
    about: `Building tools that make developers and AI agents work better together. By day I lead development at <a href="https://hubstaff.com">Hubstaff</a>. By night I build AI developer tools like <a href="https://getcems.com">CEMS</a> (persistent memory for coding assistants) and <a href="https://ai-standups.com">AI Standups</a>. I've worked with Python, TypeScript, Ruby, Rails, React, Vue, and more — always picking the right tool for the job. Co-founder of <a href="https://github.com/EpicCoders">EpicCoders</a>.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CEMS',
        description:
          'Persistent memory for AI coding assistants — Claude Code, Cursor, Codex, and Goose remember decisions, preferences, and context across sessions.',
        link: 'https://getcems.com',
      },
      {
        name: 'Gooseherd',
        description:
          'Self-hosted AI coding agent orchestrator — herds Goose agents via Slack and opens PRs automatically.',
        link: 'https://goose-herd.com',
      },
      {
        name: 'AI Standups',
        description:
          'Asynchronous daily stand-ups powered by AI — collect updates in Slack, surface blockers, and get auto-generated summaries.',
        link: 'https://ai-standups.com',
      },
      {
        name: 'EpicPxls',
        description:
          'Design resources marketplace — free and premium icons, UI kits, and templates for developers and designers.',
        link: 'https://www.epicpxls.com',
      },
      {
        name: 'Hubstaff',
        description:
          'Lead developer — built the payroll system, scaled the codebase with Ruby on Rails, Vue.js, and PostgreSQL.',
        link: 'https://hubstaff.com',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'EpicCoders',
        description: 'Co-Founder, Oct 2012 - Present',
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
          'Python, TypeScript, Ruby on Rails, JavaScript (ES6+), Node.js, React, Vue.js',
      },
      {
        name: 'AI & Infrastructure',
        description:
          'Claude Code, MCP servers, pgvector, OpenRouter, LLM pipelines, embeddings',
      },
      {
        name: 'Databases',
        description: 'PostgreSQL, MongoDB, MySQL',
      },
      {
        name: 'DevOps',
        description:
          'Docker, Cloudflare Pages, Coolify, CI/CD, Microservices, API design',
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
        name: `chocksy-portfolio`,
        short_name: `chocksy-portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
