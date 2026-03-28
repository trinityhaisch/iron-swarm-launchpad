import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Deploy", desc: "Launch mothership drone with pre-loaded MAVs." },
  { num: "02", title: "Coordinate", desc: "Vehicles self-assess and adapt to dynamic environments and seek to advance targets" },
  { num: "03", title: "Compute", desc: "Relay intelligence and commands between vehicles and the mothership." },
  { num: "04", title: "Act", desc: "MAVs execute mission details through autonomous decision-making on board mothership drone" },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-5xl font-medium tracking-[0.2em] uppercase text-center mb-10">
          Process
        </p>
      
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
