'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'BradyID',
    description: 'Industrial labeling and safety solutions platform. Redesigned user flows and dashboards for a global brand.',
    tags: ['Enterprise Design', 'Industrial UX', 'Global Brand'],
    link: 'https://www.behance.net/abasyn',
    size: 'large',
  },
  {
    title: 'AAAM',
    description: 'Association platform redesign. Led corporate branding and digital experience strategy.',
    tags: ['Corporate Branding', 'Digital Strategy'],
    link: 'https://www.behance.net/abasyn',
    size: 'small',
  },
  {
    title: 'Furniture Instore',
    description: 'UK-based furniture retail e-commerce. Leading AI strategy and product design.',
    tags: ['E-Commerce', 'AI Strategy'],
    link: 'https://www.behance.net/abasyn',
    size: 'small',
  },
  {
    title: 'IntelliDelve',
    description: 'Background investigations platform. Designed comprehensive SaaS dashboard with data visualization.',
    tags: ['SaaS Design', 'Data Visualization'],
    link: 'https://www.behance.net/abasyn',
    size: 'large',
  },
]

export function SelectedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-24 md:py-32 px-4 bg-background border-t border-border/30 section-gradient-bottom">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Left Accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-1 h-10 bg-gradient-to-b from-accent via-accent to-accent/40 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">Featured Work</h2>
        </motion.div>

        {/* Bento Grid Layout - Modern asymmetric design inspired by Awwwards winners */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[300px] md:auto-rows-[280px]"
        >
          {projects.map((project, idx) => {
            const isLarge = project.size === 'large'
            const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1'
            const rowSpan = isLarge ? 'md:row-span-2' : 'md:row-span-1'

            return (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-card/70 via-card/50 to-card/30 backdrop-blur-lg hover:border-accent/50 transition-all duration-500 p-6 md:p-7 flex flex-col justify-between cursor-pointer ${colSpan} ${rowSpan}`}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(96, 165, 250, 0.1)' }}
              >
                {/* Animated gradient overlay - appears on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-accent/8 via-transparent to-transparent" />

                {/* Floating accent element */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/4 rounded-full blur-3xl group-hover:bg-accent/6 transition-all duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground/75 text-sm md:text-base leading-relaxed line-clamp-2 md:group-hover:line-clamp-3 transition-all duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Footer - Tags and CTA */}
                <div className="relative z-10 space-y-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-accent/12 text-accent/90 rounded-full border border-accent/25 group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-300">
                    <span className="text-xs font-semibold uppercase tracking-wide">Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
