import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import HomeIcon from '../Components/About/HomeIcon';
import Headshot from '../Components/About/Headshot';
import Bio from '../Components/About/Bio';

function AboutPage() {
  // Style Hook
  const useStyles = makeStyles({
    aboutDiv: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Grid container direction='row'>
          <HomeIcon />
        </Grid>
        <div className={classes.aboutDiv}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              {
                // Empty Space
              }
            </Grid>
            <Grid item xs={5}>
              <Headshot />
            </Grid>
            <Grid item xs={5}>
              <Bio />
            </Grid>
            <Grid item xs={1}>
              {
                // Empty Space
              }
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;
