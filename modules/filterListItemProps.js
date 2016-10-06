export default props => {
  let itemProps = Object.assign({}, props)
  delete itemProps.type
  delete itemProps.children
  delete itemProps.position
  delete itemProps.url
  delete itemProps.clickHandler
  delete itemProps.separator
  return itemProps
}
