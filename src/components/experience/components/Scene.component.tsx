import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { Cloud } from "@react-three/drei";
import Hoodie from "../models/Hoodie.model";
import { useFrame } from "@react-three/fiber";
// import { SpotLightHelper } from "three";

import * as THREE from "three";

const Scene = () => {
  // Debugging
  const { showPerf } = useControls("Performance", {
    showPerf: { value: false },
  });

  const spotlightRef = useRef<any>(null);

  // useHelper(spotlightRef, SpotLightHelper, 'red');

  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.5
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.5,
      0.5
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {showPerf ? <Perf position="top-left" /> : null}

      {/* TODO: LIGHTING SETUP */}
      <spotLight
        ref={spotlightRef}
        position={[0, 5, -5]}
        intensity={5}
        penumbra={0.5}
        distance={25}
        color={0xffffff}
      />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        <Hoodie />
      </Suspense>

      <Cloud
        position={[0, 0, 5]}
        color={0xcecece}
        speed={0.2}
        opacity={0.07}
        bounds={[6, 5, 1]}
        volume={6}
        segments={20}
        scale={2}
      />
    </>
  );
};

export default Scene;
