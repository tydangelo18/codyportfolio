import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../Components/NavBar';
import Headshot from '../Components/About/Headshot';
import Bio from '../Components/About/Bio';

function AboutPage() {
  // Style Hook
  const useStyles = makeStyles({
    background: {
      backgroundColor: '#444444',
      height: '100vh',
    },
    aboutDiv: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.background}>
        <div>
          <NavBar />
        </div>
        <div className={classes.aboutDiv}>
          <div>
            <Headshot />
          </div>
          <div>
            <Bio />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;
