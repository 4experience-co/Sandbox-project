import { useCallback, useEffect, useState } from 'react';
import IconStyled from '../Icon/IconStyled';
import ButtonStyled from './ButtonStyled';

export type ButtonVariant = 'filled' | 'bordered';

type Props = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: ButtonVariant;
  onPress?: () => void;
  onHold?: () => void;
  children?: React.ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

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

  const handleOnMouseDown = useCallback(() => {
    setIsHolding(true);
    if (onPress && !isDisabled) onPress();
  }, []);

  const handleHoldStart = useCallback(() => {
    setIsHolding(true);
  }, []);

  const handleHoldEnd = useCallback(() => {
    setIsHolding(false);
  }, []);

  useEffect(() => {
    if (!onHold || !isHolding || isDisabled) return;
    const interval = setInterval(onHold, 250);

    return () => {
      clearInterval(interval);
    };
  }, [isHolding]);

  return (
    <ButtonStyled
      variant={variant}
      type={type}
      onMouseDown={handleOnMouseDown}
      onTouchStart={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onTouchEnd={handleHoldEnd}
    >
      {leftIcon && <IconStyled src={leftIcon} />}
      {children && <span>{children}</span>}
      {rightIcon && <IconStyled src={rightIcon} />}
    </ButtonStyled>
  );
};

export default Button;
