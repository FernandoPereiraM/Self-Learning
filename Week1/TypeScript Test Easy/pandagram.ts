export function isPangram(sentence:string):boolean {
    // Convert the sentence to lowercase to make it case-insensitive
    sentence = sentence.toLowerCase();
    // Create a set to store unique letters in the sentence
    let letters: Set<string> = new Set();

    // Iterate through each character in the sentence
    for (let char of sentence) {
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            // Add the lowercase letter to the set
            letters.add(char);
        }
    }

    // Check if the set of letters contains all 26 letters of the alphabet
    return letters.size === 26;
}
