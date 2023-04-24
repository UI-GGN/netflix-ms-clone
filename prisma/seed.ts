import { PrismaClient } from '@prisma/client';

import * as moviesJson from './movies.json';

const prisma = new PrismaClient();
async function main() {
  const movie = await prisma.movie.createMany({
    data: moviesJson.map((movies) => {
      return {
        ...movies,
        createdAt: new Date(),
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
