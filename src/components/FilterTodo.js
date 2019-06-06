import React, { Fragment } from 'react';


const FilterTodo = ({filterTodo, clearFilter, searchWord, matchCount, onFocus, onBlur }) => {
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


export default FilterTodo;