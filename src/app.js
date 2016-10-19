import React from 'react'
import { render } from 'react-dom'

const MyComponent = React.createClass({
  render: function () {
    return (
      <h1>Hello World</h1>
    )
  }
})

render(<MyComponent />, document.getElementById('app'))