import { Collapse } from 'react-collapse';
import { useState } from 'react';
import './CollapseComponent.css';
import Button from '../button/Button';
import CollapseComponentStyled from './CollapseComponentStyled';
import CollapseButton from './collapse-button/CollapseButton';
import CollapseContentStyled from './collapse-content/CollapseContentStyled';

type Props = {
  children: React.ReactNode;
  title: string
};

const CollapseComponent: React.FC<Props> = ({ children, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <CollapseComponentStyled>
      <CollapseButton
        title={title}
        onPress={() => {
          setIsOpened((prevValue) => !prevValue);
        }}
        isOpened={isOpened}
      />

      <Collapse isOpened={isOpened}>
        <CollapseContentStyled>
          <hr />
          {children}
        </CollapseContentStyled>
      </Collapse>
    </CollapseComponentStyled>
  );
};

export default CollapseComponent;
