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

agregarLibro(libro) {
    const existe = this.libros.find(l => l.titulo === libro.titulo);

    if (existe) {
        console.error(`Error: El libro "${libro.titulo}" ya existe en la biblioteca.`);
    } else {
        this.libros.push(libro);
        console.log(`Libro "${libro.titulo}" agregado a la biblioteca.`);
    }
}

buscarPorGenero(genero) {
    return this.libros.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
}

prestar(titulo){
    const libro = this.libros.find(l => l.titulo === titulo);
    if (!libro) {
        throw new Error(`Error: El libro "${titulo}" no existe en la biblioteca.`);
    }
    if (libro.disponible === false) {
            console.log(`El libro "${titulo}" no está disponible para préstamo.`);
    } else {
        libro.disponible = false;
        console.log(`Libro "${titulo}" prestado.`);
    }
}

estadisticas() {
    const total = this.libros.length;
    const disponibles = this.libros.filter(l => l.disponible === true).length;
    const prestados = this.libros.filter(l => l.disponible === false).length;

    console.log(`Total de libros: ${total}`);
    console.log(`Disponibles: ${disponibles}`);
    console.log(`Prestados: ${prestados}`);
    }
}

//Datos de prueba
const miBiblioteca = new Biblioteca("Mi Biblioteca");

miBiblioteca.agregarLibro(
  new Libro("Cien años de soledad", "García Márquez", "Ficción", 1967),
);
miBiblioteca.agregarLibro(
  new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003),
);
miBiblioteca.agregarLibro(
  new Libro("Breve historia del tiempo", "Stephen Hawking", "Ciencia", 1988),
);
miBiblioteca.agregarLibro(
new Libro("El Señor de los Anillos", "J.R.R. Tolkien", "Fantasía", 1954),
);
miBiblioteca.agregarLibro(
  new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía", 1997),
);

// Duplicado (debe mostrar error)
miBiblioteca.agregarLibro(
  new Libro("El código Da Vinci", "Dan Brown", "Thriller", 2003),
);

// Prestar
try {
    miBiblioteca.prestar("Cien años de soledad");
    miBiblioteca.prestar("Cien años de soledad"); // ya prestado
} catch (error) {
    console.error("Error:", error.message);
}

// Buscar por género
const ciencia = miBiblioteca.buscarPorGenero("ciencia");
console.log("Libros de Ciencia:", ciencia.map(l => l.info()));

// Estadísticas
miBiblioteca.estadisticas();
