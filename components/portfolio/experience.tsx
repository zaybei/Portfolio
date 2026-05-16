import { Building2, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    company: "Arhpez Technologies",
    role: "Product Designer",
    location: "Islamabad",
    period: "March 2022 - Present",
    description: "Designing products for Microsoft-oriented enterprises, mainly B2B solutions.",
    current: true,
  },
  {
    company: "Troon Technologies",
    role: "Sr. UX/UI Designer",
    location: "Islamabad",
    period: "December 2021 - March 2022",
    description: "Designing UX for Blockchain environments, including corporate DApps, NFT marketplaces with Metamask and WalletConnect integrations.",
    current: false,
  },
  {
    company: "Tipping Point",
    role: "Product Manager",
    location: "Islamabad",
    period: "November 2018 - March 2022",
    description: "Overseeing Product Life Cycle and Version Management. Cross-functional collaboration. Market Research and CX Improvements.",
    current: false,
  },
  {
    company: "Rockville Technologies",
    role: "UX/UI Designer",
    location: "Islamabad",
    period: "April 2018 - November 2018",
    description: "Designing websites and mobile applications for Music Distribution Agency. Projects include Zong MagMart, Zong Smart Car, Jazz Autoreply, Jazz Music App, Telenor Vidly.",
    current: false,
  },
  {
    company: "Mob Inspire",
    role: "UI Designer",
    location: "Islamabad",
    period: "October 2017 - April 2018",
    description: "Designed mobile applications including Bykea, Avant Solutions, PickNGo, Get Shifa, Cabstartup, and Tauna.",
    current: false,
  },
  {
    company: "Abasyn University",
    role: "Advertising Designer / Social Media Strategist",
    location: "Peshawar",
    period: "June 2017 - September 2017",
    description: "Building engaging campaigns throughout the city and developing social media strategies.",
    current: false,
  },
  {
    company: "Telic Technologies",
    role: "Social Media / Strategic Designer",
    location: "Peshawar",
    period: "May 2016 - April 2017",
    description: "Managing social media and E-commerce brand growth. Applying strategies to capture audience attention.",
    current: false,
  },
]

const education = {
  institution: "Abasyn University",
  degree: "BSSE - Software Engineering",
  period: "2014 - 2018",
  gpa: "2.99",
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Career Journey
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            A decade of designing products and experiences across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 hidden md:block" />

                {/* Card */}
                <div
                  className={`relative md:direction-ltr ${
                    index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                      exp.current ? "ring-2 ring-primary/20" : ""
                    }`}
                  >
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current Role
                      </span>
                    )}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 rounded-3xl bg-card border border-border p-8 md:p-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Education
              </span>
              <h3
                className="mt-2 text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {education.degree}
              </h3>
              <p className="text-lg text-muted-foreground mt-1">
                {education.institution}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {education.period} • GPA: {education.gpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
