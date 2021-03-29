import React from 'react';
import { NavLink } from 'react-router-dom';
// internal modules
import { signUpStyle } from 'module/page/sign-up/style';
import logo from 'assets/images/logo1.png';
import { signUp } from 'service/userApi';
// material-UI component
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function SignUp(props) {
  const classes = signUpStyle();

  const handleSignUp = () => {
    let body = {
      name: 'Muhammad Nur Ali',
      email: 'tamtran@gmail.com',
      password: '12345678',
    };
    signUp(body)
      .then((res) => console.log('SignUp: ', res))
      .catch((err) => console.log('Error SignUp', err));
  };

  return (
    <Box className={classes.root} maxWidth="sm">
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
            type="email"
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Create new password"
            variant="outlined"
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
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
  );
}

export default SignUp;
