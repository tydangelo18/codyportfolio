import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Components/Home/Title/Title';
import PhotoIcon from '../Components/Home/Icons/PhotoIcon';
import VideoIcon from '../Components/Home/Icons/VideoIcon';
import AnimateIcon from '../Components/Home/Icons/AnimateIcon';
import PhotoCard from '../Components/Home/Cards/PhotoCard';
import VideoCard from '../Components/Home/Cards/VideoCard';
import AnimationCard from '../Components/Home/Cards/AnimationCard';
import PhotoDesc from '../Components/Home/Descriptions/PhotoDesc';
// import AboutButton from '../Components/Home/About/AboutButton';
import { makeStyles } from '@material-ui/core/styles';

function HomePage() {
  // Style Hook
  const useStyles = makeStyles({
    cardDiv: {
      marginTop: '100px',
    },
  });
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title />
          </Grid>
        </Grid>
        <Grid container direction='row' justify='center' spacing={2}>
          <PhotoIcon />

          <VideoIcon />

          <AnimateIcon />
        </Grid>

        <Grid
          className={classes.cardDiv}
          container
          direction='row'
          justify='space-evenly'
        >
          <PhotoCard />

          <VideoCard />

          <AnimationCard />
        </Grid>
        <Grid>
          <PhotoDesc />
        </Grid>
      </div>
    </Fragment>
  );
}

export default HomePage;
