'use client'

import { motion } from 'framer-motion'

export function ExperienceSnapshot() {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Lead Product Designer',
      company: 'Self-Directed',
      description: 'Designing AI-powered systems and consulting on enterprise UX strategy.',
    },
    {
      year: '2021 - 2023',
      role: 'Senior Product Designer',
      company: 'Various Startups',
      description: 'Led design transformation for multiple SaaS platforms and fintech solutions.',
    },
    {
      year: '2018 - 2021',
      role: 'Product Designer',
      company: 'Tech Companies',
      description: 'Designed consumer apps and platforms across healthcare, e-commerce, and logistics.',
    },
    {
      year: '2016 - 2018',
      role: 'UX/UI Designer',
      company: 'First Role',
      description: 'Started design career with foundational work in web and mobile applications.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-accent/30 pl-6 relative"
            >
              <div className="absolute -left-2 top-0 w-2 h-2 bg-accent rounded-full" />
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-accent">{exp.year}</span>
                  <span className="text-muted-foreground text-sm">•</span>
                  <h3 className="text-xl font-display font-bold">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-muted-foreground/80 text-sm mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
