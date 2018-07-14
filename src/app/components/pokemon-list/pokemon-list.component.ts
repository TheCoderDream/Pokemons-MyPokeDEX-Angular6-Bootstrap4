import { Component, OnInit, ViewChild} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
 @ViewChild('pokemonDetailModal') modal: ModalDirective;
 selectedPokemonLoaded = false;
 selectedPokemon: Pokemon;
  pokemons: Pokemon[];
  errorMessage: string;
  constructor(private pokSer: PokemonService) { }

  ngOnInit() {
    this.getPokemons();

  }

  getPokemons() {
    this.pokSer.getPokemons().subscribe((pokemons: Pokemon[]) => {
      console.log(pokemons);
      this.pokemons = pokemons;
      console.log(this.pokemons);
    })
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.pokSer.deletePokemon(pokemon).subscribe(

      (a) => {console.log(a)},
      (err) => { console.log(err)},
      () => {this.getPokemons() }
    );
  }
  onShowDetail(pokemon: Pokemon) {

    this.selectedPokemon = pokemon;
    this.modal.show();
  }

}
