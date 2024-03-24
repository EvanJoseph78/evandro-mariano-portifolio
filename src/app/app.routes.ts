import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';



export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: MainPageComponent,
    pathMatch: 'full',
  },

];
