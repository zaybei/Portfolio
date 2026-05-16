'use client'

import { motion } from 'framer-motion'

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
              Design is Systems Thinking
            </h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every design decision is a system design decision. By treating interfaces as interconnected systems rather than isolated components, we create cohesive, scalable experiences that adapt and grow with user needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: 'End-to-End Design',
                  description: 'From concept to deployment, owning the complete design ecosystem and ensuring consistency across all touchpoints.',
                },
                {
                  title: 'AI-First Thinking',
                  description: 'Designing with AI as a core capability, not an afterthought. Creating interfaces that leverage machine intelligence for better outcomes.',
                },
                {
                  title: 'CX Strategy',
                  description: 'Beyond pixels and interactions. Shaping customer experience strategy at organizational level for sustainable growth.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-accent font-display font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
