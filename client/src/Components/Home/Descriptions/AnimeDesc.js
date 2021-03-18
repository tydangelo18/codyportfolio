import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Animate from '../../../utils/animate.jpg';

function AnimeDesc() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const useStyles = makeStyles((theme) => ({
    boxes: {
      marginTop: '150px',
      height: '200px',
      width: '1500px',
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.between('md', 'lg')]: {
        width: '1130px',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '300px',
        marginTop: '300px',
      },
      // boxShadow: '0px 12px 18px -6px rgba(0, 0, 0, 0.3) '
    },
    photo: {
      width: '350px',
      height: '300px',
      objectFit: 'cover',
    },
    imgP: {
      overflowWrap: 'word-wrap',
      color: '#d3d3d3',
      fontSize: '28px',
      lineHeight: '2.8',
      fontFamily: 'Work Sans',
      fontWeight: '300',
      margin: '25px',
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '15px',
      },
    },
  }));
  const classes = useStyles();
  return (
    <Fragment>
      <div data-aos='fade-left' className={classes.boxes}>
        <img className={classes.photo} src={Animate} alt='Animation'></img>
        <p className={classes.imgP}>
          My photography experience is in landscapes, graduations, parties,
          portraits, and retro aesthetics. I am experienced in many photography
          softwares and tools such as Adobe, Google Photos, Affinity Photos, and
          Instagram.{' '}
        </p>
      </div>
    </Fragment>
  );
}

export default AnimeDesc;
