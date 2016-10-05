import React, { Children } from 'react'
import MicrodataListItem from './MicrodataListItem'
import mapListItems from './mapListItems'
import filterListProps from './filterListProps'

const MicrodataBreadcrumbList = props => (
  <ol 
    itemScope 
    itemType="http://schema.org/BreadcrumbList" 
    {...filterListProps(props)}>
    {mapListItems(props, MicrodataListItem)}
  </ol>
)


export default MicrodataBreadcrumbList
