"use client"

import { useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "./components/header"
import Footer from "./components/footer"
import { Card, Tabs, Chip, Button } from "@heroui/react"

import { tramps, gearPersonalEquipmentList, gearCookingEquipmentList } from "./utils/data";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])
  const [currentTramp, setCurrentTramp] = useState<number>(0);
  
  return (
    <>
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

      <main>
        <section className="py-10 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p>lorem ipsum dolor sit amet consectetur adipiscing elit dolore non amet expedita nulla vel soluta dolorum cumque quo eos voluptate officia exercitation distinctio veniam voluptate dolore elit omnis quo omnis et deleniti culpa dolores facere enim velit est facilis lorem ut et labore sunt omnis nobis qui duis cum eiusmod distinctio est voluptatum dolor eum qui nostrud id id animi esse harum blanditiis corrupti cillum quod nam quod excepturi id placeat expedita facere placeat quo consequat excepturi molestias fugiat est et esse quos libero pariatur officia deserunt sunt maxime dolor pariatur ducimus culpa.</p>
          </div>
        </section>

        <section className="bg-gray-100 p-8">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-xl font-bold mb-4">View our tramps</h2>
            <Tabs className="w-full" orientation="horizontal">

              <Tabs.ListContainer>
                {/* Desktop: horizontal */}
                <Tabs.List
                  className="hidden lg:flex w-full"
                  aria-label="Options"
                >
                  {tramps.map((tramp, index) => (
                    <Tabs.Tab id={index} key={index}>
                      {tramp.name}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                {/* Mobile/tablet: vertical */}
                <Tabs.List
                  className="flex lg:hidden w-full flex-col"
                  aria-label="Options"
                >
                  {tramps.map((tramp, index) => (
                    <Tabs.Tab id={index} key={index}>
                      {tramp.name}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs.ListContainer>

              {/* Content */}
              <div className="mt-4">
                {tramps.map((tramp, index) => (
                  <Tabs.Panel
                    className="w-full p-0 pb-2"
                    id={index}
                    key={index}
                  >
                    <Card className="w-full">
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
              </div>

              {/* Button */}
              <Button
                size="sm"
                className="ml-auto mt-4 flex justify-center"
              >
                <a href="/advice">
                  See more
                </a>
              </Button>

            </Tabs>

          </div>
        </section>

        <section className="py-8 sm:py-10 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xl font-bold mb-4">Tramping Advice</h2>

            <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
              <Card className="w-full md:flex-1">
                <Card.Title>
                  Equipment
                </Card.Title>

                <Card.Description>
                  The equipment needed to prepare food and drinks while you're out on the track.
                </Card.Description>

                <Card.Content>
                  <ul className="grid w-full gap-y-4">
                    {gearPersonalEquipmentList.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 rounded-lg bg-gray-50 px-4 py-3 text-gray-700"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>

              <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200 shadow-sm md:w-2/5 md:shrink-0" />
            </div>

            <Button size="lg" className="w-full sm:w-fit flex justify-center mt-6 sm:mt-8">
              <a href="/advice">
                Further Advice
              </a>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
