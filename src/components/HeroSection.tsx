import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="animate-fade-up text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
          Aerial Computing Platform
        </p>
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
          Autonomous Aerial Compute,{" "}
          <span className="text-gradient">Deployed at Scale.</span>
        </h1>
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Iron Swarm builds distributed MAV systems that sense, compute, and act in real time.
        </p>
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#platform"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200"
          >
            View Platform
          </a>
          <a
            href="https://aeveical.github.io/pie-2025-03/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-border text-foreground font-medium text-sm tracking-wide rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            Read Docs
          </a>
        </div>
      </div>
    </section>
  );
}
