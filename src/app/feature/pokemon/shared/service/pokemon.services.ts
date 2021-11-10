import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class PokemonService{

  private baseUrl = `https://pokeapi.co/api/v2`;

  constructor(private http: HttpClient){ }


  getPokemonList(url){
    return this.http.get(url);
  }

  getPokemonInfo(name: string){
    return this.http.get(this.baseUrl + `/pokemon/${name}`);
  }

  sortPokemons(arr: any){
    arr.sort(function(a,b){
      if(a.id>b.id){
        return 1;
      }if(a.id<b.id){
        return -1;
      }
      return 0;
    })
  }

}
