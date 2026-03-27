import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
    <section className="py-50 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
    

        
        <h2 className="text-[20px] max-w-md text-foreground mb-16 text-left">
          Everything you need on <span className="text-primary">one autonomous mothership. </span>
      
          
          MAVs ready to deploy with onboard computing, sensing
          and modular payloads for any mission.
          
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group p-10 boder-border hover:border-primary/40 transition-all duration-800 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
