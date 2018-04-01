import React from 'react'

import { Context } from './index'

export default select => Cmpnt => props => (
  <Context.Consumer>
    {({ store, actions }) => {
      if (typeof select === 'function') {
        return (<Cmpnt {...props} {...select(store, props)} actions={actions} />)
      }

      const selected = select.reduce((r, v) => ({
        ...r,
        [v]: store[v]
      }), {})

      return (<Cmpnt {...props} {...selected} actions={actions} />)
    }}
  </Context.Consumer>
)
