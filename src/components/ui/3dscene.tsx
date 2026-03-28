"use client";

import { Canvas } from "@react-three/fiber";
import RotatingMesh from "./RotatingMesh";

export default function Scene({ scroll }: { scroll: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />
      <RotatingMesh scroll={scroll} />
    </Canvas>
  );
}