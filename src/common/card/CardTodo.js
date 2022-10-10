import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
//internal modules
import { actionOpenDialogEditTask } from 'common/dialog/redux/action';
import { actionRemoveTask } from 'module/page/main/redux/action';
//material-ui component
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//internal modules
import { styleCard } from 'common/card/style';

function CardTodo(props) {
  //STATE
  let { description, completed, updatedAt, createdAt, _id } = props;
  const classes = styleCard();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  let timeToFromNow = moment(createdAt).fromNow();

  //METHOD
  const handleRemoveTask = () => {
    dispatch(actionRemoveTask(_id, token));
  };
  const handleEditTask = () => {
    let payload = {
      _id,
      description,
    };
    dispatch(actionOpenDialogEditTask(payload));
  };

  //LIFECYCLE
  return (
    <Card className={classes.parentCard} variant="outlined">
      <CardContent>
        {/* <Typography variant="h5" component="h2">
          My work daily
        </Typography> */}
        <Typography variant="h5" component="p">
          {description}
        </Typography>
        <Typography className={classes.time} variant="subtitle2" component="p">
          {timeToFromNow}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">View detail</Button> */}
        <Button size="small" onClick={handleRemoveTask}>
          Done
        </Button>
        <Button size="small" onClick={handleEditTask}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardTodo;
