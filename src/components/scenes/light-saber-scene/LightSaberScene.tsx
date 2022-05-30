import 'aframe';

import {Entity, Scene, Box, Sphere, Cylinder, Plane, Sky } from '@belivvr/aframe-react';

function LightSaberScene() {
  return (
    <Scene embedded>
      <Entity
        gltfModel='/src/assets/lightsaber/LightsaberScaline.gltf'
        position={{ x: 0, y: 0, z: -4 }}
        scale={{ x: 3, y: 3, z: 3 }}
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
