export function parse(phrase: string): string {
    const palabras: string[] = [];
    let palabraActual = "";

    for (let i = 0; i < phrase.length; i++) {
        const caracter = phrase.charAt(i);
        // Se agrega el carácter actual a la palabra actual
        palabraActual += caracter;

        // Si encontramos un espacio, guión, coma o ":" o llegamos al final de la frase
        // agregamos la palabra actual a la lista de palabras
        if (caracter === ' ' || caracter === '-' || caracter === ',' || caracter === ':' || i === phrase.length - 1) {
            if (palabraActual.trim()) { // Verificamos si la palabra actual tiene contenido 
                palabras.push(palabraActual.trim());
                palabraActual = ""; // Reiniciamos la palabra actual
            }
        }
    }

    // Dividir las palabras CamelCase excepto si están precedidas por ":"
    const palabrasSeparadas: string[] = [];
    palabras.forEach(word => {
        if (word.includes(":")) {
            palabrasSeparadas.push(word);
        } else {
            palabrasSeparadas.push(...word.split(/(?=[A-Z])/).filter(Boolean)); // Dividir por letra mayúscula
        }
    });
    // Obtener la primera letra de cada palabra y unirlas en una cadena
    const iniciales: string = palabrasSeparadas.map(word => word.charAt(0)).join("");
    return iniciales.toUpperCase(); // Obtener la primera letra de cada palabra y unirlas en una cadena
}
