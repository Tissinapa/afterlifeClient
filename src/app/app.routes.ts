
//import { Home } from './public/feature/home/home';
//import { Store } from './public/feature/store/store';

import { Routes } from '@angular/router';
import { Public } from './public/public'; 
import { Home } from './public/feature/home/home';
import { Store } from './public/feature/store/store';

export const routes: Routes = [
  {
    path: '',
    component: Public,                    
    children: [
      { path: '', component: Home },     
      
      
    ]
  },
  // other top-level routes...
];
