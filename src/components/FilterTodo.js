import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { setFilterInput, clearFilterTodoInput, updateSearchWord, toggleVisibility, toggleSearchFilterCounterVisibility as tsfcv } from '../actions/todoActions';


class FilterTodo extends Component {
  componentDidMount() {
    this.props.setFilterInput(this.inputField)
  }
  render() {
    const { matchCount, state, updateSearchWord, clearFilterTodoInput, toggleVisibility, tsfcv } = this.props;
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
          onFocus={() => { tsfcv(true); }}
          onBlur={() => tsfcv(false)}
          className='text-field-width'
          ref={(input) => { this.inputField = input }}
          />
           <label htmlFor="filter">Search Todo</label>
           <span className={state.isSeachFilterCounterVisible ? 'search-counter visible-counter' : 'search-counter'}>{matchCount}</span>
           
           <span 
             onClick={() => clearFilterTodoInput()}
             className='clear'><i className='material-icons'>clear</i>
           </span>
          </div>
          </div>
      </Fragment>
    )
    }
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
    tsfcv(visibility) { dispatch(tsfcv(visibility)) },
    setFilterInput(filterInput) { dispatch(setFilterInput(filterInput)) },
  };
};

export default connect(mapStateToProps, mdtp)(FilterTodo);

