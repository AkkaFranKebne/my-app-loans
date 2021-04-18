import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { AddTestAction, AddTotalsAction } from '../redux/actionTypes';
import { }

interface IAppState {
  test?: IAuthenticationState;
  totals: {
    loading: boolean;
  };
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<PersistPartial, AddTestAction | AddTotalsAction> = createStore(
  persistedReducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

export default { store, persistor };
