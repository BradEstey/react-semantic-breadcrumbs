import React from 'react'
import filterListItemProps from './filterListItemProps'

const HTML5ListItem = props => {
  const {
    url,
    position,
    children,
    separator = null,
    clickHandler = null
  } = props

  return (
    <li {...filterListItemProps(props)}>
      <a aria-level={position} href={url} onClick={clickHandler}>{children}</a>
      {separator}
    </li>
  )
}

export default HTML5ListItem
