import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import {PokemonService} from "./services/pokemon.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRouting} from "./app-routing";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./pokemon-data";

import {ModalModule, TooltipModule} from "ngx-bootstrap";
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokemonListComponent,
    AddPokemonComponent,
    PageNotFoundComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
