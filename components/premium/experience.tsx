'use client'

import { motion } from 'framer-motion'

export function ExperienceSnapshot() {
  const experiences = [
    {
      year: '2022 - Present',
      role: 'Product Designer',
      company: 'Arhpez Technologies',
      description: 'Leading design for Microsoft-oriented enterprises and B2B platforms, crafting end-to-end product experiences.',
    },
    {
      year: '2021 - 2022',
      role: 'Sr. UX/UI Designer',
      company: 'Troon Technologies',
      description: 'Designed better UX for blockchain environment, DApps, and NFT marketplaces with Web3 integrations.',
    },
    {
      year: '2018 - 2022',
      role: 'Product Manager',
      company: 'Tipping Point',
      description: 'Oversaw product lifecycle, cross-functional collaboration, market research, and CX improvements.',
    },
    {
      year: '2017 - 2018',
      role: 'UI Designer',
      company: 'Mob Inspire & Rockville Technologies',
      description: 'Designed mobile applications, ride solutions, and healthcare scheduling apps for multiple startups.',
    },
    {
      year: '2016 - 2017',
      role: 'Social Media & Strategic Designer',
      company: 'Telic Technologies & Abasyn University',
      description: 'Built engaging campaigns, managed social media strategies, and developed brand awareness initiatives.',
    },
  ]

  return (
    <section id="experience" className="py-32 md:py-40 px-4 bg-card/20 border-t border-border">
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
