import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.nav`
  width: 100%;
  height: 50px;
  padding: 10px;
`;

const StyledLink = styled(NavLink)`
  color: black;
  margin: 0 5px;

  &.selected {
    color: green;
  }
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledLink exact to="/" activeClassName="selected">
      HOME
    </StyledLink>
    <StyledLink to="/shop" activeClassName="selected">
      shop
    </StyledLink>
    <StyledLink to="/basket" activeClassName="selected">
      basket
    </StyledLink>
    <StyledLink to="/account" activeClassName="selected">
      account
    </StyledLink>
  </StyledWrapper>
);

export default Navigation;
