import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


class Todo extends Component {
  state = {
    todos: [
      { id: '1', content: 'read the quran' },
      { id: '2', content: 'visit a shopping mall' },
    ],
  }
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(({id: todoId}) => id !== todoId),
    }));
  }
  addTodo = (content) => {

    this.setState(prevState => ({
      todos: [{id: uuid(), content }, ...prevState.todos],
    }));
  }
  render () {
    return (
      <Fragment>
      <div className='container'>
        <h1>W<i className='material-icons h1-icon'>insert_emoticon</i>rld best T<i className='material-icons h1-icon'>insert_emoticon</i>d<i className='material-icons h1-icon'>insert_emoticon</i> App <i className='material-icons medium'>insert_emoticon</i></h1>
       
          <AddTodo addTodo={this.addTodo}/>
         <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        
        </div>
      </Fragment>
    )
  }
}

export default Todo;
