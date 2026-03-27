import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import platformImg from "@/assets/platform-diagram.jpg";

export default function PlatformSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="platform" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isVisible ? "" : "opacity-0"}`}>
          <div className={isVisible ? "animate-fade-up" : ""}>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Aerial Computing Stack
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Iron Swarm's platform unifies autonomous flight, distributed computation, and
              real-time sensing into a single deployable system. Each MAV operates as an
              independent compute node while maintaining swarm-level coordination.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Designed for scalability from single-unit missions to hundreds of coordinated
              vehicles. Deploy anywhere, operate autonomously, and retrieve actionable
              intelligence in real time.
            </p>
            <a
              href="https://aeveical.github.io/pie-2025-03/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:brightness-110 transition-all duration-200"
            >
              Explore Documentation →
            </a>
          </div>
          <div className={isVisible ? "animate-fade-up-delay-2" : "opacity-0"}>
            <div className="border border-border rounded-sm overflow-hidden">
              <img
                src={platformImg}
                alt="Iron Swarm aerial computing platform architecture"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
