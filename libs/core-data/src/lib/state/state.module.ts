import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { CommonModule } from '@angular/common';
import { reducers } from '.';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 10 })
        // EffectsModule.forRoot([]),
    ],
    declarations: []
})
export class StateModule { }