import React from 'react'

class REditable extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isEditing: false,
      value: props.value || 'jftlols',
      type: props.type || 'input',
    }
    Array('_onClick','_onChange','_onBlur').forEach( f => this[f]=this[f].bind(this))
  }
  render(){
        //{this.renderEditable()}
    //console.log('render ',this.state)
    if(this.state.isEditing){
      return(
        this.renderEditable()
      )
    }
    else{
      return(
        <span className='inner-content' onClick={this._onClick}>
          {this.renderValue()}
        </span>
      )
    }
  }
  _onChange(e){
    this.setState({value: e.target.value})
  }
  _onClick(e){
    this.setState({isEditing: true})
  }
  _onBlur(e){
    this.setState({isEditing: false})
  }
  renderValue(){
    switch(this.state.type){
      case 'dropdown': return this.props.options.filter(e => e.value===this.state.value)[0].name
      default: return this.state.value
    }
  }
  renderEditable(){
    switch(this.state.type){
      case 'dropdown': return this.createDropdown.call(this)
      case 'input': return this.createInput.call(this)
    }
  }
  createDropdown(){
    return(
      <select value={this.state.value} onChange={this._onChange} onBlur={this._onBlur} >
      {
        this.props.options.map( el  => <option value={el.value}>{el.name}</option>)
      }
      </select>
    )
  }
  createInput(){
    return(
      <input type='text' onBlur={this._onBlur} onChange={this._onChange} value={this.state.value}/>
    )
  }
}

export default REditable
