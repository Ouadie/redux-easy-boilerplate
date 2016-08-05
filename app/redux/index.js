import { combineReducers } from 'redux';
import { wrapReducerWithSetGlobalState } from 'reduceless-connect'; // https://github.com/anorudes/reduceless-connect

import app from './modules/app/app';
import posts from './modules/posts/posts';

const rootReducer = wrapReducerWithSetGlobalState(
  combineReducers({
    app,
    posts,
  })
);

export default rootReducer;
