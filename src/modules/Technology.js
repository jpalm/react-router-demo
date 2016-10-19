import React from 'react'

// create Technology class
export default React.createClass ({
  render() {
    return (
      <div>
        <h1>Nested Technology Component</h1>
        <h2>technology: {this.props.params.technology}, version: {this.props.params.numversion}</h2>
      </div>
    )
  }
})