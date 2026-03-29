import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Sticky3DSection from "./ui/3dscroll"

export default function WhatWeDoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
       <div>
      <Sticky3DSection />
    </div>
 
  );
}
