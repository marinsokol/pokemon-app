import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

class Home extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <Header>Header</Header>
        <Content>
          Home
        </Content>
      </Fragment>
    )
  }
}

export default Home
