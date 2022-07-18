import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

type Props = any;

const PlaneCollider: React.FC<Props> = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0],args: [100,100], ...props }));
  return <mesh ref={ref as React.Ref<THREE.Mesh>}></mesh>;
};

export default PlaneCollider;
