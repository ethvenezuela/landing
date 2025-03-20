"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  BookOpen,
  MessageSquare,
  Globe,
  ArrowRight,
  Github,
  Twitter,
  ChevronRight,
  TextIcon as Telegram,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full py-2 text-sm text-center bg-primary/20">
        <p>
          Te invitamos al próximo evento, este 8 de abril, desde las 9:00 de la mañana en la UPT Aragua.{" "}
          <Link
            href="https://aragua.org/eventos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Más información
          </Link>
        </p>
      </div>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="logos/logo.jpg"
                width={32}
                height={32}
                alt="Ethereum Venezuela Logo"
              />
              <span className="inline-block font-bold">Ethereum Venezuela</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#acerca-de"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Acerca de
              </Link>
              <Link
                href="#eventos"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Eventos
              </Link>
              <Link
                href="#recursos"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Recursos
              </Link>
            </nav>
          </div>
          <div className="flex items-center justify-end flex-1 space-x-4">
            <nav className="flex items-center space-x-1">
              <Button asChild>
                <Link href="#contacto">Contacto</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/20 to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ethereum Venezuela
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Construyendo el futuro descentralizado en Venezuela. Únete a nosotros y forma parte de la comunidad Ethereum del país.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="#contacto">
                      Únete a la comunidad
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="#acerca-de">Conoce más</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="team/a.png"
                width={550}
                height={550}
                alt="Ethereum Venezuela Community"
                className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="acerca-de" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acerca de Nosotros</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos una comunidad dedicada a promover la adopción y el desarrollo de Ethereum en Venezuela. Nuestro
                  objetivo es educar, conectar y empoderar a los venezolanos en el ecosistema blockchain.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
              <Carousel 
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {Array.from({ length: 14 }, (_, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={`mision-vision/${index + 1}.jpg`}
                        width={550}
                        height={550}
                        alt={`${index + 1}`}
                        className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* <Image
                src="eventos/charla.jpg"
                width={550}
                height={550}
                alt="Ethereum Venezuela Meetup"
                className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Misión</h3>
                      <p className="text-muted-foreground">
                        Facilitar la adopción de Ethereum y tecnologías Web3 en Venezuela, creando un ecosistema de desarrolladores, usuarios y entusiastas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Visión</h3>
                      <p className="text-muted-foreground">
                        Convertirnos en un hub de innovación blockchain de Latinoamérica, impulsando soluciones descentralizadas a través de la Ethereum Virtual Machine.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Valores</h3>
                      <p className="text-muted-foreground">
                        Descentralización, transparencia, inclusión, innovación y colaboración comunitaria.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Por qué unirte?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Ethereum Venezuela, creemos en el poder de la colaboración. Aquí encontrarás una comunidad apasionada donde podrás aprender, compartir conocimientos y construir proyectos innovadores juntos.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Networking</h3>
                <p className="text-center text-muted-foreground">
                  Conecta con profesionales, desarrolladores y entusiastas
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Educación</h3>
                <p className="text-center text-muted-foreground">
                  Accede a recursos educativos, talleres y cursos sobre desarrollo
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Eventos</h3>
                <p className="text-center text-muted-foreground">
                  Participa en meetups, hackathons y conferencias exclusivas
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mentoría</h3>
                <p className="text-center text-muted-foreground">
                  Recibe orientación sobre desarrollo blockchain
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Oportunidades</h3>
                <p className="text-center text-muted-foreground">
                  Descubre ofertas laborales y proyectos en el ecosistema
                </p>
              </div>
              <div className="flex flex-col items-center p-6 space-y-2 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Proyectos</h3>
                <p className="text-center text-muted-foreground">
                  Colabora en iniciativas open-source y desarrolla tus propias dApps
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="eventos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Eventos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente al día con nuestras actividades y no te pierdas ninguna oportunidad de aprendizaje y networking.
                </p>
              </div>
            </div>
            <div className="grid max-w-5xl gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden border rounded-lg group">
                <div className="overflow-hidden aspect-video">
                  <Image
                    src="eventos/scaffoldstark.png"
                    width={500}
                    height={300}
                    alt="Basecamp ScaffoldStark"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">11 de Febrero, 2025</time>
                  <h3 className="mt-2 text-xl font-bold">Basecamp ScaffoldStark</h3>
                  <p className="mt-2 text-muted-foreground">
                    Basecamp Gratuito de ScaffoldStark para aprender a construir dApps en Starknet. Clases online y un Workshop presencial en 5 países.
                  </p>
                  <Button variant="link" className="p-0 mt-4" asChild>
                    <Link
                      href="https://lu.ma/1fgqbz4a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      Más información
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden border rounded-lg group">
                <div className="overflow-hidden aspect-video">
                  <Image
                    src="eventos/seminario.png"
                    width={500}
                    height={300}
                    alt="Seminario Blockchain 2025"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">8 de Abril, 2025</time>
                  <h3 className="mt-2 text-xl font-bold">Seminario Blockchain 2025: Onboarding</h3>
                  <p className="mt-2 text-muted-foreground">
                    Aprende los fundamentos del ecosistema web3, guías, novedades, posibilidades. <br/>
                    ¡Empieza tu recorrido en la web3!
                  </p>
                  <Button variant="link" className="p-0 mt-4" asChild>
                    <Link
                      href="https://aragua.org/eventos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      Más información
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative overflow-hidden border rounded-lg group">
                <div className="overflow-hidden aspect-video">
                  <Image
                    src="eventos/meetup.png"
                    width={500}
                    height={300}
                    alt="Ethereum Meetup Caracas"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">15 de Junio, 2025</time>
                  <h3 className="mt-2 text-xl font-bold">Meetup Ethereum Venezuela</h3>
                  <p className="mt-2 text-muted-foreground">
                    Únete a nosotros para discutir los últimos avances en Ethereum y networking con la comunidad.
                  </p>
                  <Button variant="link" className="p-0 mt-4" asChild>
                    <Link
                      href="https://meetup.com/ethereumvenezuela/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group"
                    >
                      Más información
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="https://aragua.org/eventos" target="_blank" rel="noopener noreferrer">
                  Ver otros eventos
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestra colección de recursos educativos para aprender sobre Ethereum y blockchain.
                </p>
              </div>
            </div>
            <div className="grid max-w-5xl gap-8 py-12 mx-auto md:grid-cols-2">
              <div className="flex flex-col p-6 space-y-2 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Guías para principiantes</h3>
                <p className="text-muted-foreground">
                  Recursos introductorios para quienes están comenzando en el mundo de Ethereum.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="https://ethereum.org/es/what-is-ethereum/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      ¿Qué es Ethereum?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ethereum.org/es/wallets/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Cómo crear tu primera wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ethereum.org/es/smart-contracts/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Entendiendo los smart contracts
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 space-y-2 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Desarrollo</h3>
                <p className="text-muted-foreground">
                  Recursos para desarrolladores que quieren construir en Ethereum.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="https://ethereum.org/es/developers/docs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Solidity para principiantes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.useweb3.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Explorar, Aprender, Construir
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ethkipu.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Aprenda con ETHKipu
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 space-y-2 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">DeFi</h3>
                <p className="text-muted-foreground">Aprende sobre finanzas descentralizadas y cómo participar.</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="https://ethereum.org/es/defi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Introducción a DeFi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ethereum.org/es/defi/#stablecoins"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Monedas estables
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ethereum.org/es/defi/#lending"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Protocolos de préstamos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 space-y-2 border rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">Ethereum Aragua</h3>
                <p className="text-muted-foreground">Recursos de Ethereum Aragua.</p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="https://aragua.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Portal oficial de Ethereum Aragua
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://faucet.aragua.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Faucet de Ethereum Aragua
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://certificados.aragua.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Certificados y credenciales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="unete" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 to-secondary/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Únete a la comunidad Ethereum Venezuela
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sé parte de una vibrante comunidad de desarrollo e investigación en Venezuela. Completa el formulario y te contactaremos pronto.
              </p>
            </div>
            <div className="w-full max-w-sm mx-auto space-y-2">
              <form className="grid gap-4" action="https://formspree.io/f/your-form-id" method="POST">
                <div className="grid gap-2">
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    required
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="interest" className="sr-only">
                    Área de interés
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona tu área de interés
                    </option>
                    <option value="development">Desarrollo</option>
                    <option value="defi">DeFi</option>
                    <option value="education">Educación</option>
                    <option value="other">Otros</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Unirse
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Al unirte, aceptas nuestros{" "}
                <Link href="#" className="underline underline-offset-2">
                  Términos y Condiciones
                </Link>
                .
              </p>
            </div>
          </div>
        </section> */}

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Únete a la comunidad
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Visita nuestros canales y sé parte de una vibrante comunidad de desarrollo e investigación en Venezuela.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 text-muted-foreground">Email:</div>
                    <Link href="mailto:info@ethvenezuela.org" className="text-primary hover:underline">
                      info@ethvenezuela.org
                    </Link>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 text-muted-foreground">Twitter:</div>
                    <Link
                      href="https://x.com/ETHVenezuela"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @ETHVenezuela
                    </Link>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-16 text-muted-foreground">Telegram:</div>
                    <Link
                      href="https://t.me/ethereumcaracas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @ethereumcaracas
                    </Link>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 text-muted-foreground">Aragua:</div>
                    <Link
                      href="https://x.com/ETHAragua"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Twitter
                    </Link>
                    <Link
                      href="https://t.me/ETHAragua"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Telegram
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block px-3 py-1 text-sm rounded-lg bg-muted">Ubicación</div>
                <p className="text-muted-foreground">
                  Realizamos eventos presenciales en las principales ciudades de Venezuela y mantenemos una comunidad
                  activa en línea.
                </p>
                <div className="w-full overflow-hidden rounded-lg aspect-video">
                  <Image
                    src="eventos/mapa.png"
                    width={600}
                    height={400}
                    alt="Mapa de Venezuela"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image src="/logos/logo.jpg" width={32} height={32} alt="Ethereum Venezuela Logo" />
            <p className="text-sm leading-loose text-center md:text-left">
              &copy; {new Date().getFullYear()} Ethereum Venezuela
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://x.com/ETHVenezuela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/ETHVenezuela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://t.me/ethereumcaracas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Telegram className="w-5 h-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}