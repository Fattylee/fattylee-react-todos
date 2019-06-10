import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { updateContent, addTodo, clearAddTodoInput, clearFilterTodoInput } from '../actions/todoActions';

let pap;
class AddTodo extends Component { 
  constructor() {
    super();
    this.abu = React.createRef();
    console.log('constructor', this.abu);
  }
  componentDidMount() {
    console.log('componentDidMount', pap);
    
  
  }
  render() {
    //input = React.createRef();
    console.log('render', this);
   return (
      <Fragment>
      <div className={this.props.state.isVisible ? 'pos-form-add': 'pos-form-add open-search-box'}>
        <form onSubmit={handleSubmit.bind(null, this.props)}>
        <div className="input-field">
         <i 
         onClick={() => {
           pap.click();
         }}
         className="material-icons prefix">add</i>
          <input type='text' id='content' name='content'  value={this.props.state.content} className='text-field-width'
          
          ref={(n) => { pap = n}}
          onChange={handleChange.bind(null, this.props)}
          
          />
           <label htmlFor="content">Add Todo</label>
           <span
           onClick={() => this.props.clearAddTodoInput() }
           className='clear'><i className='material-icons'>clear</i></span>
          </div>
        </form>
        </div>
      </Fragment>
    )
    }
};


const handleChange = (props, e) => {
  props.updateContent(e.target.value);
  
};

const handleSubmit = (props, e) => {
  e.preventDefault();
  
  if(!props.state.content.trim()) {
    props.clearAddTodoInput();      
    return;
  }
  props.addTodo();
  props.clearAddTodoInput();
  props.clearFilterTodoInput();
};

const mstp = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  };
};

const mdtp = (dispatch, ownProps) => {
  return {
    updateContent(content) { dispatch(updateContent(content)) },
    clearAddTodoInput() { dispatch(clearAddTodoInput()) },
    addTodo() { dispatch(addTodo()) },
    clearFilterTodoInput() { dispatch(clearFilterTodoInput()) },
  };
};

export default connect(mstp, mdtp)(AddTodo);

