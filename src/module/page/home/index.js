import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// internal modules
import BodyContent from 'layout/body-content';
import { getAllTasks, getTask, removeTask, updateTask } from 'service/todoApi';
import { actionGetAllTasks } from 'redux/todo-list/action';
//material-ui component
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import IconButton from '@material-ui/core/IconButton';
//material-ui icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px 20px',
  },
  parentCard: {
    minWidth: 275,
    maxWidth: 380,
    margin: 10,
    padding: 5,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  titleShape: {
    padding: '30px 30px',
    borderBottom: '3px solid #f5f7fa',
    '& > h3': {
      color: 'rgb(97, 97, 97)',
      fontWeight: '600',
      fontSize: '18px',
    },
  },
  buttonAdd: {
    position: 'fixed',
    right: '50px',
    bottom: '35px',
    borderRadius: '50% 50%',
    backgroundColor: '#f3f4ff',
    boxShadow: '10px 10px 10px #c7c7c7',
  },
});
function Home() {
  // STATE
  const classes = useStyles();
  const dispatch = useDispatch();
  const test = useSelector((state) => state);
  let arrayTest = [0, 1, 2, 4];

  //METHOD
  const getAllTasks1 = () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTY0OTIxMzd9.fGVTDvv8_EdSsM8EUqIBHv2Leeg0_8bB5W08JgLvLYk';
    dispatch(actionGetAllTasks(token));
    // getAllTasks(token)
    // .then((res) => console.log('GET_ALL_TASK: ', res))
    // .catch((err) => console.log('GET_ALL_TASK_ERR: ', err));
  };

  const getTask1 = () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTY0ODc4NjZ9.uV7ImISLDmK2v364focEmBRh-jcWz_bnAc9Cd4JKpag';
    let idTask = '605453dc1a4f9d0017e35d70';

    getTask(idTask, token)
      .then((res) => console.log('GET_TASK: ', res))
      .catch((err) => console.log('GET_TASK_ERR: ', err));
  };

  const removeTask1 = () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTY0ODc4NjZ9.uV7ImISLDmK2v364focEmBRh-jcWz_bnAc9Cd4JKpag';
    let idTask = '605453dc1a4f9d0017e35d70';
    removeTask(idTask, token)
      .then((res) => console.log('REMOVE: ', res))
      .catch((err) => console.log('REMOVE_ERR: ', err));
  };
  const update = () => {
    let idTask = '60585e607722a80017b9d796';
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTY0ODc4NjZ9.uV7ImISLDmK2v364focEmBRh-jcWz_bnAc9Cd4JKpag';
    let bodyTask = {
      description: 'go to hospital',
    };
    updateTask(idTask, bodyTask, token)
      .then((res) => console.log('UPDATE: ', res))
      .catch((err) => console.log('UPDATE_ERR: ', err));
  };
  console.log('HOME', test);

  return (
    <BodyContent>
      <Box className={classes.titleShape}>
        <Typography variant="h3">
          Todo list for everyone, done right!
        </Typography>
      </Box>
      <Box className={classes.root}>
        {arrayTest.map((item) => (
          <Card className={classes.parentCard} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                My work daily
              </Typography>
              <Typography variant="body2" component="p">
                {/* I need to finish all of my code about UI at tomorrow, and */}
                prepare something for coffee with friend
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More detail</Button>
              <Button size="small">Edit</Button>
              <Button size="small">Done</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <IconButton
        className={classes.buttonAdd}
        aria-label="add"
        color="primary"
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <Button variant="outlined" onClick={getAllTasks1}>
        get All Tasks1
      </Button>
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </BodyContent>
  );
}

export default Home;
