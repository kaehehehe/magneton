import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import Model from "./Model";

export default function MagneticModel({ scene, scale, position }) {
  const api = useRef(null);

  useFrame((state, delta) => {
    if (api.current) {
      const pos = api.current.translation();
      const distance = 10;
      const force = Math.max(0, 27 - distance);
      api.current.applyImpulse({
        x: -pos.x * force * delta,
        y: -pos.y * force * delta,
        z: -pos.z * force * delta,
      });
    }
  });

  return (
    <RigidBody
      angularDamping={0.25}
      linearDamping={0.25}
      position={position}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <Model scene={scene} scale={scale} position={[0, 0, 0]} />
    </RigidBody>
  );
}
