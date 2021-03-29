import { typeTodoList } from 'module/page/main/redux/constance';
import { typeUser } from 'module/page/account/redux/constance';
import { toast } from 'react-toastify';

export const getMessStatus = (type) => {
  switch (type) {
    //type of actions todo list
    case typeTodoList.GET_ALL_TASKS_SUCCEEDED:
      return 'Successfully fetch all tasks';
    case typeTodoList.GET_ALL_TASKS_FAILED:
      return 'Failed fetch task';
    case typeTodoList.ADD_TASK_SUCCEEDED:
      return 'Successfully adding new task';
    case typeTodoList.ADD_TASK_FAILED:
      return 'Failed adding new task';
    case typeTodoList.REMOVE_TASK_SUCCEEDED:
      return 'Successfully removing new task';
    case typeTodoList.REMOVE_TASK_FAILED:
      return 'Failed removing new task';
    case typeTodoList.UPDATE_TASK_SUCCEEDED:
      return 'Successfully updating new task';
    case typeTodoList.UPDATE_TASK_FAILED:
      return 'Failed updating new task';
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
