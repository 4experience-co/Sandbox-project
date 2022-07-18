import { Debug, Physics } from "@react-three/cannon";
import { Plane } from '@react-three/drei';
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import { BasicShadowMap } from "three";

import PlaneCollider from './../../objects-3d/PlaneCollider/PlaneCollider';

import Effects from "~/webgl/Effects";
import Box from "~/webgl/objects-3d/Box/Box";
import GrabbableBox from "~/webgl/objects-3d/GrabbableBox";
import OrbitControlsSetup from "~/webgl/objects-3d/OrbitControlsSetup";
import SceneBackground from "~/webgl/objects-3d/SceneBackground";

//<Effects /> component makes VR mode not work

function LightsaberScene() {
  return (
    <VRCanvas
      shadows={{ type: BasicShadowMap }}
      camera={{ position: [-1, 2, -5], fov: 90 }}
    >
      <SceneBackground color="#000000" />
      <Physics>
        <DefaultXRControllers />
        <OrbitControlsSetup />
        <pointLight
          castShadow
          position={[0, 3, 0]}
          shadow-mapSize-height={4096}
          shadow-mapSize-width={4096}
        />
        <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}
        >
          <PlaneCollider />
          <meshStandardMaterial color={"grey"} />
        </Plane>
        <GrabbableBox position={[0, 0.5, -0.5]} scale={[0.5, 0.5, 0.5]} />
        <Box castShadow position={[1, 1, 0]} />
        <ambientLight intensity={0.15} />
 
      </Physics>
    </VRCanvas>
  );
}

export default LightsaberScene;
