import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
// internal component
import WrapRouter from 'router/WrapRouter';
import MyToast from 'common/toast';
import LoadingIcon from 'common/loading';
import DialogControl from 'common/dialog/component/DialogControl';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={<LoadingIcon />} persistor={persistor}>
          <WrapRouter />
          <MyToast />
          <LoadingIcon />
          <DialogControl />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
