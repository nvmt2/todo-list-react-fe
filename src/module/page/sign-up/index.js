import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// internal modules
import { signUpStyle } from 'module/page/sign-up/style';
import logo from 'assets/images/logo1.png';
import { actionSignUp } from 'redux/user/action';
import { actionClearUserType } from 'redux/user/action';
// material-UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function SignUp() {
  //STATE
  const classes = signUpStyle();
  const dispatch = useDispatch();
  const typeToastUser = useSelector((state) => state.user.type);
  let inputNameRef = useRef();
  let inputEmailRef = useRef();
  let inputPasswordRef = useRef();

  //METHOD
  const handleSignUp = () => {
    let body = {
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    dispatch(actionSignUp(body));
  };
  //LIFECYCLE
  useEffect(() => {
    typeToastUser && dispatch(actionClearUserType());
  }, [typeToastUser]);
  console.log('SignUp: ');

  return (
    <Box className={classes.root}>
      <Box className={classes.boxSignUp} maxWidth="sm">
        <Box className={classes.title}>
          <img src={logo} alt="hi" height="50px" width="200px" />
        </Box>
        <Typography
          className={classes.subTitle1}
          variant="subtitle1"
          gutterBottom
        >
          Create an account
        </Typography>
        <Typography
          className={classes.subTitle2}
          variant="subtitle2"
          gutterBottom
        >
          Register new your account
        </Typography>
        <form>
          <Box className={classes.signInForm}>
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
              inputRef={inputNameRef}
            />
            <TextField
              type="email"
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              inputRef={inputEmailRef}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Enter password"
              variant="outlined"
              inputRef={inputPasswordRef}
            />
          </Box>
        </form>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          onClick={handleSignUp}
        >
          Submit
        </Button>
        <Typography
          className={classes.subTitle2}
          variant="subtitle1"
          gutterBottom
        >
          <NavLink to="/signIn">I already had an account</NavLink>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUp;
