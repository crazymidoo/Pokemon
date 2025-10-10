import { Routes } from '@angular/router';
import { GenerazioneComponent } from './generazione/generazione.component';

export const routes: Routes = [
  { path: 'generazione/:gen', component: GenerazioneComponent },
  { path: '', redirectTo: '/generazione/1', pathMatch: 'full' },
  { path: '**', redirectTo: '/generazione/1' }
];
