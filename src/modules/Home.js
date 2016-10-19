// modules/Home.js
import React from 'react'
import SimpleContentComponent from './SimpleContentComponent'

export default React.createClass({
  render() {   
    return  <div>
      <h1>Home Component</h1>
      <SimpleContentComponent text="Home page" p1content="this component is currently displaying on the Home page." />
    </div>
  }
})