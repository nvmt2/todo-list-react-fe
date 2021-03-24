import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveTask, actionUpdateTask } from 'redux/todo-list/action';
//material-ui component
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//internal modules
import { styleHome } from 'module/page/home/style';

function CardTodo(props) {
  //STATE
  let { description, completed, updatedAt, createdAt, _id } = props;
  const classes = styleHome();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  //METHOD
  const handleRemoveTask = () => {
    dispatch(actionRemoveTask(_id, token));
  };
  const handleEditTask = () => {
    let taskUpdate = {
      description: 'update',
    };
    dispatch(actionUpdateTask(_id, taskUpdate, token));
  };

  //LIFECYCLE
  return (
    <Card className={classes.parentCard} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          My work daily
        </Typography>
        <Typography className={classes.time} variant="subtitle2" component="p">
          {createdAt}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRemoveTask}>
          Remove task
        </Button>
        <Button size="small">Done</Button>
        <Button size="small" onClick={handleEditTask}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardTodo;
