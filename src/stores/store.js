import { createStore } from 'redux';
import rootReducer  from '../reducers/rootReducer';

let count = 0;
const store = createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log('store state', state);
  count++;
  console.log(`${count} ${count ===1 ? 'action':'actions'} dispatched ==================`);
});


export default store;

