import React, { createContext } from 'react'

import ContextProvider from './Provider'
import ContextConnect from './connect'

export const Context = createContext()
export const connect = ContextConnect(Context)
export const Provider = props => <ContextProvider {...props} Context={Context} />
