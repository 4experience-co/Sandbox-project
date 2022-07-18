import { useFBX } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import Plane from '../PlaneCollider/PlaneCollider';
import WallCollider from '../WallCollider/WallCollider';
import * as THREE from 'three';
import { Object3D } from 'three';

const Corridor = (props: any) => {
  const fbx = useFBX('/public/assets/corridor/Corridor.fbx');

  //applying receiveShadow property to all meshes in corridor model
  useEffect(() => {
    const fbxMeshChildren = fbx.children[2].children;
    fbxMeshChildren.forEach((group) => {
      group.children.forEach((obj) => {
        if ((obj as THREE.Mesh).isMesh)
          Object.assign(obj, { receiveShadow: true, castShadow: true});
      });
    });
  }, [fbx]);

  // /useMemo(() => Object.values(nodes).forEach(obj =>
  //obj.isMesh && Object.assign(obj, { castShadow: true })), [nodes])
  return (
    <group>
      <Plane position={[0, 0.05, 0]} scale={[1, 0, 100]} />
      <WallCollider rotation={[0, Math.PI / 2, 0]} position={[-3, 0, 0]} />
      <WallCollider rotation={[0, -Math.PI / 2, 0]} position={[3, 0, 0]} />
      <primitive object={fbx} {...props} />
    </group>
  );
};

export default Corridor;
