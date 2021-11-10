import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultPokemon = [];
    for (const pokemon of value) {
      if (pokemon.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPokemon.push(pokemon);
      };
    }
    return resultPokemon;
  }

}
