import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchForm = styled.form`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #e7ecf2;
  border-radius: 5px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e7ecf2;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

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
