import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Title() {
  // Style Hook
  const useStyles = makeStyles({
    titleDiv: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Work Sans',
      fontWeight: '100',
      fontSize: '85px',
      margin: '10px',
      color: '#d3d3d3',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.titleDiv}>
        <h1 className={classes.title}>Cody J. Brown</h1>
      </div>
    </Fragment>
  );
}

export default Title;
