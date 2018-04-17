import React from 'react'
import {render} from 'react-dom'

import App from './app'

class AppContainer extends React.Component {
  state = {
    name: 'Palcel 打包'
  }
  componentDidMount () {
    setTimeout(() =>{
      this.setState({name: 'parcel 打didi'})
    }, 2000)
  }

  render () {
    return <App name={this.state.name} />
  }
}

render (
  <AppContainer />,
  document.getElementById('app')
)