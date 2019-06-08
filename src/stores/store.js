import { createStore } from 'redux';
import rootReducer  from '../reducers/rootReducer';

const store = createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log('store state', state);
  console.log('==================');
});


export default store;

