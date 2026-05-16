'use client'

import { motion } from 'framer-motion'

export function PremiumContact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-card/15 border-t border-border/30 section-gradient-bottom">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Let&apos;s Create Something
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">Extraordinary</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Available for consulting, product design, and strategic engagements. Let&apos;s discuss how AI-driven design can transform your vision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <a
              href="mailto:alamabasyn@gmail.com"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
            <a
              href="https://www.behance.net/abasyn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border/50 text-foreground rounded-lg font-semibold hover:bg-card/40 hover:border-accent/30 transition-all duration-300 inline-block"
            >
              Behance Profile
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8 border-t border-border/30">
            {[
              { label: 'Email', value: 'alamabasyn@gmail.com' },
              { label: 'Location', value: 'Islamabad, Pakistan' },
              { label: 'Available', value: 'For Projects' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-1">
                  {item.label}
                </p>
                <p className="text-foreground font-medium text-sm md:text-base">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
