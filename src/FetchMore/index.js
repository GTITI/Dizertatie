import React from 'react';

import Loading from '../Loading';
import { ButtonUnobtrusive } from '../Button';

import  './style.css';
import styled from 'styled-components';

const StyledFetchMoreDiv  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FetchMore = ({
  loading,
  hasNextPage,
  variables,
  updateQuery,
  fetchMore,
  children,
}) => (
  <StyledFetchMoreDiv>
    {loading ? (
      <Loading />
    ) : (
      hasNextPage && (
        <ButtonUnobtrusive
          className="FetchMore-button"
          onClick={() => fetchMore({ variables, updateQuery })}
        >
          More {children}
        </ButtonUnobtrusive>
      )
    )}
  </StyledFetchMoreDiv>
);

export default FetchMore;
