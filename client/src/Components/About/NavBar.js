import React, { Fragment } from 'react';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import StarSharpIcon from '@material-ui/icons/StarSharp';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function NavBar() {
  // Style Hook
  // TODO: ==> Make navbar position fixed once more content has been added to pages.
  const useStyles = makeStyles({
    background: {
      backgroundColor: '#444444',
    },
    navBar: {
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      margin: '5px',
      padding: '7px',
      fontSize: '40px',
      color: '#d3d3d3',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.navBar}>
          <Button>
            <Link to='/'>
              <HomeSharpIcon className={classes.icon} />
            </Link>
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;
