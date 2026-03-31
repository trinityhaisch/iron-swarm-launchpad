import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const founders = [
  {
    name: "Trinity Haisch",
    role: "CEO",
    bio: "Mechnical engineer and buisness lead. Experienced in drone design, fabrication, and computer vision.",
    linkedin: "https://www.linkedin.com/in/trinity-haisch-024b91381/",
  },
  {
    name: "Zihan Sun",
    role: "CTO",
    bio: "Mechanical and Integration Lead, responsible for the overall design and integration of the drone's mechanical and electronic systems.",
    linkedin: "https://www.linkedin.com/in/jonathan-sun-1b99b135b/",
  },
  {
    name: "Jack Wei",
    role: "Chief Software Engineer",
    bio: "Software Lead and Autonomy Specialist, responsible for developing the drone's software architecture and autonomous capabilities.",
    linkedin: "https://www.linkedin.com/in/erqi-jack-wei/",
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
              <div className="mt-4">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 bg-primary text-primary-foreground font-medium rounded-sm hover:brightness-110 transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
