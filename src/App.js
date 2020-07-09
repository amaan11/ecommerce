import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from '../src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NotificationContainer } from 'react-notifications';

// css Import
import 'antd/dist/antd.css';
import './assets/styles/index.scss';
import 'react-notifications/lib/notifications.css';
import './utils/firebase';

// Component Import
import HomePage from './screens/HomePage';
import Product from './screens/Product';
import ProductDetails from './screens/ProductDetails';

function App() {
  const { store, persistor } = configureStore;
  return (
    <React.Fragment>
      <NotificationContainer />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route
                exact
                path='/shop/:type/:subCategoryId'
                component={Product}
              />
              <Route
                exact
                path='/shop/:type/:subCategoryId'
                component={Product}
              />

              <Route exact path='/product' component={Product} />
              <Route
                exact
                path='/product-details/'
                component={ProductDetails}
              />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
