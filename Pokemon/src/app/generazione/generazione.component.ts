import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/Pokemon.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generazione',
  templateUrl: './generazione.component.html',
  styleUrls: ['./generazione.component.css'],
  standalone: true,
  imports: []
})
export class GenerazioneComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  loading!: boolean;
  o!: Observable<Pokemon[]>;
  generation!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const gen = params.get('gen');
      if (gen) {
        this.generation = +gen;
        this.getPokemonByGen(this.generation);
      }
    });
  }

  getPokemonByGen(gen: number) {
    this.loading = true;
    this.o = this.http.get<Pokemon[]>(`https://fluffy-fishstick-q77ww9xxrwqpcx44g-5000.app.github.dev/gen${gen}`);
    this.o.subscribe(data => {
      this.pokemonList = data;
      this.loading = false;
      console.log(this.pokemonList);
    });
  }
}