import { ExternalLink, Layers, Smartphone, Monitor, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "BRADY CORPORATION",
    subtitle: "Xorbix Technologies",
    location: "Milwaukee, Wisconsin, United States",
    description:
      "Industrial labeling & safety solutions for a global brand. Enterprise dashboard design focusing on usability and efficiency for complex manufacturing workflows.",
    tags: ["Enterprise", "Dashboard", "B2B"],
    icon: Monitor,
    link: "https://www.behance.net/gallery/154665437/BRADY-SAFETY-SIGNAGE",
    color: "primary",
  },
  {
    title: "AAAM - Association for the Advancement of Automotive Medicine",
    subtitle: "Healthcare & Research Platform",
    location: "Milwaukee, Wisconsin, United States",
    description:
      "Comprehensive digital platform for automotive medicine research and advocacy. Designed to serve medical professionals and researchers worldwide.",
    tags: ["Healthcare", "Research", "Web Platform"],
    icon: Globe,
    link: "https://www.behance.net/gallery/176261291/AAAM-Association-for-the-Advancement-of-Automotive",
    color: "accent",
  },
  {
    title: "Dubai Rocket Marketing Agency",
    subtitle: "Corporate Branding Portfolio",
    location: "Dubai, United Arab Emirates",
    description:
      "Complete corporate branding and visual identity design for a marketing agency. Brand strategy, logo design, and comprehensive brand guidelines.",
    tags: ["Branding", "Identity", "Marketing"],
    icon: Layers,
    link: "https://www.behance.net/gallery/155044573/Dubai-Rocket",
    color: "primary",
  },
]

const mobileApps = [
  "Bykea - Ride Solution",
  "Avant Solutions - Ride Solution",
  "PickNGo - Ride Solution",
  "Get Shifa - Medical Scheduling App",
  "Cabstartup - Ride Solution",
  "Tauna",
]

const enterpriseProducts = [
  "Zong MagMart",
  "Zong Smart Car",
  "Jazz Autoreply Service",
  "Jazz Music App",
  "Telenor Vidly",
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            A selection of work spanning enterprise solutions, mobile applications, 
            and brand experiences
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 ${
                  project.color === "accent"
                    ? "bg-gradient-to-br from-accent/20 to-accent/5"
                    : "bg-gradient-to-br from-primary/20 to-primary/5"
                } flex items-center justify-center`}
              >
                <project.icon
                  className={`w-16 h-16 ${
                    project.color === "accent" ? "text-accent" : "text-primary"
                  } opacity-50 group-hover:opacity-80 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {project.subtitle}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.location}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <Button asChild variant="outline" size="sm" className="w-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View Case Study
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mobile Apps */}
          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Mobile Applications</h3>
                <p className="text-sm text-muted-foreground">Ride solutions & healthcare</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mobileApps.map((app) => (
                <span
                  key={app}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Enterprise Products */}
          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Telecom & Enterprise</h3>
                <p className="text-sm text-muted-foreground">Major Pakistani telecom brands</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {enterpriseProducts.map((product) => (
                <span
                  key={product}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a
              href="https://www.behance.net/abasyn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Full Portfolio on Behance
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
