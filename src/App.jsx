import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "./styles.css";
import { Model } from "./components/Model";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
      <ambientLight />
      <Model />
      <Environment preset="forest" background />
      <OrbitControls minDistance={20} maxDistance={80} />
    </Canvas>
  );
}
