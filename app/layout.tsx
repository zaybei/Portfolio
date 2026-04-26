import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Aftab Alam | AI Product Designer & CX Consultant',
  description: '9+ years of experience in Product Design, CX Strategy, and AI-powered workflows. Leading design for brands across Pakistan, UK, and beyond.',
  keywords: ['Product Designer', 'UX Designer', 'UI Designer', 'Product Manager', 'Pakistan', 'Figma', 'Web3', 'SaaS'],
  authors: [{ name: 'Aftab Alam' }],
  openGraph: {
    title: 'Aftab Alam | AI Product Designer & CX Consultant',
    description: '9+ years of experience in Product Design, CX Strategy, and AI-powered workflows.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
