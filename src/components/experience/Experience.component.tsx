// import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import { Scene } from "./components";
// import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getCanvasInView } from "../../store/generalSlice";
import CameraRig from "./components/CameraRig.component";

export default function Experience() {
  // const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(true);
  // const [isActive, setIsActive] = useState(true);

  const canvasInView = useAppSelector(getCanvasInView);

  // const updateLoading = () => {
  //   setIsLoading(false);
  // };

  // const onAnimComplete = () => {
  //   setIsActive(false);
  // };

  const frameRender = canvasInView ? "always" : "demand";

  return (
    <>
      <Leva collapsed />

      <Canvas
        className="canvas-three"
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          near: 0.1,
          far: 1000,
          position: [0, 0, 15],
        }}
        frameloop={frameRender}
      >
        <Scene />

        <CameraRig />
      </Canvas>
      {/* {isActive && (
        <LoadingScreen loading={isLoading} onLoadingComplete={() => updateLoading()} onAnimComplete={onAnimComplete} />
      )} */}
    </>
  );
}
