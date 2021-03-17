import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function AboutIcon() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    aboutIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '15px',
      marginRight: '15px',
      [theme.breakpoints.between('xs', 'sm')]: {
        marginLeft: '0px',
        marginRight: '0px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginLeft: '15px',
        marginRight: '15px',
      },
    },
    icon: {
      fontSize: '50px',
      color: '#d3d3d3',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '50px',
      },
    },
    iconLabel: {
      fontSize: '15px',
      color: '#d3d3d3',
      marginTop: '1px',
      fontFamily: 'Quicksand',
      textTransform: 'capitalize',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '15px',
      },
    },
    linked: {
      textDecoration: 'none',
    },
  }));
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
