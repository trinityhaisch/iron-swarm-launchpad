"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Center } from "@react-three/drei";

export default function Model({ scroll }: { scroll: number }) {
  const ref = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/Drone.glb");
  

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y=Math.PI;
    ref.current.rotation.x=Math.PI/6 ;
  

    ref.current.rotation.y +=
      (scroll * Math.PI * 2 - ref.current.rotation.y) * 0.4;

  
      
    
  });

return (
  <Center>
    <primitive ref={ref} object={scene} scale={0.013} />
  </Center>
);
}