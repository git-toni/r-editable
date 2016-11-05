import React from 'react';
import ReactDOM from 'react-dom';
import REditable from '../src'


const alertMsg = (msg)=> alert(msg)
const REInput = (
  <div id='re-input'>
    <hr/>
    <h3>Input type</h3>
    <h4>Simple input:</h4>
    <REditable value='Click me!'/>
    <h4>Triggering function onChange:</h4>
    <REditable value='Change me' onChange={alertMsg.bind(null,'You changed me!')}/>
  </div>
)

ReactDOM.render(
  <div>
  {(REInput)}
  </div>
  , document.querySelector('div#app-container')
);
