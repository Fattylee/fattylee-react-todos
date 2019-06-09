import React, { Fragment } from 'react';


const Contact = (props) => {
  return (
    <Fragment>
      <h1 className='center'>Contact Page </h1>
      <p contentEditable={false} spellCheck='true'>
      You can reach me on <a href='#tel'>08062870354</a> or via fattylee.remod@gmail.com
      </p>
    </Fragment>
  ) 
}

export default Contact;