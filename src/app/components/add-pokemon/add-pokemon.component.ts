import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  cardTitle = 'Add Pokemon';
  formPokemon: any = {};
  errorMessage: string;

  constructor(private pokemonService: PokemonService, private router: Router ) { }

  ngOnInit() {
  }

  onAddPokemon(pokemon: Pokemon) {
    console.log(pokemon);
    this.pokemonService.addPokemon(pokemon).subscribe(
      res => {this.router.navigate(['/'])},
      err => {console.log(err)}
    );
  }

}
