import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { Cloud } from "@react-three/drei";
import { ModelHoodie } from "../models";
// import { SpotLightHelper } from "three";

const Scene = () => {
  // Debugging
  const { showPerf } = useControls("Performance", {
    showPerf: { value: false },
  });

  // const cameraControlRef = useRef<CameraControls | null>(null);
  const spotlightRef = useRef<any>(null);

  // useHelper(spotlightRef, SpotLightHelper, 'red');

  return (
    <>
      {showPerf ? <Perf position="top-left" /> : null}

      {/* TODO: LIGHTING SETUP */}
      <spotLight ref={spotlightRef} position={[0, 5, -5]} intensity={5} penumbra={0.5} distance={25} color={0xffffff} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        <ModelHoodie />
      </Suspense>

      <Cloud position={[0, 0, 5]} color={0xcecece} speed={0.25} opacity={0.05} bounds={[10, 6, 1]} volume={8} segments={30} scale={2} />
    </>
  );
};

export default Scene;
