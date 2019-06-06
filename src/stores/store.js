import { createStore } from 'redux';
import { postsReducer } from '../reducers/rootReducer';

const store = createStore(postsReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log('store', state);
});

store.dispatch({type: 'GET_STATE', });

export default store;

