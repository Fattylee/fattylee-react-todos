import React, { Fragment } from 'react';
import {  Link, } from 'react-router-dom';


const NotFound = (props) => {
  return (
    <Fragment>
      <h3>404 Page</h3>
      <p>The requested page was <span className='red-text'>not found</span> <Link to='/' className='btn orange'>Go home <i className='material-icons right'>arrow_forward</i></Link></p>
    </Fragment>
  ) 
}

export default NotFound;