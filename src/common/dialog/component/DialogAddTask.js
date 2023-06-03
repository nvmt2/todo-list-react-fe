import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'common/dialog/redux/action';
import { styleDialog } from 'common/dialog/component/style';
import { actionAddNewTask } from 'module/page/main/redux/action';
import { typeTodoList } from 'module/page/main/redux/constance';
//material-ui component
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// Firebase
import { addDoc, collection } from 'firebase/firestore';
import { db, DATABASE_NAME } from 'firebase';

// helper
import { getKindOfToast } from 'helper/getKindOfToast';

function DialogAddTask() {
  //STATE
  const classes = styleDialog();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  let inputDescriptionRef = useRef();
  let inputTitleRef = useRef();

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

  const handleAddTodo = async (event) => {
    const newTodo = {
      description: inputDescriptionRef.current.value,
      completed: false,
      createdAt: Date.now(),
    };

    handleClose();
    await addDoc(collection(db, DATABASE_NAME.TASKS), newTodo);
    getKindOfToast(typeTodoList.ADD_TASK_SUCCEEDED);
  };

  return (
    <Box className={classes.root}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className={classes.title}>THÊM MỚI</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form className={classes.formDialog}>
          {/* <TextField
            id="outlined-basic"
            label="Title of task"
            type="text"
            variant="outlined"
            inputRef={inputTitleRef}
            fullWidth
          /> */}
          <TextField
            id="outlined-basic"
            label="Mô tả"
            type="text"
            variant="outlined"
            inputRef={inputDescriptionRef}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary" variant="outlined">
          HỦY
        </Button>
        <Button onClick={handleAddTodo} color="primary" variant="outlined">
          LƯU
        </Button>
      </DialogActions>
    </Box>
  );
}

export default DialogAddTask;
