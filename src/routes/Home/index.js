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
    }).isRequired,
    history: shape({
      push: func
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

  handlePathChange = url => () => this.props.history.push(url)

  render() {
    const { selectedTypes, page } = this.state
    const { types, pokemons, count } = this.props

    return (
      <Fragment>
        <Header className="home-header">
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
            pokemons={pokemons.slice((page - 1) * 20, page * 20)}
            onToggleFavouritePokemons={this.handleToggleFavourite}
            onPageChange={this.handlePageChange}
            onPathChange={this.handlePathChange}
          />
        </Content>
      </Fragment>
    )
  }
}

const mapStore = state => ({
  types: state.types,
  pokemons: state.pokemons.map(i => ({
    ...i,
    favourited: state.favouritePokemons.indexOf(i.id) !== -1
  })),
  count: state.count
})

export default connect(mapStore)(Home)
