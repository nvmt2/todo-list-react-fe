import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moment } from 'momentCustom';
//internal modules
import { actionOpenDialogEditTask } from 'common/dialog/redux/action';
import { actionRemoveTask } from 'module/page/main/redux/action';
import { actionUpdateTask } from 'module/page/main/redux/action';
import { typeTodoList } from 'module/page/main/redux/constance';
//material-ui component
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//internal modules
import { styleCard } from 'common/card/style';

// Firebase
import { doc, updateDoc } from 'firebase/firestore';
import { db, DATABASE_NAME } from 'firebase';

// helper
import { getKindOfToast } from 'helper/getKindOfToast';

function CardTodo(props) {
  //STATE
  let {
    title,
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
      title,
    };
    dispatch(actionOpenDialogEditTask(payload));
  };

  const handleRemoveTodo = async () => {
    await updateDoc(doc(db, DATABASE_NAME.TASKS, _id), {
      removed: true,
    });
    getKindOfToast(typeTodoList.REMOVE_TASK_SUCCEEDED);
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
          {title}
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
          <Button variant="outlined" size="small" onClick={handleRemoveTodo}>
            XÓA
          </Button>
        )}

        {isDisplayDoneDraftButton && (
          <Button variant="outlined" size="small" onClick={handleEditTodo}>
            XONG
          </Button>
        )}

        {isDisplayEditButton && (
          <Button variant="outlined" size="small" onClick={handleEditTask}>
            SỬA
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default CardTodo;
