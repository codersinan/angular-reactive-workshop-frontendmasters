import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/ui-login';
import { AuthGuard } from '@app/core-data';

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // },
    {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'customers',
    //     loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    // },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'projects', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
