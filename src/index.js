import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'context-store'
import App from 'App'

import * as actions from 'store/actions'
import { initState } from 'store/state'

import 'index.css'
import registerServiceWorker from 'registerServiceWorker'

ReactDOM.render(
  <Provider actions={actions} state={initState}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
