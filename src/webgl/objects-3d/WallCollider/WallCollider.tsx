import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

type Props = any;

const WallCollider: React.FC<Props> = (props) => {
  const [ref] = usePlane(() => ({
    ...props,
  }));
  return <mesh ref={ref as React.Ref<THREE.Mesh>}></mesh>;
};

export default WallCollider;
