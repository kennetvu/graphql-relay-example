import { CarQuery } from '@/graphql/queries/CarQuery.graphql';
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import AddNewCar from './AddNewCar';
import CarListContainer from './CarListContainer';
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
      {/* <Flex pb={4} maxW={500}>
        <Select
          value={selectedSort}
          onChange={(e) => {
            if (validateValue(e.target.value)) {
              setSelectedSort(e.target.value);
            }
          }}
        >
          {sortOptions.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.label}
            </option>
          ))}
        </Select>
        <Button
          onClick={() =>
            setOrderDirection((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'))
          }
        >
          {orderDirection}
        </Button>
      </Flex> */}

      <CarListContainer data={data} />
    </Box>
  );
}

export default CarQueryComponent;
