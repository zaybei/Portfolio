import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.15_250/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.65_0.18_165/0.06),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">Available for new opportunities</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aftab Alam
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              AI Product Designer <span className="text-primary">&</span> CX Consultant
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span>Islamabad, Pakistan</span>
            <span className="text-border">|</span>
            <span className="text-sm">Willing to relocate</span>
          </div>

          {/* Summary */}
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Since 2016, crafting digital experiences that users love. From AI-powered workflows to 
            enterprise dashboards, I combine product design, CX strategy, and cutting-edge 
            technology to ship interfaces that drive real business outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          {/* Brands */}
          <div className="pt-12 space-y-6 w-full overflow-hidden">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by leading brands
            </p>
            <div className="relative w-full">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="flex animate-marquee">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex shrink-0">
                    {[
                      { name: "Telenor", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2031-qVPvqEfuF5ZHVpDESVLMKlrLR7KM4J.png" },
                      { name: "Zong", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2033-aqkPGD1gPU80uFyp9jqnPN42tq4SFI.png" },
                      { name: "Jazz", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2029-3ZW7GSPmdh1yfgSzoBDd94kqzJJXa2.png" },
                      { name: "ISPR Pakistan", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2032-2JdJPB3ybtthuPypYGe6eu49WC0K5j.png" },
                      { name: "Bykea", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2034-rg4GfDZLTgAg56R8oaLK4iUmAKyUnd.png" },
                      { name: "AAAM", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2037-9DHQLHM6HnWaeVTI4HY7kxRYMnNL1A.png" },
                      { name: "BradyID", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2036-wXCM4LPPKYiquBbLxX3n0qDoJISkft.png" },
                      { name: "Xorbix", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2035-HOX1xBWJedO0BKq3ZP6qgPPRZZa9W6.png" },
                      { name: "Furniture Instore", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2038-BDQOor9R8Tf5LaOan2zztkxnoQ9Rgx.png" },
                      { name: "Abasyn University", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2030-VMAo3fBHQ9wnadE682Ss9puyNp4eKP.png" },
                    ].map((brand) => (
                      <div
                        key={`${setIndex}-${brand.name}`}
                        className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mx-6 shrink-0"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
