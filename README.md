# react-semantic-breadcrumbs [![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/react-semantic-breadcrumbs.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-semantic-breadcrumbs

[`react-semantic-breadcrumbs`](https://www.npmjs.com/package/react-semantic-breadcrumbs) makes it easy to render semantic breadcrumbs in RDFa, microdata, JSON-LD or plain HTML5.

## Installation
```
$ npm i react-semantic-breadcrumbs --save
```

```js
import { BreadcrumbList, ListItem } from 'react-semantic-breadcrumbs'
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-semantic-breadcrumbs/umd/react-semantic-breadcrumbs.min.js"></script>
```

When using the UMD build, you can find the components on `window.ReactSemanticBreadcrumbs.BreadcrumbList` and `window.ReactSemanticBreadcrumbs.ListItem`.


## Basic Usage

Just import the `BreadcrumbList` and `ListItem` components and pass your desired format.

```js
import React from 'react'
import { BreadcrumbList, ListItem } from 'react-semantic-breadcrumbs'

const breadcrumbs = (
  <BreadcrumbList format="RDFa" separator=" > ">
    <ListItem url="/">Home</ListItem>
    <ListItem url="/products">Products</ListItem>
    <ListItem url="/products/iphone-7-plus">iPhone 7 Plus</ListItem>
  </BreadcrumbList>
)
```

Will produce the following HTML:

```html
  <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/">
        <span property="name">Home</span>
      </a> > 
      <meta property="position" content="1" />
    </li>
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/products">
        <span property="name">Products</span>
      </a> > 
      <meta property="position" content="2" />
    </li>
    <li property="itemListElement" typeof="ListItem">
      <a property="item" typeof="Thing" href="/products/iphone-7-plus">
        <span property="name">iPhone 7 Plus</span>
      </a>
      <meta property="position" content="3" />
    </li>
  </ol>
```

## BreadcrumbList Props

- **format** `string` (Default: HTML5)<br />
Choose from “RDFa”, “Microdata”, “HTML5”, or “JSON-LD”. Case-insensitive.

- **separator** `string` (Default: null)<br />
The string to place between each `ListItem`. Ignored by JSON-LD.

## ListItem Props

- **url** `string` (Required)<br />
The page to link to.

- **type** `string` (Default: Thing)<br />
Uses [schema.org types](http://schema.org/docs/full.html).

## Import Only a Specific Format

You may only want to ever use one specific format. To cherry-pick a format for smaller browserify/rollup/webpack bundles, you can do this:

```js
import BreadcrumbList from 'react-semantic-breadcrumbs/MicrodataBreadcrumbList'
import ListItem from 'react-semantic-breadcrumbs/MicrodataListItem'
```

- **HTML5**: `HTML5BreadcrumbList` & `HTML5ListItem`
- **RDFa**: `RDFaBreadcrumbList` & `RDFaListItem`
- **Microdata**: `MicrodataBreadcrumbList` & `MicrodataListItem`
- **JSON-LD**: `JSONLDBreadcrumbList` & `JSONLDListItem`


## Example

To run the example application, run these commands from inside the `/example` directory.

```
$ npm i
$ npm run build
```

To view the example, open the `example/index.html` file.