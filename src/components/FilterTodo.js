import React, { Fragment } from 'react';


const FilterTodo = ({filterTodo, clearFilter, searchWord, matchCount, onFocus, onBlur }) => {
    return (
      <Fragment>
        <h5>Filter Todo</h5>
        <div className="input-field">
         <i className="material-icons prefix">mode_edit</i>
          <input 
          type='text' 
          id='filter' 
          name='filter' 
          value={searchWord}
          onChange={filterTodo}
          onFocus={onFocus}
          onBlur={onBlur}
          />
           <label htmlFor="filter">Search Todo</label>
           <span className='search-counter '>{matchCount}</span>
           
           <span 
             onClick={clearFilter}
             className='clear'><i className='material-icons'>clear</i>
           </span>
          </div>
      </Fragment>
    )
}


export default FilterTodo;