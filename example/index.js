import React from 'react';
import ReactDOM from 'react-dom';
import REditable from '../src'


const REInput = (
  <div id='re-input'>
    <h3>Input type</h3>
    <REditable value='Click me!'/>
  </div>
)

ReactDOM.render(
  <div>
  {(REInput)}
  </div>
  , document.querySelector('div#app-container')
);
