import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Button from '@material-ui/core/Button';

function AnimateIcon() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    animeIconDiv: {
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
  }));
  const classes = useStyles();
  return (
    <Fragment>
    <Button>
      <div className={classes.animeIconDiv}>
        <StarBorderOutlinedIcon className={classes.icon} />
        <p className={classes.iconLabel}>Animator</p>
      </div>
      </Button>
    </Fragment>
  );
}

export default AnimateIcon;
