import React, { Fragment } from 'react';
import { connect } from 'react-redux';
//import { setFilterFocus } from '../actions/todoActions';


const FilterTodo = ({filterTodo, clearFilter, searchWord, matchCount, onFocus, onBlur, state }) => {
  console.log('FilterTodo', state.isFocus);
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
          value={searchWord}
          onChange={filterTodo}
          onFocus={onFocus}
          onBlur={onBlur}
          className='text-field-width'
          autoFocus={state.isFocus}
          
          />
           <label htmlFor="filter">Search Todo</label>
           <span className='search-counter '>{matchCount}</span>
           
           <span 
             onClick={clearFilter}
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
    state: prevState,
  }
};

export default connect(mapStateToProps)(FilterTodo);