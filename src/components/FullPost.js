import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const FullPost = ({posts}) => {
  console.log('*****FullPost Comp', posts );
  const { title, body, } = posts;
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
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  }
};

export default connect(mapStateToProps)(FullPost);
