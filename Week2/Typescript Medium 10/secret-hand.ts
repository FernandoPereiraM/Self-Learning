export function commands(number: number): string[] {
    if (typeof number !== 'number' || number < 1 || number > 31 || !Number.isInteger(number)) {
        return [];
    }

    const actions: string[] = [];
    const binaryRepresentation: string = number.toString(2).padStart(5, '0');

    if (binaryRepresentation[4] === '1') {
        actions.push("wink");
    }
    if (binaryRepresentation[3] === '1') {
        actions.push("double blink");
    }
    if (binaryRepresentation[2] === '1') {
        actions.push("close your eyes");
    }
    if (binaryRepresentation[1] === '1') {
        actions.push("jump");
    }
    if (binaryRepresentation[0] === '1') {
        actions.reverse();
    }

    return actions;
}
