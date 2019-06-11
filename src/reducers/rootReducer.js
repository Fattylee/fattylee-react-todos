import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  postsStore: postsReducer,
  todosStore: todosReducer,
});

export default rootReducer;

