import uuid from 'uuid';


const initState = {
  todos: [
    { id: '1', content: 'read the quran' },
    { id: '2', content: 'visit a shopping mall' },
  ],
    searchWord: '',
    content: '',
    searchBtn: false,
};

const todosReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'TOGGLE_SEARCH_BUTTON':
      return {
        ...prevState,
        searchBtn: action.visibility,
      };
    case 'DELETE_TODO':
      return {
        ...prevState,
        todos: prevState.todos.filter(({ id }) => id !== action.id),
      };
    case 'UPDATE_CONTENT':
      return {
        ...prevState,
        content: action.content,
      };
    case 'CLEAR_ADD_TODO_INPUT':
      return {
        ...prevState,
        content: '',
      };
    case 'ADD_TODO':
      return {
        ...prevState,
        todos: [{ id: uuid(), content: prevState.content.trim() }, ...prevState.todos],
      };
    default:
      return prevState;
  }
};


export default todosReducer;

