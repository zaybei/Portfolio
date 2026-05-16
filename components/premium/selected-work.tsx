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
      className="group cursor-pointer"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="space-y-4">
          {image && (
            <div className="relative h-64 md:h-80 bg-card rounded-lg overflow-hidden border border-border/50 group-hover:border-accent/30 transition-colors">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
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
      description: 'Healthcare identification system redesign focusing on UX for medical professionals and patients.',
      tags: ['Product Design', 'Healthcare', 'Systems Design'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'AAAM',
      description: 'Association platform interface redesign with AI-powered member engagement features.',
      tags: ['Platform Design', 'AI Integration', 'CX Strategy'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'Furniture Instore',
      description: 'E-commerce experience optimization combining AR visualization with intelligent recommendation engine.',
      tags: ['E-Commerce', 'AR Technology', 'UX Research'],
      link: 'https://www.behance.net/abasyn',
    },
    {
      title: 'IntelliDelve',
      description: 'AI-powered data analytics platform with intuitive visualization and natural language interfaces.',
      tags: ['SaaS Design', 'Data Visualization', 'AI UX'],
      link: 'https://www.behance.net/abasyn',
    },
  ]

  return (
    <section id="work" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 max-w-2xl">
            Case Studies &amp; Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
