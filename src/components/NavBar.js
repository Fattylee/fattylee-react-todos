import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilterFocus, toggleVisibility } from '../actions/todoActions';


const NavBar = ({state, setFilterFocus, toggleVisibility }) => {
  const searchLink = state.searchBtn && (
  <Link 
    onClick={() => {
      toggleVisibility(false);
    }} 
    to="#" 
    className="hide-on-med-and-up right">
    <i className="material-icons">search</i>
  </Link>);
  
  return (
    <Fragment>
    <div className={ state.isVisible ? 'navbar-fixed' : "navbar-fixed open-search-box" }>
      <nav>
      <div className="nav-wrapper teal">
        <div className='container'>
      <Link to="/" className="brand-logo nav-brand center">Todo</Link>
      
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></Link>
      { searchLink }
      
        <ul className="right hide-on-small-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/todo'>Todo</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      </div>
      </nav>
      </div>
      
      <ul id="mobile-demo" className="sidenav amber darken-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/todo'>Todo</Link></li>
          <li><Link to="/contact">Contact</Link></li>  
        </ul>
        
    </Fragment>
  ) 
};
/*
const openSearchBox = (setFilterFocus, e) => {

 console.log('NavBar');
 const openSearchBoxElement = window.document.querySelectorAll('.openSearchBox');
 openSearchBoxElement.forEach(e => e.style.visibility = 'hidden');
 
 setTimeout(() => {
   setFilterFocus();
 }, 1000);};
*/
const mapStateToProps = (prevState, ownProps) => {
  return {
    state: prevState.todosStore,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibility(visibility) { dispatch(toggleVisibility(visibility)) },
    setFilterFocus()  { dispatch(setFilterFocus())}, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
