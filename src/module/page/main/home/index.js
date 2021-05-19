import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState(null);
  const [isOnline, setIsOnline] = useState(null);

  //METHOD
  const handleCreateNewTask = () => {
    dispatch(actionOpenDialogAddTask());
  };
  const getAllTasks = () => {
    dispatch(actionGetAllTasks(token));
  };

  //LIFECYCLE
  useEffect(() => {
    !tasks && getAllTasks();
  }, [tasks]);
  useEffect(() => {
    !!typeToastOfTodoList && dispatch(actionClearTypeTodoList());
  }, [typeToastOfTodoList]);
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          setIsOnline(true);
          // setData(result);
          if (typeof Storage !== 'undefined') {
            localStorage.setItem('todo', JSON.stringify(result));
            let collection = localStorage.getItem('todo');
            setData(JSON.parse(collection));
          } else {
            alert('BrW is not support localStorage');
          }
        });
      })
      .catch(() => {
        setIsOnline(false);
        let collection = localStorage.getItem('todo');
        setData(JSON.parse(collection));
      });
  }, []);
  return (
    <BodyContent>
      {/* header */}
      <Box className={classes.titleShape}>
        <Typography variant="h3">
          Todo list for everyone, done right!
          <br></br>
          {!!data && data.title}
        </Typography>
        <p>
          {isOnline
            ? "You're online"
            : "You're offline ( no connect internat )"}
        </p>
        <button onClick={() => alert('Hello')}>Click</button>
      </Box>
      {/* body */}
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
      <Pagination
        className={classes.pagination}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </BodyContent>
  );
}

export default Home;
