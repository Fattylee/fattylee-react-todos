import React from 'react';


const TodoItem = ({ todo: {content, id}, deleteTodo }) => {
  return (
     <li className="collection-item">
       <div>{content}
       <a 
       onClick={() => {
         deleteTodo(id);
       }}
       className="secondary-content pointer"><i className="material-icons">delete</i></a></div></li>
    )
}

export default TodoItem;
