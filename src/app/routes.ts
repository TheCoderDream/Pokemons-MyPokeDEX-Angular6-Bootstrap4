import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AddPokemonComponent} from "./components/add-pokemon/add-pokemon.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-pokemon', component: AddPokemonComponent },
  {path: '**', component: PageNotFoundComponent}
];
