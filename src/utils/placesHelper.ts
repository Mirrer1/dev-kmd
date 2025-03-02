export const categories = ['All', 'Asia', 'Europe', 'America', 'Oceania'];

export const years = [1000, 1300, 1700, 2000];

const places = [
  {
    title: 'Italy, Pica',
    year: 1173,
    category: 'Europe',
    image: '/places/pica.webp',
    description:
      'The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation.',
  },
  {
    title: 'Spain, Sagrada Família',
    year: 1882,
    category: 'Europe',
    image: '/places/sagrada-família.webp',
    description:
      'The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain.',
  },
  {
    title: 'US, Fallingwater',
    year: 1935,
    category: 'America',
    image: '/places/fallingwater.webp',
    description:
      'Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania.',
  },
  {
    title: "Russia, Saint Basil's Cathedral",
    year: 1555,
    category: 'Europe',
    image: '/places/saint-basil-cathedral.webp',
    description:
      "The Cathedral of Vasily the Blessed, known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
  },
];

export const filterPlaces = (category: string, year: number | null) => {
  return places
    .filter(place => {
      const matchesCategory = category === 'All' || place.category === category;
      const matchesYear = year === null || place.year <= year;
      return matchesCategory && matchesYear;
    })
    .sort((a, b) => a.year - b.year);
};
