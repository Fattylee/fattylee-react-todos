import React, { Fragment } from 'react';


const FullPost = ({post: { title, body, id }}) => {
  return (
    <Fragment>
      <div className='card'>
       <div className='card-content'>
      <h4 className='center card-title'>{title}</h4>
      <p className='card-body'>{body} <button className='btn waves-effect waves-orange grey'>Read full...</button></p>
      </div>
      </div>
    </Fragment>
  ) 
}

export default FullPost;
