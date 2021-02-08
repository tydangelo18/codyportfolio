import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Animate from '../../../utils/animate.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    backgroundColor: '#dbe4eb',
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

function AnimationCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Animate} title='Animate' />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant='h5'
            component='h2'
          >
            Animations
          </Typography>
          <Typography
            className={classes.cardDesc}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            I have been doing animations for a little bit of time.
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

export default AnimationCard;
