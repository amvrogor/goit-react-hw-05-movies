import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header``;
export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: orangered;
  }
`;

export const Main = styled.main``;
