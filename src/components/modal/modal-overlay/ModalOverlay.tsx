import ModalOverlayStyled from './ModalOverlayStyled';

type ModalOverlayProps = {
  children?: React.ReactNode;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return <ModalOverlayStyled>{children}</ModalOverlayStyled>;
};

export default ModalOverlay;