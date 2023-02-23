import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const cars = [
  {
    id: 'car-uuid-1',
    description: 'Cool car',
    year: 2022,
  },
  {
    id: 'car-uuid-2',
    description: 'Ugly car',
    year: 1991,
    milage: 200000,
  },
];

async function main() {
  // ... you will write your Prisma Client queries here
  const car = cars[0];
  const carDb = await prisma.car.upsert({
    where: { id: car.id },
    update: {},
    create: car,
  });
  const secondCar = cars[1];
  const secondCarDb = await prisma.car.upsert({
    where: { id: secondCar.id },
    update: {},
    create: secondCar,
  });
  console.log(carDb, secondCarDb);
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
