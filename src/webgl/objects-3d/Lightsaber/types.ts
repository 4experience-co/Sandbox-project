import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: {
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder_3: THREE.Mesh;
  };
  materials: {
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
  };
};

