import styled from 'styled-components';
import { ButtonVariant } from './Button';

const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  background-color: ${({ variant }) => {
    if (variant === 'filled') return '#d21d5b';
    if (variant === 'bordered') return 'transparent';
    else return 'white';
  }};

  color: ${({ variant }) => {
    if (variant === 'filled') return 'white';
    if (variant === 'bordered') return '#d21d5b';
    else return 'black';
  }};

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

  border: 2px solid #d21d5b;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 4px;
  padding: 16px 16px;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  font-weight: bold;
  margin: 8px;
  min-height: 64px;
  min-width: 64px;
  max-width: 256px;
  overflow: hidden;

  span {
    padding: 0 10px;
    margin: auto;
  }
`;

export default ButtonStyled;

