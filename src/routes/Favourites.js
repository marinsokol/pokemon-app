import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

class Favourites extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <Header>Header</Header>
        <Content>
          Favourites
        </Content>
      </Fragment>
    )
  }
}

export default Favourites
