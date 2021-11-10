import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './shared/service/pokemon.services';
import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from '../pokemon/components/pokemon-list/pokemon-list.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PokemonListComponent,
  ],
  imports: [
    PokemonRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
