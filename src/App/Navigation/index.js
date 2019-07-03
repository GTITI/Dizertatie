import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';
import Button from '../../Button';
import Input from '../../Input';
import {StyledHeader, NavLink, SearchWrapper} from './style';

const Navigation = ({
  location: { pathname },
  organizationName,
  onOrganizationSearch,
}) => (
  <StyledHeader>
    <NavLink>
      <Link to={routes.PROFILE}>Profile</Link>
    </NavLink>
    <NavLink>
      <Link to={routes.ORGANIZATION}>Organization</Link>
    </NavLink>
    <NavLink>
      <Link to={routes.REPOSITORY}>Repository</Link>
    </NavLink>

    {(pathname === routes.ORGANIZATION || pathname === routes.REPOSITORY) && (
      <OrganizationSearch
        organizationName={organizationName}
        onOrganizationSearch={onOrganizationSearch}
      />
    )}
  </StyledHeader>
);

class OrganizationSearch extends React.Component {
  state = {
    value: this.props.organizationName,
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    this.props.onOrganizationSearch(this.state.value || 'moduscreateorg');

    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <SearchWrapper>
        <form onSubmit={this.onSubmit}>
          <Input
            color={'white'}
            type="text"
            value={value}
            onChange={this.onChange}
          />{' '}
          <Button color={'white'} type="submit">
            Search
          </Button>
        </form>
      </SearchWrapper>
    );
  }
}

export default withRouter(Navigation);
