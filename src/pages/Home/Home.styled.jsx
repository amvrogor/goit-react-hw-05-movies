import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const LinkButton = styled(Link)`
  width: 600px;
  display: block;
  padding: 5px;
  margin-right: auto;
  color: #3f3f3f;
  text-decoration: none;
  border: 1px solid gray;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
  }
`;
