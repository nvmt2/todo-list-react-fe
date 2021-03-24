import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import WrapRouter from 'router/WrapRouter';
import MyToast from 'common/toast';
import LoadingIcon from 'common/loading';
import MyDialog from 'common/dialog';

function App() {
  return (
    <div>
      <Provider store={store}>
        <WrapRouter />
        <MyToast />
        <LoadingIcon />
        <MyDialog />
      </Provider>
    </div>
  );
}

export default App;
