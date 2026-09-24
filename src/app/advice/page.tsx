import Header from "../components/header"
import Footer from "../components/footer"
import {
  gearPersonalEquipmentList,
  gearCookingEquipmentList,
} from "../utils/data"
import { Card } from "@heroui/react"

export default function Tramps() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="bg-gray-800 px-6 py-16 text-center text-white">

        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
          Gear List
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Everything you should consider bringing on a Marlborough tramp.
          Pack light, prepare for changing weather, and make sure you have
          everything you need before heading into the hills.
        </p>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            What should I bring?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Your exact gear requirements will depend on the length and
            difficulty of your tramp. The lists below cover the basics,
            including personal equipment and equipment for cooking and food.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="space-y-12">
          <div className="flex w-full gap-8">
            <Card>
              <Card.Title>
                Personal Equipment
              </Card.Title>
              <Card.Description>
                Gear you should have with you throughout the trip
              </Card.Description>
              <Card.Content>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
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

            <div className="w-192 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm lg:block"></div>
          </div>

          <div className="flex w-full gap-8">
            <div className="w-192 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm lg:block"></div>
            
            <Card>
              <Card.Title>
                Cooking Equipment
              </Card.Title>
              <Card.Description>
                The equipment needed to prepare food and drinks while you're out on the track.
              </Card.Description>
              <Card.Content>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {gearCookingEquipmentList.map((item, index) => (
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
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold">
            Check the conditions before you leave
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Weather in the Marlborough ranges can change quickly. Always check the forecast and track conditions, and adjust your gear accordingly. For longer or more remote trips, consider what you would need if your plans changed unexpectedly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}