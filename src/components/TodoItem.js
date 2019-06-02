import React from 'react';


const TodoItem = ({ content }) => {
  return (
     <li class="collection-item">
       <div>{content}<a class="secondary-content"><i class="material-icons">face</i></a></div></li>
    )
}

export default TodoItem;
