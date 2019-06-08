const initState = {
  todos: [
    { id: '1', content: 'read the quran' },
    { id: '2', content: 'visit a shopping mall' },
  ],
    searchWord: '',
};

const todosReducer = (state = initState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};


export default todosReducer;

