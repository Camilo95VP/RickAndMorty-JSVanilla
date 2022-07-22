"use strict";

export class IndexView {
  #privateBody;

  constructor() {
    document.title = "Rick and Morty";
    this.#privateBody = document.querySelector("body");
  }

  init( data) {
    this.#createComponent(data)
  }

  #createComponent(data) {
    let div;
    let img;
    let h1;
    let divBtn;
    let btn;

    data.forEach((element) => {
      div = document.createElement("div");
      img = document.createElement("img");
      img.id = 'img'
      img.src = element.image
      divBtn = document.createElement("div")
      divBtn.id = 'divBtn'
      btn = document.createElement("a")
      btn.id = 'btn'
      btn.innerHTML = "ver mas"
      btn.href = `details.html?id=${element.id}`

      divBtn.append(btn)
      div.append(h1,img,divBtn)
      this.#privateBody.append(div);
    });
  }
}
