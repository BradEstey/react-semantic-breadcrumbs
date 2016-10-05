import React from 'react'
import filterListItemProps from './filterListItemProps'

const HTML5ListItem = props => {
  const { url, position, children, separator = null } = props

  return (
    <li {...filterListItemProps(props)}>
      <a aria-level={position} href={url}>{children}</a>
      {separator}
    </li>
  )
}

export default HTML5ListItem
