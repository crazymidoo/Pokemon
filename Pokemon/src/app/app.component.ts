import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Pokemon } from './models/Pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = [];
    loading!: boolean;
    o!: Observable<Pokemon[]>;
  
    constructor(private http: HttpClient) {}
  
    getGen1() {
      this.loading = true;
      this.o = this.http.get<Pokemon[]>("https://fluffy-fishstick-q77ww9xxrwqpcx44g-5000.app.github.dev/gen1");
      this.o.subscribe(this.getData1);
    }
    getData1 = (data: Pokemon[]) => {
      this.pokemonList = data;
      this.loading = false;
      console.log(this.pokemonList);
    }
  
    ngOnInit(): void {
    }
}
