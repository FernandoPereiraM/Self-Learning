// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

function printHello(): void {
    console.log('Hello!');
}

function multiply(a: number, b: number) {
    return a * b;
}
