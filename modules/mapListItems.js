import React, { Children } from 'react'

const mapListItems = ({ children, separator, clickHandler = null }, ListItem) => {
  return Children.map(children, (child, index) => {
    const isLastItem = Children.count(children) === index + 1
    const itemProps = Object.assign({}, child.props, {
      position: index + 1,
      separator: isLastItem ? null : separator,
      clickHandler: child.props.clickHandler || clickHandler
    })

    return <ListItem {...itemProps} />
  })
}

export default mapListItems
