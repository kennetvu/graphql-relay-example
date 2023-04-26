import { CarListFragment$key } from '@/graphql/queries/CarListFragment.graphql';
import { Button, Flex } from '@chakra-ui/react';
import { graphql, usePaginationFragment } from 'react-relay';
import AddNewCar from './AddNewCar';
import Car from './Car';

// Filters are autmatically sat to arguments specified in field-query, first and after is automagically omitted.
// filters: ["orderBy"] or not specified => client:root:__CarListFragment_cars_connection(orderBy:{"createdAt":"ASC"})
// filters:[] =key> client:root:__CarListFragment_cars_connection
// filters https://relay.dev/docs/guided-tour/list-data/updating-connections/#connection-identity-with-filters

export const CarListFragmenet = graphql`
  fragment CarListFragment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 2 }
    after: { type: "String", defaultValue: "" }
    orderBy: { type: "OrderByInput" }
  )
  @refetchable(queryName: "CarListPaginationQuery") {
    cars(first: $first, after: $after, orderBy: $orderBy)
      @connection(key: "CarListFragment_cars", filters: ["orderBy"]) {
      edges {
        node {
          id
          ...CarFragment
        }
      }
      count
    }
  }
`;

type CarListProps = {
  data: CarListFragment$key;
};

function CarList(props: CarListProps) {
  const { data, loadNext, hasNext, refetch } = usePaginationFragment(
    CarListFragmenet,
    props.data
  );
  const cars = data.cars?.edges || [];
  return (
    <>
      <Flex direction={'column'} justifyContent={'space-evenly'}>
        <Button
          colorScheme={'blue'}
          height={'50%'}
          disabled={!hasNext}
          onClick={() => {
            loadNext(2);
          }}
        >
          load more
        </Button>
        <Button
          height={'50%'}
          colorScheme="linkedin"
          disabled={!hasNext}
          onClick={() => {
            // Force refetch to see how cache/network requests behave
            // will not trigger a refetch if we already have data.
            refetch({
              orderBy: { id: 'DESC' },
            });
          }}
        >
          refetch
        </Button>
      </Flex>
      <AddNewCar />
      {cars?.map((edge) => (
        <Car key={edge.node.id} car={edge.node} />
      ))}
    </>
  );
}

export default CarList;
