import styled from 'styled-components';

const CollapseButtonStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

export default CollapseButtonStyled;
