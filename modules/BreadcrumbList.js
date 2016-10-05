import React from 'react'
import HTML5BreadcrumbList from './HTML5BreadcrumbList'
import RDFaBreadcrumbList from './RDFaBreadcrumbList'
import MicrodataBreadcrumbList from './MicrodataBreadcrumbList'
import JSONLDBreadcrumbList from './JSONLDBreadcrumbList'

const BreadcrumbList = props => {
  const { format = '' } = props

  let listProps = Object.assign({}, props)
  delete listProps.format

  switch (format.toLowerCase()) {
    case 'rdfa':
      return <RDFaBreadcrumbList {...listProps} />
      break
    case 'microdata':
      return <MicrodataBreadcrumbList {...listProps} />
      break
    case 'json-ld':
      return <JSONLDBreadcrumbList {...listProps} />
      break
    default:
      return <HTML5BreadcrumbList {...listProps} />
  }
}

export default BreadcrumbList