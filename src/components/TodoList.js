import React, { Fragment } from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map( ({id, content}) => <TodoItem key={id} content={content} />))
   : (<h2>Your list of todos is empty.</h2>);
    return (
      <ul class="collection with-header"> 
        <li class="collection-header"><h4>Todo Lists</h4></li>
        { todoList }
      </ul>
    )

}

export default TodoList;
