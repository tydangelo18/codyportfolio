import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';

function Bio() {
  // Style Hook
  const useStyles = makeStyles((theme) => ({
    bioDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      marginRight: '50px',
      [theme.breakpoints.between('xs', 'sm')]: {
        padding: '0px',
        margin: '0px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        padding: '0px',
        margin: '0px',
      },
    },
    header: {
      overflowWrap: 'word-wrap',
      color: '#d3d3d3',
      fontSize: '50px',
      fontFamily: 'Work Sans',
      fontWeight: '300',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '50px',
      },
    },
    paragraph: {
      overflowWrap: 'word-wrap',
      textAlign: 'center',
      color: '#d3d3d3',
      fontSize: '20px',
      lineHeight: '2.3',
      fontFamily: 'Work Sans',
      fontWeight: '500',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '15px',
        lineHeight: '1.9',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '20px',
        lineHeight: '2.3',
      },
    },
    subPara: {
      overflowWrap: 'word-wrap',
      textAlign: 'center',
      color: '#d3d3d3',
      fontSize: '20px',
      lineHeight: '2.3',
      fontFamily: 'Work Sans',
      fontWeight: '500',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '15px',
        lineHeight: '1.9',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '20px',
        lineHeight: '2.3',
      },
    },
    email: {
      color: '#d3d3d3',
      fontSize: '25px',
      fontFamily: 'Source Sans Pro',
      fontWeight: '300',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '25px',
      },
    },
    iconDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      fontSize: '60px',
      color: '#d3d3d3',
      textDecoration: 'none',
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
      textDecoration: 'none',
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
      <div className={classes.bioDiv}>
        <h1 className={classes.header}>What's Up?</h1>
        <p className={classes.paragraph}>
          I’m Cody Brown — videographer; photographer; editor; animator; and
          lover of film, television and cartoons. I’ve been editing video since
          I was 15, and the camera in my hands came shortly after. I love Dallas
          Sports and my kitty, Ramona. I’m located in Austin, TX.{' '}
        </p>
        <p className={classes.subPara}>
          If you like my work, feel free to let me know!
        </p>
        {
          // Make a hyperlink
        }
        <h3 className={classes.email}>codyjacobbrown@gmail.com</h3>
        <Button>
          <div className={classes.iconDiv}>
            <a href='https://www.instagram.com/cjbphot/' target='null'>
              <InstagramIcon className={classes.icon} />
            </a>
            <p className={classes.iconLabel}>Instagram</p>
          </div>
        </Button>
      </div>
    </Fragment>
  );
}

export default Bio;
