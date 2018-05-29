import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import Pokemons from './index'

describe('Pokemons', () => {
  const pokemons = [{
    id: 'ex8-98',
    imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
    name: 'Deoxys ex',
    supertype: 'Pokémon',
    hp: '110'
  }]
  
  it('should be defined', () => {
    expect(Pokemons).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Pokemons
        count={2}
        pokemons={pokemons}
        onPathChange={() => { }}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('simulates click to toggleFavourites', () => {
    const onClick = sinon.spy()
    const tree = mount((
      <Pokemons
        count={1}
        pokemons={pokemons}
        onPathChange={() => { }}
        onToggleFavouritePokemons={onClick}
      />
    ))
    tree.find('Icon').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })

  it('simulates click to reroute', () => {
    const onClick = sinon.spy()
    const tree = mount((
      <Pokemons
        count={1}
        pokemons={pokemons}
        onPathChange={onClick}
      />
    ))
    tree.find('Card > div').simulate('click')
    expect(onClick.calledOnce).toBe(true)
  })
})
