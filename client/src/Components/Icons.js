import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import StarSharpIcon from '@material-ui/icons/StarSharp';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';

function Icons() {
  // Style Hook
  const useStyles = makeStyles({
    iconDiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    icon: {
      margin: '10px',
      fontSize: '80px',
      color: '#dbe4eb',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.iconDiv}>
        <PhotoCameraSharpIcon className={classes.icon} />
        <VideocamSharpIcon className={classes.icon} />
        <StarSharpIcon className={classes.icon} />
        <FaceSharpIcon className={classes.icon} />
      </div>
    </Fragment>
  );
}

export default Icons;
