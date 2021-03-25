import { typeDialog } from 'redux/dialog/constance';

const initialState = {
  isOpen: false,
  kindOfDialog: null,
  state: null,
};

const storeDialog = (state = initialState, action) => {
  switch (action.type) {
    case typeDialog.OPEN_DIALOG:
      return {
        ...state,
        isOpen: true,
        kindOfDialog: action.kindOfDialog,
        state: action.state,
      };
    case typeDialog.CLOSE_DIALOG:
      return (state = initialState);
    default:
      return state;
  }
};
export default storeDialog;
