import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'common/dialog/redux/action';
import { styleDialog } from 'common/dialog/component/style';
import { actionUpdateTask } from 'module/page/main/redux/action';
//material-ui component
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function DialogAddTask() {
  //STATE
  const classes = styleDialog();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const { _id, description } = useSelector((state) => state.dialog.state);
  let inputDescriptionRef = useRef();

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const handleSave = () => {
    let taskUpdate = {
      description: inputDescriptionRef.current.value,
    };
    dispatch(actionUpdateTask(_id, taskUpdate, token));
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  return (
    <Box className={classes.root}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className={classes.title}>EDIT</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form className={classes.formDialog}>
          <TextField
            id="outlined-basic"
            label="Title of task"
            type="text"
            variant="outlined"
            defaultValue="My work daily"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Description of task"
            type="text"
            variant="outlined"
            fullWidth
            defaultValue={description}
            inputRef={inputDescriptionRef}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="outlined">
          Save
        </Button>
      </DialogActions>
    </Box>
  );
}

export default DialogAddTask;
