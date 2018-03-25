import React, { Component, Fragment } from 'react'
import { shape, func, arrayOf, string } from 'prop-types'
import { Layout } from 'antd'

import { connect } from 'context-store'

import Search from './components/Search'
import Pokemons from './components/Pokemons'

const { Header, Content } = Layout

class Home extends Component {
  static propTypes = {
    types: arrayOf(string).isRequired,
    favouritePokemons: arrayOf(string).isRequired,
    pokemons: arrayOf(
      shape({
        id: string,
        imageUrl: string,
        name: string,
        supertype: string,
        hp: string
      })
    ).isRequired,
    actions: shape({
      getTypes: func,
      getPokemons: func,
      toggleFavouritePokemons: func
    }).isRequired
  }

  state = {
    selectedTypes: []
  }

  componentWillMount() {
    this.props.actions.getTypes()
  }

  handleSelect = v => this.setState({
    selectedTypes: v
  })

  handleSearch = () => this.props.actions.getPokemons(this.state.selectedTypes)

  handleToggleFavourite = id => this.props.actions.toggleFavouritePokemons(id)

  render() {
    const { selectedTypes } = this.state
    const { types, pokemons, favouritePokemons } = this.props

    return (
      <Fragment>
        <Header style={{ alignItems: 'center', justifyContent: 'space-around', display: 'flex' }}>
          <Search
            types={types}
            selectedTypes={selectedTypes}
            onSearch={this.handleSearch}
            onSelect={this.handleSelect}
          />
        </Header>
        <Content>
          <Pokemons
            pokemons={pokemons.map(i => ({
              ...i,
              favourited: favouritePokemons.indexOf(i.id) !== -1
            }))}
            onToggleFavouritePokemons={this.handleToggleFavourite}
          />
        </Content>
      </Fragment>
    )
  }
}

export default connect(['types', 'pokemons', 'favouritePokemons'])(Home)
