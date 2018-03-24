import { createContext } from 'react'

import Provider from './Provider'
import connect from './connect'

export const Context = createContext()

export {
  connect,
  Provider
}
