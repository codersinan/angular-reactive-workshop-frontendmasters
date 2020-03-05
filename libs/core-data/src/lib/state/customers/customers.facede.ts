import { Injectable } from "@angular/core";
import { Customer } from '../../customers/customer.model';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CustomerState } from './customers.reducers';
import { selectAllCustomers } from "..";
import { LoadCustomers } from './customers.actions';

@Injectable({ providedIn: 'root' })
export class CustomersFacede {
    customers$: Observable<Customer[]>;

    constructor(private store: Store<CustomerState>) {
        this.customers$ = store.pipe(select(selectAllCustomers))
    }

    loadCustomers() {
        this.store.dispatch(LoadCustomers());
    }
}