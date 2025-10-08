import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-generazione1',
  templateUrl: './generazione1.component.html',
  styleUrls: ['./generazione1.component.css'],
  standalone: true,
  imports: []
})
export class Generazione1Component implements OnInit {
  pokemonList: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string[]>('http://127.0.0.1:5000/gen1').subscribe({
      next: data => this.pokemonList = data,
      error: (err: HttpErrorResponse) => console.error('Errore caricamento Pokémon:', err)
    });
  }
}
