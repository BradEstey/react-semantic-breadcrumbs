import React, { Children } from 'react'
import HTML5ListItem from './HTML5ListItem'
import mapListItems from './mapListItems'
import filterListProps from './filterListProps'

const HTML5BreadcrumbList = props => (
  <nav 
    aria-label="breadcrumb"
    role="navigation"
    {...filterListProps(props)}>
    <ul>{mapListItems(props, HTML5ListItem)}</ul>
  </nav>
)

export default HTML5BreadcrumbList
