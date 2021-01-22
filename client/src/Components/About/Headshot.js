import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../../utils/codyheadshot.jpg';

function Headshot() {
  // Style Hook
  const useStyles = makeStyles({
    headshotDiv: {
      backgroundColor: '#444444',
      marginLeft: '100px',
      marginTop: '50px',
    },
    photo: {
      width: '500px',
      height: '600px',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.headshotDiv}>
        <div>
          <img
            className={classes.photo}
            src={headshot}
            alt='Professional Headshot'
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Headshot;
