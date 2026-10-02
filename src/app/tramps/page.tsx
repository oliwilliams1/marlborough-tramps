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
        <div className="w-full h-[100vh] overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            <div className="flex-[0_0_100%] min-w-0 bg-blue-100" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-300" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-500" />
            <div className="flex-[0_0_100%] min-w-0 bg-blue-700" />
          </div>
        </div>
        <section className="h-36 bg-gray-200" />
        {/* Tramp information */}
        <section className="relative flex w-full h-[calc(100vh-6rem)]">

          {/* Left: tramp cards */}
          <div className="w-full lg:w-[24rem] p-4 flex flex-col gap-4">
            {tramps.map((tramp, index) => (
              <TrampCard
                key={tramp.name}
                tramp={tramp}
                onClick={() => setSelectedTramp(index)}
                selected={selectedTramp === index}
              />
            ))}
          </div>

          {/* Middle: information */}
          <div className="flex-1 bg-gray-300 hidden lg:block">
            info
          </div>

          {/* Desktop overlay */}
          <div className="hidden lg:block absolute top-4 right-4 z-10
            w-full max-w-sm max-h-[calc(100%-2rem)] overflow-y-auto">
            <LargeTrampCard selectedTramp={selectedTramp} />
          </div>

        </section>
      <Footer />
    </main>
  );
}