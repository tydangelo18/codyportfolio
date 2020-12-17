import React, { Fragment } from 'react';
import Icons from '../Components/Icons';
import { makeStyles } from '@material-ui/core/styles';

function HomePage() {
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
        <Icons />
      </div>
    </Fragment>
  );
}

export default HomePage;
