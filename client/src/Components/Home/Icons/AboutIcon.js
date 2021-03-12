import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function AboutIcon() {
  // Style Hook
  const useStyles = makeStyles({
    aboutIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '15px',
      marginRight: '15px',
    },
    icon: {
      fontSize: '50px',
      color: '#d3d3d3',
    },
    iconLabel: {
      fontSize: '15px',
      color: '#d3d3d3',
      marginTop: '1px',
      fontFamily: 'Quicksand',
      textTransform: 'capitalize',
    },
    linked: {
      textDecoration: 'none',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <Button>
        <Link to='/about' className={classes.linked}>
          <div className={classes.aboutIconDiv}>
            <PersonOutlinedIcon className={classes.icon} />
            <p className={classes.iconLabel}>About Me</p>
          </div>
        </Link>
      </Button>
    </Fragment>
  );
}

export default AboutIcon;
