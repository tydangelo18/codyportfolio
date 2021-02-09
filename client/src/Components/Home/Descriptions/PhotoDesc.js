import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Camera from '../../../utils/camera.jpg';

function PhotoDesc() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const useStyles = makeStyles({
    boxes: {
      marginTop: '300px',
      marginLeft: '50px',
      height: '200px',
      width: '1000px',
      display: 'flex',
      flexDirection: 'row',
      // boxShadow: '0px 12px 18px -6px rgba(0, 0, 0, 0.3) '
    },
    photo: {
      width: '300px',
      height: '250px',
      objectFit: 'cover',
    },
    imgP: {
      overflowWrap: 'word-wrap',
      color: '#ffffff',
      fontSize: '20px',
      lineHeight: '2.8',
      fontFamily: 'Work Sans',
      fontWeight: '300',
      margin: '25px',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div data-aos='fade-left' className={classes.boxes}>
        <img className={classes.photo} src={Camera} alt='Camera'></img>
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

export default PhotoDesc;
