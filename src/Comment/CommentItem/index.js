import React from 'react';

import styled from 'styled-components';

const Item  = styled.div`
  display: flex;
  align-items: baseline;
`

const Comment = ({ comment }) => (
  <Item>
    <div>{comment.author.login}:</div>
    &nbsp;
    <div dangerouslySetInnerHTML={{ __html: comment.bodyHTML }} />
  </Item>
);

export default Comment;
