
import Button from '../../Button/Button';
import ShareButtonContainer from './ShareButtonContainer';

const ShareButton: React.FC = () => {
  return (
    <ShareButtonContainer>
      <Button variant='filled'>Share</Button>
    </ShareButtonContainer>
  )
}

export default ShareButton;