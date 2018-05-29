import React from 'react'
import { shallow } from 'enzyme'
import Sider from './index'

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
