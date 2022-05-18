import styled from 'styled-components';

const BaseButton = styled.button`
display:flex;
  justify-content: space-between;
  text-decoration: none;
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 1rem 1rem;
  border: 1px solid red;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  font-weight: bold;
  margin: 0.5rem;
  min-height: 4rem;
  min-width: 4rem;
  overflow: hidden;

  span {
    justify-self: center;
    margin:auto;
  }
`;


export const FilledButton = styled(BaseButton)`
  color: white;
  border: 2px solid #d21d5b;
  background-color: #d21d5b;
  &:hover {
    border-color: #d61d5c;
    background-color: #d61d5c;
  }
  &:active {
    border-color: #d61d5c;
    background-color: #d61d5c;
    color: white;
  }
`;


export const BorderedButton = styled(BaseButton)`
  color: #d21d5b;
  border: 2px solid #d21d5b;
  background-color: transparent;
  &:hover {
    border-color: #d61d5c;
    background-color: #d61d5c;
    color: white;
  }
  &:active {
    border-color: #d61d5c;
    background-color: #d61d5c;
    color: white;
  }
`;