import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
//import $ from '../../public/js/jquery-3.2.1.slim.min.js';

const NavBar = (props) => {
  return (
    <Fragment>
    <div class="navbar-fixed openSearchBox">
      <nav>
      <div className="nav-wrapper teal">
        <div className='container'>
      <Link to="/" className="brand-logo nav-brand center">Todo</Link>
      
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></Link>
       <Link onClick={openSearchBox} to="#" className="hide-on-med-and-up right"><i className="material-icons">search</i></Link>
      
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

const openSearchBox = () => {
 
 const openSearchBoxElement = window.document.querySelectorAll('.openSearchBox');
 openSearchBoxElement.forEach(e => e.style.visibility = 'hidden');
}

export default NavBar;
