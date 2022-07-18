import OptionsPanelStyled from './OptionsPanelStyled';
import CollapseComponent from './../CollapseComponent/CollapseComponent';
import Button from '../Button/Button';
import Options from './Options/Options';
import Slider from '../Slider/Slider';
import ShareButton from './ShareButton/ShareButton';

const OptionsPanel: React.FC = () => {
  return (
    <OptionsPanelStyled>
      <div>
        <CollapseComponent title='Type'>
          <Options>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
          </Options>
        </CollapseComponent>
        <CollapseComponent title='Handle'>
          <Options>
            <Button variant='filled'>b1</Button>
            <Button variant='filled'>b2</Button>
          </Options>
        </CollapseComponent>
        <CollapseComponent title='Blade'>
          <h3>Length:</h3>
          <Options>
            <Slider
              min={0}
              max={100}
              onChange={(value) => console.log(value)}
            />
          </Options>
          <h3>Colors:</h3>
          <Options>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
            <Button variant='filled'></Button>
          </Options>
        </CollapseComponent>
      </div>
      <ShareButton />

    </OptionsPanelStyled>
  );
};

export default OptionsPanel;
