"use client";

import { Canvas } from "@react-three/fiber";
import RotatingMesh from "./RotatingMesh";

export default function Scene({ scroll }: { scroll: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 2]} />
      <RotatingMesh scroll={scroll} />
      
    </Canvas>
  );
}