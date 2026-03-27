import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Building, Flame, Leaf } from "lucide-react";

const cases = [
  {
    icon: Shield,
    title: "Defense & Security",
    desc: "Persistent aerial surveillance and autonomous perimeter security with swarm redundancy.",
  },
  {
    icon: Building,
    title: "Infrastructure Inspection",
    desc: "Automated inspection of bridges, pipelines, and power grids at scale.",
  },
  {
    icon: Flame,
    title: "Disaster Response",
    desc: "Rapid deployment for search, mapping, and situational awareness in crisis zones.",
  },
  {
    icon: Leaf,
    title: "Environmental Monitoring",
    desc: "Continuous ecosystem observation with distributed sensing and data aggregation.",
  },
];

export default function UseCasesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="use-cases" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
          Applications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`group flex gap-6 p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <c.icon className="w-8 h-8 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
