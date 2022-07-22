export class Character{

    #id;
    #name;
    #status;
    #species;
    #image;
    #created

    constructor(id,name,status,species,image, created) {
        this.#id=id;
        this.#name = name;
        this.#status = status;
        this.#species = species;
        this.#image = image
        this.#created = created;
    }

    get name(){
        return this.#name
    }
    get id(){
        return this.#id
    }
    get status(){
        return this.#status
    }
    get species(){
        return this.#species
    }
    get image(){
        return this.#image
    }
    get created(){
        return this.#created
    }
    

}