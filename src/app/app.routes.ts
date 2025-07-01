import { Routes } from '@angular/router';
import { AppLayout } from './layout/layout-component/app-layout.component';

export const routes: Routes = [{
    path: '',
    component: AppLayout,
    loadChildren: () => import('@/routes/pages.routes'),
},
{
    path: '',
    loadChildren: () => import('@/routes/auth.routes'),
}];
