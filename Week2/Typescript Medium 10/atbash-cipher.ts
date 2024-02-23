export function encode(plainText: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';

    // Remove non-alphabetic characters and convert to lowercase
    const filteredText = plainText.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Perform encryption
    let cipherText = '';
    for (let i = 0; i < filteredText.length; i++) {
        const char = filteredText[i];
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            cipherText += reversedAlphabet[index];
        } else {
            cipherText += char; // Append numbers unchanged
        }

        // Add space every 5 characters
        if ((i + 1) % 5 === 0 && i !== filteredText.length - 1) {
            cipherText += ' ';
        }
    }

    return cipherText;
}

export function decode(cipherText: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';

    // Remove spaces from the cipher text
    const filteredCipherText = cipherText.replace(/\s/g, '');

    // Perform decryption
    let plainText = '';
    for (let i = 0; i < filteredCipherText.length; i++) {
        const char = filteredCipherText[i];
        const index = reversedAlphabet.indexOf(char);
        if (index !== -1) {
            plainText += alphabet[index];
        } else {
            plainText += char; // Append numbers unchanged
        }
    }

    return plainText;
}
