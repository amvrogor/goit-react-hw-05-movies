import { Outlet } from 'react-router-dom';
import { StyledNavLink, Header, List, ListItem, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <ListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </ListItem>
        </List>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
