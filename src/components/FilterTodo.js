import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setFilterFocus, clearFilterTodoInput, updateSearchWord } from '../actions/todoActions';


const FilterTodo = ({ matchCount, onFocus, onBlur, state, updateSearchWord, clearFilterTodoInput }) => {
  
    return (
      <Fragment>
      <div className='pos-form-filter'>
        <div className="input-field">
         <i 
         onClick={closeSearchBox}
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
          autoFocus={state.isFocus}
          
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

const closeSearchBox = () => {
  const closeSearchBoxElement = window.document.querySelectorAll('.openSearchBox');
 closeSearchBoxElement.forEach(e => e.style.visibility = 'visible');
}

const mapStateToProps = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  }
};

const mdtp = (dispatch, ownProps) => {
  return {
    updateSearchWord(searchWord) { dispatch(updateSearchWord(searchWord)) },
    clearFilterTodoInput() { dispatch(clearFilterTodoInput()) },
  }
}

export default connect(mapStateToProps, mdtp)(FilterTodo);