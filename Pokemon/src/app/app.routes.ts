import { Routes } from '@angular/router';
import { Generazione1Component } from './generazione1/generazione1.component'; 
import { Generazione2Component } from './generazione2/generazione2.component';

export const routes: Routes = [
  { path: 'Generazione1', component: Generazione1Component },
  { path: 'Generazione2', component: Generazione2Component }
];
