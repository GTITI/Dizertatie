import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Profile from '../Profile';
import Repository from '../Repositories';
import Organization from '../Organization';

import * as routes from '../constants/routes';

import './style.css';

class App extends Component {
  state = {
    organizationName: 'moduscreateorg',
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    const { organizationName } = this.state;

    return (
      <Router>
        <div className="App">
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <div className="App-main">
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <div className="App-content_large-header">
                  <Organization organizationName={organizationName} />
                </div>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <div className="App-content_small-header">
                  <Profile />
                </div>
              )}
            />
            <Route
              exact
              path={routes.REPOSITORY}
              component={() => (
                <div className="App-content_small-header">
                  <Repository organizationName={organizationName}/>
                </div>
              )}
            />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
