import React, { Component, Fragment } from 'react'
import { shape, func, arrayOf, string } from 'prop-types'
import { Layout, Select, Button, Icon } from 'antd'

import { connect } from 'context-store'

const { Header, Content } = Layout
const { Option } = Select

class Home extends Component {
  static propTypes = {
    types: arrayOf(string).isRequired,
    actions: shape({
      getTypes: func,
      getPokemons: func
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

  render() {
    const { selectedTypes } = this.state
    const { types } = this.props
    console.log(this)
    return (
      <Fragment>
        <Header style={{ alignItems: 'center', justifyContent: 'space-around', display: 'flex' }}>
          <Select
            mode="multiple"
            style={{ width: '80%' }}
            value={selectedTypes}
            onChange={this.handleSelect}
          >
            {types.map(i => (
              <Option key={i}> {i} </Option>
            ))}
          </Select>
          <Button onClick={this.handleSearch}>
            <Icon type="search" />
            Search
          </Button>
        </Header>
        <Content>
          Home
        </Content>
      </Fragment>
    )
  }
}

export default connect(['types', 'pokemons'])(Home)
