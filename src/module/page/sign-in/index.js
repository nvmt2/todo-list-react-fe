import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// internal modules
import { actionSignIn } from 'redux/user/action';
import logo from 'assets/images/logo1.png';
import { signInStyle } from 'module/page/sign-in/style';
import { getUser, signIn, signOut, updateUser } from 'service/userApi';
// material-UI component
import Container from '@material-ui/core/Container';
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
  let classes = signInStyle();
  let dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();
  let { isAuthenticated } = useSelector((state) => state.user);
  let handleSignIn = () => {
    // dispatch(actionSignIn());
    // location.state ? history.push(location.state) : history.push('/')
    let body = {
      email: 'minhtoi@gmail.com',
      password: '12345678',
    };
    signIn(body)
      .then((res) => console.log('Sign-in: ', res))
      .catch((err) => console.log('Error Sign-in', err));
  };
  const handleSignOut = () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTYxNDMyODl9.H3ua2SSOOgHt-HbrnCEw9-fXJ1uzJOH6uj-4UBpqlws';

    signOut(token)
      .then((res) => console.log('SignOut: ', res))
      .catch((err) => console.log('Error SignOut', err));
  };
  const handleUpdateUser = () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU0NTJhMjFhNGY5ZDAwMTdlMzVkNmMiLCJpYXQiOjE2MTYxNDI4ODh9.YyghWw9EUXUioFVN8KjcYB0OxgdFPOowj5kSbPdXHBc';
    let payload = {
      name: 'minhtoi',
    };

    updateUser(payload, token)
      .then((res) => console.log('UPDATE: ', res))
      .catch((err) => console.log('ERR UPDATE', err));
  };
  // LIFECYCLE
  useEffect(() => {
    isAuthenticated && history.goBack();
  }, [isAuthenticated]);

  console.log('SignIn', location);
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
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Your password"
              variant="outlined"
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
        <Button variant="contained" onClick={handleSignOut}>
          Logout
        </Button>
        <Button variant="contained" onClick={handleUpdateUser}>
          Update
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
