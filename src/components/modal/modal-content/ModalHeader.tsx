import Button from '../../button/Button'
import ModalHeaderStyled from './ModalHeaderStyled';

type Props = {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<Props> = ({title,onClose}) => {
  return (
    <ModalHeaderStyled>
      <h1>{title}</h1>
      <Button
        onPress={onClose}
        leftIcon='https://icon-library.com/images/x-icon-white/x-icon-white-11.jpg'
        variant='filled'
      ></Button>
    </ModalHeaderStyled>
  );
}

export default ModalHeader;