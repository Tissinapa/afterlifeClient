import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './public/feature/home/home';

@Component({
  selector: 'app-root',
 // standalone: true,
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('afterlife');
}
