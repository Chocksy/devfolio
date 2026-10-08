import { graphql, Link } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  title: 'mt-16 text-4xl text-gray-900 dark:text-white font-bold',
  updated: 'text-gray-600 dark:text-gray-200 font-light',
  content: 'mt-16 blog-content',
  backLink:
    'inline-block mt-12 font-semibold text-xs uppercase tracking-wider text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-blue-400',
};

const PrivacyPage = ({ data }) => {
  const metadata = data.site.siteMetadata;

  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for chocksy.com and OpenSEO, an internal SEO tool with read-only Google Search Console and Analytics access."
      />
      <Header metadata={metadata} noBlog />
      <h1 className={classes.title}>Privacy Policy</h1>
      <p className={classes.updated}>Last updated: October 8, 2026</p>
      <div className={classes.content}>
        <p>
          This policy applies to <a href="https://chocksy.com/">chocksy.com</a> and
          to OpenSEO, an internal SEO tool that Razvan Ciocanel self-hosts at{' '}
          <a href="https://seo.chocksy.com">seo.chocksy.com</a>. Access to
          OpenSEO is restricted to Razvan.
        </p>
        <p>
          OpenSEO connects to Google Search Console and Google Analytics with
          read-only access. The data is used only by Razvan to analyse his own
          websites.
        </p>
        <p>
          Data is not shared, sold, or used for advertising. It is not
          transferred to third parties except as needed to run the tool (for
          example, hosting and Google&apos;s APIs).
        </p>
        <p>
          OAuth tokens are encrypted at rest. You can revoke access at any time
          from the{' '}
          <a href="https://myaccount.google.com/permissions">
            Google Account permissions
          </a>{' '}
          page. Data is deleted on request.
        </p>
        <p>
          Use of Google API data complies with the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p>
          Questions? Contact{' '}
          <a href="mailto:chocksy@gmail.com">chocksy@gmail.com</a>.
        </p>
      </div>
      <Link className={classes.backLink} to="/">
        ← Back to home
      </Link>
    </Layout>
  );
};

export default PrivacyPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        angellist
      }
    }
  }
`;
