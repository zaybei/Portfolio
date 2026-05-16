'use client'

import { motion } from 'framer-motion'

export function PremiumHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold px-3 py-1 bg-accent/10 rounded-full">
                AI Design Studio
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Designing Systems for the{' '}
              <span className="text-accent">AI Era</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              AI Product Designer and CX Consultant crafting intelligent interfaces and data-driven experiences. Since 2016, transforming complex systems into seamless user journeys.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#work"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 inline-block"
              >
                View Selected Work
              </a>
              <a
                href="mailto:alamabasyn@gmail.com"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card/50 transition-all duration-300 inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-xs text-muted-foreground tracking-widest">SCROLL</div>
        </motion.div>
      </div>
    </section>
  )
}
