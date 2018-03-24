import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from './context-store'
import App from './App'

import * as actions from './actions'
import { initState } from './initState'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider actions={actions} state={initState}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
