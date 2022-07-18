import styled from 'styled-components';

const OptionsPanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${({theme}) => theme.background};
  overflow-y: auto;
`;

export default OptionsPanelStyled;
