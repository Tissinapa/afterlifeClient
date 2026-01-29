
//import { Home } from './public/feature/home/home';
//import { Store } from './public/feature/store/store';

import { Routes } from '@angular/router';
import { Public } from './public/public'; 
import { Home } from './public/feature/home/home';
import { Store } from './public/feature/store/store';
import { Admin } from './admin/admin';
import { About } from './public/feature/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Public,                    
    children: [
      { path: '', component: Home },
      { path: 'store', component: Store },
      //{ path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) },     
      { path: 'about', component: About }
      
    ]
  },
  // other top-level routes...
];
