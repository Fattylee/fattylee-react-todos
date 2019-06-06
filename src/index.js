import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './components/router';
import './styles/index.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initState = {
  posts: [
  { id: '1', title: 'title 1', body: 'body one' },
  ],
};
const postsReducer = (state=initState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
const store = createStore(postsReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log('index.js', state);
});

store.dispatch({type: 'GET_STATE', });

ReactDOM.render(<Provider store={store}><MyRouter /></Provider>, document.getElementById('root'));