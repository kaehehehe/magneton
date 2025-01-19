import "./styles.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import MagneticModel from "./components/MagneticModel";
import Pointer from "./components/Pointer";

export default function App() {
  const { scene } = useLoader(GLTFLoader, "./models/magnemite.glb");

  return (
    <Canvas camera={{ position: [0, 1, 6] }}>
      <Environment preset="city" background />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {[...Array(25)].map((_, i) => (
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
      <OrbitControls minDistance={5} maxDistance={25} />
    </Canvas>
  );
}
