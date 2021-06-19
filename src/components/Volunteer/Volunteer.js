import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "./Volunteer.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Volunteer = (props) => {
    const {name,img, id} = props.volunteerObj;
    const classes = useStyles();
    return (
      <div className="volunteer">
        <Card className={classes.root}>
          <Link to={`/event/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
    </Card>
    </div>
    );
};

export default Volunteer;