import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <Fragment>
      <nav>
      <div className="nav-wrapper teal">
        <div className='container'>
      <Link to="/" className="brand-logo nav-brand center">Todo</Link>
      
      <Link to="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></Link>
      
        <ul className="right hide-on-small-only">
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="add-post">AddPost</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/posts/3'>Single-Post</Link></li>
        </ul>
      </div>
      </div>
      </nav>
      
      <ul id="mobile-demo" className="sidenav">
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="add-post">AddPost</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/posts/3'>Single-Post</Link></li>
        </ul>
        
    </Fragment>
  ) 
}

export default NavBar;

