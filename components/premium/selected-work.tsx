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
        <div className="space-y-5 h-full flex flex-col">
          {/* Project Title */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground/80 text-lg leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1.5 bg-accent/15 text-accent rounded-md border border-accent/30 group-hover:border-accent/60 group-hover:bg-accent/20 transition-all duration-300"
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
    <section id="projects" className="py-32 md:py-40 px-4 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Left Accent */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-20"
        >
          <div className="w-1 h-12 bg-accent rounded-full" />
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">Featured Work</h2>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
