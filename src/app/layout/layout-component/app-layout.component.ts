import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-layout',
    imports: [ButtonModule, RouterOutlet],
    templateUrl: './app-layout.component.html',
})

export class AppLayout {
    title = 'iBuild';
}
