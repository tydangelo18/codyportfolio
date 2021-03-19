import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import HomeIcon from '../Components/About/HomeIcon';
import Headshot from '../Components/About/Headshot';
import Bio from '../Components/About/Bio';

function AboutPage() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    aboutDiv: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.between('xs', 'sm')]: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      },
    },
  }));
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Grid container direction='row'>
          <HomeIcon />
        </Grid>
        <div className={classes.aboutDiv}>
          <Grid item xs={6}>
            <Headshot />
          </Grid>
          <Grid item xs={6}>
            <Bio />
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;
