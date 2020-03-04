import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { CommonModule } from '@angular/common';
import { reducers } from '.';
import { NxModule } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects/projects.effects';

@NgModule({
    imports: [
        CommonModule,
        NxModule.forRoot(),
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
            },
        }),
        environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 10 }),
        EffectsModule.forRoot([
            ProjectsEffects,
        ]),
    ],
    declarations: []
})
export class StateModule { }