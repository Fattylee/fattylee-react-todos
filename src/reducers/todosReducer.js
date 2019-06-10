import uuid from 'uuid';


const initState = {
  todos: [
    { id: '1', content: 'read the quran' },
    { id: '2', content: 'visit a shopping mall' },
  ],
    searchWord: '',
    content: '',
    searchBtn: false,
    isVisible: true,
    isSeachFilterCounterVisible: false,
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
    case 'UPDATE_SEARCH_WORD':
      return {
        ...prevState,
        searchWord: action.searchWord,
      };
    case 'CLEAR_ADD_TODO_INPUT':
      return {
        ...prevState,
        content: '',
      };
    case 'CLEAR_FILTER_TODO_INPUT':
      return {
        ...prevState,
        searchWord: '',
      };
    case 'ADD_TODO':
      return {
        ...prevState,
        todos: [{ id: uuid(), content: prevState.content.trim() }, ...prevState.todos],
      };
    case 'TOGGLE_VISIBILITY':
      return {
        ...prevState,
        isVisible: action.visibility,
      };
    case 'TOGGLE_SEARCH_FILTER_COUNTER_VISIBILITY':
      return {
        ...prevState,
        isSeachFilterCounterVisible: action.visibility,
      };
    default:
      return prevState;
  }
};


export default todosReducer;

