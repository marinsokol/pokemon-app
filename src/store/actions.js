import axios from 'axios'

import config from 'config'

export const getTypes = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${config.API_URL}types`
  })

  return data
}

export const getPokemons = async (types) => {
  const { data } = await axios({
    method: 'get',
    url: `${config.API_URL}cards`,
    params: {
      pageSize: 1000,
      types: types.length === 1 ? types[0] : types.reduce((r, v) => `${r}${v}|`, '')
    }
  })

  return {
    pokemons: data.cards.map(i => ({
      id: i.id,
      imageUrl: i.imageUrl,
      name: i.name,
      supertype: i.supertype,
      hp: i.hp,
      subtype: i.subtype,
      types: i.types
    }))
  }
}

export const toggleFavouritePokemons = (pokemon, { favouritePokemons }) => {
  if (favouritePokemons.findIndex(i => i.id === pokemon.id) !== -1) {
    return {
      favouritePokemons: favouritePokemons.filter(i => i.id !== pokemon.id)
    }
  }
  return {
    favouritePokemons: [...favouritePokemons, pokemon]
  }
}
