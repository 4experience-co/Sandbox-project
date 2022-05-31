import 'aframe';

import { Sphere, Cylinder, Plane, Sky } from '@belivvr/aframe-react';


function ExampleScene() {
  return (
      <a-scene embedded>
    <a-entity>
      <a-camera></a-camera>
      <a-entity sphere-collider="objects: a-box" super-hands hand-controls="hand: left"></a-entity>
      <a-entity sphere-collider="objects: a-box" super-hands hand-controls="hand: right"></a-entity>
    </a-entity>
  
    <a-box hoverable grabbable stretchable draggable dropppable color="blue" position="1 0 0"></a-box>
  </a-scene>
  );
}

export default ExampleScene;
