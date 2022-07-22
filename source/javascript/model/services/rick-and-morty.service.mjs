import { Character } from "../character.mjs";

export class RickAndMortyService {
  #privateUrl;
  #characters;

  constructor(url) {
    this.#privateUrl = url;
    this.#characters = [];
  }

  async #consumeApi() {
    const request = await fetch(`${this.#privateUrl}/character`);
    const { results } = await request.json();
    results.forEach(({ id, name, status, species, image, created }) => {
      this.#characters.push(new Character(id, name, status, species, image, created));
    });

    return this.#characters;
  }

  get characters() {
    return this.#consumeApi();
  }

  async characterByid(id) {
    const response = await fetch(`${this.#privateUrl}/character/${id}`);
    const { name, id:newId, status, species, image, created } = await response.json();

    return new Character(newId,name,status,species,image, created)

  }
}
