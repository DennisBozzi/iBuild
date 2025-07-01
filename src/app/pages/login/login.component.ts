import { AuthService } from '@/auth/auth.service';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {

  constructor(public authService: AuthService) { }

  title = 'iBuild';



  registrar() {
    this.authService.signUp('dennisbozzii@gmail.com', 'dennis123');
  }

  login(){
      this.authService.signIn('dennisbozzii@gmail.com', 'dennis123');
  }

}
