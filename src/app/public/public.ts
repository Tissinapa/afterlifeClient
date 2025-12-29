import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { RouterModule } from '@angular/router';
import { Home } from './feature/home/home';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    Header,
    Footer,
    RouterModule
  ],
  
  templateUrl: './public.html',
  styleUrl: './public.css',
})
export class Public {

}
