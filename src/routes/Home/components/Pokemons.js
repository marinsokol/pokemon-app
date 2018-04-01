import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { arrayOf, string, func, shape, number } from 'prop-types'
import { Row, Col, Card, Icon, Pagination } from 'antd'

const Pokemons = ({ count, pokemons, onToggleFavouritePokemons, onPageChange }) => (
  <Fragment>
    <Row className="row-pokemons">
      {pokemons.map(i => (
        <Col xs={6} key={i.id}>
          <Card
            cover={<img alt={i.id} src={i.imageUrl} />}
          >
            <Link to={`/pokemon-details/${i.id}`}>
              <Row>
                <Col xs={18}>
                  <b>{i.name}</b> <br />
                  {i.supertype} <br />
                  HP: {i.hp}
                </Col>
                <Col xs={6}>
                  <Icon
                    type={i.favourited ? 'heart' : 'heart-o'}
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      onToggleFavouritePokemons(i.id)
                    }}
                  />
                </Col>
              </Row>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
    {pokemons.length ? (
      <Row className="home-pagination">
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
