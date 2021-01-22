import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../Components/NavBar';

function AnimatePage() {
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
      </div>
    </Fragment>
  ); 
}

export default AnimatePage;
