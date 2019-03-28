import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import User from './components/User/User';
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login/Login';

class App extends Component {
  render() {
    let routes = <Switch>
      <Route path="/" exact component={User} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </Switch>
    return (
     
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
