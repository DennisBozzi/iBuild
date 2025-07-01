import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'login',
  imports: [ButtonModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  title = 'iBuild';
}
