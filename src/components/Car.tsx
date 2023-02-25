import { CarFragment$key } from '@/graphql/queries/CarFragment.graphql';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { graphql, useFragment } from 'react-relay';

export const CarFragment = graphql`
  fragment CarFragment on Car {
    id
    description
    year
    milage
  }
`;

type CarProps = {
  car: CarFragment$key;
};

function Car(props: CarProps) {
  const data = useFragment(CarFragment, props.car);
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.description}</Heading>
          <Text>ID: {data.id}</Text>
          <Text>Year: {data.year}</Text>
          {data.milage ? <Text>Milage(km): {data.milage}</Text> : null}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Hide
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Car;
