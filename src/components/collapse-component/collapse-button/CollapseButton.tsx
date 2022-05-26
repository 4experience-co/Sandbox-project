import IconStyled from '../../Icon/IconStyled';
import CollapseButtonStyled from './CollapseButtonStyled';

type Props = {
  title: string;
  isOpened: boolean;
  onPress: () => void;
};

const ArrowDown =
  'https://icon-library.com/images/collapse-expand-icon/collapse-expand-icon-29.jpg';

const ArrowUp =
  'https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/collapse2-512.png';

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
