import * as THREE from 'three';
import { Vector3 } from 'three';

const returnWorldPosition = (mesh: THREE.Mesh | THREE.Group) => {
  const vec3 = new THREE.Vector3();
  mesh.getWorldPosition(vec3);
  return vec3;
}

export default returnWorldPosition;