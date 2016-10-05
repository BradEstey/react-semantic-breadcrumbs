import React, { Children } from 'react'

const mapListItems = ({ children, separator }, ListItem) => {
  return Children.map(children, (child, index) => {
    const isLastItem = Children.count(children) === index + 1
    const itemProps = Object.assign({}, child.props, { 
      position: index + 1,
      separator: isLastItem ? null : separator
    })

    return <ListItem {...itemProps} />
  })
}

export default mapListItems
