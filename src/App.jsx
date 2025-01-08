import "./styles.css";
import { useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment } from "@react-three/drei";
import MagneticModel from "./components/MagneticModel";
import Pointer from "./components/Pointer";

export default function App() {
  const [scene, setScene] = useState(null);
  const { scene: loadedScene } = useLoader(
    GLTFLoader,
    "./models/magnemite.glb"
  );

  useEffect(() => {
    if (loadedScene) {
      setScene(loadedScene);
    }
  }, [loadedScene]);

  return (
    <Canvas camera={{ position: [0, 1, 6] }}>
      <Environment preset="city" background />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {scene &&
          [...Array(25)].map((_, i) => (
            <MagneticModel
              key={i}
              scene={scene.clone()}
              scale={0.8}
              position={[
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
              ]}
            />
          ))}
      </Physics>
    </Canvas>
  );
}
