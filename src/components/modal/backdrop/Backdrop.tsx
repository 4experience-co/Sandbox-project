import BackdropStyled from './BackdropStyled';

type BackdropProps = {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <BackdropStyled onClick={onClick}></BackdropStyled>;
};

export default Backdrop
