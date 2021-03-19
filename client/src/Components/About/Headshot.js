import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../../utils/codyheadshot.jpg';

function Headshot() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    headshotDiv: {
      padding: '40px',
      [theme.breakpoints.between('xs', 'sm')]: {
        display: 'flex',
        justifyContent: 'center',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    photo: {
      width: '500px',
      height: '600px',
      border: '1px solid #d3d3d3',
      boxShadow:
        'rgba(228, 241, 254, 1) 0px 0px 80px -30px, rgba(149, 165, 166, 1) 0px 30px 60px -30px',
      marginLeft: '50px',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '300px',
        height: '375px',
        marginLeft: '0px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '500px',
        height: '600px',
        marginLeft: '0px',
      },
    },
  }));
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
