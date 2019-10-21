import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './store/reducers/counter';
import albumsReducer from './store/reducers/albums';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  albums: albumsReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

import './style/main.scss';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'));