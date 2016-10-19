import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavLink from './NavLink';

const root_path = '/react-router-demo/';

export default React.createClass ({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to myReact app made from create-react-app</h2>
        </div>
        <p className="App-intro">Integrating Routes</p>
        <ul>
          <li><NavLink to={root_path} onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to={root_path + 'projects'} >Projects</NavLink></li>
          <li><NavLink to={root_path + 'technologies'} >Technologies</NavLink></li>
        </ul> 
      {/* displays the child components as defined in routes */} 
      {this.props.children}   
      </div>
    )//return
  }// render
})// App component
