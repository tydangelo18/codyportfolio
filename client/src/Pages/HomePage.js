import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Components/Home/Title/Title';
import PhotoIcon from '../Components/Home/Icons/PhotoIcon';
import VideoIcon from '../Components/Home/Icons/VideoIcon';
import AnimateIcon from '../Components/Home/Icons/AnimateIcon';
import PhotoCard from '../Components/Home/Cards/PhotoCard';
import VideoCard from '../Components/Home/Cards/VideoCard';
import AnimationCard from '../Components/Home/Cards/AnimationCard';
// import AboutButton from '../Components/Home/About/AboutButton';
// import { makeStyles } from '@material-ui/core/styles';

function HomePage() {
  // Style Hook
  // const useStyles = makeStyles({});
  // const classes = useStyles();
  return (
    <Fragment>
      <div className='titleHeader'>
        <Grid container>
          <Grid item xs={12}>
            <Title />
          </Grid>
        </Grid>
        <Grid
          container
          container
          direction='row'
          justify='center'
          spacing={2}
        >
          <Grid>
            <PhotoIcon />
          </Grid>
          <Grid>
            <VideoIcon />
          </Grid>
          <Grid>
            <AnimateIcon />
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          spacing={1}
        >
          <Grid>
            <PhotoCard />
          </Grid>
          <Grid>
            <VideoCard />
          </Grid>
          <Grid>
            <AnimationCard />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default HomePage;
