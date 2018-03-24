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
    pokemons: data.cards
  }
}

export const toggleFavouritePokemons = (id, { favouritePokemons }) => {
  if (favouritePokemons.indexOf(id) !== -1) {
    return {
      favouritePokemons: favouritePokemons.filter(i => i !== id)
    }
  }
  return {
    favouritePokemons: [...favouritePokemons, id]
  }
}
