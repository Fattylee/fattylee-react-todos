import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import { showSearchBtn, hideSearchBtn } from '../actions/todoActions';


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
      searchWord: '',
    }));
  }
  filterTodo = (e) => {
    const searchWord = e.target.value;
    
    this.setState(prevState => ({
      searchWord,
    }));
  }
  clearFilter = (e) => {
    e.target.value = '';
    this.setState(prevState => ({
      searchWord: '',
    }))
  }
  onFocus = (e) => {
   e.target.nextElementSibling.nextElementSibling.classList.add('visibleCounter'); 
    
  }
  onBlur = (e) => {
     e.target.nextElementSibling.nextElementSibling.classList.remove('visibleCounter');   
  }
  componentDidMount() {
    const ls = window.localStorage;
    //console.log('componentDidMount');
    const todosExist = ls.getItem('todos');
    if(todosExist) {
      const todos = JSON.parse(todosExist);
      this.setState(prevState => ({
        todos,
      }));
    }else {
      const { todos } = this.state;
      const todosStringified = JSON.stringify(todos);
      ls.setItem('todos', todosStringified);
    }
    const { showSearchBtn } = this.props;
    showSearchBtn();
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    const { hideSearchBtn } = this.props;
    hideSearchBtn();
  }
  componentDidUpdate(prevProp, prevState) {
    const ls = window.localStorage;
    const todosStringified = JSON.stringify(this.state.todos);
    ls.setItem('todos', todosStringified );
    //console.log('componentDidUpdate');
  }
  render () {
   // console.log('render');
    const filteredTodos = this.state.todos.filter(({content}) => content.toLowerCase().includes(this.state.searchWord.toLowerCase()) );
    
    return (
      <Fragment>
      
      <div className='central container'>
        <h1 className='center-align title-h1'>W<i className='material-icons h1-icon'>insert_emoticon</i>rld Best T<i className='material-icons h1-icon'>insert_emoticon</i>d<i className='material-icons h1-icon'>insert_emoticon</i> App <i className='material-icons medium bounce'>insert_emoticon</i></h1>
         
         <AddTodo addTodo={this.addTodo}/>
         
         <FilterTodo 
           filterTodo={this.filterTodo} 
           clearFilter={this.clearFilter} 
           searchWord={this.state.searchWord}
           matchCount={filteredTodos.length} 
           onFocus={this.onFocus}
           onBlur={this.onBlur}
         />
         
         <TodoList todos={filteredTodos} deleteTodo={this.deleteTodo} />
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSearchBtn() { dispatch(showSearchBtn()) },
    hideSearchBtn() { dispatch(hideSearchBtn()) },
  };
};

export default connect(null, mapDispatchToProps)(Todo);

