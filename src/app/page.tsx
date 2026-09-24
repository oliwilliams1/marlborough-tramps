"use client"

import { useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "./components/header"
import Footer from "./components/footer"
import { Tabs } from "@heroui/react"

import { tramps } from "./utils/data";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])
  const [currentTramp, setCurrentTramp] = useState<number>(0);
  
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

      <section className="h-36 bg-gray-200" />

      <section className="h-96 bg-gray-300 p-8" >
        <Tabs className="h-full" orientation="vertical">
          <Tabs.ListContainer>
            <Tabs.List className="w-48 align-middle" aria-label="Options">
              {tramps.map((tramp, index) => (
                <Tabs.Tab id={index} key={index}>
                  {tramp.name}
                  <Tabs.Indicator />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>
          {tramps.map((tramp, index) => (
            <Tabs.Panel className="pt-4" id={index} key={index}>
              <p>{tramp.description}</p>
            </Tabs.Panel>
          ))}
        </Tabs>
      </section>

      <section className="h-96 bg-gray-200" ></section>

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <Footer />
    </main>
  );
}
