import { PokemonService } from '../../shared/service/pokemon.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  filterPokemon = '';
  page = 1;
  totalPokemons: number;
  offset: number = 0;
  ready = false;
  limit = 25;
  itemsPerPage: number;
  totalItems: any;
  previousPage: any;
  redHeart = '❤️';
  blackHeart = '🖤';
  heart = '';
  favoritePokemons = [];
  existe = false;

  constructor(private pokemonservice: PokemonService) {}

  ngOnInit(): void {
    console.log('hola');
    this.getPokemons('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0');
    localStorage.clear();
  }

  loadPage() {
    let getOffset = (this.page - 1) * 25;
    this.pokemons = [];
    this.getPokemons(
      `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${getOffset}`
    );
  }

  getPokemons(url) {
    this.pokemonservice.getPokemonList(url).subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result) => {
        this.pokemonservice
          .getPokemonInfo(result.name)
          .subscribe((unuiqResponse: any) => {
            this.pokemons.push(unuiqResponse);
            this.heart = this.favoritePokemons.includes(this.pokemons)
              ? this.redHeart
              : this.blackHeart;
            let array = JSON.parse(localStorage.getItem('pokemones'));
            var iguales = 0;
            for (var i = 0; i < this.pokemons.length; i++) {
              this.pokemons[i]['heart'] = this.heart;
              this.pokemons[i]['img'] = this.pokemons[i]['sprites']['other']['official-artwork']['front_default'];
              if (array != null) {
                for (var j = 0; j < array.length; j++) {
                  if (this.pokemons[i]['name'] == array[j]['name']) {
                    iguales++;
                    this.pokemons[i]['heart'] = this.redHeart;
                  }
                }
              }
              this.pokemons.sort();
            }
            this.ready = true;
          });
      });
    });
  }

  favs(pokemon) {
    let p = null;
    let array = JSON.parse(localStorage.getItem('pokemones'));
    if (this.favoritePokemons.length == 0 || array.length == 0) {
      this.favoritePokemons.push(pokemon);
      pokemon.status = !pokemon.status;
      pokemon.heart = this.redHeart;
      localStorage.setItem('pokemones', JSON.stringify(this.favoritePokemons));
    } else {
      p = this.favoritePokemons.find((poke) => poke.id == pokemon.id);
      if (p == undefined) {
        this.favoritePokemons.push(pokemon);
        pokemon.status = !pokemon.status;
        pokemon.heart = this.redHeart;
        array.push(pokemon);
        localStorage.setItem('pokemones', JSON.stringify(array));
      } else {
        let i = this.favoritePokemons.indexOf(pokemon.id);
        let newLocal = this.favoritePokemons.filter(
          (item) => item.id != pokemon.id
        );
        this.favoritePokemons.splice(i, 1);
        pokemon.status = !pokemon.status;
        pokemon.heart = this.blackHeart;
        localStorage.setItem('pokemones', JSON.stringify(newLocal));
      }
    }
  }
}
