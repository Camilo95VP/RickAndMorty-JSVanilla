"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { DetailsView } from "../view/details.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";


class DetailsController {
  #privateRickAndMortyURL;
  #privateView;
  #RickAndMortyService;

  constructor() {
    this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
    this.#privateView = new DetailsView(); 
    this.#RickAndMortyService = new RickAndMortyService(this.#privateRickAndMortyURL);
    
  }

  async initDetails() {
    const params = new URLSearchParams(window.location.search)
    const character = await this.#RickAndMortyService.characterByid(params.get("id"));
    this.#privateView.initDetails(character); 
  }
}

const details = new DetailsController();
details.initDetails();
