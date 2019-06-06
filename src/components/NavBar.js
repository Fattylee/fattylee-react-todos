import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
//import $ from '../../public/js/jquery-3.2.1.slim.min.js';


const NavBar = ({state}) => {
  const searchLink = state.searchBtn && <Link onClick={openSearchBox} to="#" className="hide-on-med-and-up right"><i className="material-icons">search</i></Link>
  return (
    <Fragment>
    <div className="navbar-fixed openSearchBox">
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
          <li><Link to="/post/34">Post-34</Link></li>
        </ul>
        
    </Fragment>
  ) 
};

const openSearchBox = (e) => {

 console.log('NavBar');
 const openSearchBoxElement = window.document.querySelectorAll('.openSearchBox');
 openSearchBoxElement.forEach(e => e.style.visibility = 'hidden');
 
 const tb = document.querySelector('.pos-form-filter').firstElementChild;
 tb.setAttribute('autoFocus', true);
 console.log(tb)
};

const mapStateToProps = (prevState, ownProps) => {
  return {
    state: prevState
  }
}

export default connect(mapStateToProps)(NavBar);

