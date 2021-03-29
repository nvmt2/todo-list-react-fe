import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
// internal modules
import { actionSignIn } from 'redux/user/action';
import logo from 'assets/images/logo1.png';
import { signInStyle } from 'module/page/sign-in/style';
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
  let signIn = () => {
    dispatch(actionSignIn());
    history.push(location.state);
  };

  // LIFECYCLE
  useEffect(() => {
    isAuthenticated && history.goBack();
  }, [isAuthenticated]);

  console.log('SignIn', location);
  return (
    <div>
      <Container maxWidth="sm">
        <Box className={classes.title}>
          <img src={logo} alt="hi" height="50px" width="200px" />
        </Box>
        <Typography
          className={classes.subTitle1}
          variant="subtitle1"
          gutterBottom
        >
          Sign in / Create an account
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
          onClick={signIn}
        >
          Submit
        </Button>
        <Typography
          className={classes.subTitle2}
          variant="subtitle1"
          gutterBottom
        >
          Or, connect with
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
      </Container>
    </div>
  );
}

export default SignIn;
