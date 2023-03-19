import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledNavLink,
  Header,
  List,
  ListItem,
  Main,
  Container,
} from './Layout.styled';

const Layout = () => {
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
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
