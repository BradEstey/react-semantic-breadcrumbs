import React, { Children } from 'react'
import RDFaListItem from './RDFaListItem'
import mapListItems from './mapListItems'
import filterListProps from './filterListProps'

const RDFaBreadcrumbList = props => (
  <ol 
    vocab="http://schema.org/" 
    typeof="BreadcrumbList" 
    {...filterListProps(props)}>
    {mapListItems(props, RDFaListItem)}
  </ol>
)

export default RDFaBreadcrumbList
