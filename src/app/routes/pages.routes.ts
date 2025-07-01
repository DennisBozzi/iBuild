import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { AuthGuard } from '../auth/auth.guard';

export default [
    { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] }
] as Routes;
