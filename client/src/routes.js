import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory  } from 'react-router';

import App from './App';
import Home from './Home';
import Work from './Work';
import Post from './Post';

class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path='/Work'  component={Work} />
          <Route path="posts/:_id" component={Post} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
