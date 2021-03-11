import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Cinema from '../../../utils/cinema.jpg';

function VideoDesc() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const useStyles = makeStyles({
    boxes: {
      marginTop: '150px',
      height: '200px',
      width: '1500px',
      display: 'flex',
      flexDirection: 'row-reverse',
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
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div data-aos='fade-right' className={classes.boxes}>
        <img className={classes.photo} src={Cinema} alt='Cinema'></img>
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

export default VideoDesc;
