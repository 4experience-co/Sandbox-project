import styled from 'styled-components';

const ModalOverlayStyled = styled.div`

  min-width: 350px;
  max-height: 80vh;
  max-width: 90vw;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  padding-bottom: 20px;
`;

export default ModalOverlayStyled;
