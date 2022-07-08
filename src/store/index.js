import {
  configureStore,
  combineReducers,
  applyMiddleware,
  createStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { authSlice, opportunitiesSlice } from './slices';
import { composeWithDevTools } from '@redux-devtools/extension';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { baseOrigin } from 'api';
import thunk from 'redux-thunk';

function optimisticExecute(action, emit, next, dispatch) {
  emit('action', action);
  next(action);
}

// const socket = io.connect(baseOrigin, {
//   transports: ['websocket'],
// });

// socket.on('connect', (socket) => {
//   console.log('connected', socket);
// });
// const socketIoMiddleware = createSocketIoMiddleware(socket, 'chats/', {
//   execute: optimisticExecute,
// });

let reducer = combineReducers({
  auth: authSlice.reducer,
  opportunities: opportunitiesSlice.reducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // applyMiddleware(thunk, socketIoMiddleware)
    // other store enhancers if any
  )
);

export default store;
