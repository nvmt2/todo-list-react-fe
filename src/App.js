import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import WrapRouter from 'router/WrapRouter';
import MyToast from 'common/toast';

function App() {
  return (
    <div>
      <Provider store={store}>
        <WrapRouter />
        <MyToast />
      </Provider>
    </div>
  );
}

export default App;
