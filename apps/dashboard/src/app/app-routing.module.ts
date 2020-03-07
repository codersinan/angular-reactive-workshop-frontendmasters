import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { LoginComponent } from '@app/ui-login';
import { AuthGuard } from '@app/core-data';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'projects',        
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'customers',
    //     loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    // },
    { path: 'login', component: LoginComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{} )],
    exports: [RouterModule],
})
export class AppRoutingModule { }
