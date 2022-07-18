import styled from 'styled-components';
import { ButtonVariant } from './Button';

const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  background-color: ${({ variant }) => {
    if (variant === 'filled') return ({ theme }) => theme.mainColor;
    if (variant === 'bordered') return 'transparent';
    else return 'white';
  }};

  color: ${({ variant }) => {
    if (variant === 'filled') return ({ theme }) => theme.filledButtonTextColor;
    if (variant === 'bordered') return ({ theme }) => theme.borderedButtonTextColor;
    else return 'black';
  }};

  &:hover {
    border-color: ${({ theme }) => theme.buttonActiveColor};
    background-color: ${({ theme }) => theme.buttonActiveColor};
    color: ${({ theme }) => theme.buttonActiveTextColor};
  }
  &:active {
    border-color: ${({ theme }) => theme.buttonActiveColor};
    background-color: ${({ theme }) => theme.buttonActiveColor};
    color: white;
  }

  border: 2px solid ${({ theme }) => theme.mainColor};
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

