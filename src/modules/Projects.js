import React from 'react'
import SimpleContentComponent from './SimpleContentComponent'

// create Projects class
export default React.createClass ({
  render() {
    return (
      <div>
      	<h1>Projects</h1>
      	<SimpleContentComponent text="Project page" p1content="this component is currently displaying on the Projects page." />
      </div>
    )
  }
}) 