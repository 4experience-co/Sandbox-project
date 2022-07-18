import { Collapse } from 'react-collapse';
import { useState } from 'react';
import './CollapseComponent.css';
import CollapseComponentStyled from './CollapseComponentStyled';
import CollapseButton from './CollapseButton/CollapseButton';
import CollapseContentStyled from './CollapseContent/CollapseContentStyled';
import Hr from '../Hr/Hr';

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
          <Hr />
          {children}
        </CollapseContentStyled>
      </Collapse>
    </CollapseComponentStyled>
  );
};

export default CollapseComponent;
