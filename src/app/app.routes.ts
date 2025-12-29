import { Routes } from '@angular/router';
import { Home } from './public/feature/home/home';
import { Store } from './public/feature/store/store';

export const routes: Routes = [
    {path:'', loadChildren:() => import('./public/public-module').then(m => m.PublicModule)},
    {path:"store", component: Store}


];
