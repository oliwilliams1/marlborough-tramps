"use client"

import { useState } from "react";
import Carousel from "../components/carousel";
import Header from "../components/header"
import Footer from "../components/footer"
import TrampCard from "../components/tramp_card";
import LargeTrampCard from "../components/large_tramp_card";
import { TrampCardInfo } from "../utils/types";

const tramps: TrampCardInfo[] = [
  { name: "Tramp 1", description: "Description for Tramp 1." },
  { name: "Tramp 2", description: "Description for Tramp 2." },
  { name: "Tramp 3", description: "Description for Tramp 3." },
];

export default function Tramps() {
  const [selectedTramp, setSelectedTramp] = useState<number>(0);

  return (
    <main>
      <Header />
        <Carousel />
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
              name={tramps[selectedTramp].name}
              description={tramps[selectedTramp].description}
            />
          </div>
        </section>
      <Footer />
    </main>
  );
}
  