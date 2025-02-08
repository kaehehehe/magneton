import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model() {
  const { scene } = useGLTF("magneton.glb");

  return (
    <mesh scale={5} position={[0, 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
}
