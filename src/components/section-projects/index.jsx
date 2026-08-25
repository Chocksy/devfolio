import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  group: 'mb-8 last:mb-0',
  groupTitle:
    'font-xs font-light tracking-widest text-sm text-gray-600 dark:text-gray-200 leading-normal uppercase mb-4',
};

const SectionProjects = ({ projectGroups }) => {
  if (!projectGroups?.length) return null;

  return (
    <Section title="Projects">
      {projectGroups.map((group) => (
        <div key={group.title} className={classes.group}>
          <h3 className={classes.groupTitle}>{group.title}</h3>
          {group.items.map((project) => (
            <SummaryItem
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
