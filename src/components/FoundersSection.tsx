import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const founders = [
  {
    name: "Alex Mercer",
    role: "CEO & Co-Founder",
    bio: "Former autonomous systems lead at a defense R&D lab. PhD in distributed robotics from MIT.",
  },
  {
    name: "Priya Anand",
    role: "CTO & Co-Founder",
    bio: "Built edge computing infrastructure at scale. Previously senior engineer at a leading aerospace company.",
  },
  {
    name: "James Okafor",
    role: "Head of Hardware & Co-Founder",
    bio: "Designed MAV platforms for military applications. MS in Aerospace Engineering from Stanford.",
  },
];

export default function FoundersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="founders" className="py-32 px-6 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
          Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-sm bg-secondary flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-primary">
                  {f.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{f.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
