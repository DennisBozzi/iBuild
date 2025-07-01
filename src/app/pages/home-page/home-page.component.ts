import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'home-page',
  imports: [ButtonModule],
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {
  title = 'iBuild';
}
