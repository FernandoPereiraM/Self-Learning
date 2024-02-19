export function count(subtitle: string): Map<string, number> {
    // Normalize the subtitle text by converting it to lowercase
    subtitle = subtitle.toLowerCase();

    // Tokenize the text into individual words, considering punctuation and whitespace as word separators
    const words = subtitle.match(/\b\w+(?:'\w+)?\b/g) || [];

    // Count the occurrences of each word
    const wordCounts = new Map<string, number>();
    for (const word of words) {
        const count = wordCounts.get(word) || 0;
        wordCounts.set(word, count + 1);
    }

    // Return the word counts as a mapping of words to their respective frequencies
    return wordCounts;
}

