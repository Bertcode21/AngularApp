import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeader } from './top-header/top-header';
import { ProductLists } from './product-lists/product-lists';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent,
    TopHeader,
   ProductLists
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bee-Shoping');
}
