class Libro{
    constructor(titulo, autor, genero, anio){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    info() {
        if (this.disponible === true) {
            return `"${this.titulo}" de ${this.autor} (${this.anio}) - disponible.`;
        } else {
            return `"${this.titulo}" de ${this.autor} (${this.anio}) - prestado.`;
        }       
    }
}

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    