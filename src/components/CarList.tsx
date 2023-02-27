import { CarListFragment$key } from '@/graphql/queries/CarListFragment.graphql';
import { useEffect } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';
import Car from './Car';

export const CarListFragmenet = graphql`
  fragment CarListFragment on Query
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 0 }
    after: { type: "String", defaultValue: "" }
    orderBy: { type: "OrderByInput", defaultValue: { createdAt: ASC } }
  )
  @refetchable(queryName: "CarListPaginationQuery") {
    cars(first: $first, after: $after, orderBy: $orderBy)
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
  orderField: 'createdAt' | 'id';
  orderDirection: 'ASC' | 'DESC';
};

function CarList(props: CarListProps) {
  const [data, refetch] = useRefetchableFragment(CarListFragmenet, props.data);
  useEffect(() => {
    refetch({
      orderBy: { [props.orderField]: props.orderDirection },
    });
  }, [refetch, props.orderField, props.orderDirection]);
  const cars = data.cars?.edges || [];
  return (
    <>
      {cars?.map((edge) => (
        <Car key={edge.node.id} car={edge.node} />
      ))}
    </>
  );
}

export default CarList;
