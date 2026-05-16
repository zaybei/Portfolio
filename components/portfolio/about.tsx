import { Sparkles, Users, Zap, Globe } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "End-to-End Design",
    description: "Research to wireframes to high-fidelity UI to developer handoff",
  },
  {
    icon: Users,
    title: "CX Strategy",
    description: "Connecting user journeys to measurable business outcomes",
  },
  {
    icon: Zap,
    title: "AI-Powered Workflows",
    description: "Cutting iteration time dramatically with intelligent tooling",
  },
  {
    icon: Globe,
    title: "Global Experience",
    description: "DApps, Web3, enterprise dashboards, and streaming platforms",
  },
]

const currentWork = [
  {
    company: "Furniture Instore (UK)",
    role: "Leading AI strategy and product design for one of the UK's furniture retail brands",
  },
  {
    company: "BradyID",
    role: "Industrial labeling & safety solutions (global brand)",
  },
  {
    company: "IntelliDelve",
    role: "Background investigations & risk mitigation",
  },
  {
    company: "Xorbix Technologies",
    role: "AI/ML digital transformation (Inc. 5000 honoree)",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            About Me
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Crafting Digital Experiences
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            What started as social media design 9+ years ago has evolved into leading AI 
            and product design for brands across Pakistan, UK, and beyond.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Currently Working With */}
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12">
          <h3
            className="text-2xl font-bold text-foreground mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Currently Working With
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentWork.map((work) => (
              <div
                key={work.company}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{work.company}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{work.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
