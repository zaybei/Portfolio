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
    <section id="skills" className="py-32 md:py-40 px-4 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Left Accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-20"
        >
          <div className="w-1 h-12 bg-accent rounded-full" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">Skills & Tools</h2>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Label - Cyan Uppercase */}
              <h3 className="text-xs uppercase tracking-widest font-bold text-accent">
                {category.category}
              </h3>

              {/* Skills in Rows */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-foreground font-medium text-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
