import IconStyled from '../../Icon/IconStyled';
import CollapseButtonStyled from './CollapseButtonStyled';
import ArrowUp from '../../../assets/ArrowUp.svg'
import ArrowDown from '../../../assets/ArrowDown.svg';

type Props = {
  title: string;
  isOpened: boolean;
  onPress: () => void;
};

const CollapseButton: React.FC<Props> = ({ title, onPress, isOpened }) => {
  return (
    <>
      <CollapseButtonStyled onClick={onPress}>
        <h1>{title}</h1>
        <IconStyled src={isOpened ? ArrowUp : ArrowDown} />
      </CollapseButtonStyled>
    </>
  );
};

export default CollapseButton;
