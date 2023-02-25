import { CarQuery } from '@/graphql/queries/CarQuery.graphql';
import { Box } from '@chakra-ui/react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import CarList from './CarList';
/**
 * Add this if you want to use variables on query level
 * query CarQuery($orderBy: OrderByInput) {
 */
export const Query = graphql`
  query CarQuery {
    ...CarListFragment
  }
`;

const variables = {};
function CarQueryComponent() {
  const data = useLazyLoadQuery<CarQuery>(Query, variables);
  return (
    <Box>
      <Box>Car register app</Box>
      <Box>
        <CarList data={data} />
      </Box>
    </Box>
  );
}

export default CarQueryComponent;
