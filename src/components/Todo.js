import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import { toggleSearchBtn, toggleVisibility, loadTodos } from '../actions/todoActions';


class Todo extends Component {
  
  componentDidMount() {
    try {
     const ls = window.localStorage;
     
     const todosExist = ls.getItem('todos');
     if(todosExist) {
       const todos = JSON.parse(todosExist);
      
       this.props.loadTodos(todos);
       
     }else {
       const { todos } = this.props.state;
       const todosStringified = JSON.stringify(todos);
       ls.setItem('todos', todosStringified);
     }
    }catch(e) {}
    
    this.props.toggleSearchBtn(true);
  }
  componentWillUnmount() {
    this.props.toggleSearchBtn(false);
    this.props.toggleVisibility(true);
  }
  componentDidUpdate(prevProp, prevState) {
    const ls = window.localStorage;
    const todosStringified = JSON.stringify(this.props.state.todos);
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
           matchCount={filteredTodos.length} 
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
    toggleVisibility(visibility) { dispatch(toggleVisibility(visibility)) },
    loadTodos(todos) { dispatch(loadTodos(todos)) },
    
  };
};

const mstp = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  }
};

export default connect(mstp, mapDispatchToProps)(Todo);

