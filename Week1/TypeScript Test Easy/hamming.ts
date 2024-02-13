export function compute(left: string, right: string): number {
    // Check if the strands have equal length
    if (left.length !== right.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    let hammingDistance = 0;

    // Iterate over each character in the strands and compare them
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            hammingDistance++;
        }
    }

    return hammingDistance;
}