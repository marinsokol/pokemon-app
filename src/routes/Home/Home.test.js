import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import { HomeComponent } from './index'

describe('Home', () => {
  const pokemons = [{
    id: 'ex8-98',
    imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
    name: 'Deoxys ex',
    supertype: 'Pokémon',
    hp: '110'
  }]
  const types = [
    'Fire',
    'Dragon',
    'Fighting'
  ]

  it('should be defined', () => {
    expect(HomeComponent).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <HomeComponent
        count={1}
        pokemons={pokemons}
        types={types}
        actions={{}}
        history={{}}
      />,
      { disableLifecycleMethods: true })
    expect(toJson(tree)).toMatchSnapshot()
  })

  it('should have init state', () => {
    const tree = mount(
      <HomeComponent
        count={1}
        pokemons={pokemons}
        types={types}
        history={{}}
        actions={{
          getTypes: () => { }
        }}
      />
    )
    expect(tree.state().page).toBe(1)
    expect(tree.state().selectedTypes.length).toBe(0)
  })

  it('should handle select types', () => {
    const tree = mount(
      <HomeComponent
        count={1}
        pokemons={pokemons}
        types={types}
        history={{}}
        actions={{
          getTypes: () => { }
        }}
      />
    )
    tree.instance().handleSelect(['Fire', 'Dragon'])

    expect(tree.state().selectedTypes.length).toBe(2)
    expect(tree.state().selectedTypes[0]).toBe('Fire')
  })

  it('should handle page change', () => {
    const tree = mount(
      <HomeComponent
        count={1}
        pokemons={pokemons}
        types={types}
        history={{}}
        actions={{
          getTypes: () => { }
        }}
      />
    )
    tree.instance().handlePageChange(3)

    expect(tree.state().page).toBe(3)
  })
})
