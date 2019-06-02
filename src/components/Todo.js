import React, { Component, Fragment } from 'react';
import TodoList from './TodoList';


class Todo extends Component {
  state = {
    todos: [
      { id: 1, content: 'read the quran' },
      { id: 2, content: 'visit a shopping mall' },
    ],
  }
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(({id: todoId}) => id != todoId),
    }));
  }
  render () {
    return (
      <Fragment>
      <div className='container'>
        <h1>W<i className='material-icons h1-icon'>insert_emoticon</i>rld best T<i className='material-icons h1-icon'>insert_emoticon</i>d<i className='material-icons h1-icon'>insert_emoticon</i> App <i className='material-icons medium'>insert_emoticon</i></h1>
        <form>
        <div className="input-field"> 
          <input type='text' id='content' name='content'  />
           <label htmlFor="content">Todo</label> 
          </div>
          <div className="input-field"> 
            <input  id="first_name" type="text" className="validate" /> 
            <label htmlFor="first_name">First Name</label> 
            </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i> </button>
        </form>
         <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      </Fragment>
    )
  }
}

export default Todo;
