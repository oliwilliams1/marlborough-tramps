"use client"

import { useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Header from "../components/header"
import Footer from "../components/footer"
import TrampCard from "../components/tramp_card";
import LargeTrampCard from "../components/large_tramp_card";
import { tramps } from "../utils/data";
import { PreviousArrowIcon, NextArrowIcon } from "../utils/icons";
import { Button } from "@heroui/react";

export default function Tramps() {
  const [selectedTramp, setSelectedTramp] = useState<number>(0);

  const [emblaRef] = useEmblaCarousel({loop: false, duration: 50}, [Autoplay({delay: 7500})]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(tramps[0].images);
  
  {/* Handles click on previous button, sets index to previous index */}
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  {/* Handles click on next button, sets index to next index */}
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const updateSelectedTramp = (index: number) => {
    setSelectedTramp(index);
    setSlides(tramps[index].images);
    setCurrentIndex(0);
  }

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
                onClick={() => updateSelectedTramp(index)}
                selected={selectedTramp === index}
              />
            ))}
          </div>

          {/* My own carasoul */}
          <div className="flex w-full h-full z-1">
            <div className="w-full h-full z-1 bg-[rgb(8,4,4)]">
              <div className="w-full h-full overflow-hidden">
                {/* A wide div that scrolls by based on the current index */}
                <div
                  className={`flex w-[${slides.length * 100}%] h-full transition-transform duration-500 ease-in-out`}
                  style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(currentIndex * 100) / slides.length}%)` }}
                >
                  {slides.map((slide, index) => ( // Iterate through slides and create a div for each
                    <div key={index} className="w-full h-full">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out"
                        style={{ backgroundImage: `url('${slide}')` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Controlled for carasoul */}
              <div className="relative flex w-full h-[4rem] bg-black opacity-70 mt-[-4rem] pt-3 z-4">
                <div className="w-1/2 h-full p-3 pl-20 pt-0">
                  <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full" isIconOnly onClick={handlePrevious}>
                    <PreviousArrowIcon />
                  </Button>
                  <Button className="p-2.5 bg-[rgb(8,4,4)] border-2 rounded-full ml-4" isIconOnly onClick={handleNext}>
                    <NextArrowIcon />
                  </Button>
                </div>

                {/* Further controlls for carasoul */}
                <div className="w-full h-full pb-3 pr-20">
                  <div className="flex justify-end items-center w-full h-[40px]">
                    <div className="flex space-x-2">
                      {slides.map((_, index) => (
                        <div
                          className={`w-[20px] h-[20px] rounded-full border-2 text-center text-white cursor-pointer transition-all duration-300 ${
                            index === currentIndex
                              ? 'hover:bg-slate-800 border-slate-100'
                              : 'hover:bg-slate-800 border-slate-500'
                          }`}
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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