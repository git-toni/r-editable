import React from 'react';
import ReactDOM from 'react-dom';
import REditable from '../src'


const alertMsg = (msg)=> alert(msg)
const REInput = (
  <div id='re-input'>
    <h3>Input type</h3>
    <div className='examples'>
      <h4>Simple input:</h4>
      <REditable value='Click me!'/>
      <h4>Triggering function onChange:</h4>
      <REditable value='Change me' onChange={alertMsg.bind(null,'You changed me!')}/>
    </div>
  </div>
)
const myOpt = [
  {name:'Apple',value:'apple'},
  {name:'Pear',value:'pear'},
  {name:'Grape',value:'grape'},
  {name:'Banana',value:'banana'},
  {name:'Orange',value:'orange'}
]
const REDropdown = (
  <div id='re-dropdown'>
    <h3>Dropdown type</h3>
    <div className='examples'>
      <h4>Simple dropdown:</h4>
      <REditable type='dropdown' options={myOpt} />
      <h4>Triggering function onChange:</h4>
      <REditable type='dropdown' onChange={alertMsg.bind(null,'You changed dropdown')} options={myOpt} />
    </div>
  </div>
)

ReactDOM.render(
  <div>
  {(REInput)}
  {(REDropdown)}
  </div>
  , document.querySelector('div#app-container')
);
