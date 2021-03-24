import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingIcon() {
  const isLoadingUser = useSelector((state) => state.user.request);
  const isLoadingTodo = useSelector((state) => state.todoList.request);
  const isLoading = isLoadingUser || isLoadingTodo;
  console.log(' User: ', isLoadingUser, ' - Todo list: ', isLoadingTodo);

  const styleLoading = {
    wrapperLoading: {
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(97, 97, 97, 0.1)',
      padding: '45vh 45vw',
      height: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
    },
    iconLoading: {
      height: 100,
      width: 100,
    },
  };
  return (
    <div>
      {isLoading && (
        <div style={styleLoading.wrapperLoading}>
          {' '}
          <div style={styleLoading.iconLoading}>
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoadingIcon;
