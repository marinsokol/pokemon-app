import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { Favourites } from './index'

describe('Home', () => {
  const pokemons = [{
    id: 'ex8-98',
    imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
    name: 'Deoxys ex',
    supertype: 'Pokémon',
    hp: '110',
    favourited: true
  }]

  it('should be defined', () => {
    expect(Favourites).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Favourites
        pokemons={pokemons}
        actions={{}}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render pokemons', () => {
    const tree = shallow(
      <Favourites
        pokemons={pokemons}
        actions={{}}
      />
    )
    expect(tree.find('Card').length).toBe(1)
  })

  it('should click toggle favourite', () => {
    const onClick = sinon.spy()
    const tree = mount((
      <Favourites
        pokemons={pokemons}
        actions={{
          toggleFavouritePokemons: onClick
        }}
      />
    ))
    tree.find('Icon').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
