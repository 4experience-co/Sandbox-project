import 'aframe';

import {Entity, Scene, Box, Sphere, Cylinder, Plane, Sky, Light } from '@belivvr/aframe-react';

function LightSaberScene() {
  return (
    <Scene embedded>
      <Entity
        gltfModel='/src/assets/lightsaber/lightsaber.gltf'
        position={{ x: 0, y: 4.5, z: -4 }}
        scale={{ x: 1, y: 1, z: 1 }}
        rotation={{x:90, y: 45, z:0}}
      />
      <Plane
        position={{ x: 0, y: 0, z: -4 }}
        rotation={{ x: -90, y: 0, z: 0 }}
        width={4}
        height={4}
        color='#7BC8A4'
      />

      <Sky color='#ECECEC' />
    </Scene>
  );
}

export default LightSaberScene;
