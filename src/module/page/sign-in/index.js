import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// internal modules
import { actionSignIn, actionClearUserType } from 'redux/user/action';
import logo from 'assets/images/logo1.png';
import { signInStyle } from 'module/page/sign-in/style';
// material-UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// material-UI icon
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

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

  //METHOD
  let handleSignIn = () => {
    //sample account
    //minhtoi@gmail.com     1 -> 2
    //12345678
    //tamtran@gmail.com     1-> 3
    //12345678
    let account = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    dispatch(actionSignIn(account));
  };

  // LIFECYCLE
  useEffect(() => {
    // isAuthenticated && history.goBack();
    isAuthenticated &&
      (location.state ? history.push(location.state) : history.push('/'));
  }, [isAuthenticated]);
  useEffect(() => {
    typeToastUser && dispatch(actionClearUserType());
  }, [typeToastUser]);

  console.log('SignIn');
  return (
    <div>
      <Box className={classes.root} maxWidth="sm">
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
          Sign in using a secure link
        </Typography>
        <form>
          <Box className={classes.signInForm}>
            <TextField
              id="outlined-basic"
              label="Enter your email address"
              type="email"
              variant="outlined"
              inputRef={inputEmailRef}
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
        >
          Submit
        </Button>
        <Typography
          className={classes.subTitle2}
          variant="subtitle1"
          gutterBottom
        >
          <NavLink to="/signUp">Create new account</NavLink>, or connect with
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
      </Box>
    </div>
  );
}

export default SignIn;
