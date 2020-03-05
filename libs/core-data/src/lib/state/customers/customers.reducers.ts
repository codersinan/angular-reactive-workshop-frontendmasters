import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '../../customers/customer.model';
import { createReducer, on, Action } from '@ngrx/store';

import * as CustomerActions from './customers.actions';
export interface CustomerState extends EntityState<Customer> {

}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();
export const initialState: CustomerState = adapter.getInitialState({

});

const customerReducer = createReducer(
    initialState,
    on(CustomerActions.CustomersLoaded, (state, { customers }) => {
        return adapter.addAll(customers, state);
    })
)

export function customersReducers(state: CustomerState | undefined, action: Action) {
    return customerReducer(state, action);
}

// get the selectors
const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

export const selectCustomerIds = selectIds;

export const selectCustomerEntities = selectEntities;

export const selectAllCustomers = selectAll;