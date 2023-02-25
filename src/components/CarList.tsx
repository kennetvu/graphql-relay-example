import { CarListFragment$key } from '@/graphql/queries/CarListFragment.graphql';
import { Flex } from '@chakra-ui/react';
import { graphql, useRefetchableFragment } from 'react-relay';
import Car from './Car';

export const CarListFragmenet = graphql`
  fragment CarListFragment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 0 }
    after: { type: "String", defaultValue: "" }
  )
  @refetchable(queryName: "CarListPaginationQuery") {
    cars(first: $first, after: $after)
      @connection(key: "CarListFragment_cars") {
      edges {
        node {
          id
          ...CarFragment
        }
      }
    }
  }
`;

type CarListProps = {
  data: CarListFragment$key;
};

function CarList(props: CarListProps) {
  const [data, refetch] = useRefetchableFragment(CarListFragmenet, props.data);
  const cars = data.cars?.edges || [];
  return (
    <Flex gap={2}>
      {cars?.map((edge) => (
        <Car key={edge.node.id} car={edge.node} />
      ))}
    </Flex>
  );
}

export default CarList;
