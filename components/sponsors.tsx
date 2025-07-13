"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "/logos/DW3.png?height=80&width=160" },
  { id: 2, name: "Sponsor 2", logo: "/logos/Vinotinto.png?height=80&width=160" },
  { id: 3, name: "Sponsor 3", logo: "/logos/blatam.png?height=80&width=160" },
  { id: 4, name: "Sponsor 4", logo: "/logos/logo-asilo.png?height=80&width=160" },
  { id: 5, name: "Sponsor 5", logo: "/logos/mapa.png?height=80&width=160" },
  { id: 6, name: "Sponsor 6", logo: "/logos/logo.jpg?height=80&width=160" },
]

export function SponsorsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-2">Nuestros Sponsors</h2>
          <p className="text-muted-foreground">Gracias a nuestros patrocinadores que hacen posibles estos eventos</p>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * sponsors.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{
              width: `${200 * sponsors.length * 2}px`,
            }}
          >

            {sponsors.map((sponsor) => (
              <div
                key={`first-${sponsor.id}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-background border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}


            {sponsors.map((sponsor) => (
              <div
                key={`second-${sponsor.id}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-background border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

