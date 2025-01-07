export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "src/assets/thumbnails/01.webp", name: "El Professor" },
  {
    poster: "src/assets/thumbnails/02.webp",
    name: "Luva de Pedreiro",
  },
  {
    poster: "src/assets/thumbnails/03.webp",
    name: "Natalia Beauty",
  },
  { poster: "src/assets/thumbnails/04.webp", name: "Primo Rico" },
  {
    poster: "src/assets/thumbnails/05.webp",
    name: "Tiago Finch",
  },
  {
    poster: "src/assets/thumbnails/06.webp",
    name: "Lorem",
  },
  { poster: "src/assets/thumbnails/07.webp", name: "Ipsum" },
  { poster: "src/assets/thumbnails/08.webp", name: "Dolor" },
  { poster: "src/assets/thumbnails/09.webp", name: "sit" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 4.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 5);
