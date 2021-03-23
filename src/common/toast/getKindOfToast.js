import { typeTodoList } from 'redux/todo-list/constance';
import { typeUser } from 'redux/user/constance';
import { toast } from 'react-toastify';

export const getMessStatus = (type) => {
  switch (type) {
    //type of actions Todo list
    // case typeTodoList.ADD_NEW_TASK_SUCCEEDED:
    //   return 'Successfully adding new task';
    // case typeTodoList.ADD_NEW_TASK_FAILED:
    //   return 'Failed adding new task';
    // case typeTodoList.REMOVE_TASK_SUCCEEDED:
    //   return 'Successfully removing a task';
    // case typeTodoList.REMOVE_TASK_FAILED:
    //   return 'Failed removing a task';

    //type of action Authentication
    case typeUser.SIGN_IN_SUCCEEDED:
      return 'Successfully sign in';
    case typeUser.SIGN_IN_FAILED:
      return 'Failed sign in';
    case typeUser.SIGN_UP_SUCCEEDED:
      return 'Successfully sign up';
    case typeUser.SIGN_UP_FAILED:
      return 'Failed sign up';
    case typeUser.SIGN_OUT_SUCCEEDED:
      return 'Successfully sign out';
    case typeUser.SIGN_OUT_FAILED:
      return 'Failed sign out';
    //type of action account
    case typeUser.UPDATE_USER_SUCCEEDED:
      return 'Successfully updating';
    case typeUser.UPDATE_USER_FAILED:
      return 'Failed updating';
    default:
      return 'Nothing';
  }
};

export const getKindOfToast = (type) => {
  let isSuccessful = type.includes('SUCCEEDED');
  let mess = getMessStatus(type);

  return isSuccessful ? toast.success(mess) : toast.error(mess);
};
