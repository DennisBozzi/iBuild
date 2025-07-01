import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        console.log('AuthGuard: Verificando autenticação...');
        return this.authService.session$.pipe(
            take(1),
            map(session => {
                console.log('AuthGuard: Session =', session);
                if (session) {
                    console.log('AuthGuard: Usuário autenticado, permitindo acesso');
                    return true;
                } else {
                    console.log('AuthGuard: Usuário não autenticado, redirecionando para login');
                    this.router.navigate(['/auth/login']);
                    return false;
                }
            }),
            catchError(error => {
                console.error('AuthGuard: Erro ao verificar autenticação:', error);
                this.router.navigate(['/auth/login']);
                return of(false);
            })
        );
    }
}
