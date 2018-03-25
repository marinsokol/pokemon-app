import React, { Fragment } from 'react'
import { arrayOf, string, func, shape, number } from 'prop-types'
import { Row, Col, Card, Icon, Pagination } from 'antd'

const Pokemons = ({ count, pokemons, onToggleFavouritePokemons, onPageChange }) => (
  <Fragment>
    <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
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
                  style={{ fontSize: '26px', cursor: 'pointer' }}
                  onClick={() => onToggleFavouritePokemons(i.id)}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
    {pokemons.length ? (
      <Row style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Pagination
          defaultCurrent={1}
          pageSize={20}
          total={count}
          onChange={onPageChange}
        />
      </Row>
    ) : null}
  </Fragment>
)

Pokemons.propTypes = {
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
  onToggleFavouritePokemons: func,
  onPageChange: func
}

export default Pokemons
