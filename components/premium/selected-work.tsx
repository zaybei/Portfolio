'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
}

function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="space-y-4 h-full flex flex-col p-6 md:p-8 rounded-lg border border-border/40 bg-card/30 hover:bg-card/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
          {/* Project Title */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 bg-accent/15 text-accent rounded-md border border-accent/30 hover:border-accent/60 hover:bg-accent/25 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export function SelectedWork() {
  const projects = [
    {
      title: 'BradyID',
      description: 'Industrial labeling and safety solutions platform. Redesigned user flows and dashboards for a global brand serving enterprise clients across manufacturing and logistics.',
      tags: ['Enterprise Design', 'Industrial UX', 'Global Brand'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'AAAM',
      description: 'The Association for the Advancement of Automotive Medicine platform redesign. Led corporate branding and digital experience strategy in collaboration with Dubai Rocket Marketing Agency.',
      tags: ['Association Platform', 'Corporate Branding', 'Digital Strategy'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'Furniture Instore',
      description: 'UK-based furniture retail e-commerce platform. Leading AI strategy and product design to shape the digital experience, focusing on AR visualization and intelligent recommendations.',
      tags: ['E-Commerce', 'AI Strategy', 'Retail UX'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'IntelliDelve',
      description: 'Background investigations and risk mitigation platform. Designed comprehensive SaaS dashboard with data visualization and intuitive workflows for enterprise users.',
      tags: ['SaaS Design', 'Data Visualization', 'Enterprise'],
      link: 'https://www.behance.net/abasyn',
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 px-4 bg-background border-t border-border/30 section-gradient-bottom">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Left Accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-14 md:mb-16"
        >
          <div className="w-1 h-10 bg-gradient-to-b from-accent via-accent to-accent/40 rounded-full" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">Featured Work</h2>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
