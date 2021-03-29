import { createStore, applyMiddleware } from 'redux';
// import influence file Saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/rootSaga';
// library for connect Vscode store redux with google Chorme
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'store/rootReducer';
// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
  // stateReconciler: autoMergeLevel2
};
const myPersistReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  myPersistReducer,
  // link Vscode store redux with google Chorme
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
