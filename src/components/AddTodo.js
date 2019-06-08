import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { updateContent, addTodo, clearAddTodoInput } from '../actions/todoActions';


const AddTodo = (props) => {
  
    return (
      <Fragment>
      <div className={props.state.isVisible ? 'pos-form-add': 'pos-form-add open-search-box'}>
        <form onSubmit={handleSubmit.bind(null, props)}>
        <div className="input-field">
         <i className="material-icons prefix">add</i>
          <input type='text' id='content' name='content'  value={props.state.content} className='text-field-width'
          onChange={handleChange.bind(null, props)}
          
          />
           <label htmlFor="content">Add Todo</label>
           <span 
           onClick={() => props.clearAddTodoInput() }
           className='clear'><i className='material-icons'>clear</i></span>
          </div>
        </form>
        </div>
      </Fragment>
    )
};

const handleChange = (props, e) => {
  props.updateContent(e.target.value);
};

const handleSubmit = (props, e) => {
  e.preventDefault();
  
  if(!props.state.content.trim()) {
    props.clearAddTodoInput();      
    return;
  }
  props.addTodo();
  props.clearAddTodoInput();
};

const mstp = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    updateContent(content) { dispatch(updateContent(content)) },
    clearAddTodoInput() { dispatch(clearAddTodoInput()) },
    addTodo() { dispatch(addTodo()) },
  };
};

export default connect(mstp, mdtp)(AddTodo);

