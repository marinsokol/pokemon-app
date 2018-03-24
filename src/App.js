import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Home from 'routes/Home'
import Favourites from 'routes/Favourites'

import Sider from 'components/Sider'

export default () => (
  <BrowserRouter>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/favourites" component={Favourites} />
      </Layout>
    </Layout>
  </BrowserRouter>
)
