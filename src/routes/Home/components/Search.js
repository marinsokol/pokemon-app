import React, { Fragment } from 'react'
import { func, arrayOf, string } from 'prop-types'
import { Select, Button, Icon } from 'antd'

const { Option } = Select

const Search = ({ selectedTypes, types, onSelect, onSearch }) => (
  <Fragment>
    <Select
      mode="multiple"
      style={{ width: '80%' }}
      value={selectedTypes}
      onChange={onSelect}
    >
      {types.map(i => (
        <Option key={i}> {i} </Option>
      ))}
    </Select>
    <Button onClick={onSearch}>
      <Icon type="search" />
      Search
    </Button>
  </Fragment>
)

Search.propTypes = {
  selectedTypes: arrayOf(string).isRequired,
  types: arrayOf(string).isRequired,
  onSelect: func.isRequired,
  onSearch: func.isRequired
}

export default Search
