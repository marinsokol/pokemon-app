import axios from 'axios'

import config from 'config'

export const getTypes = async () => {
  const { data } = await axios.get(`${config.API_URL}types`)

  return data
}

export const getPokemons = async (types) => {
  const { data } = await axios.get(`${config.API_URL}cards`, { types })

  return {
    pokemons: data.cards
  }
}
