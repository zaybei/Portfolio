'use client'

import { motion } from 'framer-motion'

export function PremiumFooter() {
  return (
    <footer className="bg-background border-t border-border/30 px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div className="space-y-2">
            <p className="text-foreground font-display font-bold text-lg">Aftab Alam</p>
            <p className="text-sm text-muted-foreground">AI Product Designer & CX Consultant</p>
            <p className="text-xs text-muted-foreground/60 mt-4">© 2024 Aftab Alam. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            {[
              { name: 'Behance', url: 'https://www.behance.net/abasyn' },
              { name: 'Email', url: 'mailto:alamabasyn@gmail.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
