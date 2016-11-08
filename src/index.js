import React from 'react'
import omit from 'lodash/omit'

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
    let actualProps = omit(this.props, ['onChange', 'value', 'onBlur', 'onKeyInput','options'])
    return(
      <select {...actualProps} className='r-editable' value={this.state.value} onChange={this._onChange} onBlur={this._onBlur} >
      {
        this.props.options.map( el  => <option key={el.value} value={el.value}>{el.name}</option>)
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
    let actualProps = omit(this.props, ['onChange', 'value', 'onBlur', 'onKeyInput'])
    return(
      <input autoFocus {...actualProps} className='r-editable' type='text' onBlur={this._onBlur} onChange={this._onChange} value={this.state.value} onKeyPress={this._onKeyInput}/>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value})
  }
}

export default REditable
