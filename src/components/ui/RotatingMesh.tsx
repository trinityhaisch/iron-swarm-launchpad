"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Model({ scroll }: { scroll: number }) {
  const ref = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/drone.glb");

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y +=
      (scroll * Math.PI * 2 - ref.current.rotation.y) * 0.08;

    ref.current.rotation.x +=
      (scroll * Math.PI - ref.current.rotation.x) * 0.08;
  });

  return <primitive ref={ref} object={scene} scale={1} />;
}