import { PremiumHeader } from '@/components/premium/header'
import { PremiumHero } from '@/components/premium/hero'
import { About } from '@/components/premium/about'
import { SelectedWork } from '@/components/premium/selected-work'
import { ExperienceSnapshot } from '@/components/premium/experience'
import { Skills } from '@/components/premium/skills'
import { PremiumContact } from '@/components/premium/contact'
import { PremiumFooter } from '@/components/premium/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PremiumHeader />
      <PremiumHero />
      <About />
      <ExperienceSnapshot />
      <SelectedWork />
      <Skills />
      <PremiumContact />
      <PremiumFooter />
    </main>
  )
}
