import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory  } from 'react-router';

import App from './App';
import Home from './Home';
import Work from './Work';

class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path='/Work'  component={Home} />
          <Route path='/Work'  component={Work} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
