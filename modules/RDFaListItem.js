import React from 'react'
import filterListItemProps from './filterListItemProps'

const RDFaListItem = props => {
  const {
    url,
    position,
    children,
    separator = null,
    type = 'Thing',
    clickHandler = null
  } = props

  return (
    <li
      property="itemListElement"
      typeof="ListItem"
      {...filterListItemProps(props)}>
      <a property="item" typeof={type} href={url} onClick={clickHandler}>
        <span property="name">{children}</span>
      </a>
      {separator}
      <meta property="position" content={position} />
    </li>
  )
}

export default RDFaListItem
