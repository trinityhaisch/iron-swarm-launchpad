export default function FooterSection() {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-lg font-bold tracking-tight text-foreground mb-2">
            Iron<span className="text-primary">Swarm</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Autonomous aerial compute, deployed at scale.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://aeveical.github.io/pie-2025-03/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
          <a
            href="mailto:contact@ironswarm.dev"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Iron Swarm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
