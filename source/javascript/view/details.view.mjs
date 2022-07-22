    "use strict";

    export class DetailsView {
    #privateBody;


    constructor() {
        document.title = "Details";
        this.#privateBody = document.querySelector("body");
    }

    initDetails( data) {
        this.#createComponent(data)
    }

    #createComponent(data) {

        let divOne;
        let divTwo;
        let divThree;
        let img;
        let h1;
        let p;
        let h2;     


        divOne = document.createElement("div");
        divOne.id = "details-div1"
        let divChild = document.createElement("div");
        divChild.id = "div-child"
        divChild.innerHTML = "Volver"
        let btn = document.createElement("a");
        btn.href = "index.html"
        btn.append(divChild)
        divOne.append(btn);
        divTwo = document.createElement("div");
        divTwo.id = "details-div"
        divThree = document.createElement("div");
        divThree.id = "details-div3"
        img = document.createElement("img");
        img.id = "details-img"
        img.src = data.image
        h1 = document.createElement("h1");
        h1.innerHTML = data.name
        p = document.createElement("p");
        p.innerHTML = `ESTADO: ${data.status} ESPECIE: ${data.species}`
        h2 = document.createElement("h3");
        h2.innerHTML = `CREATED: ${data.created}`
        

        divTwo.append(h1,img,p, h2);
        this.#privateBody.append(divOne, divTwo, divThree);   
       }
    }
