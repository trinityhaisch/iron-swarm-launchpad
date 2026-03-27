import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Deploy", desc: "Launch MAV swarms from modular ground stations in minutes." },
  { num: "02", title: "Coordinate", desc: "Vehicles self-organize using decentralized protocols." },
  { num: "03", title: "Compute", desc: "Edge processing runs across the swarm in real time." },
  { num: "04", title: "Act", desc: "Autonomous decisions are executed without human latency." },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
          Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="text-5xl font-bold text-primary/10 block mb-2">{step.num}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
