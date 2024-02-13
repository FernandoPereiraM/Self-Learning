export class Squares {
    private numbers: number[];

    constructor(count: number) {
        this.numbers = [];
        for (let i = 1; i <= count; i++) {
            this.numbers.push(i);
        }
    }

    get sumOfSquares(): number {
        let sum = 0; // Step 1: Initialize Accumulator
        for (const num of this.numbers) { // Step 2: Iterate Through Numbers
            const square = num ** 2; // Step 3: Calculate Square of Each Number
            sum += square; // Step 4: Add Squares to Accumulator
        }
        return sum; // Step 5: Return Accumulated Sum
    }


    get squareOfSum(): number {
        let sum = 0; // Step 1: Initialize Accumulator
        for (const num of this.numbers) { // Step 2: Iterate Through Numbers
            sum += num; // Step 3: Add Each Number to Accumulator
        }
        const squareOfSum = sum ** 2; // Step 4: Calculate Square of Accumulated Sum
        return squareOfSum; // Step 5: Return Square of Sum
    }


    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}