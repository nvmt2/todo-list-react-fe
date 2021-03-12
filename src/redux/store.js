import { createStore, applyMiddleware } from 'redux';
// import influence file Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/rootSaga';
// library for connect Vscode store redux with google Chorme
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'redux/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // link Vscode store redux with google Chorme
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export { store };
