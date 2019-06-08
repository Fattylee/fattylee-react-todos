import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import { toggleSearchBtn } from '../actions/todoActions';


class Todo extends Component {
  
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
    
    this.props.toggleSearchBtn(true);
  }
  componentWillUnmount() {
    this.props.toggleSearchBtn(false);
  }
  componentDidUpdate(prevProp, prevState) {
    const ls = window.localStorage;
    const todosStringified = JSON.stringify(this.state.todos);
    ls.setItem('todos', todosStringified );
   
  }
  render () {
    const filteredTodos = this.props.state.todos.filter(({content}) => content.toLowerCase().includes(this.props.state.searchWord.toLowerCase()) );
    
    return (
      <Fragment>
      
      <div className='central container'>
        <h1 className='center-align title-h1'>W<i className='material-icons h1-icon'>insert_emoticon</i>rld Best T<i className='material-icons h1-icon'>insert_emoticon</i>d<i className='material-icons h1-icon'>insert_emoticon</i> App <i className='material-icons medium bounce'>insert_emoticon</i></h1>
         
         <AddTodo />
         
         <FilterTodo 
           clearFilter={this.clearFilter}  
           matchCount={filteredTodos.length} 
           onFocus={this.onFocus}
           onBlur={this.onBlur}
         />
         
         <TodoList todos={filteredTodos}  />
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearchBtn(visibility) { dispatch(toggleSearchBtn(visibility)) },
    
  };
};

const mstp = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  }
};

export default connect(mstp, mapDispatchToProps)(Todo);

