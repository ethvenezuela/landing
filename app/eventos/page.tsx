
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, MapPin, Users, Clock } from "lucide-react"
import { SponsorsSection } from "@/components/sponsors"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image: string
  link: string
  featured?: boolean
}

const events: Event[] = [
  {
    id: "1",
    title: "Basecamp ScaffoldStark",
    description:
      "Basecamp Gratuito de ScaffoldStark para aprender a construir dApps en Starknet. Clases online y un Workshop presencial en 5 países.",
    date: "11 de Febrero, 2025",
    location: "Online y presencial",
    image: "/eventos/scaffoldstark.png?height=300&width=500",
    link: "https://lu.ma/1fgqbz4a",
  },
  {
    id: "2",
    title: "Seminario Blockchain 2025: Onboarding",
    description:
      "Aprende los fundamentos del ecosistema web3, guías, novedades, posibilidades. ¡Empieza tu recorrido en la web3!",
    date: "8 de Abril, 2025",
    location: "Caracas, Venezuela",
    image: "/eventos/seminario.png?height=300&width=500",
    link: "https://aragua.org/eventos",
  },
  {
    id: "3",
    title: "Meetup Ethereum Venezuela",
    description: "Únete a nosotros para discutir los últimos avances en Ethereum y networking con la comunidad.",
    date: "15 de Junio, 2025",
    location: "Caracas, Venezuela",
    image: "/eventos/meetup.png?height=300&width=500",
    link: "https://meetup.com/ethereumvenezuela/",
  },
  {
    id: "4",
    title: "Ethereum Venezuela Day",
    description:
      "Disfruta de un evento educativo en el que vas a poder aprender y conectar con profesionales y builders del ecosistema, comunidades y proyectos de Web 3.",
    date: "25 de julio, 2025",
    location: "UCAB, Caracas - Auditorio del CIE",
    image: "/eventos/Ethereum_Venezuela_Day.jpg?height=300&width=500",
    link: "https://ethvenezuela.org/eventos/ethereum-venezuela-day",
    featured: true,
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Eventos</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mantente al día con nuestras actividades y no te pierdas ninguna oportunidad de aprendizaje y
                networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-2">Evento Destacado</h2>
            <p className="text-muted-foreground">No te pierdas nuestro próximo gran evento</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/eventos/Ethereum_Venezuela_Day.jpg?height=400&width=600"
                width={600}
                height={400}
                alt="Ethereum Venezuela Day"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Evento Destacado
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">Ethereum Venezuela Day</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  🔷 Disfruta de un evento educativo en el que vas a poder aprender y conectar con profesionales y
                  builders del ecosistema, comunidades y proyectos de Web 3.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  🔷 En el Ethereum Venezuela Day podrás aprender con charlas, paneles y sesiones dinámicas sobre casos
                  de uso de Ethereum y tecnologías Web 3, empresas tradicionales que han entrado al ecosistema
                  blockchain, programas educativos Web 3 en Venezuela y Latinoamérica, regulación, roll ups, crecer en
                  comunidad, el poder de las DAO ¡y mucho más!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">25 de julio de 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>09:30 a 15:50</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Auditorio del CIE, UCAB Campus Montalbán, Caracas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Evento gratuito con cupos limitados</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto">
                  <Link href="https://www.eventbrite.com/e/ethereum-venezuela-day-tickets-1483699568349?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
                    Registrarse Gratis
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-2">Todos los Eventos</h2>
            <p className="text-muted-foreground">Explora nuestra agenda completa de eventos</p>
          </div>

          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative overflow-hidden border rounded-lg group bg-background hover:shadow-lg transition-all duration-300"
              >
                <div className="overflow-hidden aspect-video">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={event.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">{event.date}</time>
                  <h3 className="mt-2 text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="mt-2 text-muted-foreground line-clamp-3">{event.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <Button variant="link" className="p-0 mt-4" asChild>
                    <Link
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      Más información
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                {event.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    Destacado
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://aragua.org/eventos" target="_blank" rel="noopener noreferrer">
                Ver otros eventos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Quieres organizar un evento con nosotros?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a nuestra comunidad y ayúdanos a crear experiencias increíbles para el ecosistema Web3 en
                Venezuela.
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Contactar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Más información
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: "Eventos - Ethereum Venezuela",
  description:
    "Descubre todos nuestros eventos de blockchain, Web3 y Ethereum en Venezuela. Únete a nuestra comunidad.",
}

