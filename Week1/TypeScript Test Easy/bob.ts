export function hey(message: string): string {
    // Remove leading and trailing whitespace from the message
    const trimmedMessage = message.trim();

    // Check if the message is empty (i.e., silence)
    if (!trimmedMessage) {
        return "Fine. Be that way!";
    }

    // Check if the message contains letters
    const containsLetters = /[a-zA-Z]/.test(trimmedMessage);

    // Check if the message is all uppercase (i.e., yelling)
    if (trimmedMessage === trimmedMessage.toUpperCase() && containsLetters) {
        // Check if the message ends with a question mark (i.e., yelling a question)
        if (trimmedMessage.endsWith("?")) {
            return "Calm down, I know what I'm doing!";
        } else {
            return "Whoa, chill out!";
        }
    }

    // Check if the message ends with a question mark
    if (trimmedMessage.endsWith("?")) {
        return "Sure.";
    }

    // If none of the above conditions are met, return "Whatever."
    return "Whatever.";
}