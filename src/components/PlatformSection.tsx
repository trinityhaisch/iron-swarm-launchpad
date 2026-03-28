import { useScrollAnimation } from "@/hooks/useScrollAnimation";


export default function PlatformSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="platform" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isVisible ? "" : "opacity-0"}`}>
          <div className={isVisible ? "animate-fade-up" : ""}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hive I: Mothership Drone
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Iron Swarm's first model of the mothership drone is a compact computing platform capable of operating fully autonomously in the modern battlefield. 
              With a flightime of up to half an hour and a payload capacity of 4kg, it can deploy and control 10-20 single use MAVs. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Survey the field, retrieve actionable intelligence in real time, preform complex coordinated missions, and efficiently deploy armed MAVs to strike in a high threat enviroment. 
            </p>
            <a
              href="https://aeveical.github.io/pie-2025-03/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:brightness-110 transition-all duration-200"
            >
              Explore Current Mothership Model →
            </a>
          </div>
          <div className={isVisible ? "animate-fade-up-delay-2" : "opacity-0"}>
            <div className="border border-border rounded-sm overflow-hidden">
              <img
                src={"sideview.JPG"}
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
