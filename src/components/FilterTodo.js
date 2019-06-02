import React, { Fragment } from 'react';

const FilterTodo = ({filterTodo}) => {
    return (
      <Fragment>
        <h3>Filter Todo</h3>
        <div className="input-field">
         <i className="material-icons prefix">mode_edit</i>
          <input type='text' id='filter' name='filter'
          onChange={filterTodo}
          />
           <label htmlFor="filter">Search Todo</label> 
          </div>
      </Fragment>
    )
}


export default FilterTodo;
