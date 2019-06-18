import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import RepositoryList, { REPOSITORY_FRAGMENT }  from '../Repository';
import Loading from '../Loading';
import ErrorMessage from '../Error';

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query($organizationName: String!, $cursor: String) {
  search(query:$organizationName, type:REPOSITORY, first:20, after: $cursor){  
  repositoryCount
  pageInfo{
   endCursor
   startCursor
  }
  edges{
   node{
    ...repository
    }
   }
  }
 }

${REPOSITORY_FRAGMENT}
`;

const Organization = ({ organizationName }) => (
  <Query
    query={GET_REPOSITORIES_OF_ORGANIZATION}
    variables={{
      organizationName,
    }}
    skip={organizationName === ''}
    notifyOnNetworkStatusChange={true}
  >
    {({ data, loading, error, fetchMore }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }
      const repositories = data.search;

      if (loading && !repositories) {
        return <Loading isCenter={true} />;
      }

      return (
        <RepositoryList
          loading={loading}
          repositories={repositories}
          fetchMore={fetchMore}
          entry={'organization'}
        />
      );
    }}
  </Query>
);

export default Organization;
