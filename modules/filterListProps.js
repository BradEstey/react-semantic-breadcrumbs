export default props => {
  let listProps = Object.assign({}, props)
  delete listProps.children
  delete listProps.separator
  return listProps
}
