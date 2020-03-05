import { createAction, props } from '@ngrx/store';
import { Customer } from '../../customers/customer.model';

enum CustomersActionTypes {
    LoadCustomers = "[Customers] Load",
    CustomersLoaded = "[Customers] Loaded",
}

export const LoadCustomers = createAction(
    CustomersActionTypes.LoadCustomers
);
export const CustomersLoaded = createAction(
    CustomersActionTypes.CustomersLoaded,
    props<{ customers: Customer[] }>()
);