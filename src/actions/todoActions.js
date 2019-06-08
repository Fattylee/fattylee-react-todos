export const showSearchBtn = () => {
  return {
    type: 'SHOW_SEARCH_BUTTON',
  }
};

export const hideSearchBtn = () => ({ type: 'HIDE_SEARCH_BUTTON' });

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

