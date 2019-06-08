export const toggleSearchBtn = (visibility) => {
  return {
    type: 'TOGGLE_SEARCH_BUTTON',
    visibility,
  }
};

export const setFilterFocus = () => ({ type: 'SET_FILTER_FOCUS' });

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

export const updateContent = (content) => {
  return {
    type: 'UPDATE_CONTENT',
    content,
  };
};

export const clearAddTodoInput = () => ({ type: 'CLEAR_ADD_TODO_INPUT' });

export const addTodo = () => ({ type: 'ADD_TODO' });

/*
export const hideSearchBtn = () => ({ type: 'HIDE_SEARCH_BUTTON' });
*/

