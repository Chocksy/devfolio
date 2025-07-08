import React from 'react';

import Section from '../section';

const SectionAIStandups = () => {
  return (
    <Section title="AI Standups">
      <div className="mb-6">
        <p>
          AI&nbsp;Standups is an asynchronous daily stand-up tool powered by artificial
          intelligence. Collect updates in Slack, surface blockers and receive
          instant AI-generated summaries so your team spends less time in
          meetings and more time shipping.
        </p>
        <p className="pt-2">
          <a
            href="https://ai-standups.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Visit&nbsp;ai-standups.com&nbsp;→
          </a>
        </p>
      </div>
    </Section>
  );
};

export default SectionAIStandups;