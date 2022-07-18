import styled from 'styled-components';

const CollapseComponentStyled = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0 5% 2% 5%;
  border-bottom: 3px solid ${({ theme }) => theme.collapseComponentBorderColor};
`;

export default CollapseComponentStyled;
