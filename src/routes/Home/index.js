import React, { Component, Fragment } from 'react'
import { shape, func, arrayOf, string, number } from 'prop-types'
import { Layout } from 'antd'

import { connect } from 'context-store'

import Search from './components/Search'
import Pokemons from './components/Pokemons'

const { Header, Content } = Layout

class Home extends Component {
  static propTypes = {
    types: arrayOf(string).isRequired,
    favouritePokemons: arrayOf(string).isRequired,
    count: number.isRequired,
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
    page: 1,
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

  handlePageChange = page => this.setState({ page })

  render() {
    const { selectedTypes, page } = this.state
    const { types, pokemons, favouritePokemons, count } = this.props

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
            count={count}
            pokemons={pokemons.slice((page - 1) * 20, page * 20).map(i => ({
              ...i,
              favourited: favouritePokemons.indexOf(i.id) !== -1
            }))}
            onToggleFavouritePokemons={this.handleToggleFavourite}
            onPageChange={this.handlePageChange}
          />
        </Content>
      </Fragment>
    )
  }
}

export default connect(['types', 'pokemons', 'favouritePokemons', 'count'])(Home)
