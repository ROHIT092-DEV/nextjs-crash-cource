import type { Metadata } from 'next'
import { Schibsted_Grotesk, Martian_Mono } from 'next/font/google'
import './globals.css'
import LightRays from '@/components/LightRays'
import NavBar from '@/components/NavBar'

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const MartianMono = Martian_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'dev Event',
  description: 'You Should not miss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${SchibstedGrotesk.variable} ${MartianMono.variable} antialiased`}
      >
        <NavBar />
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
          />
        </div>

        <main>{children}</main>
      </body>
    </html>
  )
}
