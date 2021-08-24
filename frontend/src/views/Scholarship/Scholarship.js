import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import { SectionAlternate } from 'components/organisms';
import { Application, } from './components';


const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));
const Scholarship = () => {

  const classes = useStyles();
  return (
    <div>
      <SectionAlternate innerNarrowed>
        <Application className={classes.pagePaddingTop} />
      </SectionAlternate>
    </div>
  );
};

export default Scholarship;
