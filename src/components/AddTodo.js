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
  render () {
    return (
      <Fragment>
        <h3>New Todo</h3>
        <form onSubmit={(e) => {
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
        }}>
        <div className="input-field">
         <i className="material-icons prefix">mode_edit</i>
          <input type='text' id='content' name='content'  value={this.state.content}
          onChange={this.handleChange}
          />
           <label htmlFor="content">Todo</label> 
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Todo<i className="material-icons right">send</i> </button>
        </form>
      </Fragment>
    )
  }
}

export default AddTodo;
