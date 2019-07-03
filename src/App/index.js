import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Profile from '../Profile';
import Repository from '../Repositories';
import Organization from '../Organization';

import * as routes from '../constants/routes';

import {StyledDivApp, Main, Header} from './style';

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
        <StyledDivApp>
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <Main>
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <Header>
                  <Organization organizationName={organizationName} />
                </Header>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <Header>
                  <Profile />
                </Header>
              )}
            />
            <Route
              exact
              path={routes.REPOSITORY}
              component={() => (
                <Header>
                  <Repository organizationName={organizationName}/>
                </Header>
              )}
            />
          </Main>

        </StyledDivApp>
      </Router>
    );
  }
}

export default App;
