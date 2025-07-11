import { Routes } from "@angular/router";
import { LoginComponent } from "../pages/login/login.component";

export default [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
] as Routes;
