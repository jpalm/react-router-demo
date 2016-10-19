import React from 'react'
import { Link } from 'react-router'
import '../index.css';

// create NavLink class
// I think this is like global pointers to the nav css classes
// like, any links get what's in here if you tell the Component to use NavLink
export default React.createClass ({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})