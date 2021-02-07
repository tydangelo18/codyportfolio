import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Components/Home/Title/Title';
import Icons from '../Components/Home/Icons/Icons';
// import { makeStyles } from '@material-ui/core/styles';

function HomePage() {
  // Style Hook
  //const useStyles = makeStyles({

  //});
  // const classes = useStyles();
  return (
    <Fragment>
      <div className='titleHeader'>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Icons />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default HomePage;
