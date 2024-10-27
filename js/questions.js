const questions = [
  {
    id: 1,
    q: "map",
    definition: "A drawing of the whole of, or part of, an area, showing its features",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 2,
    q: "plan",
    definition: "A drawing of what you would see looking down at somewhere from above",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 3,
    q: "scale",
    definition: "The relationship between the size of things on a map and the size of them in the real world",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 4,
    q: "grid reference",
    definition: "A numerical way of working out where a place is on a map",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 5,
    q: "distance",
    definition: "How far it is between two things",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 6,
    q: "mental map",
    definition: "A map that you make in your head",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 7,
    q: "latitude",
    definition: "(Imaginary) lines which wrap around the world horizontally, to show how far away from the equator somewhere is.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 8,
    q: "longitude",
    definition: "(Imaginary) lines which wrap over the world vertically, to show how far away from the Prime Meridian somewhere is.",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 9,
    q: "equator",
    definition: "0 &deg; latitude",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 10,
    q: "tropics",
    definition: "The area of land between the Tropic of Cancer (in the Northern Hemisphere) and teh Tropic of Capricorn (in the Southern Hemisphere)",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 11,
    q: "physical map",
    definition: "Shows physical features, e.g. rivers and relief (height differences in a landscape)",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 12,
    q: "political map",
    definition: "Shows how the land is divided into countries or regions",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 13,
    q: "topographical map",
    definition: "Shows the same as physical maps but with human features added",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 14,
    q: "thematic map",
    definition: "Shows information on a single topic e.g. hours of sunshine",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 15,
    q: "Prime Meridian",
    definition: "An imaginary vertical line that divides Earth into east and west, that passes through Greenwich, UK",
    options: ["yes", "no"],
    a: 0,  
  },
];

const questions2 = [
  // {
  //   id: 1,
  //   q: "crust",
  //   definition: "The solid outer layer of the Earth",
  //   options: ["yes", "no"], 
  //   a: 0,
  // },
  {
    id: 2,
    q: "mineral",
    definition: "A solid, naturally occurring inorganic (non-living) substance",
    options: ["yes", "no"],
    a: 0,  
  },
  {
    id: 3,
    q: "rock",
  definition: "A mixture of minerals",
    options: ["yes", "no"],
  a: 0},
  {
    id: 4,
    q: "feldspar",
  definition: "A common type of mineral, usually pale or colourless",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 5,
    q: "quartz",
  definition: "A hard mineral occurring in colourless and transparent hexagonal crystals",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 6,
    q: "sedimentary rock",
  definition: "Rocks formed from sediments that have settled at the bottom of a lake, sea or ocean, and have been compressed over millions of years.",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 7,
    q: "magma",
  definition: "Molten rock underground (called lava on the surface of the Earth).",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 8,
    q: "igneous rock",
  definition: "Rocks formed when magma cools.",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 9,
    q: "extrusive rock",
  definition: "Igneous rock formed on the surface of the Earth by a volcano.",
    options: ["yes", "no"],
 
  a: 0},
  {
    id: 10,
    q: "intrusive rock",
  definition: "Igneous rock formed within the Earth.",
    options: ["yes", "no"],
 
  a: 0, },
  {
    id: 11,
    q: "metamorphic rock",
  definition: "Rocks that started out as some other type of rock, but have been changed due to heat and/or pressure.",
  
    options: ["yes", "no"],
   a: 0},
  {
    id: 12,
    q: "transportation",
  definition: "When something is moved.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 13,
    q: "deposition",
  definition: "When something is dropped.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 14,
    q: "sediment",
  definition: "Small pieces of broken up natural material, e.g. sand or pebbles.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 15,
    q: "grains",
  definition: "The mineral crystals or sediment particles that make up rock.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 16,
    q: "sedimentation",
  definition: "The deposition of layers of sediments on the bottom of the sea.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 17,
    q: "compaction",
  definition: "When sediment is squashed because of the weight of the layers above.",
  
    options: ["yes", "no"],
   a: 0},
  {
    id: 18,
    q: "cementation",
  definition: "This occurs after compaction, when new minerals 'stick' the grains of sediment together, forming rock.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 19,
    q: "weathering",
  definition: "A process where rock is broken down by the actions of things in its environment.",
    options: ["yes", "no"],
   a: 0},
    
  {
    id: 20,
    q: "uplift",
  definition: "When something moves upwards.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 21,
    q: "tectonic plate",
  definition: "Large slabs of the crust.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 22,
    q: "continental drift",
  definition: "When tectonic plates move.",
    options: ["yes", "no"],
   a: 0},
  {
    id: 23,
    q: "collision plate boundary",
  definition: "Where two plates move towards one another and crumple to form mountains.",
    options: ["yes", "no"],
   a: 0},
];
