// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import channelListReducer from "./reducers/channel_list_reducer";
import messageListReducer from "./reducers/message_list_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";
import currentUserReducer from "./reducers/current_user_reducer";

const middlewares = applyMiddleware(logger, reduxPromise);

// Initial State
const initialState = {
  channelList: ['general', 'react', 'paris'],
  messageList: [],
  selectedChannel: 'general',
  // eslint-disable-next-line no-alert
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// State and reducers
const reducers = combineReducers({
  channelList: channelListReducer,
  messageList: messageListReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
