export function decodedValue(colors: string[]): number {
    let value = '';
    for (let color of colors) {
        value += colorMap[color];
    }
    return parseInt(value.slice(0, 2));
}

export const colorMap: { [key: string]: number } = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
};
