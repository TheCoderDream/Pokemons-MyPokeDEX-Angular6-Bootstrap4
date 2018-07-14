import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input('selectedPokemon') pokemon: Pokemon;
  @Input('modal') modal: ModalDirective;
  constructor() { }

  ngOnInit() {
  }

  onHideModal() {
    this.modal.hide();
  }

}
