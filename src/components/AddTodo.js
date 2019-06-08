import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateContent, addTodo, clearAddTodoInput } from '../actions/todoActions';


class AddTodo extends Component {
  handleChange = (e) => {
    const content = e.target.value;
    this.props.updateContent(content);
   }
  handleSubmit = (e) => {
    e.preventDefault();
    
    const { content } = this.props.state;
      if(!content.trim()) {
        this.props.clearAddTodoInput();
        return;
      }
    this.props.addTodo();
    this.props.clearAddTodoInput();
  }
  render () {
    return (
      <Fragment>
      <div className='pos-form-add openSearchBox'>
        <form onSubmit={this.handleSubmit}>
        <div className="input-field">
         <i className="material-icons prefix">add</i>
          <input type='text' id='content' name='content'  value={this.props.state.content} className='text-field-width'
          onChange={this.handleChange}
          
          />
           <label htmlFor="content">Add Todo</label>
           <span 
           onClick={() => this.setState(prevState => ({ content: ''}))}
           className='clear'><i className='material-icons'>clear</i></span>
          </div>
        </form>
        </div>
      </Fragment>
    )
  }
}

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

