import { useMemo, useRef } from 'react';
import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Interactive, useXR } from '@react-three/xr';
import * as THREE from 'three';

type Props = {
  children: JSX.Element;
  grabRange: Number;
};

const Grabbable: React.FC<Props> = ({ children, grabRange }) => {
  //need to fix types
  const meshRef = useRef<THREE.Mesh>();

  const { controllers } = useXR();
  const { scene } = useThree();

  const grabPointLeft = useMemo(() => new THREE.Group(), []);
  const grabPointRight = useMemo(() => new THREE.Group(), []);

  useFrame(() => {
    const mesh = meshRef.current!;
    console.log(mesh);
    
    if (
      controllers.length > 0 &&
      controllers !== undefined &&
      mesh !== undefined
    ) {
      const { controller: controllerLeft, inputSource: inputSourceLeft } =
        controllers[0];
      const { controller: controllerRight, inputSource: inputSourceRight } =
        controllers[1];

      const buttonsLeft = inputSourceLeft.gamepad.buttons;
      const buttonsRight = inputSourceRight.gamepad.buttons;

      const gripButtonLeft = buttonsLeft[1];
      const gripButtonRight = buttonsRight[1];

      const boxWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(boxWorldPosition);

      const distanceToLeftCtrl =
        controllerLeft.position.distanceTo(boxWorldPosition);
      const distanceToRightCtrl =
        controllerRight.position.distanceTo(boxWorldPosition);

      if (gripButtonLeft.pressed === true && distanceToLeftCtrl < grabRange) {
        scene.add(grabPointLeft);
        grabPointLeft.rotation.copy(controllerLeft.rotation);
        grabPointLeft.position.copy(controllerLeft.position);
        grabPointLeft.attach(mesh);
      }

      if (gripButtonRight.pressed === true && distanceToRightCtrl < grabRange) {
        scene.add(grabPointRight);
        grabPointRight.rotation.copy(controllerRight.rotation);
        grabPointRight.position.copy(controllerRight.position);
        grabPointRight.attach(mesh);
      }

      if (
        gripButtonLeft.pressed === false &&
        gripButtonRight.pressed === false
      ) {
        scene.remove(grabPointRight);
        scene.remove(grabPointLeft);
        scene.attach(mesh);
      }
    }
  });

  return React.createElement('group', { ref: meshRef }, children);
};

export default Grabbable;
