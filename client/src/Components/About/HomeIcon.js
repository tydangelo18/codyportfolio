import React, { Fragment } from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function HomeIcon() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    homeIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
        <Link to='/' className={classes.linked}>
          <div className={classes.homeIconDiv}>
            <HomeOutlinedIcon className={classes.icon} />
            <p className={classes.iconLabel}>Home</p>
          </div>
        </Link>
      </Button>
    </Fragment>
  );
}

export default HomeIcon;
