import React from 'react';
import ReactDOM from 'react-dom';
import './test.less';


const App = () => {
  return (
    <div>
      <h1>Heloo Fattylee</h1>
      <div className='hover-btn' data-arrow='>>'><span>Hover</span></div>
     
     
      <div className='parent'>
        <div className='loading'></div>
        <span>Loading...</span>
      </div>
      <div className='pa'>
        <div className='pb'></div>
       
      </div>
      
    </div>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));


