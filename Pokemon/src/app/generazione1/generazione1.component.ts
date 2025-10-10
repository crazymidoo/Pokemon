import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-generazione1',
  templateUrl: './generazione1.component.html',
  styleUrls: ['./generazione1.component.css'],
  standalone: true,
  imports: []
})
export class Generazione1Component implements OnInit {
  pokemonList: Pokemon[] = [];
  loading!: boolean;
  o!: Observable<Pokemon[]>;

  constructor(private http: HttpClient) {}

  makeGet() {
    this.loading = true;
    this.o = this.http.get<Pokemon[]>("https://redesigned-disco-5ggww45w9rxxfq44-5000.app.github.dev/gen1"); // assicurati che endpoint sia corretto
    this.o.subscribe(this.getData);
  }

  getData = (data: Pokemon[]) => {
    this.pokemonList = data;
    this.loading = false;
    console.log(this.pokemonList);
  }

  ngOnInit(): void {
    this.makeGet();
  }
}
