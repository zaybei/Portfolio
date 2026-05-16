'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function PremiumHero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 min-h-screen flex flex-col justify-center bg-background">
      <div className="max-w-3xl mx-auto w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mb-8 flex justify-center"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">Available for new opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-display font-black tracking-tight text-foreground">
            Aftab Alam
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-2xl md:text-3xl text-muted-foreground font-semibold tracking-wide">
            AI Product Designer & CX Consultant
          </p>
        </motion.div>

        {/* Location & Relocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-accent" />
            <span className="font-medium">Islamabad, Pakistan</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
          <span className="font-medium">Willing to relocate</span>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Since 2016, crafting digital experiences that users love. From AI-powered workflows to enterprise dashboards, I combine product design, CX strategy, and cutting-edge technology to ship interfaces that drive real business outcomes.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:shadow-accent/20"
          >
            View My Work
          </a>
          <a
            href="mailto:alamabasyn@gmail.com"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-card/50 transition-all duration-300 inline-block"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
