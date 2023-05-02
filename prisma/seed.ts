import { PrismaClient } from '@prisma/client';

import * as moviesJson from './movies.json';

const prisma = new PrismaClient();
async function main() {
  const movie = await prisma.movie.createMany({
    data: moviesJson.map((movies) => {
      const { star1, star2, star3, star4, ...movieData } = movies;
      return {
        ...movieData,
        createdAt: new Date(),
        cast: [star1, star2, star3, star4],
      };
    }),
  });
  console.log({ movie });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
