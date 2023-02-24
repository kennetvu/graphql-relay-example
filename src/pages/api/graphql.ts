import { prisma } from '@/clients/prisma';
import { Prisma } from '@prisma/client';
import {
  Resolvers,
  InputMaybe,
  OrderByInput,
} from '@/graphql/__generated__/types';
import { dateScalar } from '@/graphql/dateScalar';
import { typeDefs } from '@/graphql/__generated__/typedefs';
import { createYoga, createSchema, YogaInitialContext } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};
interface ServerContext extends YogaInitialContext {
  req: NextApiRequest;
  res: NextApiResponse;
}
// add custom context here if needed
export interface Context extends ServerContext {}

const argsToPrismaOrderBy = (
  orderBy: InputMaybe<OrderByInput>
): Prisma.CarOrderByWithRelationInput => {
  if (orderBy?.id) {
    return orderBy.id === 'DESC' ? { id: 'desc' } : { id: 'asc' };
  }
  return orderBy?.createdAt === 'DESC'
    ? { createdAt: 'desc' }
    : { createdAt: 'asc' };
};

const resolvers: Resolvers = {
  Query: {
    cars: async (_, args, context) => {
      console.log('context', Object.keys(context));
      // const cars = await findParkings();
      const cars = await prisma.car.findMany({
        orderBy: argsToPrismaOrderBy(args.orderBy),
      });

      const edges = cars.map((c) => ({ cursor: c.id, node: c }));
      // we dont support pagination yet
      const pageInfo = {
        hasNextPage: false,
        hasPreviousPage: false,
      };
      return {
        edges,
        pageInfo,
      };
    },
    car: (_, args) => {
      return prisma.car.findFirstOrThrow({ where: { id: args.id } });
    },
    node: async (_, args) => {
      const car = await prisma.car.findFirstOrThrow({
        where: { id: args.id },
      });
      return { __typename: 'Car', ...car };
    },
  },
  Car: {
    milage: (parent) => {
      return parent.milage || null;
    },
  },
  Mutation: {
    addCar: async (_, args) => {
      const inputCar = args.car;
      const car = await prisma.car.upsert({
        where: {
          id: inputCar.id,
        },
        create: {
          id: inputCar.id,
          description: inputCar.description,
          year: inputCar.year,
          milage: inputCar.milage || undefined,
        },
        update: {
          description: inputCar.description,
        },
      });
      return { edge: { cursor: car.id, node: car } };
    },
  },
  DateTime: dateScalar,
};
const schema = createSchema({
  typeDefs,
  resolvers,
});
const yoga = createYoga({
  schema,
  // context,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
});
export default yoga;
