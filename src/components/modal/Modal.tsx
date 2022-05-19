import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Backdrop from './backdrop/Backdrop';
import ModalOverlay from './modal-overlay/ModalOverlay';

type Animation = 'slideUp' | 'slideDown';

const animations = {
  slideDown: {
    initial: {},
    animate: {
      y: '40vh',
    },
    exit: {
      y: '150vh',
    },
  },
  slideUp: {
    initial: {
      y: '100vh',
    },
    animate: {
      y: '40vh',
    },
    exit: {
      y: '-125vh',
    },
  },
};

const getAnimation = (animationType: Animation) => animations[animationType];

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  openModal: boolean;
  animationType: Animation;
}

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  openModal,
  animationType,
}) => {
  const { initial, animate, exit } = getAnimation(animationType);

  return (
    <>
      {ReactDOM.createPortal(
        <AnimatePresence>
          {openModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.99 }}
              exit={{ opacity: 0 }}
            >
              <Backdrop onClick={onClose} />
            </motion.div>
          )}
        </AnimatePresence>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {openModal && (
            <motion.div initial={initial} animate={animate} exit={exit}>
              <ModalOverlay>{children}</ModalOverlay>
            </motion.div>
          )}
        </AnimatePresence>,

        portalElement
      )}
    </>
  );
};

export default Modal;
