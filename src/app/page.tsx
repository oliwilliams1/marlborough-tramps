"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])

  return (
    <main>
      <Header />

      <div className="w-full h-[100vh] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {/* All slides are a div with a background image */}
          <div className="flex-[0_0_100%] min-w-0 bg-blue-100 bg-[url('/landscape.webp')] bg-cover bg-center" />
          <div className="flex-[0_0_100%] min-w-0 bg-blue-300" />
          <div className="flex-[0_0_100%] min-w-0 bg-blue-500" />
          <div className="flex-[0_0_100%] min-w-0 bg-blue-700" />
        </div>
      </div>

      <a href="/tramps">View Our Tramps</a>

      <section className="h-36 bg-gray-200" />

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <Footer />
    </main>
  );
}
