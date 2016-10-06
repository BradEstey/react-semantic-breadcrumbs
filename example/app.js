import React, { Component } from 'react'
import { render } from 'react-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import { BreadcrumbList, ListItem } from 'react-semantic-breadcrumbs'
import pretty from 'pretty'

const formats = ['HTML5', 'RDFa', 'Microdata', 'JSON-LD']

class App extends Component {
  state = { format: 'HTML5' }

  handleFormatChange(event) {
    this.setState({ format: event.target.value })
  }

  handleClick(event) {
    event.preventDefault()
    alert(`Clicked link to navigate to: ${event.currentTarget.href}`)
  }

  renderExampleBreadcrumbList() {
    const { format } = this.state

    return (
      <BreadcrumbList format={format} separator=" / ">
        <ListItem
          url="/"
          type="WebSite"
          clickHandler={this.handleClick}>Home</ListItem>
        <ListItem
          url="/products"
          type="SomeProducts"
          clickHandler={this.handleClick}>Products</ListItem>
        <ListItem
          url="/products/iphone-7-plus"
          className="last"
          type="IndividualProduct"
          clickHandler={this.handleClick}>iPhone 7 Plus</ListItem>
      </BreadcrumbList>
    )
  }

  renderExampleBreadcrumbListMarkup() {
    const { format } = this.state
    const markup = renderToStaticMarkup(this.renderExampleBreadcrumbList())

    return format === 'JSON-LD' ? markup : pretty(markup)
  }

  render() {
    const { format } = this.state

    return (
      <div>
        <h1>{format}</h1>
        <div>
          <label>Change Formatting {` `}</label>
          <select onChange={this.handleFormatChange.bind(this)}>
            {formats.map((format, index) => (
              <option value={format} key={index}>{format}</option>
            ))}
          </select>
        </div>
        <hr />
        {this.renderExampleBreadcrumbList()}
        <pre>{this.renderExampleBreadcrumbListMarkup()}</pre>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
