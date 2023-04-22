import { useState } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';
import CarList from './CarList';
import { CarListContainerFragment$key } from '@/graphql/queries/CarListContainerFragment.graphql';
import { Box, Button, Flex, Select, SimpleGrid } from '@chakra-ui/react';
import AddNewCar from './AddNewCar';

export const CarListContainerFragmenet = graphql`
  fragment CarListContainerFragment on Query
  @refetchable(queryName: "CarListContainerQuery")
  @argumentDefinitions(
    orderBy: { type: "OrderByInput", defaultValue: { createdAt: ASC } }
  ) {
    ...CarListFragment @arguments(orderBy: $orderBy)
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

type CarListProps = {
  data: CarListContainerFragment$key;
};

function CarListContainer(props: CarListProps) {
  const [orderDirection, setOrderDirection] = useState<Order>('ASC');
  const [selectedSort, setSelectedSort] = useState<'createdAt' | 'id'>(
    sortOptions[0].value
  );
  const [data, refetch] = useRefetchableFragment(
    CarListContainerFragmenet,
    props.data
  );
  return (
    <>
      <Flex pb={4} maxW={500}>
        <Select
          value={selectedSort}
          onChange={(e) => {
            if (validateValue(e.target.value)) {
              setSelectedSort(e.target.value);
              refetch({ orderBy: { [e.target.value]: orderDirection } });
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
          onClick={() => {
            const direction = orderDirection === 'ASC' ? 'DESC' : 'ASC';
            setOrderDirection(direction);
            refetch({ orderBy: { [selectedSort]: direction } });
          }}
        >
          {orderDirection}
        </Button>
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <AddNewCar />
        <CarList data={data} />
      </SimpleGrid>
    </>
  );
}

export default CarListContainer;
