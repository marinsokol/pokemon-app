import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sider from './index'

configure({ adapter: new Adapter() })

describe('Sider', () => {
  it('should be defined', () => {
    expect(Sider).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(<Sider />)
    expect(tree).toMatchSnapshot()
  })

  it('should have 2 menu items', () => {
    const tree = shallow(<Sider />)
    expect(tree.find('MenuItem').length).toBe(2)
  })
})
