import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';


const TodoItem = ({ todo: {content, id}, deleteTodo, counter }) => {
  return (
     <li className="collection-item">
       <div>
         <span className='bold'>{counter}</span>. {content}
       <a 
       onClick={() => deleteTodo(id) }
       className="secondary-content">
       <i className="material-icons">delete</i>
       </a>
       </div>
     </li>
    )
}

const mdtp = (dispatch, ownProps) => {
  return {
    deleteTodo(id) { dispatch(deleteTodo(id)) },
  };
};


export default connect(null, mdtp)(TodoItem);

