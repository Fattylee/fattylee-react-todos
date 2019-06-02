import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';

let _filterLength = -1;
class Todo extends Component {
  
  state = {
    todos: [
      { id: '1', content: 'read the quran' },
      { id: '2', content: 'visit a shopping mall' },
    ],
    searchWord: '',
    
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
  filterTodo = (e) => {
    const searchWord = e.target.value;
    
    this.setState(prevState => ({
      searchWord,
    }));
  }
  
  render () {
    const filteredTodos = this.state.todos.filter(({content}) => content.toLowerCase().includes(this.state.searchWord.toLowerCase()) );
    
    return (
      <Fragment>
      <div className='container'>
        <h1>W<i className='material-icons h1-icon'>insert_emoticon</i>rld best T<i className='material-icons h1-icon'>insert_emoticon</i>d<i className='material-icons h1-icon'>insert_emoticon</i> App <i className='material-icons medium'>insert_emoticon</i></h1>
       
         <AddTodo addTodo={this.addTodo}/>
         <FilterTodo filterTodo={this.filterTodo}/>
         <TodoList todos={filteredTodos} deleteTodo={this.deleteTodo}/>
        
        </div>
      </Fragment>
    )
  }
}

export default Todo;
