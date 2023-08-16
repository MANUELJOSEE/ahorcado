class Panel {
  constructor() {
    this.diccionario = ["drake", "mota", "father", "arcangel","DelaGizy"];
    this.palabraselecionada = "";
    this.vectorRespuesta = [];
    this.vectorLineas = [];
    this.posicion = 0;
  }

  elegirPalabra() {
    const id = Math.floor(Math.random() * (this.diccionario.length - 0), 0);

    this.vectorRespuesta = Array.from(this.diccionario[id]);
    console.log("elegir palabra ", this.vectorRespuesta);
  }

  dibujarLineas() {
    console.log("dibujamos", this.vectorRespuesta);
    for (let index = 0; index < this.vectorRespuesta.length; index++) {
      this.vectorLineas.push("_");
    }

    return this.vectorLineas;
  }

  showCorrect(letter) {
    const letraMinuscula = letter.toLowerCase();
    console.log("vector con la respuesta ", this.vectorRespuesta);
    this.vectorRespuesta.map((letra, posicion) => {
      if (letra == letter || letra == letraMinuscula) {
        this.vectorLineas[posicion] = letter;
      } 
    });

    return this.vectorLineas;
  }

  showCorrectv2(letter, index) {
    const letraMinuscula = letter.toLowerCase();
    for (let index = indexs; index < this.vectorRespuesta.length; index++) {
      if (
        this.vectorRespuesta[index] == letter ||
        this.vectorRespuesta[index] == letraMinuscula
      ) {
        return true;
      }
    }
  }
    isLetterCorrect(letter) {
      if (this.vectorRespuesta.includes(letter)) {
        return true;
      } else {
        return false;
      }
  }

}

export { Panel };
