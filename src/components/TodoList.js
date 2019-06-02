import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map( (todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />))
   : (<li className="collection-header"><h4>Your list of todos is empty. <a class="waves-effect waves-light btn-small"><i className='material-icons left'>note_add</i>Add todo</a></h4></li>);
  
  return (
      <ul className="collection with-header"> 
        <li className="collection-header"><h4>Todo Lists</h4></li>
        { todoList }
      </ul>
    )

}

export default TodoList;
