import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import Model from "./Model";

export default function MagneticModel({ scene, scale, position }) {
  const api = useRef(null);
  const magneticPosition = { x: 0, y: 0, z: 0 };

  useFrame((_, delta) => {
    if (api.current) {
      const pos = api.current.translation();
      const distance = Math.sqrt(
        (pos.x - magneticPosition.x) ** 2 +
          (pos.y - magneticPosition.y) ** 2 +
          (pos.z - magneticPosition.z) ** 2
      );

      const forceMagnitude = Math.max(0, 100 - distance);
      const force = forceMagnitude / (distance + 1);

      api.current.applyImpulse({
        x: (magneticPosition.x - pos.x) * force * delta * 5,
        y: (magneticPosition.y - pos.y) * force * delta * 5,
        z: (magneticPosition.z - pos.z) * force * delta * 5,
      });

      const clampValue = 5;
      api.current.setTranslation({
        x: Math.max(-clampValue, Math.min(clampValue, pos.x)),
        y: Math.max(-clampValue, Math.min(clampValue, pos.y)),
        z: Math.max(-clampValue, Math.min(clampValue, pos.z)),
      });
    }
  });

  return (
    <RigidBody position={position} ref={api} colliders={false}>
      <BallCollider args={[scale]} />
      <Model scene={scene} scale={scale} position={[0, 0, 0]} />
    </RigidBody>
  );
}
