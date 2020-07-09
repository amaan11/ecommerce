import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store, null, () => {});

  return { store, persistor };
}
export default configureStore();
