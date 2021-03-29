import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//toast modules
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//internal modules
import { getKindOfToast } from 'common/toast/getKindOfToast';

function MyToast() {
  // STATE
  let typeUser = useSelector((state) => state.user.type);
  let typeTodo = useSelector((state) => state.todoList.type);
  let type = typeUser || typeTodo;
  let configPositionToast = {
    position: 'top-right',
    autoClose: 500,
    transition: Flip,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
  };
  // LIFECYCLE
  useEffect(() => {
    type && getKindOfToast(type);
    // type.length !== 0 &&
    //   type.map((item) => {
    //     getKindOfToast(item);
    //     dispatch(removeToast());
    //   });
  }, [type]);
  console.log('MyToast');
  return <ToastContainer {...configPositionToast} />;
}

export default MyToast;