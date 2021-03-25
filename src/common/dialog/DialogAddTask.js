import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'redux/dialog/action';
import { styleDialog } from 'common/dialog/style';
import { actionAddNewTask } from 'redux/todo-list/action';
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
  let inputDescriptionRef = useRef();

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const handleSave = () => {
    let body = {
      description: inputDescriptionRef.current.value,
    };
    dispatch(actionAddNewTask(body, token));
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  return (
    <Box className={classes.root}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className={classes.title}>ADDING</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form className={classes.formDialog}>
          <TextField
            id="outlined-basic"
            label="Title of task"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Description of task"
            type="text"
            variant="outlined"
            inputRef={inputDescriptionRef}
            fullWidth
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
