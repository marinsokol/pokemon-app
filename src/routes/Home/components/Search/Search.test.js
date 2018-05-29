import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import Search from './index'

describe('Pokemons', () => {
  const types = [
    'Fire',
    'Dragon',
    'Fighting'
  ]

  it('should be defined', () => {
    expect(Search).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Search
        selectedTypes={['Fire']}
        types={types}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('simulates click to search', () => {
    const onClick = sinon.spy()
    const tree = mount((
      <Search
        selectedTypes={['Fire']}
        types={types}
        onSearch={onClick}
      />
    ))
    tree.find('Button').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
