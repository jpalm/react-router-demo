import React from 'react'
import NavLink from './NavLink'

const root_path = '/react-router-demo/';

// create Technologies class
export default React.createClass ({
  render() {
    return (
      <div>
        <div><h1>Technologies</h1></div>
       {/* will create new nested pages based on the params in path */}
        <ul>
            <li><NavLink to={root_path + 'technologies/swan/2.0'} >Swan</NavLink></li>
            <li><NavLink to={root_path + 'technologies/mendeLIMS/3.0'}>MendLIMS</NavLink></li>
        </ul>
        {/* displays the child components as defined in routes */}
        {this.props.children}
      </div>
    )
  }
}) 