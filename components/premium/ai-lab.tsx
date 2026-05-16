'use client'

import { motion } from 'framer-motion'

export function AILab() {
  const experiments = [
    {
      title: 'AI-Powered Design Systems',
      description: 'Automated design system generation using AI to create responsive, accessible components that adapt to user behavior.',
      icon: '🧠',
    },
    {
      title: 'Predictive UX Flows',
      description: 'Machine learning models that anticipate user intent and optimize navigation pathways in real-time.',
      icon: '🔮',
    },
    {
      title: 'Voice-First Interfaces',
      description: 'Natural language processing for conversational design, accessibility enhancements, and hands-free interaction.',
      icon: '🎤',
    },
    {
      title: 'Smart Personalization',
      description: 'AI-driven content adaptation that learns from user behavior to deliver hyper-personalized experiences.',
      icon: '✨',
    },
    {
      title: 'Automated Accessibility',
      description: 'Intelligent assistive features that dynamically adjust interfaces based on individual accessibility requirements.',
      icon: '♿',
    },
    {
      title: 'Data Visualization AI',
      description: 'AI-generated visual representations that automatically translate complex datasets into intuitive, interactive dashboards.',
      icon: '📊',
    },
    {
      title: 'CX Intelligence',
      description: 'AI analytics connecting user journeys to business outcomes, identifying optimization opportunities across touchpoints.',
      icon: '🎯',
    },
    {
      title: 'Design Token Automation',
      description: 'Intelligent design token systems that evolve based on brand, user preferences, and accessibility standards.',
      icon: '🔧',
    },
    {
      title: 'Generative Prototyping',
      description: 'Rapid prototyping using AI to generate design variations, interaction patterns, and interaction flows.',
      icon: '⚡',
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
