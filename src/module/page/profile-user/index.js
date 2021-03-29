import React from 'react';
// internal modules
import BodyContent from 'layout/body-content';
import avatar from 'assets/images/profile-user/ava.png';
// import { userProfileStyle } from 'module/page/profile-user/style';
// material-UI components
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// material-UI icon
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const userProfileStyle = makeStyles((them) => ({
  root: {
    width: '50%',
    margin: '10px auto',
    padding: '10px 20px',
    border: '1px solid gray',
    borderRadius: '5px',
    '& h3': {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    '& h6': {
      color: 'rgb(97, 97, 97)',
      fontSize: '14px',
    },
    '& .MuiFormControl-root': {
      display: 'block',
      margin: '15px 10px',
    },
    '& .MuiInputBase-root': {
      width: '80%',
    },
  },
  colorTitle: {
    color: '#3f51b5',
  },
  buttonSave: {
    margin: '10px',
  },
  wrapperUploadForm: {
    padding: '0 10px',
    margin: '20px 0',
    display: 'flex',
    alignItems: 'flex-end',
  },
  wrapperButtonUpload: {
    maxWidth: '200px',
    marginLeft: '20px',
    '& > button': {
      margin: '5px 0',
    },
  },
}));
function UserProfile() {
  const classes = userProfileStyle();
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
            defaultValue="Minh Toi"
          />
          <TextField
            variant="outlined"
            label="Email"
            defaultValue="minh@gmail.com"
          />
        </form>
        <Typography variant="h3">CHANGE PASSWORD</Typography>
        <form>
          <TextField
            label="Current Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField label="New Password" type="password" variant="outlined" />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </form>
        <Button
          className={classes.buttonSave}
          variant="outlined"
          color="primary"
        >
          Save
        </Button>
        <Button variant="outlined" color="default">
          Back
        </Button>
      </Box>
    </BodyContent>
  );
}

export default UserProfile;
