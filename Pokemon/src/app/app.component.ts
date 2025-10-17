import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Pokemon } from './models/Pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  loading!: boolean;
  o!: Observable<Pokemon[]>;

  backgroundImage = '';

  backgrounds: Record<string, string> = {
    '1': "url('https://media.pokemoncentral.it/wiki/thumb/8/8d/KantoLGPE.png/800px-KantoLGPE.png')",
    '2': "url('https://media.pokemoncentral.it/wiki/thumb/7/7d/JohtoHGSS.png/800px-JohtoHGSS.png')",
    '3': "url('https://media.pokemoncentral.it/wiki/thumb/f/ff/HoennROZA.png/800px-HoennROZA.png')",
    '4': "url('https://media.pokemoncentral.it/wiki/thumb/7/73/SinnohDLPS.png/800px-SinnohDLPS.png')",
    '5': "url('https://media.pokemoncentral.it/wiki/thumb/3/37/UnimaN2B2.png/800px-UnimaN2B2.png')",
    '6': "url('https://media.pokemoncentral.it/wiki/thumb/8/84/KalosXY.png/800px-KalosXY.png')",
  };

constructor(private http: HttpClient, private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const match = event.url.match(/generazione\/(\d)/);
      if (match && this.backgrounds[match[1]]) {
        this.backgroundImage = this.backgrounds[match[1]];
      } else {
        this.backgroundImage = '';
      }
    }
  });
}


  getGen1() {
    this.loading = true;
    this.o = this.http.get<Pokemon[]>("https://fluffy-fishstick-q77ww9xxrwqpcx44g-5000.app.github.dev/");
    this.o.subscribe(this.getData1);
  }

  getData1 = (data: Pokemon[]) => {
    this.pokemonList = data;
    this.loading = false;
    console.log(this.pokemonList);
  }

  ngOnInit(): void {
    // Se vuoi puoi fare qualcosa all'avvio
  }
}
