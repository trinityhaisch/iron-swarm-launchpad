import { useEffect, useState } from "react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Team", href: "#founders" },
  { label: "Docs", href: "https://aeveical.github.io/pie-2025-03/index.html" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Iron<span className="text-primary">Swarm</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-primary text-primary-foreground font-medium rounded-sm hover:brightness-110 transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
