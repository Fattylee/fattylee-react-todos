import React, { Component, Fragment } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
  state = {
    todos: [
      { id: 1, content: 'read the quran' },
      { id: 2, content: 'visit a shopping mall' },
    ],
  }
  render () {
    return (
      <Fragment>
      <div class='container'>
        <h1>World best Todo App</h1>
        <form>
        <div className="input-field"> 
          <input type='text' id='content' name='content'  />
           <label for="content">Todo</label> 
          </div>
          <div className="input-field"> 
            <input  id="first_name" type="text" className="validate" /> 
            <label for="first_name">First Name</label> 
            </div>
          <button>Submit</button>
        </form>
         <TodoList todos={this.state.todos} />
        </div>
      </Fragment>
    )
  }
}

export default Todo;
