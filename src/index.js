import React from 'react'

class REditable extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isEditing: false,
      value: props.value || undefined,
      type: props.type || 'input',
      placeholder: props.placeholder || 'Select one'
    }
    Array('_onClick','_onChange','_onBlur','_onKeyInput').forEach( f => this[f]=this[f].bind(this))
  }
  render(){
    if(this.state.isEditing){
      return(
        this.renderEditable()
      )
    }
    else{
      return(
        <span className='r-editable' onClick={this._onClick}>
          {this.renderValue()}
        </span>
      )
    }
  }
  _onChange(e){
    this.setState({value: e.target.value})
    if(this.props.onChange) this.props.onChange.call(null,e.target)
  }
  _onClick(e){
    this.setState({isEditing: true})
  }
  _onBlur(e){
    this.setState({isEditing: false})
  }
  renderValue(){
    switch(this.state.type){
      case 'dropdown': 
        if(this.state.value){
          return this.props.options.filter(e => e.value===this.state.value)[0].name
        }
        else{
          return <span className='empty-placeholder'>Empty</span>
        }
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
  _onKeyInput(e){
    if (e.key === 'Enter') {
      this.setState({isEditing: false})
    }
  }
  createInput(){
    return(
      <input autoFocus className='r-editable' type='text' onBlur={this._onBlur} onChange={this._onChange} value={this.state.value} onKeyPress={this._onKeyInput}/>
    )
  }
}

export default REditable
