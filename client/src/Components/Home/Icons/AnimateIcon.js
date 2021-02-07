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
      <div className={classes.animeIconDiv}>
        <StarBorderOutlinedIcon className={classes.icon} />
        <p className={classes.iconLabel}>Animator</p>
      </div>
    </Fragment>
  );
}

export default AnimateIcon;
