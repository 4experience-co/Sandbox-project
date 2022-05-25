import BackdropStyled from './BackdropStyled';

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <BackdropStyled onClick={onClick}></BackdropStyled>;
};

export default Backdrop
