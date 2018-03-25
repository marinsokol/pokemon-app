import React from 'react'
import { arrayOf, string, func, shape } from 'prop-types'
import { Row, Col, Card, Icon } from 'antd'

const Pokemons = ({ pokemons, onToggleFavouritePokemons }) => (
  <Row>
    {pokemons.map(i => (
      <Col xs={6} key={i.id} style={{ minHeight: '400px' }}>
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
                onClick={() => onToggleFavouritePokemons(i.id)}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    ))}
  </Row>
)

Pokemons.propTypes = {
  pokemons: arrayOf(
    shape({
      id: string,
      imageUrl: string,
      name: string,
      supertype: string,
      hp: string
    })
  ).isRequired,
  onToggleFavouritePokemons: func
}

export default Pokemons
