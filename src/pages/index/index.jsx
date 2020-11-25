import React, { Component } from 'react'
import { View } from '@tarojs/components'
// import { observer, inject } from 'mobx-react'

import Header from '../../containers/Header/Header'
import './index.scss'

class Index extends Component {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
     <View className="todoapp">
      <Header />
      {/* <MainSection /> */}
     </View>
    )
  }
}

export default Index
