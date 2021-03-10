import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function AnimateIcon() {
  // Style Hook
  const useStyles = makeStyles({
    animeIconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '15px',
    },
    icon: {
      fontSize: '30px',
      color: '#d3d3d3',
    },
    iconLabel: {
      fontSize: '10px',
      color: '#d3d3d3',
      marginTop: '1px',
      fontFamily: 'Quicksand',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.animeIconDiv}>
        <StarBorderOutlinedIcon className={classes.icon} />
        <p className={classes.iconLabel}>Animator</p>
      </div>
    </Fragment>
  );
}

export default AnimateIcon;
