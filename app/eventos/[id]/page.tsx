import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowLeft, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { SponsorsSection } from "@/components/sponsors"

interface Event {
  id: string
  title: string
  description: string
  fullDescription: string
  date: string
  time: string
  location: string
  address: string
  image: string
  link: string
  price: string
  capacity: string
  category: string
  organizer: string
  features: string[]
}

const events: Record<string, Event> = {
  "ethereum-venezuela-day": {
    id: "4",
    title: "Ethereum Venezuela Day",
    description:
      "Disfruta de un evento educativo en el que vas a poder aprender y conectar con profesionales y builders del ecosistema.",
    fullDescription: `🔷 Disfruta de un evento educativo en el que vas a poder aprender y conectar con profesionales y builders del ecosistema, comunidades y proyectos de Web 3.

🔷 En el Ethereum Venezuela Day podrás aprender con charlas, paneles y sesiones dinámicas sobre casos de uso de Ethereum y tecnologías Web 3, empresas tradicionales que han entrado al ecosistema blockchain, programas educativos Web 3 en Venezuela y Latinoamérica, regulación, roll ups, crecer en comunidad, el poder de las DAO ¡y mucho más!

✅ Evento gratuito con cupos limitados.`,
    date: "25 de julio, 2025",
    time: "09:30 a 15:50",
    location: "UCAB Campus Montalbán",
    address:
      "Auditorio del Centro de Innovación y Emprendimiento (CIE), Universidad Católica Andres Bello, Av. Teherán Caracas, Distrito Capital 1000",
    image: "/eventos/Ethereum_Venezuela_Day.jpg?height=400&width=800",
    link: "https://www.eventbrite.com/e/ethereum-venezuela-day-tickets-1483699568349?aff=oddtdtcreator",
    price: "Gratuito",
    capacity: "Cupos limitados",
    category: "Blockchain",
    organizer: "Ethereum Venezuela",
    features: [
      "Charlas magistrales",
      "Paneles de discusión",
      "Sesiones dinámicas",
      "Networking",
      "Casos de uso reales",
      "Regulación blockchain",
      "Roll ups y escalabilidad",
      "Poder de las DAOs",
    ],
  },
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = events[id]

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container px-4 md:px-6 pt-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/eventos" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver a eventos
          </Link>
        </Button>
      </div>

      <section className="w-full pb-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={event.image || "/placeholder.svg"}
                width={800}
                height={400}
                alt={event.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {event.category}
                </Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-4 lg:text-4xl">{event.title}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-muted-foreground">Fecha</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.time}</p>
                    <p className="text-sm text-muted-foreground">Horario</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{event.price}</p>
                    <p className="text-sm text-muted-foreground">{event.capacity}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto">
                  <Link href="https://www.eventbrite.com/e/ethereum-venezuela-day-tickets-1483699568349?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
                    Registrarse Gratis
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sobre el evento</h2>
                <div className="prose prose-gray max-w-none">
                  {event.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">¿Qué aprenderás?</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {event.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="font-bold mb-4">Detalles del evento</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Organizador</p>
                    <p className="font-medium">{event.organizer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Categoría</p>
                    <p className="font-medium">{event.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Precio</p>
                    <p className="font-medium text-green-600">{event.price}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-background">
                <h3 className="font-bold mb-4">Ubicación</h3>
                <div className="space-y-2">
                  <p className="font-medium">{event.location}</p>
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                  <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                    Ver en mapa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors Section */}
      <SponsorsSection />
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = events[id]

  if (!event) {
    return {
      title: "Evento no encontrado",
    }
  }

  return {
    title: `${event.title} - Ethereum Venezuela`,
    description: event.description,
  }
}

