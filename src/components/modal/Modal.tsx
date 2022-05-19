import ReactDOM from "react-dom";
import BackdropStyled from './BackdropStyled';
import ModalOverlayStyled from './ModalOverlayStyled';

interface BackdropProps {
  onClick: () => void;
}

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

type ModalOverlayProps = {
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <BackdropStyled
      onClick={props.onClick}
    ></BackdropStyled>
  );
};


const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
  return (
    <ModalOverlayStyled>
     {children}
    </ModalOverlayStyled>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
