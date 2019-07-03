import React from 'react';

import styled from 'styled-components';

const Message  = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`

const ErrorMessage = ({ error }) => (
  <Message>
    <small>{error.toString()}</small>
  </Message>
);

export default ErrorMessage;
