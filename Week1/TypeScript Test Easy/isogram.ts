export function isIsogram(word: string): boolean {
    const lettersCount: Map<string, number> = new Map();
    const letras = word.toLowerCase().replace(/[^a-z]/g, '');
    // Recorremos la palabra letra por letra
    for (let letter of letras) {
        // Si la letra ya está en el contador, significa que no es un isograma
        if (lettersCount.has(letter)) {
            return false;
        } else {
            // Si la letra no está en el contador, la añadimos al contador
            lettersCount.set(letter, 1);
        }
    }

    // Si hemos recorrido toda la palabra sin encontrar letras repetidas, es un isograma
    return true;
}