import React from 'react'

import { Context } from './index'

export default (select, func) => Cmpnt => props => (
  <Context.Consumer>
    {({ store, actions }) => {
      console.log(func(store, props));
      const selected = select.reduce((r, v) => ({
        ...r,
        [v]: store[v]
      }), {})

      return (<Cmpnt {...props} {...selected} actions={actions} />)
    }}
  </Context.Consumer>
)
