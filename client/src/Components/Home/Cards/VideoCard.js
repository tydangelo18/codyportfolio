import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Cinema from '../../../utils/cinema.jpg';

const useStyles = makeStyles({
  root: {
    width: '500px',
    backgroundColor: '#dbe4eb',
    border: '1px solid #d3d3d3',
  },
  media: {
    height: 300,
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

function VideoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Cinema} title='Cinema' />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant='h5'
            component='h2'
          >
            Videography
          </Typography>
          <Typography
            className={classes.cardDesc}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            I have been doing videography for over two years as a career.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
