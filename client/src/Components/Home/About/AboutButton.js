import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function AboutButton() {
  // Style Hook
  const useStyles = makeStyles({
    aboutbtnDiv: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px',
    },
    button: {
      color: '#dbe4eb',
      backgroundColor: '#888888',
      width: '200px',
      boxShadow:
        'rgba(228, 241, 254, 1) 0px 0px 80px -30px, rgba(149, 165, 166, 1) 0px 30px 60px -30px',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.aboutbtnDiv}>
        <Button className={classes.button} variant='contained'>
          About Me
        </Button>
      </div>
    </Fragment>
  );
}

export default AboutButton;
