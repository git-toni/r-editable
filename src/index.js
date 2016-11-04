import React from 'react'

class REditable extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isEditing: false,
      value: props.value || 'jftlols',
      type: props.type || 'input',
    }
    Array('_onClick','_onChange').forEach( f => this[f]=this[f].bind(this))
  }
  render(){
        //{this.renderEditable()}
    console.log('render ',this.state)
    if(this.state.isEditing){
      return(
        this.renderEditable()
      )
    }
    else{
      return(
        <span className='inner-content' onClick={this._onClick}>
          {this.state.value}
        </span>
      )
    }
  }
  _onChange(e){
    this.setState({value: e.target.value})
  }
  _onClick(e){
    //console.log('ive been clicked')
    this.setState({isEditing: true})
  }
  renderEditable(){
    switch(this.state.type){
      case 'dropdown': return this.createDropdown.call(this)
      case 'input': return this.createInput.call(this)
    }
    //return(
    //  <span className='inner-content-editable'>rendereditable</span>
    //)
  }
  createDropdown(){
    return(
      <select value={this.state.value}>
        <option>AHH</option>
        <option>uhu</option>
      </select>
    )
  }
  createInput(){
    return(
      <input type='text' onChange={this._onChange} value={this.state.value}/>
    )
  }
}

export default REditable
