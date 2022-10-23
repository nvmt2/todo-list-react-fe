import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// internal modules
import BodyContent from 'layout/body-content';
import {
  actionGetAllTasks,
  actionClearTypeTodoList,
} from 'module/page/main/redux/action';
import { actionOpenDialogAddTask } from 'common/dialog/redux/action';
import { styleHome } from 'module/page/main/home/style';
// internal component
import CardTodo from 'common/card/CardTodo';
//material-ui component
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
//material-ui icons
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Home() {
  // STATE
  const classes = styleHome();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todoList);
  const { token } = useSelector((state) => state.user);
  const typeToastOfTodoList = useSelector((state) => state.todoList.type);

  //METHOD
  const handleCreateNewTask = () => {
    dispatch(actionOpenDialogAddTask());
  };

  const getAllTasks = () => {
    dispatch(actionGetAllTasks(token));
  };

  const checkDoneTask = (descriptionTask) => {
    const DONE_CONDITION = ' - done';
    return descriptionTask.includes(DONE_CONDITION);
  };
  //LIFECYCLE
  useEffect(() => {
    !tasks && getAllTasks();
  }, [tasks]);

  useEffect(() => {
    !!typeToastOfTodoList && dispatch(actionClearTypeTodoList());
  }, [typeToastOfTodoList]);

  return (
    <BodyContent>
      {/* header */}
      <Box className={classes.titleShape}>
        <Typography variant="h3">
          {/* Todo list for everyone, done right! */}
          Todo list for, Toi 💓 Nheo
        </Typography>
      </Box>
      {/* body */}``
      <Box className={classes.body}>
        {!!tasks &&
          tasks.map((item, index) => <CardTodo {...item} key={index} />)}
      </Box>
      {/* footer */}
      <IconButton
        className={classes.buttonAdd}
        aria-label="add"
        color="primary"
        onClick={handleCreateNewTask}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
      {/* <Pagination
        className={classes.pagination}
        count={10}
        variant="outlined"
        shape="rounded"
      /> */}
    </BodyContent>
  );
}

export default Home;
