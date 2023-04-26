import {
  orderState,
  toggleDirection,
  setField,
  OrderField,
} from './OrderByState';
import { Button, Flex, Select } from '@chakra-ui/react';

type Sort = { value: OrderField; label: string };
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

const validateValue = (v: string): v is OrderField =>
  v === 'id' || v === 'createdAt';

function Navigation(props: {
  field: 'id' | 'createdAt';
  direction: 'ASC' | 'DESC';
  setField: (field: 'id' | 'createdAt') => void;
  toggleDirection: () => void;
}) {
  const { direction, field } = props;

  return (
    <div>
      <Flex pb={4} maxW={500}>
        <Select
          value={field}
          onChange={(e) => {
            if (validateValue(e.target.value)) {
              setField(e.target.value);
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
            toggleDirection();
          }}
        >
          {direction}
        </Button>
      </Flex>
    </div>
  );
}

const NavigationContext = () => {
  const { direction, field } = orderState.value;
  return (
    <Navigation
      direction={direction}
      field={field}
      toggleDirection={toggleDirection}
      setField={setField}
    />
  );
};
export default NavigationContext;
