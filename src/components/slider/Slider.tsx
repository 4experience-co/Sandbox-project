import SliderStyled from './SliderStyled';

type Props = {
  min: number;
  max: number;
  initialValue?: number;
  onChange: (e: number) => void;
};

const Slider: React.FC<Props> = ({ min, max, initialValue, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(+e.target.value);
  };

  return (
    <SliderStyled
      type='range'
      value={initialValue}
      min={min}
      max={max}
      onChange={handleChange}
    />
  );
};

export default Slider;
