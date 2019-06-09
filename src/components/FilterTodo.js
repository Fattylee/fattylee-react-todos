import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setFilterFocus, clearFilterTodoInput, updateSearchWord, toggleVisibility } from '../actions/todoActions';


const FilterTodo = ({ matchCount, onFocus, onBlur, state, updateSearchWord, clearFilterTodoInput, toggleVisibility, }) => {
  
    return (
      <Fragment>
      <div className='pos-form-filter'>
        <div className="input-field">
         <i 
         onClick={() => {
           toggleVisibility(true);
           clearFilterTodoInput();
         }}
         className="material-icons prefix">arrow_back</i>
          <input 
          type='text' 
          id='filter' 
          name='filter' 
          value={state.searchWord}
          onChange={(e) => updateSearchWord(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className='text-field-width'
          autoFocus={true || state.isFocus}
          
          />
           <label htmlFor="filter">Search Todo</label>
           <span className='search-counter '>{matchCount}</span>
           
           <span 
             onClick={() => clearFilterTodoInput()}
             className='clear'><i className='material-icons'>clear</i>
           </span>
          </div>
          </div>
      </Fragment>
    )
};


const mapStateToProps = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  }
};

const mdtp = (dispatch, ownProps) => {
  return {
    updateSearchWord(searchWord) { dispatch(updateSearchWord(searchWord)) },
    clearFilterTodoInput() { dispatch(clearFilterTodoInput()) },
    toggleVisibility(visibility) { dispatch(toggleVisibility(visibility)) },
  };
};

export default connect(mapStateToProps, mdtp)(FilterTodo);

