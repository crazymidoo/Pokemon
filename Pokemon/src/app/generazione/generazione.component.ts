import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/Pokemon.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generazione',
  templateUrl: './generazione.component.html',
  styleUrls: ['./generazione.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GenerazioneComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  loading: boolean = false;
  o!: Observable<Pokemon[]>;
  generation!: number;

  selectedPokemon: Pokemon | null = null;
  popupVisible: boolean = false;
  popupAnimationClass: string = '';

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

  getPokemonByGen(gen: number): void {
    this.loading = true;
    this.o = this.http.get<Pokemon[]>(`https://fluffy-fishstick-q77ww9xxrwqpcx44g-5000.app.github.dev/gen${gen}`);
    this.o.subscribe(data => {
      this.pokemonList = data;
      this.loading = false;
      console.log(this.pokemonList);
    });
  }

  showPokemonDetails(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.popupAnimationClass = 'enter';
    this.popupVisible = true;
  }

  closePopup(): void {
    this.popupAnimationClass = 'leave';
    setTimeout(() => {
      this.popupVisible = false;
      this.selectedPokemon = null;
    }, 300);
  }
}