import { useEffect, useState } from 'react';
import { Icon } from '../Icon/Icon.styles';
import { FilledButton, BorderedButton } from './Button.styles';
/*
It should be possible to pass onPress and onHold methods

ok onPress - should works on desktop as click event and on touch devices as press event

Ok onHold - should works with mouse and touch events, the component should keep executing the function as long as user holds the button with specific interval

ok??? the component should have isDisabled state

ok the component should have two variants: FILLED | BORDERED

ok it should be possible to pass text as a child

it should be possible to pass two svg icons to component: leftIcon and rightIcon

if no text is passed to component and only ony icon is passed - component should be a square

color of button background and border should be #D21D5B

color of hovered/pressed button background and border should be #D61D5C

onPress and onHold button should change value of default Vite.js counter component
*/
type ButtonVariant = 'filled' | 'bordered';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  variant: ButtonVariant;
  onPress?: () => void;
  onHold?: () => void;
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  isDisabled?: boolean
};

const getButton = (buttonVariant: ButtonVariant) =>
  ({
    filled: FilledButton,
    bordered: BorderedButton,
  }[buttonVariant]);

const Button: React.FC<Props> = ({
  children,
  onPress,
  onHold,
  type = 'button',
  variant,
  leftIcon,
  rightIcon,
  isDisabled = false,
  
}) => {

  const [isHolding, setIsHolding] = useState(false);

  const ChosenButton = getButton(variant);

  let buttonWidth = children ? '256px' : '';

  const handlePress = () => {
    if (onPress && !isDisabled) onPress();
    setIsHolding(true);
  }

  useEffect(() => {
    if (!onHold || !isHolding || isDisabled) return;
    const interval = setInterval(onHold, 500)
    
    return ()=>{clearInterval(interval)}
  },[isHolding])

  return (
    <ChosenButton
      style={{ width: buttonWidth }}
      type={type}
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      onMouseUp={() => setIsHolding(false)}
      onTouchEnd={() => setIsHolding(false)}
    >
      {leftIcon && <Icon src={leftIcon} />}
      {children && <span>{children}</span>}
      {rightIcon && <Icon src={rightIcon} />}
    </ChosenButton>
  );
};

export default Button;
