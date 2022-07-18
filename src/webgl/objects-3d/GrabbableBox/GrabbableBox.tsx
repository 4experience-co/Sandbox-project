import React from 'react';
import { useBox } from '@react-three/cannon';
import * as THREE from 'three';

import usePhysicsGrab from '../../hooks-3d/usePhysicsGrab';

type Props = any;
const GrabbableBox: React.FC<Props> = React.forwardRef((props, ref) => {
  const [meshRef, api] = useBox(() => ({
    mass: 1,
    args: props.scale,
    type: 'Dynamic',
    ...props,
  }));

  const mesh = meshRef.current as THREE.Mesh;
  usePhysicsGrab(mesh, api, 1);

  return (
    <mesh receiveShadow castShadow ref={meshRef} {...props}>
      <boxGeometry />
      <meshStandardMaterial color='#50e250' />
    </mesh>
  );
});

export default GrabbableBox;
