import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

function PhotoIcon() {
  // Style Hook
  const useStyles = makeStyles({
    photoIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '15px',
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
      <div className={classes.photoIconDiv}>
        <PhotoCameraOutlinedIcon className={classes.icon} />
        <p className={classes.iconLabel}>Photographer</p>
      </div>
    </Fragment>
  );
}

export default PhotoIcon;
