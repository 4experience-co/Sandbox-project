
import OptionsPanelStyled from './OptionsPanelStyled';

type Props = {
  children?: React.ReactNode;
};
const Content: React.FC<Props> = ({ children }) => {
  return <OptionsPanelStyled>{children}</OptionsPanelStyled>;
};

export default Content;
