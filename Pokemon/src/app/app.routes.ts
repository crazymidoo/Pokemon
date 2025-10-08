import { Routes } from '@angular/router';
import { Generazione1Component } from './generazione1/generazione1.component'; 
import { Generazione2Component } from './generazione2/generazione2.component';
import { Generazione3Component } from './generazione3/generazione3.component';
import { Generazione4Component } from './generazione4/generazione4.component';
import { Generazione5Component } from './generazione5/generazione5.component';
import { Generazione6Component } from './generazione6/generazione6.component';

export const routes: Routes = [
  { path: 'Generazione1', component: Generazione1Component },
  { path: 'Generazione2', component: Generazione2Component },
  { path: 'Generazione3', component: Generazione3Component},
  { path: 'Generazione4', component: Generazione4Component },
  { path: 'Generazione5', component: Generazione5Component },
  { path: 'Generazione6', component: Generazione6Component}
];
