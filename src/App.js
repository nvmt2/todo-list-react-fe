import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'redux/store';
import WrapRouter from 'router/WrapRouter';

function App() {
  return (
    <div>
      <Provider store={store}>
        <WrapRouter />
      </Provider>
    </div>
  );
}

export default App;
