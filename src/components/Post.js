import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Post = ({post: { title, body, id }}) => {
  return (
    <Fragment>
      <div className='card'>
       <div className='card-content'>
      <h4 className='center card-title'>{title}</h4>
      <p className='card-body'>{body} <Link to={`/post/${id}`} className='btn waves-effect waves-orange grey'>Read more...</Link></p>
      </div>
      </div>
    </Fragment>
  ) 
}

export default Post;
