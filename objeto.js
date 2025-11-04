const libro = {
  // Propiedades básicas
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967,
  estado: "disponible",

  // Lista de capítulos
  capitulos: ["La familia Buendía", "Macondo", "La peste del insomnio"],

  // Método para describir el libro
  describirLibro: function () {
    console.log(
      `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado es: ${this.estado}.`
    );
  },

  // Método para agregar un capítulo
  agregarCapitulo: function (nombreCapitulo) {
    this.capitulos.push(nombreCapitulo);
    console.log(`Capítulo agregado: "${nombreCapitulo}"`);
  },

  // Método para eliminar un capítulo por nombre
  eliminarCapitulo: function (nombreCapitulo) {
    const indice = this.capitulos.indexOf(nombreCapitulo);
    if (indice !== -1) {
      this.capitulos.splice(indice, 1);
      console.log(`Capítulo eliminado: "${nombreCapitulo}"`);
    } else {
      console.log(`El capítulo "${nombreCapitulo}" no existe en la lista.`);
    }
  },

  // Método para mostrar la lista de capítulos
  mostrarCapitulos: function () {
    console.log("Lista de capítulos:");
    this.capitulos.forEach((cap, i) => {
      console.log(`${i + 1}. ${cap}`);
    });
  },
};

// Usos
libro.describirLibro();
libro.mostrarCapitulos();

libro.agregarCapitulo("El diluvio");
libro.eliminarCapitulo("Macondo");
libro.mostrarCapitulos();
