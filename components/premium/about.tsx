'use client'

import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="relative border-t border-border py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 space-y-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              About Me
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A product design leader with 9+ years of experience crafting human-centered digital experiences across diverse industries.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in designing systems, not just interfaces. Every pixel serves a purpose, every interaction tells a story, and every decision is rooted in data and human insight.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about leveraging AI and data to create intuitive, accessible experiences that solve real problems. Whether designing enterprise platforms or consumer applications, I focus on the intersection of strategy, aesthetics, and usability.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Specializations</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span>End-to-End Product Design & CX Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span>AI-Powered Design Systems & Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span>Enterprise UX for Global Brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span>Data Visualization & Analytics Design</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Beyond Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                I actively collaborate with product managers, engineers, and stakeholders to align design with business objectives. I'm based in Pakistan and have worked with clients across Pakistan, UK, and beyond.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats or highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          variants={itemVariants}
        >
          {[
            { label: 'Years Experience', value: '9+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Global Clients', value: '30+' },
            { label: 'Design Awards', value: '5' },
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-card/50 border border-border rounded-lg hover:border-accent/30 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
