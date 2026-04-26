import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alamabasyn@gmail.com",
    href: "mailto:alamabasyn@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 342 8989 473",
    href: "tel:+923428989473",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
]

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abasyn/",
  },
  {
    name: "Behance",
    icon: ExternalLink,
    href: "https://www.behance.net/abasyn",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Get in Touch
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Building something that needs to look great and work even better? 
            I&apos;d love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="rounded-3xl bg-card border border-border p-8 md:p-12">
            <h3
              className="text-2xl font-bold text-foreground mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to start a project?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Whether you need end-to-end product design, CX consulting, or 
                AI-powered workflow optimization, I&apos;m here to help bring your 
                vision to life.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end product design",
                  "CX strategy & research",
                  "AI-powered workflows",
                  "Enterprise & SaaS solutions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full text-base"
            >
              <a href="mailto:alamabasyn@gmail.com">
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
