import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateContent } from '../actions/todoActions';


class AddTodo extends Component {
  handleChange = (e) => {
    const content = e.target.value;
    this.props.updateContent(content);
   }
  handlSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state;
      if(!content.trim()) {
        this.setState((prevState) => ({
        content: '',
        }));
        return;
      }
    this.props.addTodo(content.trim());
    this.setState((prevState) => ({
    content: '',
    }));     
  }
  render () {
    return (
      <Fragment>
      <div className='pos-form-add openSearchBox'>
        <form onSubmit={this.handlSubmit}>
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
  };
};

export default connect(mstp, mdtp)(AddTodo);

