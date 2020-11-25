import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import classnames from 'classnames'

import TodoTextInput from '../../components/TodoTextInput/TodoTextInput'
import { View, Text } from '@tarojs/components'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

import './Header.scss'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}
const state = observable({
  visibilityFilter: 'All',
  setVisibilityFilter: (filter) => {
    state.visibilityFilter = FILTER_TITLES[filter]
  }
})

@observer
class Header extends React.Component {
  onClickHandler = (e, filter) => {
    state.setVisibilityFilter(filter)
  }

  onCheckClickHandler = () => {

  }

  onSaveHandler = () => {
    
  }

  render () {
    return (
      <View className='header'>
        <View className='header-title-wrap'>
          <Text className='title'>todos</Text>
        </View>
        <View className='filters'>
          {Object.keys(FILTER_TITLES).map((filter, index) => 
            <View key={index} className='filters-item'>
              <Text
                className={classnames({'filter-link': true, 'selected': FILTER_TITLES[filter] === state.visibilityFilter})}
                onClick={(e) => {this.onClickHandler(e, filter)}}
              >
                {FILTER_TITLES[filter]}
              </Text>
            </View>
          )}
        </View>
        <View className='textinput-wrap'>
          <Text className='textinput-wrap-icon' onClick={this.onCheckClickHandler}></Text>
          <View className='textinput-wrap-input'>
            <TodoTextInput 
              className='textinput-warp-input'
              newTodo
              onSave={this.onSaveHandler}
              placeholder='What needs to be done?'
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Header