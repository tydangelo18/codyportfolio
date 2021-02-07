import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

function Bio() {
  // Style Hook
  const useStyles = makeStyles({
    bioDiv: {
      textAlign: 'center',
      padding: '40px'
    },
    header: {
      overflowWrap: 'word-wrap',
      color: '#ffffff',
      fontSize: '50px',
      fontFamily: 'Work Sans',
      fontWeight: '300',
    },
    paragraph: {
      overflowWrap: 'word-wrap',
      color: '#ffffff',
      fontSize: '20px',
      lineHeight: '2.3',
      fontFamily: 'Work Sans',
      fontWeight: '500',
    },
    email: {
      color: '#ffffff',
      fontSize: '25px',
      fontFamily: 'Source Sans Pro',
      fontWeight: '300',
    },
    iconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      fontSize: '60px',
      color: '#dbe4eb',
    },
    iconLabel: {
      fontSize: '15px',
      color: '#ffffff',
      marginTop: '1px',
      fontFamily: 'Quicksand',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.bioDiv}>
        <h1 className={classes.header}>I'm Cody J. Brown</h1>
        <p className={classes.paragraph}>
          I am a Photographer/Videographer/Animator from Austin, TX. I love
          cartoons, reality tv, and my mom. Looking for a freelance
          photographer/videographer/animator? Look no further. Please check out
          my portfolios and email me to set up a consultation. Thank you.{' '}
        </p>
        {
          // Make a hyperlink
        }
        <h3 className={classes.email}>codyjacobbrown@gmail.com</h3>
        <div className={classes.iconDiv}>
          <InstagramIcon className={classes.icon} />
          <p className={classes.iconLabel}>Instagram</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Bio;
