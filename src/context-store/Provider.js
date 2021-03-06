import React, { PureComponent } from 'react'
import { node, shape } from 'prop-types'

export default class Provider extends PureComponent {
  static propTypes = {
    Context: shape().isRequired,
    children: node.isRequired,
    state: shape().isRequired,
    actions: shape().isRequired
  }

  state = this.props.state

  actions = Object.keys(this.props.actions).reduce((r, v) => ({
    ...r,
    [v]: (args) => {
      const res = this.props.actions[v](args, this.state)
      res.then
        ? res.then(resThen => this.setState(resThen))
        : this.setState(res)
    }
  }), {})

  render() {
    const { Context } = this.props
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
