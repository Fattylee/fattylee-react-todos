import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map( (todo, i) => <TodoItem key={todo.id} todo={todo} counter={++i}  />))
   : (<li className="collection-header"><h4>Your list of todos is empty. <a className="waves-effect waves-light btn-small"><i className='material-icons left'>note_add</i>Add todo</a></h4></li>);
  
  return (
      <ul className="collection with-header"> 
        <li className="collection-header"><h4>Todo Lists</h4></li>
        { todoList }
      </ul>
    )

}

export default TodoList;