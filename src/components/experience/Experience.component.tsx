import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import { Scene } from "./components";
import { useAppSelector } from "../../hooks/hooks";
import { getCanvasInView } from "../../store/generalSlice";
import { useEffect, useState } from "react";

import { LoadingScreen } from "./components";

export default function Experience() {
  const [isDev, setIsDev] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const canvasInView = useAppSelector(getCanvasInView);

  const updateLoading = () => {
    setIsLoading(false);
  };

  const onAnimComplete = () => {
    setIsActive(false);
  };

  const frameRender = canvasInView ? "always" : "demand";

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

      hash === "dev" && setIsDev(true);
    }
  }, []);

  return (
    <>
      <Leva collapsed hidden={!isDev} />

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
      </Canvas>
      {isActive && (
        <LoadingScreen
          loading={isLoading}
          onLoadingComplete={() => updateLoading()}
          onAnimComplete={onAnimComplete}
        />
      )}
    </>
  );
}
