import { CarListFragment$key } from '@/graphql/queries/CarListFragment.graphql';
import {
  graphql,
  usePaginationFragment,
  useRefetchableFragment,
} from 'react-relay';
import Car from './Car';

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
  const { data, loadNext, hasNext } = usePaginationFragment(
    CarListFragmenet,
    props.data
  );
  const cars = data.cars?.edges || [];
  return (
    <>
      <button
        disabled={!hasNext}
        onClick={() => {
          loadNext(2);
        }}
      >
        load more
      </button>
      {cars?.map((edge) => (
        <Car key={edge.node.id} car={edge.node} />
      ))}
    </>
  );
}

export default CarList;
