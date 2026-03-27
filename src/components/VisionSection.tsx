import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VisionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 px-6" ref={ref}>
      <div
        className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
          Vision
        </p>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-snug mb-8">
          "Iron Swarm is building the infrastructure layer for autonomous aerial intelligence —
          where compute meets flight at scale, and machines think as a collective."
        </blockquote>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We believe the future of aerial systems is distributed, autonomous, and intelligent.
          Our mission is to make swarm-scale aerial computing deployable, reliable, and
          accessible to organizations that need it most.
        </p>
      </div>
    </section>
  );
}
