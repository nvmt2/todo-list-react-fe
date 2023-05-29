import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
//internal modules
import { actionOpenDialogEditTask } from 'common/dialog/redux/action';
import { actionRemoveTask } from 'module/page/main/redux/action';
import { actionUpdateTask } from 'module/page/main/redux/action';
//material-ui component
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//internal modules
import { styleCard } from 'common/card/style';

// Firebase
import {
  doc,
  addDoc,
  collection,
  onSnapshot,
  query,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db, DATABASE_NAME } from 'firebase';

function CardTodo(props) {
  //STATE
  let {
    description,
    completed,
    updatedAt,
    createdAt,
    _id,
    isDisplayRemoveButton,
    isDisplayEditButton,
    isDisplayDoneDraftButton,
  } = props;
  const classes = styleCard();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  let timeToFromNow = moment(createdAt).fromNow();

  //METHOD
  const handleRemoveTask = () => {
    dispatch(actionRemoveTask(_id, token));
  };

  const handleSaveDraft = () => {
    let taskUpdate = {
      description: description + ' - done',
    };

    dispatch(actionUpdateTask(_id, taskUpdate, token));
  };

  const handleEditTask = () => {
    let payload = {
      _id,
      description,
    };
    dispatch(actionOpenDialogEditTask(payload));
  };

  const handleRemoveTodo = async () => {
    await deleteDoc(doc(db, DATABASE_NAME.TASKS, _id));
  };

  const handleEditTodo = async (payload) => {
    await updateDoc(doc(db, DATABASE_NAME.TASKS, _id), {
      completed: true,
    });
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
        {isDisplayRemoveButton && (
          <Button size="small" onClick={handleRemoveTodo}>
            REMOVE
          </Button>
        )}

        {isDisplayDoneDraftButton && (
          <Button size="small" onClick={handleEditTodo}>
            COMPLETED
          </Button>
        )}

        {isDisplayEditButton && (
          <Button size="small" onClick={handleEditTask}>
            Edit
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default CardTodo;
