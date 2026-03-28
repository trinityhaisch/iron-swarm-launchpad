import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Sticky3DSection from "./ui/3dscroll"
import { Cpu, Network, Eye, Box } from "lucide-react";


const items = [
  {
    title: "Autonomous MAV Swarms",
    desc: "Self-coordinating fleets of micro aerial vehicles operating without centralized control.",
  },
  {
    title: "Distributed Edge Computing",
    desc: "Onboard compute distributed across the swarm for low-latency decision making.",
  },
  {
    title: "Real-Time Sensing & Decision Making",
    desc: "Continuous environmental awareness with autonomous response in milliseconds.",
  },
  {
    title: "Modular Deployment Systems",
    desc: "Rapid deployment from configurable launch systems adaptable to any mission profile.",
  },
];

export default function WhatWeDoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
       <div>
      <Sticky3DSection />
    </div>
 
  );
}
