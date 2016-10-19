// modules/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router'
// components
import App from './App';
import Home from './Home'
import Projects from './Projects';
import Technologies from './Technologies';
import Technology from './Technology';

const root_path = '/react-router-demo/';

module.exports = (
  <Route path={root_path} component={App}>
    <IndexRoute component={Home}/>
    <Route path={root_path + 'technologies'} component={Technologies}>
      <Route path={root_path + 'technologies/:technology/:numversion'} component={Technology}/>
    </Route>
    <Route path={root_path + 'projects'} component={Projects}/>
  </Route>
)