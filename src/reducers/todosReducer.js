const initState = {
  todos: [
    { id: '1', content: 'read the quran' },
    { id: '2', content: 'visit a shopping mall' },
  ],
    searchWord: '',
};

const todosReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'DELETE_TODO':
      return {
        ...prevState,
        todos: prevState.todos.filter(({ id }) => id !== action.id),
      };
    default:
      return prevState;
  }
};


export default todosReducer;

