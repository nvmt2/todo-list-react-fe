import { typeDialog } from 'redux/dialog/constance';

export const actionOpenDialogAddTask = () => ({
  type: typeDialog.OPEN_DIALOG,
  kindOfDialog: typeDialog.ADD_TASK_DIALOG,
});

export const actionOpenDialogEditTask = (payload) => ({
  type: typeDialog.OPEN_DIALOG,
  kindOfDialog: typeDialog.EDIT_TASK_DIALOG,
  state: payload,
});

export const actionCloseDialog = () => ({
  type: typeDialog.CLOSE_DIALOG,
});
