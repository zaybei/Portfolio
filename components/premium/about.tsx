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
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/30 section-gradient-top">
      {/* Decorative gradient elements */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-accent/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 space-y-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div className="space-y-3" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-accent via-accent to-accent/40 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              About Me
            </h2>
          </div>
          <p className="text-lg text-muted-foreground/90 max-w-2xl leading-relaxed">
            A product design leader with 9+ years of experience crafting human-centered digital experiences across diverse industries.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
          variants={itemVariants}
        >
          {[
            { label: 'Years Experience', value: '9+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Global Clients', value: '30+' },
            { label: 'Design Awards', value: '5' },
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-card/40 border border-border/50 rounded-lg hover:border-accent/50 hover:bg-card/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
