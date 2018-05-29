import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const { Item } = Menu

export default () => (
  <Sider collapsible>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Item key="1">
        <Link to="/">
          <Icon type="heart-o" />
          <span>All pokemons</span>
        </Link>
      </Item>
      <Item key="2">
        <Link to="/favourites">
          <Icon type="star-o" />
          <span>Favourite pokemons</span>
        </Link>
      </Item>
    </Menu>
  </Sider>
)
