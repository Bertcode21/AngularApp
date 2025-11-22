import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeader } from './top-header/top-header';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent,
    TopHeader
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bee-Shoping');
}
