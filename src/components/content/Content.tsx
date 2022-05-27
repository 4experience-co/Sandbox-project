import styled from 'styled-components';

const ContentStyled = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 6fr 3fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100vh;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export default ContentStyled