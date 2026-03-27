import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cpu, Network, Eye, Box } from "lucide-react";

const items = [
  {
    icon: Network,
    title: "Autonomous MAV Swarms",
    desc: "Self-coordinating fleets of micro aerial vehicles operating without centralized control.",
  },
  {
    icon: Cpu,
    title: "Distributed Edge Computing",
    desc: "Onboard compute distributed across the swarm for low-latency decision making.",
  },
  {
    icon: Eye,
    title: "Real-Time Sensing & Decision Making",
    desc: "Continuous environmental awareness with autonomous response in milliseconds.",
  },
  {
    icon: Box,
    title: "Modular Deployment Systems",
    desc: "Rapid deployment from configurable launch systems adaptable to any mission profile.",
  },
];

export default function WhatWeDoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 max-w-lg">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <item.icon className="w-6 h-6 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
