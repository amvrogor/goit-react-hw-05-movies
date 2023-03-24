import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 250px;
`;

export const LinkButton = styled(Link)`
  height: 100%;
  display: block;
  margin-right: auto;
  color: #3f3f3f;
  text-decoration: none;
  :hover {
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  /* object-fit: cover; */
`;
