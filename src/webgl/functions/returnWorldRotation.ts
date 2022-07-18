import * as THREE from 'three';
import { Vector3 } from 'three';

const returnWorldQuaternion = (mesh: THREE.Mesh | THREE.Group) => {
  const quat = new THREE.Quaternion();
  mesh.getWorldQuaternion(quat);
  return quat;
};

export default returnWorldQuaternion;
