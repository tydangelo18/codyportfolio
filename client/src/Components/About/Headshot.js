import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../../utils/codyheadshot.jpg';

function Headshot() {
  // Style Hook
  const useStyles = makeStyles({
    headshotDiv: {
      padding: '40px',
    },
    photo: {
      width: '500px',
      height: '600px',
      border: '1px solid #ffffff',
      boxShadow:
        'rgba(228, 241, 254, 1) 0px 0px 80px -30px, rgba(149, 165, 166, 1) 0px 30px 60px -30px',
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
