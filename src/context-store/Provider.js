import React, { PureComponent } from 'react'
import { node, shape } from 'prop-types'

import { Context } from './index'

export default class Provider extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    state: shape().isRequired,
    actions: shape().isRequired
  }

  state = this.props.state

  actions = Object.keys(this.props.actions).reduce((r, v) => ({
    ...r,
    [v]: (args) => {
      const res = this.props.actions[v](this.state, args)
      res.then
        ? res.then(resThen => this.setState(resThen))
        : this.setState(res)
    }
  }), {})

  render() {
    return (
      <Context.Provider
        value={{
          store: this.state,
          actions: this.actions
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
