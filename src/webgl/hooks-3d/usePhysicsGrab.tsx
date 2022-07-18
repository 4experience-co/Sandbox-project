
import { useEffect, useMemo, useState } from "react";
import { PublicApi } from '@react-three/cannon';
import { useFrame,useThree } from '@react-three/fiber';
import { useXR } from '@react-three/xr';
import * as THREE from 'three';

import returnWorldPosition from '../functions/returnWorldPosition';
import returnWorldQuaternion from '../functions/returnWorldRotation';

const usePhysicsGrab = (
  mesh: THREE.Mesh | THREE.Group,
  api: PublicApi,
  grabRange: number
) => {
  const [isGrabbed, setIsGrabbed] = useState(false);
  const { controllers } = useXR();
  const { scene } = useThree();

  const grabPointLeft = useMemo(() => new THREE.Group(), []);
  const grabPointRight = useMemo(() => new THREE.Group(), []);

  const helpObj = useMemo(() => new THREE.Group(), []);

  useEffect(() => {
    if (mesh) {
      const meshWorldQuaternion = returnWorldQuaternion(mesh);
      const meshWorldPosition = returnWorldPosition(mesh);
      helpObj.position.copy(meshWorldPosition);
      helpObj.quaternion.copy(meshWorldQuaternion);
    }
  }, [mesh]);

  //grabbed object is shaking if grabbed while falling

  useFrame(() => {
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

        if (isGrabbed === false) {
          const meshWorldQuaternion = returnWorldQuaternion(mesh);
          const meshWorldPosition = returnWorldPosition(mesh);
          helpObj.position.copy(meshWorldPosition);
          helpObj.quaternion.copy(meshWorldQuaternion);
        }
        setIsGrabbed(true);

        grabPointLeft.attach(helpObj);

        const helperGroupPos = returnWorldPosition(helpObj);
        const helperGroupQuat = returnWorldQuaternion(helpObj);
        api.mass.set(0);
        api.position.copy(helperGroupPos);
        api.quaternion.copy(helperGroupQuat);
      }

      if (gripButtonRight.pressed === true && distanceToRightCtrl < grabRange) {
        console.log('grab right');
        scene.add(grabPointRight);
        grabPointRight.rotation.copy(controllerRight.rotation);
        grabPointRight.position.copy(controllerRight.position);

        if (isGrabbed === false) {
          const meshWorldQuaternion = returnWorldQuaternion(mesh);
          const meshWorldPosition = returnWorldPosition(mesh);
          helpObj.position.copy(meshWorldPosition);
          helpObj.quaternion.copy(meshWorldQuaternion);
        }

        setIsGrabbed(true);

        grabPointRight.attach(helpObj);
        const helperGroupPos = returnWorldPosition(helpObj);
        const helperGroupQuat = returnWorldQuaternion(helpObj);

        api.mass.set(0);
        api.position.copy(helperGroupPos);
        api.quaternion.copy(helperGroupQuat);
      }

      if (
        gripButtonLeft.pressed === false &&
        gripButtonRight.pressed === false
      ) {
        setIsGrabbed(false);
        api.mass.set(1);
        scene.remove(grabPointRight);
        scene.remove(grabPointLeft);
        scene.attach(helpObj);
        scene.attach(mesh);
      }
    }
  });
  return isGrabbed;
};

export default usePhysicsGrab;
