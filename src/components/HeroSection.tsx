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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
      
        <h1 className="animate-fade-up-delay-0.2 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
          Creating a new family in the sky.{" "}
        </h1>
        
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
