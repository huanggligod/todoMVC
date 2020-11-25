import Taro from '@tarojs/taro'
import React from 'react'
import classnames from 'classnames'

import { Input } from '@tarojs/components'
import './TodoTextInput.scss'

export default class TodoTextInput extends React.Component {
  state = {
    todoText: this.props.text || ''
  }

  handleSubmit = e => {
    console.log('handleSubmit', e)
    const text = e.target.value.trim()
    this.props.onSave(text)
  }

  handleSubmitKey = e => {
    console.log('handleSubmitKeye', e, this.props)
  }
  
  handleChange = e => {
    console.log('handleChange', e)
  }

  handlInput = e => {
    console.log('hanldeInput', e)
  }

  handleBlur = e => {
    console.log('handleBlur', e)
  }
  render () {
    return (
      <Input 
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })
        }
        placeholderTextColor='#e6e6e6'
        type='text'
        placeholder={this.props.placeholder}
        autoFocus='true'
        confirmType='done'
        value={this.state.todoText}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmitKey}
        onConfirm={this.handleSubmit}
      /> 
    )
  }
}

