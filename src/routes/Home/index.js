import React, { Component, Fragment } from 'react'
import { shape, func, arrayOf, string } from 'prop-types'
import { Layout, Row, Card, Col, Icon } from 'antd'

import { connect } from 'context-store'

import Search from './components/Search'

const { Header, Content } = Layout

class Home extends Component {
  static propTypes = {
    types: arrayOf(string).isRequired,
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
    const { types, pokemons } = this.props

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
          <Row>
            {pokemons.map(i => (
              <Col xs={6} key={i.id} style={{ minHeight: '385px' }}>
                <Card
                  cover={<img alt={i.id} src={i.imageUrl} />}
                >
                  <Row>
                    <Col xs={18}>
                      <b>{i.name}</b> <br />
                      {i.supertype} <br />
                      HP: {i.hp}
                    </Col>
                    <Col xs={6}>
                      <Icon type="heart-o" style={{ fontSize: '26px', cursor: 'pointer' }} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
      </Fragment>
    )
  }
}

export default connect(['types', 'pokemons'])(Home)
