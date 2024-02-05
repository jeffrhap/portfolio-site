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

      {/* <CameraControls
        ref={cameraControlRef}
        makeDefault
        truckSpeed={0}
        dollySpeed={0}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      /> */}

      {/* TODO: LIGHTING SETUP */}
      <spotLight ref={spotlightRef} position={[0, 5, -5]} intensity={5} penumbra={0.5} distance={25} color={0xffffff} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={null}>
        <ModelHoodie />
      </Suspense>

      <Cloud position={[0, 0, 5]} color={0xcecece} speed={0.25} opacity={0.05} bounds={[12, 6, 1]} volume={8} segments={50} scale={2} />
    </>
  );
};

export default Scene;
