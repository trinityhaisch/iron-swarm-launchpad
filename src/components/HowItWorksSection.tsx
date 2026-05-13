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
    
    <section className="py-32 px-6 border-t border-border" ref={ref}
        style={{ backgroundColor: "#1e1e1e" }}
>
      <div className="max-w-7xl mx-auto">
        <p className="text-5xl font-medium tracking-[0.2em] uppercase text-center mb-10">
          Process
        </p>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group overflow-hidden rounded-3xl border border-border bg-black p-8 transition-all duration-300 hover:bg-primary/20"
            >
              <span className="text-5xl font-bold text-primary block mb-4">{step.num}</span>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
                <p className="text-sm text-foreground/80 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
