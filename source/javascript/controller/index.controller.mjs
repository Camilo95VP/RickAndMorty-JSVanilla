"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";


class IndexController {
    #privateRickAndMortyURL;
    #privateView;
    #RickAndMortyService

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateView = new IndexView();
        this.#RickAndMortyService = new RickAndMortyService(this.#privateRickAndMortyURL)
    }

    async init() {
        const characters = await this.#RickAndMortyService.characters
        this.#privateView.init( characters);
    }
}

const index = new IndexController();
index.init();