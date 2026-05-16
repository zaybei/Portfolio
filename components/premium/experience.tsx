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
    <section id="experience" className="py-24 md:py-32 px-4 bg-card/15 border-t border-border/30 section-gradient-top">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading with Left Accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14 md:mb-16"
        >
          <div className="w-1 h-10 bg-gradient-to-b from-accent via-accent to-accent/40 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 md:-left-4 top-0 w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full border-4 border-background" />
              
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute -left-1 md:-left-1.5 top-8 md:top-10 w-1 h-20 md:h-24 bg-accent/20" />
              )}

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs uppercase tracking-widest font-bold text-accent">
                    {exp.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-accent/80 font-semibold text-lg">{exp.company}</p>
                <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed pt-2">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
