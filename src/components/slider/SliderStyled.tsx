import styled from 'styled-components';

const SliderStyled = styled.input`
  -webkit-appearance: none;
  width: 90%;
  height: 1px;
  background: #d3d3d3;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #d21d5b;
    border: 3px solid #ffffff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #d21d5b;
    cursor: pointer;
  }
`;

export default SliderStyled