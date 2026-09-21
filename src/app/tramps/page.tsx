"use client"

import { useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "../components/header"
import Footer from "../components/footer"
import TrampCard from "../components/tramp_card";
import LargeTrampCard from "../components/large_tramp_card";
import { tramps } from "../utils/data";

export default function Tramps() {
  const [selectedTramp, setSelectedTramp] = useState<number>(0);

  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})])
  
  return (
    <main>
      <Header />
        <div className="w-full h-[calc(100vh-4rem)] overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            <div className="flex-[0_0_100%] min-w-0 bg-blue-100" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-300" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-500" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-700" />
          </div>
        </div>
        <section className="h-36 bg-gray-200" />
        <section className="flex w-full h-[calc(100vh-6rem)]">
          <div className="w-[24rem] shrink-0 p-4 flex flex-col gap-4">
            {tramps.map((tramp, index) => (
              <TrampCard
                key={tramp.name}
                name={tramp.name}
                description={tramp.description}
                onClick={() => setSelectedTramp(index)}
                selected={selectedTramp === index}
              />
            ))}
          </div>
          <div className="flex-1 bg-gray-300">info</div>
          <div className="w-[24rem] shrink-0 p-4 flex flex-col gap-4">
            <LargeTrampCard
              trampView={selectedTramp}
            />
          </div>
        </section>
      <Footer />
    </main>
  );
}
  