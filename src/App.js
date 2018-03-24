import React, { Component } from 'react'
import { shape } from 'prop-types'

import { connect } from './context-store'

class App extends Component {
  static propTypes = {
    actions: shape().isRequired
  }

  state = {}

  componentDidMount() {
    this.props.actions.getPokemons('haha')
  }

  render() {
    console.log('app ->', this)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default connect(['pokemons'])(App)
