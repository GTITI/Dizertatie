import styled from 'styled-components';

export const StyledHeader = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #24292e;
  display: flex;
  align-items: baseline;
  height: 64px;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  min-width: 700px;
`;

export const NavLink = styled.div`
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 20px;
  text-decoration: none;
  a {
      color: #ffffff;
  }
`

export const SearchWrapper = styled.div`
  padding: 0 10px;
`