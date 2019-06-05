import React, { Fragment } from 'react';
import {  Link, } from 'react-router-dom';


const NotFound = (props) => {
  console.log(props)
  return (
    <Fragment>
      <h1>NotFound Component <Link to='/'>Go home</Link></h1>
    </Fragment>
  ) 
}

export default NotFound;
