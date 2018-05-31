import React from 'react'
import { shallow } from 'enzyme'
import { Details } from './index'

describe('Home', () => {
  const pokemons = [{
    id: 'ex8-98',
    imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
    name: 'Deoxys ex',
    supertype: 'Pokémon',
    hp: '110',
    favourited: true,
    attacks: [{
      name: 'Green Blast',
      text: 'Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.',
      damage: '20+'
    }, {
      name: 'Toxic Sleep',
      text: 'The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.',
      damage: ''
    }
    ]
  }]

  it('should be defined', () => {
    expect(Details).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Details
        allPokemons={pokemons}
        actions={{
          getPokemon: () => { }
        }}
        match={{
          params: { id: 'ex8-98' }
        }}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render pokemon attacks', () => {
    const tree = shallow(
      <Details
        allPokemons={pokemons}
        actions={{
          getPokemon: () => { }
        }}
        match={{
          params: { id: 'ex8-98' }
        }}
      />
    )
    expect(tree.find('Card').length).toBe(4)
  })
})
