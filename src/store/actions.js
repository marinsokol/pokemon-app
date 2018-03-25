import axios from 'axios'

import config from 'config'

export const getTypes = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${config.API_URL}types`
  })

  return data
}

export const getPokemons = async (types, { allPokemons }) => {
  const { data } = await axios({
    method: 'get',
    url: `${config.API_URL}cards`,
    params: {
      pageSize: 1000,
      types: types.length === 1 ? types[0] : types.reduce((r, v) => `${r}${v}|`, '')
    }
  })

  return {
    allPokemons: [...allPokemons, data.cards],
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

export const toggleFavouritePokemons = (id, { favouritePokemons }) => {
  if (favouritePokemons.indexOf(id) !== -1) {
    return {
      favouritePokemons: favouritePokemons.filter(i => i.id !== id)
    }
  }
  return {
    favouritePokemons: [...favouritePokemons, id]
  }
}
