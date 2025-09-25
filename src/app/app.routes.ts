import { Routes } from '@angular/router';

import { Hero } from './components/hero/hero';

export const routes: Routes = [

  {path:'',redirectTo:'hero',pathMatch:'full'},
  {path:'hero',component:Hero},

];
