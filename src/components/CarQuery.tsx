import { CarQuery } from '@/graphql/queries/CarQuery.graphql';
import { Box, Heading } from '@chakra-ui/react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import CarListContainer from './CarListContainer';
import NavigationContext from './Navigation';
/**
 * Add this if you want to use variables on query level
 * query CarQuery($orderBy: OrderByInput) {
 */
export const Query = graphql`
  query CarQuery {
    ...CarListContainerFragment
  }
`;

const variables = {};
function CarQueryComponent() {
  const data = useLazyLoadQuery<CarQuery>(Query, variables);
  return (
    <Box>
      <Box>
        <Heading>Car register app</Heading>
      </Box>
      <NavigationContext />
      <CarListContainer data={data} />
    </Box>
  );
}

export default CarQueryComponent;
