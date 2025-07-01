import { Routes } from '@angular/router';
import { AppLayout } from './layout/layout-component/app-layout.component';

export const routes: Routes = [
{
    path: 'auth',
    loadChildren: () => import('./routes/auth.routes'),
},
{
    path: '',
    component: AppLayout,
    loadChildren: () => import('./routes/pages.routes'),
},
{
    path: '**',
    redirectTo: '',
}];
