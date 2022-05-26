import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from './backdrop/Backdrop';
import ModalOverlay from './modal-overlay/ModalOverlay';

type Animation = 'slideUp' | 'slideDown' | 'slideRight' | 'slideLeft';

const animations = {
  slideDown: {
    initial: {},
    animate: { y: '40vh' },
    exit: { y: '150vh' },
  },
  slideUp: {
    initial: { y: '100vh' },
    animate: { y: '40vh' },
    exit: { y: '-125vh' },
  },
  slideRight: {
    initial: { y: '40vh', x: '-100vw' },
    animate: { x: '0vw' },
    exit: { x: '100vw' },
  },
  slideLeft: {
    initial: { y: '40vh', x: '100vw' },
    animate: { x: '0vw' },
    exit: { x: '-100vw' },
  },
};

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
  openModal: boolean;
  animation: Animation;
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  openModal,
  animation,
}) => {
  const { initial, animate, exit } = animations[animation];

  return (
    <>
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
      </AnimatePresence>
      <AnimatePresence>
        {openModal && (
          <motion.div initial={initial} animate={animate} exit={exit}>
            <ModalOverlay>{children}</ModalOverlay>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
