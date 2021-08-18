import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {  Features,  QuickStart,  Hero , AskExpert,Works, VideoSection, Categories, Reviews, Work, Process, Articles} from './components';
import {
  courseCategories,
  partners,
  reviews,
  workReviews,
  work,
  process,
  quikeStart,
  response,
  articles


} from './data';
import {page} from '../CourseDetail/data'
const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />

      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart data={quikeStart}/>
      </SectionAlternate>
      <SectionAlternate>
        <VideoSection data={partners} />
      </SectionAlternate>
      <Section>
        <Works data={workReviews} />
      </Section>
      {/* <SectionAlternate>
        <Features />
      </SectionAlternate> */}
      <Section>
        <AskExpert/>
      </Section>
      <Section>
        <Work data={work} />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section className={classes.dividerSection}>
      <Categories data={page} />
      </Section>
      <Section narrow>
        <Process data={process} />
      </Section>
      <Section>
      <Reviews data={response} />
      </Section>
      

    </div>
  );
};

export default IndexView;
