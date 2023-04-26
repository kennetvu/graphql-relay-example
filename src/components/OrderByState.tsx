import { signal, computed } from '@preact/signals-react';

export type OrderField = 'id' | 'createdAt';
export type OrderDirection = 'ASC' | 'DESC';
export type OrderByState = {
  field: OrderField;
  direction: OrderDirection;
};

// Share state between two components but we dont controll the parent.
const _orderState = signal<OrderByState>({
  field: 'createdAt',
  direction: 'ASC',
});

export const orderState = computed(() => _orderState.value);
export const toggleDirection = () => {
  _orderState.value = {
    ..._orderState.value,
    direction: _orderState.value.direction === 'ASC' ? 'DESC' : 'ASC',
  };
};
export const setField = (field: 'id' | 'createdAt') => {
  _orderState.value = {
    ..._orderState.value,
    field,
  };
};
