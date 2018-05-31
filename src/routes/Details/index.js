import React, { Component } from 'react'
import { shape, string, arrayOf, func } from 'prop-types'
import { Layout, Row, Col, Card } from 'antd'

import { connect } from 'context-store'

const { Content } = Layout

export class Details extends Component {
  static propTypes = {
    allPokemons: arrayOf(
      shape()
    ).isRequired,
    match: shape({
      params: shape({
        id: string
      })
    }).isRequired,
    actions: shape({
      getPokemon: func
    }).isRequired
  }

  state = {}

  componentDidMount() {
    if (!this.props.allPokemons.length) {
      this.props.actions.getPokemon(this.props.match.params.id)
    }
  }

  render() {
    const pokemon = this.props.allPokemons.find(i => i.id === this.props.match.params.id)
    if (!pokemon) return null

    return (
      <Content className="details">
        <Row>
          <Col xs={10}>
            <img alt={pokemon.id} src={pokemon.imageUrl} />
          </Col>
          <Col className="col" xs={14}>
            <Card>
              <Col className="col-title" xs={6}>
                {pokemon.name}
              </Col>
              <Col className="col-title" xs={12}>
                {pokemon.supertype} {pokemon.subtype}
              </Col>
              <Col className="col-title" xs={6}>
                HP: {pokemon.hp}
              </Col>
            </Card>
            <Card title={pokemon.ability ? pokemon.ability.name : ''}>
              <p>{pokemon.ability ? pokemon.ability.text : ''}</p>
            </Card>
            {pokemon.attacks.map(i => (
              <Card title={`${i.name} | ${i.damage}`} key={i.name}>
                <p>{i.text}</p>
              </Card>
            ))}
          </Col>
        </Row>
      </Content>
    )
  }
}

export default connect(['allPokemons'])(Details)
