import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const OrbitControlsSetup: React.FC = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.rotateSpeed = 0.3;
  }, [camera, gl]);

  return null
}

export default OrbitControlsSetup;
