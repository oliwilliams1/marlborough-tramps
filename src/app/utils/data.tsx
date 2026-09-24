import { TrampCardInfo } from "./types";

const nydiaTrackText = `The 27 km Nydia Track offers walkers and cyclists great views and varied track conditions. Plan on an overnight stop at Nydia Bay where you can explore the history and coastline. The songs of bellbirds and tuī and the sudden “swooshswoosh” of a flying pigeon (kererū) will be heard in the dense, mature forests.

This track crosses the Kaiuma and Nydia Saddles and follows the sheltered shoreline of historic Nydia Bay.

Formed by linking old bridle paths, it meanders through a variety of forests, some scrubland and farmland.

The 27-kilometre Nydia Track is classified as a tramping track. It is well defined, though rough, narrow and uneven in places. Expect it to take 9.5 hours for fit trampers.

The track is mostly unformed with steep, rough or muddy sections. 

It is a track for those who are reasonably fit; boots are recommended and it is suitable for people with good fitness. Moderate to high-level backcountry skills and experience (including navigation and survival skills) required.`;

const quailStreamText = `Discover this 8.5-km loop trail near Blenheim, Marlborough. Generally considered a moderately challenging route, it takes an average of 2 h 43 min to complete.

Forest Park Drive Entrance.

The Forest Park Drive car park provides a central point to access the park. It is possible to take the track east to Redwood Street, or follow Quail Stream south.

The Quail Stream track is flat initially, but at the end of the track there is the opportunity to climb to form a loop with the tracks that start from the Rowan Place park entrance. The track passes through a variety of exotic tree plantings including pine, willow, acacia and more.`;

const wairauLagoonsText = `Features: From Blenheim town centre this walk is 7km. This is one of a few places along the eastern coast of the South Island where it is possible to enjoy the richness and unique beauty of a large estuary. Many species of birds nest here and a bird book and binoculars are useful additional equipment to take! At the lagoons’ main channel the rusting hulk of the Waverley sits in the mud. There is also an interesting human history of early moa-hunter activity, Maori food gathering and later coastal trading.

Where: Wairau Lagoons Reserve, 7km southeast of Blenheim.

Walking Time: Lagoon loop track from car park 3 hour circuit (8km) Plus side-track from “Waverley” wreck 45 minutes return (2km).

Grade: Walking track — virtually flat (not recommended after heavy rain as surface water can be ankle deep in places, nor in very hot or windy weather as this is an extremely exposed area).`;

export const tramps: TrampCardInfo[] = [
  { name: "Nydia Track", description: "Description for Tramp 1.", longDescription: nydiaTrackText },
  { name: "Quail Stream", description: "Description for Tramp 2.", longDescription: quailStreamText },
  { name: "Wairau Lagoons", description: "Description for Tramp 3.", longDescription: wairauLagoonsText },
];

export const links = [
  { name: "Home", href: "/" },
  { name: "Tramps", href: "/tramps" },
  { name: "Advice", href: "/advice" },
  { name: "Join", href: "/join" },
];