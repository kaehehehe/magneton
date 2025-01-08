export default function Model({ scene, scale, position }) {
  return (
    <mesh scale={scale} position={position}>
      <primitive object={scene} />
    </mesh>
  );
}
