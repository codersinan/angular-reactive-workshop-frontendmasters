import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import { CustomerState } from './customers.reducers';
import { CustomersService } from '../../customers/customers.service';
import { Effect } from '@ngrx/effects';


import { map } from 'rxjs/operators';
import { Customer } from '../../customers/customer.model';
import {
    LoadCustomers, CustomersLoaded
} from './customers.actions';

@Injectable({ providedIn: 'root' })
export class CustomersEffects {

    @Effect() loadCustomers$ =
        this.dataPersistance.fetch(LoadCustomers, {
            run: () => {
                return this.customerService.all().pipe(
                    map((customers: Customer[]) => CustomersLoaded({ customers }))
                )
            },
            onError: () => {
                return null;
            }
        });

    constructor(
        private dataPersistance: DataPersistence<CustomerState>,
        private customerService: CustomersService
    ) { }
}