import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.Mesh;
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
  };
  materials: {
    Straps_FRONT_1944954: THREE.MeshStandardMaterial;
    BTN_FABRIC_FRONT_1944972: THREE.MeshStandardMaterial;
    Holes_FRONT_1944945: THREE.MeshStandardMaterial;
    Knit_Fleece_Terry_FRONT_1944906: THREE.MeshStandardMaterial;
    Material2501413: THREE.MeshStandardMaterial;
    Material2501423: THREE.MeshStandardMaterial;
    Rib_wide_FRONT_1944924: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/hoodie.glb") as GLTFResult;
  return (
    <group {...props} dispose={null} scale={35} rotation={[0,Math.PI,0]} position={[0,-8,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Straps_FRONT_1944954}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.BTN_FABRIC_FRONT_1944972}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Holes_FRONT_1944945}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Knit_Fleece_Terry_FRONT_1944906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Knit_Fleece_Terry_FRONT_1944906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Material2501413}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Material2501423}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Rib_wide_FRONT_1944924}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/hoodie.glb");