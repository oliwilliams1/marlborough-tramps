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

          {/* Left cards */}
          <div
            className="h-full shrink-0 grid grid-rows-3 gap-4 p-4"
            style={{
              ["--card-h" as string]: "calc((100vh - 6rem - 4rem) / 3)",
              width: "calc(var(--card-h) * 1.2 + 2rem)",
            }}
          >
            {tramps.map((tramp, index) => (
              <TrampCard
                key={tramp.name}
                tramp={tramp}
                onClick={() => setSelectedTramp(index)}
                selected={selectedTramp === index}
              />
            ))}
          </div>

          {/* Information */}
          <div className="flex-1 bg-gray-300 hidden lg:block">
            info
          </div>

          {/* Large card */}
          <div className="hidden lg:block absolute top-4 right-4 z-10 w-full max-w-sm">
            <LargeTrampCard selectedTramp={selectedTramp} />
          </div>

        </section>
      <Footer />
    </main>
  );
}