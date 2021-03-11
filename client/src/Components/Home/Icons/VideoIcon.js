import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

function VideoIcon() {
  // Style Hook
  const useStyles = makeStyles({
    videoIconDiv: {
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
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.videoIconDiv}>
        <VideocamOutlinedIcon className={classes.icon} />
        <p className={classes.iconLabel}>Videographer</p>
      </div>
    </Fragment>
  );
}

export default VideoIcon;
