import React from 'react'

class REditable extends React.Component{
  constructor(props){
    this.state={
      isEditing:false,
      value: props.value || ''
      type: props.type || 'text'
    }
    ['_onClick','_onChange'].forEach( f => this[f]=this[f].bind(this))
  }
}

export default REditable
