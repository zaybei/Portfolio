'use client'

import { motion } from 'framer-motion'

export function AILab() {
  const experiments = [
    {
      title: 'Neural Design Systems',
      description: 'AI-generated design system components that adapt to user behavior and context.',
      icon: '🧠',
    },
    {
      title: 'Predictive UX',
      description: 'Machine learning models predicting user intent and optimizing interface proactively.',
      icon: '🔮',
    },
    {
      title: 'Voice-First Interfaces',
      description: 'Natural language processing for conversational product design and accessibility.',
      icon: '🎤',
    },
    {
      title: 'Sentiment Analysis',
      description: 'Real-time UI adaptation based on user sentiment and emotional state detection.',
      icon: '💭',
    },
    {
      title: 'Generative Layouts',
      description: 'AI-powered dynamic layouts that generate optimal information architecture on-demand.',
      icon: '✨',
    },
    {
      title: 'Accessibility AI',
      description: 'Intelligent assistive features that learn and adapt to individual accessibility needs.',
      icon: '♿',
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
    <section id="lab" className="py-20 md:py-32 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">AI Experiments</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 max-w-2xl">
            Currently Exploring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-6">
            Pioneering the intersection of AI and design. Experiments in intelligent interfaces, predictive UX, and human-centered AI systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiments.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 md:p-8 bg-background border border-border/50 rounded-lg hover:border-accent/30 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
