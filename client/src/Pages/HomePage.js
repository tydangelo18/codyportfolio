import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Components/Home/Title/Title';
import PhotoIcon from '../Components/Home/Icons/PhotoIcon';
import VideoIcon from '../Components/Home/Icons/VideoIcon';
import AnimateIcon from '../Components/Home/Icons/AnimateIcon';
import AboutIcon from '../Components/Home/Icons/AboutIcon';
import PhotoCard from '../Components/Home/Cards/PhotoCard';
import VideoCard from '../Components/Home/Cards/VideoCard';
import AnimationCard from '../Components/Home/Cards/AnimationCard';
import PhotoDesc from '../Components/Home/Descriptions/PhotoDesc';
import VideoDesc from '../Components/Home/Descriptions/VideoDesc';
import AnimeDesc from '../Components/Home/Descriptions/AnimeDesc';
import { makeStyles } from '@material-ui/core/styles';

function HomePage() {
  // Style Hook
  const useStyles = makeStyles({
    cardDiv: {
      marginTop: '40px',
    },
    iconDiv: {
      marginTop: '20px',
    },
    photoDescDiv: {
      marginTop: '80px',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Title />
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          spacing={2}
          className={classes.iconDiv}
        >
          <PhotoIcon />

          <VideoIcon />

          <AnimateIcon />

          <AboutIcon />
        </Grid>

        <Grid
          className={classes.cardDiv}
          container
          direction='row'
          justify='center'
        >
          <PhotoCard />

          <VideoCard />

          <AnimationCard />
        </Grid>
        <Grid container justify='center' className={classes.photoDescDiv}>
          <PhotoDesc />
        </Grid>
        <Grid container justify='center'>
          <VideoDesc />
        </Grid>
        <Grid container justify='center'>
          <AnimeDesc />
        </Grid>
      </div>
    </Fragment>
  );
}

export default HomePage;
