import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import NavBar from './NavBar';
import Todo from './Todo';
import Posts from './Posts';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import FullPost from './FullPost';



const MyRoute = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className='container'>
        <Switch>
        
        <Route exact path='/' component={Posts} />
        <Route path='/post/:id' component={FullPost} />
        <Route  path='/todo' component={Todo} />
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
        <Route component={NotFound}/>
       
        </Switch>
         </div>
      </Fragment>
    </Router>
  ) 
  
}

export default MyRoute;
