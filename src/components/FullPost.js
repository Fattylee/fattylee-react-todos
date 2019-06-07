import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteAPost } from '../actions/postActions';

const FullPost = (props) => {
    const { post_id } = props.match.params;
    const foundPost = props.posts.find(post => post.id === post_id);
    const post = foundPost ? (<div className='card pointer'>
       <div className='card-content waves-effect'>
      <h4 className='center card-title'>{foundPost.title}</h4>
      <p className='card-body'>{foundPost.body}</p>
      <button 
      onClick={handleDeleteAPost.bind(null,props, foundPost.id)}
      onDoubleClick={handleDeleteAPost.bind(null,props, foundPost.id)}
      className='btn waves-effect waves-orange grey right btn-floating'><i className='material-icons'>delete</i></button>
      
      </div>
     
      </div>) : (<h3>Post not found</h3>);
  
  return (
    <Fragment>
      { post }
    </Fragment>
  ) 
  
};

const handleDeleteAPost = (props, id) => {
  props.deleteAPost(id);
  alert('Post Deleted!');
  props.history.push('/');
};
const mapStateToProps = (prevState, ownProps) => {
  return {
    posts: prevState.posts,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
    deleteAPost(id){ dispatch(deleteAPost(id))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);

