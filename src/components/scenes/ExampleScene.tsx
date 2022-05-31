import 'aframe';
import { Sphere, Cylinder, Plane, Sky } from '@belivvr/aframe-react';
import { Entity } from 'aframe-react';

function ExampleScene() {
  return (
    <a-scene embedded>
      <Entity
        super-hands
        oculus-touch-controls={{ hand: 'right' }}
        events={{
          bbuttondown: () => console.log('b clicked'),
          abuttondown: () => console.log('a clicked'),
          triggerdown: () => console.log('triggerdown'),
          thumbsticktouchstart: () => console.log('thumbsticktouchstart'),
          gripdown: () => console.log('a gripdown'),
        }}
      />
      <a-box position=' -1 0.5 -3' rotation='0 45 0' color='#87a128' />
      <Sphere
        position={{ x: 0, y: 1.25, z: -5 }}
        radius={1.25}
        color='#EF2D5E'
      />
      <Cylinder
        position={{ x: 1, y: 0.75, z: -3 }}
        radius={0.5}
        height={1.5}
        color='#FFC65D'
      />
      <Plane
        position={{ x: 0, y: 0, z: -4 }}
        rotation={{ x: -90, y: 0, z: 0 }}
        width={4}
        height={4}
        color='#7BC8A4'
      />
      <Sky color='#ECECEC' />
    </a-scene>
  );
}

export default ExampleScene;
