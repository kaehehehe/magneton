import "../styles.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function App() {
  const glb = useLoader(GLTFLoader, "./models/magnemite.glb");

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 1, 6] }}
    >
      <Environment preset="city" background />
      <ambientLight intensity={3} />
      <directionalLight intensity={3} position={[-7, 5, 10]} color="0xffffff" />
      <primitive object={glb.scene} position={[0, 1, 0]} />
      <OrbitControls enablePan enableZoom minPolarAngle={0} />
    </Canvas>
  );
}
