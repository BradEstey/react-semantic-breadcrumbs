import React from 'react'
import filterListItemProps from './filterListItemProps'

const MicrodataListItem = props => {
  const { url, position, children, separator = null, type = 'Thing' } = props

  return (
    <li 
      itemProp="itemListElement" 
      itemScope 
      itemType="http://schema.org/ListItem" 
      {...filterListItemProps(props)}>
      <a 
        itemProp="item"
        itemScope 
        itemType={`http://schema.org/${type}`} 
        href={url}>
        <span itemProp="name">{children}</span>
      </a>
      {separator}
      <meta itemProp="position" content={position} />
    </li>
  )
}

export default MicrodataListItem
