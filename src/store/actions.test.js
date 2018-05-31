import * as actions from './actions'

describe('actions', () => {
  const pokemons = [
    'ex8-98',
    'dp6-90'
  ]
  it('should have actions', () => {
    expect(actions).toBeDefined()
    expect(Object.keys(actions).length).toBe(4)
  })

  it('should have getTypes actions', () => {
    expect(actions.getTypes).toBeDefined()
  })

  it('should have getPokemon actions', () => {
    expect(actions.getPokemon).toBeDefined()
  })

  it('should have getPokemons actions', () => {
    expect(actions.getPokemons).toBeDefined()
  })

  it('should have toggleFavouritePokemons actions', () => {
    expect(actions.toggleFavouritePokemons).toBeDefined()
  })

  it('should add to favourites', () => {
    expect(
      actions.toggleFavouritePokemons('xyp-XY05', {
        favouritePokemons: pokemons
      })
    ).toEqual({
      favouritePokemons: ['ex8-98', 'dp6-90', 'xyp-XY05']
    })
  })

  it('should remove from favourites', () => {
    expect(
      actions.toggleFavouritePokemons('dp6-90', {
        favouritePokemons: pokemons
      })
    ).toEqual({
      favouritePokemons: ['ex8-98']
    })
  })
})
