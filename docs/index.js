import React from 'react';
import ReactDOM from 'react-dom';
//import REditable from '../src'
import REditable from '../dist/r-editable.min'


const alertMsg = (msg)=> alert(msg)

class Container extends React.Component{
  constructor(props){
    super(props)
    this.state={
      label: 'Initial value',
      dropValue:''
    }
  }
  changing(){
    this.setState({ 
      label: Math.random().toString(),
      dropValue: myOpt[Math.ceil(5*Math.random())-1].value
    })
  }
  changeDropValue(e){
    this.setState({dropValue: e.value})
  }
  render(){
    return(
      <div>
        <h3>Within a container, click changes value via props</h3>
        <button onClick={this.changing.bind(this)}>Randomize Both!</button>
        <br/>
        <REditable value={this.state.label} />
        &emsp;
        &emsp;
        <REditable type='dropdown' value={this.state.dropValue} options={myOpt} onChange={this.changeDropValue.bind(this)}/>
      </div>
    )
  }
}
const REInput = (
  <div id='re-input'>
    <h3>Input type</h3>
    <div className='examples'>
      <h4>Simple input:</h4>
      <REditable value='Basic'/>
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

  //{(REInput)}
  //{(REDropdown)}
ReactDOM.render(
  <div>
    {(REInput)}
    {(REDropdown)}
    <Container />
  </div>
  , document.querySelector('div#app-container')
);
