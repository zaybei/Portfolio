'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      category: 'Design Tools',
      skills: ['Figma', 'Figjam', 'Slide', 'Make', 'Adobe Creative Suite', 'Affinity by Canva'],
    },
    {
      category: 'Product Expertise',
      skills: ['Product Management', 'Project Management', 'Cross-Functional Collaboration', 'CX Strategy', 'User Research'],
    },
    {
      category: 'Design Specializations',
      skills: ['End-to-End Product Design', 'SaaS Design', 'Enterprise UX', 'DApps & Web3', 'AI/ML Interfaces', 'Data Visualization'],
    },
    {
      category: 'Industry Experience',
      skills: ['Healthcare', 'E-Commerce', 'Ride Solutions', 'Fintech', 'Legal Tech', 'Industrial Platforms'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 max-w-2xl">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-display font-bold text-accent uppercase tracking-wider">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border/50 rounded-lg text-sm font-medium text-foreground hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
