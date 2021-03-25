import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import WrapRouter from 'router/WrapRouter';
import MyToast from 'common/toast';
import LoadingIcon from 'common/loading';
import DialogControl from 'common/dialog/DialogControl';

function App() {
  return (
    <div>
      <Provider store={store}>
        <WrapRouter />
        <MyToast />
        <LoadingIcon />
        <DialogControl />
      </Provider>
    </div>
  );
}

export default App;
