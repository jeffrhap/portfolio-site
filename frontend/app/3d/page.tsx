"use client";

import Experience from "@/components/experience";
import { Html } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function MouseCamera() {
  const { camera } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      mousePos.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCamera = () => {
      // Smoothly interpolate towards target position
      targetPos.current.x += (mousePos.current.x - targetPos.current.x) * 0.05;
      targetPos.current.y += (mousePos.current.y - targetPos.current.y) * 0.05;

      // Move camera based on mouse position
      camera.position.x = targetPos.current.x * -4;
      camera.position.y = targetPos.current.y * -3;
      camera.lookAt(0, 0, 0);

      requestAnimationFrame(animateCamera);
    };

    const id = requestAnimationFrame(animateCamera);
    return () => cancelAnimationFrame(id);
  }, [camera]);

  return null;
}

export default function Page() {
  return (
    <div className="h-[calc(100vh-101px)] w-full">
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        <MouseCamera />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Html transform occlude>
          <div className="bg-white/10 rounded-2xl scale-[40%]" onPointerDown={(e) => e.stopPropagation()}>
            <Experience />
          </div>
        </Html>
      </Canvas>
    </div>
  );
}
