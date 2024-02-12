export function decodedResistorValue(colors: string[]): string {
    let value = '';
    for (let color of colors) {
        value += colorMap[color];
    }
    let num = parseInt(value.slice(0, 2));
    let mult = parseInt(value.slice(2, 3)) === 0 ? 1 : Math.pow(10, parseInt(value.slice(2, 3)));

    let result = num * mult;
    if (result >= 1e9) {
    result /= 1e9;
    return `${result} gigaohms`; // Return value in gigaohms with string unit
    } else if (result >= 1e6) {
    result /= 1e6;
    return `${result} megaohms`; // Return value in megaohms with string unit
    } else if (result >= 1e3) {
    result /= 1e3;
    return `${result} kiloohms`; // Return value in kiloohms with string unit
    } else {
    return `${result} ohms`; // Return value in ohms with string unit
  }
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