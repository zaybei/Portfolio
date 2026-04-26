import { Palette, Code, Users, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 95 },
      { name: "FigJam", level: 90 },
      { name: "Figma Slides", level: 85 },
      { name: "Adobe Creative Suite", level: 90 },
      { name: "Affinity by Canva", level: 80 },
    ],
  },
  {
    title: "Product & Management",
    icon: Users,
    skills: [
      { name: "Product Management", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Cross-Functional Collaboration", level: 90 },
      { name: "Agile/Scrum", level: 85 },
      { name: "User Research", level: 88 },
    ],
  },
  {
    title: "Specializations",
    icon: Brain,
    skills: [
      { name: "AI-Powered Workflows", level: 85 },
      { name: "CX Strategy", level: 90 },
      { name: "Web3 / DApps", level: 80 },
      { name: "Enterprise Dashboards", level: 92 },
      { name: "Mobile App Design", level: 90 },
    ],
  },
  {
    title: "Development Knowledge",
    icon: Code,
    skills: [
      { name: "Design Systems", level: 90 },
      { name: "Developer Handoff", level: 95 },
      { name: "Prototyping", level: 90 },
      { name: "Responsive Design", level: 92 },
      { name: "Accessibility (a11y)", level: 82 },
    ],
  },
]

const industries = [
  "Telecom",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Gaming",
  "Web3",
  "SaaS",
  "Ride-sharing",
  "Legal Tech",
  "Industrial",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Expertise
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            A comprehensive toolkit built over 9+ years of designing products that work
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl bg-card border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12 text-center">
          <h3
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Industries I&apos;ve Worked In
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
