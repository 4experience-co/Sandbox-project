import styled from 'styled-components';

const SliderStyled = styled.input`
  -webkit-appearance: none;
  width: 90%;
  height: 1px;
  background: ${({ theme }) => theme.sliderColor};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin: 10px 0 10px 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColor};
    border: 3px solid ${({ theme }) => theme.background};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }
`;

export default SliderStyled