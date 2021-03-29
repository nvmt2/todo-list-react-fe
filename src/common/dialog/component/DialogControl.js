import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//internal modules
import { actionCloseDialog } from 'common/dialog/redux/action';
import { typeDialog } from 'common/dialog/redux/constance';
//internal component
import DialogAddTask from 'common/dialog/component/DialogAddTask';
import DialogEditTask from 'common/dialog/component/DialogEditTask';
//material-ui components
import Dialog from '@material-ui/core/Dialog';

function DialogControl() {
  //STATE
  const { kindOfDialog, isOpen } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  //METHOD
  const handleClose = () => {
    dispatch(actionCloseDialog());
  };
  const showBodyDialog = () => {
    switch (kindOfDialog) {
      case typeDialog.ADD_TASK_DIALOG:
        return <DialogAddTask />;
      case typeDialog.EDIT_TASK_DIALOG:
        return <DialogEditTask />;
      default:
        return null;
    }
  };
  console.log('DialogControl');

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullWidth
        maxWidth="md"
      >
        {showBodyDialog()}
      </Dialog>
    </div>
  );
}
export default DialogControl;
