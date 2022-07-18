import ArrowDown from '../../../../public/assets/ArrowDown.svg';
import ArrowUp from '../../../../public/assets/ArrowUp.svg';
import IconStyled from '../../Icon/IconStyled';

import CollapseButtonStyled from './CollapseButtonStyled';

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
