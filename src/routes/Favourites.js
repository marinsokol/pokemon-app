import React, { Component, Fragment } from 'react'
import { arrayOf, string, shape, func } from 'prop-types'
import { Layout, Row, Col, Card, Icon } from 'antd'

import { connect } from 'context-store'

const { Content } = Layout

class Favourites extends Component {
  static propTypes = {
    favouritePokemons: arrayOf(string).isRequired,
    allPokemons: arrayOf(
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

  getPokemons = () => {
    const { allPokemons, favouritePokemons } = this.props

    return favouritePokemons.map(id => allPokemons.find(i => i.id === id))
  }

  handleToggleFavourite = id => this.props.actions.toggleFavouritePokemons(id)

  render() {
    return (
      <Fragment>
        <Content>
          <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.getPokemons().map(i => (
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
                        style={{ fontSize: '26px', cursor: 'pointer' }}
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

export default connect(['allPokemons', 'favouritePokemons'])(Favourites)
