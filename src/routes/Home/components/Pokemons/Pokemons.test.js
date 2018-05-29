import React from 'react'
import sinon from 'sinon'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pokemons from './index'

configure({ adapter: new Adapter() })

describe('Pokemons', () => {
  const pokemons = [
    {
      id: 'ex8-98',
      imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
      name: 'Deoxys ex',
      supertype: 'Pokémon',
      hp: '110'
    },
    {
      id: 'ex14-85',
      imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
      name: 'Windstorm',
      supertype: 'Pokémon',
      hp: 'none'
    }
  ]
  it('should be defined', () => {
    expect(Pokemons).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Pokemons
        count={2}
        pokemons={pokemons}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('simulates click on icon', () => {
    const onButtonClick = sinon.spy()
    const tree = mount((
      <Pokemons
        count={2}
        pokemons={pokemons}
        onToggleFavouritePokemonsmons={onButtonClick}
      />
    ))
    tree.find('Icon').simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })
})
