import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//toast modules
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//internal modules
import { getKindOfToast } from 'helper/getKindOfToast';

function MyToast() {
  // STATE
  const typeUser = useSelector((state) => state.user.type);
  const typeTodo = useSelector((state) => state.todoList.type);
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
  }, [type]);
  return <ToastContainer {...configPositionToast} />;
}

export default MyToast;
