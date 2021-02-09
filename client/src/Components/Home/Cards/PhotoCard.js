import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Camera from '../../../utils/camera.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    backgroundColor: '#dbe4eb',
    border: '1px solid #ffffff',
      boxShadow:
        'rgba(228, 241, 254, 1) 0px 0px 80px -30px, rgba(149, 165, 166, 1) 0px 30px 60px -30px',
  },
  media: {
    height: 200,
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
});

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
            I have been doing photography for over six years and I love it.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.btnFont} size='small' color='primary'>
          Portfolio
        </Button>
      </CardActions>
    </Card>
  );
}



export default PhotoCard;
