import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// internal modules
import BodyContent from 'layout/body-content';
import avatar from 'assets/images/profile-user/ava.png';
import { userProfileStyle } from 'module/page/profile-user/style';
import { actionUpdateUser } from 'redux/user/action';
// material-UI components
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// material-UI icon
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function UserProfile() {
  //STATE
  const classes = userProfileStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const informationUser = useSelector((state) => state.user.data);
  const { token } = useSelector((state) => state.user);
  let inputNameRef = useRef();
  let inputEmailRef = useRef();
  let inputPasswordRef = useRef();
  let inputPasswordConfirmRef = useRef();

  //METHOD
  const handleGoBack = () => {
    history.push('/');
  };
  const handleSave = () => {
    let password = inputPasswordRef.current.value;
    let confirmPassword = inputPasswordConfirmRef.current.value;
    if (password === confirmPassword) {
      let informationUser = {
        name: inputNameRef.current.value,
        email: inputEmailRef.current.value,
        password,
      };
      dispatch(actionUpdateUser(informationUser, token));
    } else {
      alert('Password is not the same, type again!');
    }
  };
  console.log('UserProfile');
  return (
    <BodyContent>
      <Box className={classes.root}>
        <Typography variant="h3" className={classes.colorTitle}>
          EDIT INFORMATION
        </Typography>
        <Box className={classes.wrapperUploadForm}>
          <img src={avatar} alt="avatar" height="170px" width="160px" />
          <Box className={classes.wrapperButtonUpload}>
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
            <Typography variant="subtitle2">
              Acceptable format jpg, png. And max file size is 500kb
            </Typography>
          </Box>
        </Box>
        <Typography variant="h3">ACCOUNT INFORMATION</Typography>

        <form>
          <TextField
            variant="outlined"
            label="Full name"
            defaultValue={informationUser.name}
            inputRef={inputNameRef}
          />
          <TextField
            variant="outlined"
            label="Email"
            defaultValue={informationUser.email}
            inputRef={inputEmailRef}
          />
        </form>
        <Typography variant="h3">CHANGE PASSWORD</Typography>
        <form>
          {/* <TextField
            type="password"
            label="Current Password"
            autoComplete="current-password"
            variant="outlined"
          /> */}
          <TextField
            type="password"
            label="New Password"
            variant="outlined"
            inputRef={inputPasswordRef}
          />
          <TextField
            type="password"
            label="Confirm Password"
            variant="outlined"
            inputRef={inputPasswordConfirmRef}
          />
        </form>
        <Button
          className={classes.buttonSave}
          variant="outlined"
          color="primary"
          onClick={handleSave}
        >
          Save
        </Button>
        <Button variant="outlined" color="default" onClick={handleGoBack}>
          Back
        </Button>
      </Box>
    </BodyContent>
  );
}

export default UserProfile;
