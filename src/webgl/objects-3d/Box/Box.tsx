import React from 'react';
import { useBox } from '@react-three/cannon';

type Props = any;
const Box: React.FC<Props> = React.forwardRef((props, ref) => {
  const [meshRef] = useBox(() => ({
    mass: 1,
    args: props.scale,
    type: 'Dynamic',
    ...props,
  }));

  return (
    <mesh receiveShadow castShadow ref={meshRef} {...props}>
      <boxGeometry />
      <meshStandardMaterial color={'blue'}/>
    </mesh>
  );
});

export default Box;
