import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import AppRouter from './routers/AppRouter';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <AppRouter />
</Provider>,
document.getElementById('app'));
