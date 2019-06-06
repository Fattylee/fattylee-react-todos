import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Post from './Post';


const Posts = ({state}) => {
    const posts = !!state.posts.length ? (
    <Fragment>
        <h1 className='center white-text'>ALL POSTS </h1>
        {state.posts.map(post => <Post key={post.id} post={post} />)}
      </Fragment>
    ) : 
    
    (
    <Fragment>
        <h1 className='center'>No POST yet!... </h1>
      </Fragment>
    );
    return (posts) 
};

const mapStateToProps = (prevState, ownProps) => {
  return {
    state: prevState,
  }
}

export default connect(mapStateToProps)(Posts);
