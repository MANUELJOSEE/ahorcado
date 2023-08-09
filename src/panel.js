class Panel {
  constructor() {
    this.diccionario = ["comida", "correr", "jugar", "caminar", "programar"];
    this.palabraselecionada = "";
    this.vectorRespuesta = [];
    this.vectorLineas = [];
  }

  elegirPalabra() {
    const posicion = Math.floor(
      Math.random() * (this.diccionario.length - 0),
      0
    );

    this.palabraselecionada = this.diccionario[posicion];
    console.log(this.palabraselecionada);
  }

  dibujarLineas() {
    const lines = Array.from(this.palabraselecionada);

    for (let index = 0; index < lines.length; index++) {
      this.vectorLineas.push("_");
    }
    


  }
}

const app = new Panel();
app.elegirPalabra();

console.log(app.dibujarLineas());

