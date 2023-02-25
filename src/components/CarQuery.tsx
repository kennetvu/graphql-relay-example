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

type Order = 'ASC' | 'DESC';
type Sort = { value: 'createdAt' | 'id'; label: string };
const sortOptions: Sort[] = [
  {
    value: 'createdAt',
    label: 'Created at',
  },
  {
    value: 'id',
    label: 'ID',
  },
];

const validateValue = (v: string): v is 'id' | 'createdAt' =>
  v === 'id' || v === 'createdAt';

const variables = {};
function CarQueryComponent() {
  const [orderDirection, setOrderDirection] = useState<Order>('ASC');
  const [selectedSort, setSelectedSort] = useState<'createdAt' | 'id'>(
    sortOptions[0].value
  );
  const data = useLazyLoadQuery<CarQuery>(Query, variables);
  return (
    <Box>
      <Box>
        <Heading>Car register app</Heading>
      </Box>
      <Flex pb={4} maxW={500}>
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
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <AddNewCar />
        <CarList
          data={data}
          orderDirection={orderDirection}
          orderField={selectedSort}
        />
      </SimpleGrid>
    </Box>
  );
}

export default CarQueryComponent;
