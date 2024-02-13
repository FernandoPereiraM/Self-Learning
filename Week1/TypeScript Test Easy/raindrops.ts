export function convert(number: number): string {
    let result: string = "";

    // Check if the number is divisible by 3, 5, or 7
    if (number % 3 === 0) {
        result += "Pling";
    }
    if (number % 5 === 0) {
        result += "Plang";
    }
    if (number % 7 === 0) {
        result += "Plong";
    }

    // If the result string is still empty, the number is not divisible by 3, 5, or 7
    if (result === "") {
        result = number.toString();
    }

    return result;
}
