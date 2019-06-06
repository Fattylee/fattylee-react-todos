import React, { Component, Fragment } from 'react';


class AddTodo extends Component {
  state = {
    content: '',
  }
  handleChange = (e) => {
    const content = e.target.value;
    this.setState((prevState) => ({
     content,
     }));
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
        <form onSubmit={this.handlSubmit}>
        <div className="input-field">
         <i className="material-icons prefix">add</i>
          <input type='text' id='content' name='content'  value={this.state.content} className='text-field-width'
          onChange={this.handleChange}
          
          />
           <label htmlFor="content">Add Todo</label>
           <span 
           onClick={() => this.setState(prevState => ({ content: ''}))}
           className='clear'><i className='material-icons'>clear</i></span>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default AddTodo;