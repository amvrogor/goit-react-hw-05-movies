import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
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

export const Movie = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: auto;
`;

export const Poster = styled.div`
  width: 400px;
`;
export const Image = styled.img`
  display: block;
  width: 400px;
  height: auto;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 0 15px;
`;

export const MovieTitle = styled.h1`
  font-size: 30px;
`;

export const InfoTitle = styled.h2`
  font-size: 20px;
`;

export const InfoText = styled.p`
  font-size: 16px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  padding: 0 15px 15px 15px;
  border: 1px solid #3f3f3f;
  border-width: 1px 0 1px 0;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li``;
