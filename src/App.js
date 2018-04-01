import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Home from 'routes/Home'
import Favourites from 'routes/Favourites'
import Details from 'routes/Details'

import Sider from 'components/Sider'

export default () => (
  <BrowserRouter>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/pokemon-details/:id" component={Details} />
      </Layout>
    </Layout>
  </BrowserRouter>
)
