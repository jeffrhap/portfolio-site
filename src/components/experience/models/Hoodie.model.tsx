import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    cloth_shape_0_003003: THREE.Mesh;
    cloth_shape_0_003003_1: THREE.Mesh;
  };
  materials: {
    Hoodie: THREE.MeshStandardMaterial;
    ["Rib_2X2_468gsm_FRONT_1517.003"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: any) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/models/Hoodie_Mockup.glb"
  ) as GLTFResult;

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI, 0]}
      position={[0, -19, 0]}
    >
      <group name="Scene">
        <group name="HoodieStandard(Wind)" scale={0.13}>
          <mesh
            name="cloth_shape_0_003003"
            geometry={nodes.cloth_shape_0_003003.geometry}
            material={materials.Hoodie}
          >
            <meshStandardMaterial color={"black"} />
          </mesh>
          <mesh
            name="cloth_shape_0_003003_1"
            geometry={nodes.cloth_shape_0_003003_1.geometry}
            material={materials["Rib_2X2_468gsm_FRONT_1517.003"]}
          >
            <meshStandardMaterial color={"black"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Hoodie_Mockup.glb");
