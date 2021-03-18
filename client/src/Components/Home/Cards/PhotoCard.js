import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Camera from '../../../utils/camera.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
    backgroundColor: '#dbe4eb',
    border: '1px solid #d3d3d3',
    [theme.breakpoints.between('md', 'lg')]: {
      width: '375px',
    },
  },
  media: {
    height: 300,
    [theme.breakpoints.between('md', 'lg')]: {
      height: '275px',
    },
  },
  cardTitle: {
    fontFamily: 'Work Sans',
    fontWeight: '300',
  },
  cardDesc: {
    fontFamily: 'Work Sans',
    fontWeight: '500',
  },
  btnFont: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '500',
  },
}));

function PhotoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Camera} title='Camera' />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant='h5'
            component='h2'
          >
            Photography
          </Typography>
          <Typography
            className={classes.cardDesc}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            I have been doing photography for over six years and I love it.{' '}
            <strong>Click this card to check out my photography portfolio.</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhotoCard;
