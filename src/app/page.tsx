"use client"

import { useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "./components/header"
import Footer from "./components/footer"
import { Card, Tabs, Chip } from "@heroui/react"

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

      <section className="px-108 py-10 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p>lorem ipsum dolor sit amet consectetur adipiscing elit dolore non amet expedita nulla vel soluta dolorum cumque quo eos voluptate officia exercitation distinctio veniam voluptate dolore elit omnis quo omnis et deleniti culpa dolores facere enim velit est facilis lorem ut et labore sunt omnis nobis qui duis cum eiusmod distinctio est voluptatum dolor eum qui nostrud id id animi esse harum blanditiis corrupti cillum quod nam quod excepturi id placeat expedita facere placeat quo consequat excepturi molestias fugiat est et esse quos libero pariatur officia deserunt sunt maxime dolor pariatur ducimus culpa.</p>
      </section>

      <section className="px-108 h-72 bg-gray-300 p-8">
        <Tabs className="h-full flex flex-row" orientation="vertical">
          <div className="h-full bg-[rgb(235,235,236)] rounded-3xl flex items-center">
            <Tabs.ListContainer>
              <Tabs.List className="w-48" aria-label="Options">
                {tramps.map((tramp, index) => (
                  <Tabs.Tab id={index} key={index}>
                    {tramp.name}
                    <Tabs.Indicator />
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>
          </div>

          {tramps.map((tramp, index) => (
            <Tabs.Panel id={index} key={index}>
              <Card>
                <Card.Header>
                  <Card.Title>{tramp.name}</Card.Title>
                </Card.Header>

                <Card.Content>
                  <p>{tramp.description}</p>
                </Card.Content>

                <Card.Footer className="gap-2">
                  <Chip className={
                    tramp.difficulty === "Easy"
                      ? "bg-green-100 text-green-800"
                      : tramp.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }>
                    Difficulty: {tramp.difficulty}
                  </Chip>

                  <Chip>
                    Distance: {tramp.distanceKm} km
                  </Chip>
                </Card.Footer>
              </Card>
            </Tabs.Panel>
          ))}
        </Tabs>
      </section>

      <section className="px-108 py-10 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">Tramping Advice</h2>
      </section>

      <section className="h-96 bg-gray-300" ></section>

      <section className="h-96 bg-gray-200" ></section>

      <Footer />
    </main>
  );
}
