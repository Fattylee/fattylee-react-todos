import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Todo from './Todo';
import Posts from './Posts';
import Post from './Post';
import About from './About';
import NotFound from './NotFound';


const MyRoute = (props) => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
        <Route exact path='/' component={Todo} />
        <Route path='/posts/:id' component={Post} />
        <Route  path='/posts' component={Posts} />
        <Route  path='/add-post' component={Post} />
        <Route  path='/about' component={About} />
        <Route component={NotFound}/>
        </Switch>
      </Fragment>
    </Router>
  ) 
}

export default MyRoute;

