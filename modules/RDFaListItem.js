import React from 'react'
import filterListItemProps from './filterListItemProps'

const RDFaListItem = props => {
  const { url, position, children, separator = null, type = 'Thing' } = props

  return (
    <li
      property="itemListElement" 
      typeof="ListItem" 
      {...filterListItemProps(props)}>
      <a property="item" typeof={type} href={url}>
        <span property="name">{children}</span>
      </a>
      {separator}
      <meta property="position" content={position} />
    </li>
  )
}

export default RDFaListItem
