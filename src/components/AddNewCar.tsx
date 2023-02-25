import { Button, Card, Stack, Input, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { ConnectionHandler, graphql, useMutation } from 'react-relay';

type FormData = {
  id: string;
  description: string;
  year: string;
  milage: string;
};

// use @appendEdge to add to end
// https://relay.dev/docs/guided-tour/list-data/updating-connections/#using-declarative-directives
const AddNewCarMutation = graphql`
  mutation AddNewCarMutation($car: AddCarInput!, $connections: [ID!]!) {
    addCar(car: $car) {
      edge @prependEdge(connections: $connections) {
        cursor
        node {
          id
          ...CarFragment
        }
      }
    }
  }
`;

function AddNewCar() {
  const [showForm, setShowForm] = useState(false);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      id: '',
      description: '',
      year: '',
      milage: '',
    },
  });
  const [commitMutation, isMutationInFlight] = useMutation(AddNewCarMutation);
  const toast = useToast();
  const onSubmit = handleSubmit((data) => {
    if (isMutationInFlight) {
      return;
    }
    const input = {
      ...data,
      year: data.year === '' ? 0 : +data.year,
      milage: data.milage === '' ? null : +data.milage,
    };

    // https://relay.dev/docs/guided-tour/list-data/updating-connections/#connection-identity-with-filters
    // Since this fragment is on Query-level, we need to reference root
    // second param must match @connection-key
    // Arguments must match current view.
    // if we exlude them from connection, we dont need to deal with filters.
    const connectionID = ConnectionHandler.getConnectionID(
      'root',
      'CarListFragment_cars'
      // { orderBy: { createdAt: 'ASC' } }
    );
    commitMutation({
      variables: {
        car: input,
        connections: [connectionID],
      },
      onCompleted: () => {
        toast({
          title: `${data.id} added`,
          description: 'with description ' + data.description,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
    });
  });
  return (
    <Card
      align={'center'}
      justify={'center'}
      maxW="sm"
      onClick={() => setShowForm(true)}
    >
      {!showForm ? (
        <AddIcon boxSize={16} />
      ) : (
        <Stack>
          <form onSubmit={onSubmit}>
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter Id" {...field} />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter description" {...field} />
              )}
            />
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter year" {...field} />
              )}
            />
            <Controller
              name="milage"
              control={control}
              render={({ field }) => (
                <Input placeholder="Enter milage" {...field} />
              )}
            />

            <Button size="md" type="submit" color={'green.300'}>
              Add
            </Button>
          </form>
        </Stack>
      )}
    </Card>
  );
}

export default AddNewCar;
