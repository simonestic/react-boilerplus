import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import Layout from './containers/Layout';
import Home from './containers/Home';
import About from './containers/About';
import Topics from './containers/Topics';
import Counter from './containers/Counter';
import Albums from './containers/Albums';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          
          <ul className="navigation">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
            <li>
              <Link to="/counter">counter</Link>
            </li>
            <li>
              <Link to="/albums">albums</Link>
            </li>
          </ul>


          <Switch>
            <Route exact path="/" component={Home} />                          
            <Route path="/about" component={About} />                          
            <Route path="/topics" component={Topics} />
            <Route path="/counter" component={Counter} />
            <Route path="/albums" component={Albums} />
          </Switch>

        </Layout>
      </Router>
    );
  }
}

export default App;