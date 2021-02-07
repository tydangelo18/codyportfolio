import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import StarSharpIcon from '@material-ui/icons/StarSharp';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
        <Button>
          <Link to='/photos'>
            <PhotoCameraSharpIcon className={classes.icon} />
          </Link>
        </Button>
        <Button>
          <Link to='/videos'>
            <VideocamSharpIcon className={classes.icon} />
          </Link>
        </Button>
        <Button>
          <Link to='/animations'>
            <StarSharpIcon className={classes.icon} />
          </Link>
        </Button>
        <Button>
          <Link to='/about'>
            <FaceSharpIcon className={classes.icon} />
          </Link>
        </Button>
      </div>
    </Fragment>
  );
}

export default Icons;
