import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// internal modules
import {
  actionSignIn,
  actionClearUserType,
} from 'module/page/account/redux/action';
import logo from 'assets/images/logo1.png';
import { signInStyle } from 'module/page/account/sign-in/style';
// material-UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// material-UI icon
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

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
import { db } from 'firebase';

function SignIn() {
  // STATE
  const classes = signInStyle();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.user);
  const typeToastUser = useSelector((state) => state.user.type);
  let inputEmailRef = useRef();
  let inputPasswordRef = useRef();
  const [isError, setIsError] = useState();

  //METHOD
  const handleSignIn = () => {
    let account = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    dispatch(actionSignIn(account));
  };

  const validateEmail = (event) => {
    let v = event.target.value;
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    )
      ? setIsError(false)
      : setIsError(true);
  };

  const handleAddTodo = async (event) => {
    const title = 'Connect to firebase';

    await addDoc(collection(db, 'todos'), {
      title,
      completed: false,
    });
  };

  const handleGetAllTodo = async () => {
    const q = query(collection(db, 'tasks'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosQuery = [];
      querySnapshot.forEach((doc) => {
        todosQuery.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      console.log('todos: ', todosQuery);
    });
  };

  const handleEditTodo = async (todo, payload) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      title: payload.title,
    });
  };

  const handleDeleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  // LIFECYCLE
  useEffect(() => {
    isAuthenticated &&
      (location.state ? history.push(location.state) : history.push('/'));
  }, [isAuthenticated, location.state, history]);
  useEffect(() => {
    typeToastUser && dispatch(actionClearUserType());
  }, [typeToastUser, dispatch]);

  return (
    <Box className={classes.root}>
      <Box className={classes.boxSignIn}>
        <Box className={classes.title}>
          <img src={logo} alt="hi" height="50px" width="200px" />
        </Box>
        <Typography
          className={classes.subTitle1}
          variant="subtitle1"
          gutterBottom
        >
          Sign in with your account
        </Typography>
        <Typography
          className={classes.subTitle2}
          variant="subtitle2"
          gutterBottom
        >
          Sign in using a secure email
        </Typography>
        <form>
          <Box className={classes.signInForm}>
            <TextField
              id="outlined-basic"
              label="Enter your email address"
              type="email"
              variant="outlined"
              inputRef={inputEmailRef}
              error={isError}
              helperText={isError ? 'Incorrect email type' : ''}
              onChange={validateEmail}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Your password"
              type="password"
              variant="outlined"
              inputRef={inputPasswordRef}
            />
          </Box>
        </form>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={handleSignIn}
          disabled={isError}
        >
          Submit
        </Button>
        <Typography
          className={classes.subTitle2}
          variant="subtitle1"
          gutterBottom
        >
          <NavLink to="/signUp">Create new account</NavLink>, or connect with
          application
        </Typography>
        <Button
          className={classes.gitHubButton}
          variant="contained"
          color="default"
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        <Button
          className={classes.linkedInButton}
          variant="contained"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
        <Button
          className={classes.facebookButton}
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
        >
          Facebook
        </Button>

        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          // disabled={isError}
        >
          Add todo
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={handleGetAllTodo}
          // disabled={isError}
        >
          get all todo
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={() =>
            handleEditTodo(
              {
                id: 'dn81mCUIVscVEEw32q6X',
              },
              {
                title: `Updated + ${new Date()}`,
              }
            )
          }
          // disabled={isError}
        >
          Edit
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={() => handleDeleteTodo('2Kx3k1cjyjCH2YnF2D1D')}
          // disabled={isError}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
