import React, { Children } from 'react'

const JSONLDBreadcrumbList = ({ children }) => {
  let listItems = []
  Children.map(children, (child, index) => {
    const { url, children, type = 'Thing' } = child.props
    listItems.push({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": url,
        "@type": type,
        "name": children
      }      
    })
  })

  const breadcrumbList = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': listItems
  }

  return (
    <script
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ 
        __html: `\n${JSON.stringify(breadcrumbList, null, 2)}\n` 
      }} />
  )
}

export default JSONLDBreadcrumbList
