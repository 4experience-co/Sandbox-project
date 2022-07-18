import styled from 'styled-components';

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.hrColor};
  margin-bottom: 15px;
`;
export default Hr;