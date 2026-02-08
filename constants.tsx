
import { Car } from './types';

// Using high-quality automotive public GLB assets for the showcase
export const FERRARI_MODELS: Car[] = [
  {
    id: 'sf90',
    name: 'SF90 Stradale',
    model: 'Hybrid V8',
    year: 2024,
    engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
    power: '1000 cv',
    topSpeed: '340 km/h',
    acceleration: '2.5s',
    description: 'The state-of-the-art of performance. A perfect synergy between the internal combustion engine and three electric motors.',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1600',
    glbUrl: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/SheenChair/glTF-Binary/SheenChair.glb' // Placeholder: for actual production, use car GLBs
  },
  {
    id: '812',
    name: '812 GTS',
    model: 'V12 Spider',
    year: 2024,
    engine: '6.5L V12',
    power: '800 cv',
    topSpeed: '340 km/h',
    acceleration: '2.9s',
    description: 'The return of the V12 Spider. An unprecedented combination of power, elegance and open-air thrills.',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1600',
    glbUrl: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb'
  },
  {
    id: 'roma',
    name: 'Ferrari Roma',
    model: 'V8 Coupé',
    year: 2023,
    engine: '3.9L Twin-Turbo V8',
    power: '620 cv',
    topSpeed: '320 km/h',
    acceleration: '3.4s',
    description: 'La Nuova Dolce Vita. A contemporary representation of the carefree way of life of 1950s and 60s Rome.',
    imageUrl: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1600',
    glbUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb'
  }
];

export const BRAND_STORY = {
  title: "A Legacy of Speed",
  subtitle: "Since 1947",
  content: "Enzo Ferrari once said: 'I have never yet made a car that was more beautiful than the one I am about to build.' This spirit of relentless perfection continues to drive every weld, every stitch, and every engine note at Maranello."
};
