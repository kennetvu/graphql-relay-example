import { CarListContainerFragment$key } from '@/graphql/queries/CarListContainerFragment.graphql';
import { SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';
import CarList from './CarList';
import { OrderDirection, OrderField, orderState } from './OrderByState';

export const CarListContainerFragmenet = graphql`
  fragment CarListContainerFragment on Query
  @refetchable(queryName: "CarListContainerQuery")
  @argumentDefinitions(
    orderBy: { type: "OrderByInput", defaultValue: { createdAt: ASC } }
  ) {
    ...CarListFragment @arguments(orderBy: $orderBy)
  }
`;
type CarListProps = {
  data: CarListContainerFragment$key;
};
type CarListInnerProps = CarListProps & {
  field: OrderField;
  direction: OrderDirection;
};

function CarListContainerInner({
  field,
  direction,
  ...props
}: CarListInnerProps) {
  const [data, refetch] = useRefetchableFragment(
    CarListContainerFragmenet,
    props.data
  );

  useEffect(() => {
    // Does not refetch when default arugments and main query match - check network
    refetch({
      orderBy: { [field]: direction },
    });
  }, [field, direction, refetch]);
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <CarList data={data} />
      </SimpleGrid>
    </>
  );
}

// Trying a new pattern to abstract signal state out of component.
function CarListContainer(props: CarListProps) {
  const { field, direction } = orderState.value;
  return (
    <CarListContainerInner
      data={props.data}
      field={field}
      direction={direction}
    />
  );
}

export default CarListContainer;
