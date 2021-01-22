import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../Components/NavBar';
import Headshot from '../Components/About/Headshot';

function AboutPage() {
  // Style Hook
  const useStyles = makeStyles({
    background: {
      backgroundColor: '#444444',
      height: '100vh',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.background}>
        <div>
          <NavBar />
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </Fragment>
  );
}

export default AboutPage;
