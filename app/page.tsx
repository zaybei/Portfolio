import { PremiumHeader } from '@/components/premium/header'
import { PremiumHero } from '@/components/premium/hero'
import { SelectedWork } from '@/components/premium/selected-work'
import { AILab } from '@/components/premium/ai-lab'
import { Philosophy } from '@/components/premium/philosophy'
import { Skills } from '@/components/premium/skills'
import { ExperienceSnapshot } from '@/components/premium/experience'
import { PremiumContact } from '@/components/premium/contact'
import { PremiumFooter } from '@/components/premium/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PremiumHeader />
      <PremiumHero />
      <SelectedWork />
      <AILab />
      <Philosophy />
      <Skills />
      <ExperienceSnapshot />
      <PremiumContact />
      <PremiumFooter />
    </main>
  )
}
