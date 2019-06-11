import React, { Fragment } from 'react';


const Contact = (props) => {
  return (
    <Fragment>
      <h1 className='center'>Contact Page </h1>
      <p contentEditable={false} spellCheck='true'>
        <a className='btn waves-effect orange' href='tel:08062870354'>Call me<i className='material-icons left'>phone</i></a> OR <a
      className='btn waves-effect' href="mailto:fattylee.remod@gmail.com?subject=Feedback for Fattylee-react-todos&body=What a great app you've got...">Send me an email <i className='material-icons left'>email</i></a>
      </p>
    </Fragment>
  ) 
}

export default Contact;