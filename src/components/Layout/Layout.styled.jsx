import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #e7ecf2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const List = styled.ul`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 0 15px;
  list-style: none;
`;
export const ListItem = styled.li`
  + li {
    margin-left: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: #3f3f3f;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
  }
  &.active {
    color: orangered;
    border: 1px solid orangered;
  }
`;

export const Main = styled.main`
  margin: 0;
  padding: 0 15px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  /* box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2); */
  /* clip-path: inset(0px -15px 0px -15px); */
  /* background-color: #e7ecf2; */
`;
