import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// internal modules
import BodyContent from 'layout/body-content';
import { userProfileStyle } from 'module/page/account/profile-user/style';
import {
  actionUpdateUser,
  actionClearUserType,
  actionUpdateImage,
} from 'module/page/account/redux/action';
import FileUploader from 'common/input-file';
// material-UI components
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function UserProfile() {
  //STATE
  const classes = userProfileStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const informationUser = useSelector((state) => state.user.data);
  const typeToastUser = useSelector((state) => state.user.type);
  const { token } = useSelector((state) => state.user);
  let inputNameRef = useRef();
  let inputEmailRef = useRef();
  let inputPasswordRef = useRef();
  let inputPasswordConfirmRef = useRef();
  let [selectedFile, setSelectedFile] = useState();

  //METHOD
  const handleGoBack = () => {
    history.push('/');
  };
  const handleSave = () => {
    let password = inputPasswordRef.current.value;
    let confirmPassword = inputPasswordConfirmRef.current.value;
    if (password === confirmPassword) {
      // handle for information text
      let informationUser = {
        name: inputNameRef.current.value,
        email: inputEmailRef.current.value,
        password,
      };
      dispatch(actionUpdateUser(informationUser, token));

      // handle for image
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      dispatch(actionUpdateImage(formData, token));
    } else {
      alert('Password must to similar, type again!');
    }
  };
  const clearUserType = useCallback(() => {
    !!typeToastUser && dispatch(actionClearUserType());
  }, [dispatch, typeToastUser]);

  //LIFECYCLE
  useEffect(() => {
    clearUserType();
  }, [clearUserType]);

  console.log('UserProfile');
  return (
    <BodyContent>
      <Box className={classes.root}>
        <Typography variant="h3" className={classes.colorTitle}>
          EDIT INFORMATION
        </Typography>
        <Box className={classes.wrapperUploadForm}>
          <img
            id="outputUserProfile"
            alt="profile user"
            height="170px"
            width="160px"
          />
          <Box className={classes.wrapperButtonUpload}>
            <FileUploader setSelectedFile={setSelectedFile} />
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
        <br />
        <Button variant="outlined" color="default" onClick={handleGoBack}>
          Back
        </Button>
      </Box>
    </BodyContent>
  );
}

export default UserProfile;
