import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  color: string;
};

const SceneBackground: React.FC<Props> = ({ color }) => {
  const { scene } = useThree();
  useEffect(() => {
    const black = new THREE.Color(color);
    scene.background = black;
  }, []);
  return null;
};

export default SceneBackground;
