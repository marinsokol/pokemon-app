import React, { Component, Fragment } from 'react'
import { arrayOf, string, shape, func } from 'prop-types'
import { Layout, Row, Col, Card, Icon } from 'antd'

import { connect } from 'context-store'

const { Content } = Layout

export class Favourites extends Component {
  static propTypes = {
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
      toggleFavouritePokemons: func
    }).isRequired
  }

  state = {}

  handleToggleFavourite = id => this.props.actions.toggleFavouritePokemons(id)

  render() {
    const { pokemons } = this.props

    return (
      <Fragment>
        <Content>
          <Row className="row-pokemons">
            {pokemons.map(i => (
              <Col xs={6} key={i.id}>
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
                      <Icon
                        type={i.favourited ? 'heart' : 'heart-o'}
                        onClick={() => this.handleToggleFavourite(i.id)}
                      />
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

const mapStore = state => ({
  pokemons: state.favouritePokemons.map(id => ({
    ...state.allPokemons.find(i => i.id === id),
    favourited: true
  }))
})

export default connect(mapStore)(Favourites)
