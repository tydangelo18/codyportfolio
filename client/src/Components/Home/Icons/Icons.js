import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Icons() {
  // Style Hook
  const useStyles = makeStyles({
    iconDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '8px',
    },
    photoIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '15px',
    },
    videoIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '15px',
      marginRight: '15px',
    },
    animeIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '15px',
    },
    icon: {
      fontSize: '45px',
      color: '#dbe4eb',
    },
    iconLabel: {
      fontSize: '12px',
      color: '#ffffff',
      marginTop: '1px',
      fontFamily: 'Quicksand',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.iconDiv}>
        <div className={classes.photoIconDiv}>
          <PhotoCameraOutlinedIcon className={classes.icon} />
          <p className={classes.iconLabel}>Photographer</p>
        </div>
        <div className={classes.videoIconDiv}>
          <VideocamOutlinedIcon className={classes.icon} />
          <p className={classes.iconLabel}>Videographer</p>
        </div>
        <div className={classes.animeIconDiv}>
          <StarBorderOutlinedIcon className={classes.icon} />
          <p className={classes.iconLabel}>Animator</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Icons;
